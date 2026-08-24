import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import { Registration } from "./Registration";
import { useRegistration } from "./useRegistration";

vi.mock("./useRegistration", () => ({
    useRegistration: vi.fn(),
}))

describe("компонент Registration", () => {
    const mockSwitchForm = vi.fn();

    it("Проверяем заблокирована ли кнопка при загрузке (isLoading)", () => {
        vi.mocked(useRegistration).mockReturnValue({
            isLoading: true,
            success: false,
            errorMessage: null,
            setEmail: vi.fn(),
            setName: vi.fn(),
            setSurname: vi.fn(),
            setPassword: vi.fn(),
            setPasswordDouble: vi.fn(),
            handleSubmit: vi.fn(),
        })

        render(<Registration switchForm={mockSwitchForm} />)

        const submitButton = screen.getByRole("button", { name: /Создать аккаунт/i });
        expect(submitButton).toBeDisabled()
    })

    it("Проверяем совпадение паролей", ()=> {
        const passwordError = "Пароли должны совпадать"

        vi.mocked(useRegistration).mockReturnValue({
            isLoading: false,
            success: false,
            errorMessage: passwordError,
            setEmail: vi.fn(),
            setName: vi.fn(),
            setSurname: vi.fn(),
            setPassword: vi.fn(),
            setPasswordDouble: vi.fn(),
            handleSubmit: vi.fn(),
        })

        render(<Registration switchForm={mockSwitchForm} />)
        const errorElement = screen.getByText(passwordError);
        expect(errorElement).toBeInTheDocument()


    })

    it("Проверяем есть ли пользователь с такой почтой", ()=> {
        const serverError = "Пользователь с такой почтой уже существует."

        vi.mocked(useRegistration).mockReturnValue({
            isLoading: false,
            success: false,
            errorMessage: serverError,
            setEmail: vi.fn(),
            setName: vi.fn(),
            setSurname: vi.fn(),
            setPassword: vi.fn(),
            setPasswordDouble: vi.fn(),
            handleSubmit: vi.fn(),
        })

        render(<Registration switchForm={mockSwitchForm} />)
        
        const errorElement = screen.getByText(serverError);
        expect(errorElement).toBeInTheDocument()


    })
})
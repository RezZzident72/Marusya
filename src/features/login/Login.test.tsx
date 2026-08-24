import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import { Login } from "./Login";
import { useLogin } from "./useLogin";
import "@testing-library/jest-dom";

vi.mock("./useLogin", () => ({
    useLogin: vi.fn(),
}));

describe("Компонент Login", () => {
    const mockSwitchForm = vi.fn();

    it("Проверяем заблокирована ли кнопка при загрузке (isLoading))", () => {
        vi.mocked(useLogin).mockReturnValue({
            isLoading: true,
            errorMessage: null,
            setEmail: vi.fn(),
            setPassword: vi.fn(),
            handleSubmit: vi.fn(),
        });

        render(<Login switchForm={mockSwitchForm} />);

        const submitButton = screen.getByRole("button", { name: /Войти/i });
        expect(submitButton).toBeDisabled();
    });

    it("Проверяем вверно ли введены логин и пароль", () => {
        const testError = "Неверный логин или пароль.";

        vi.mocked(useLogin).mockReturnValue({
            isLoading: false,
            errorMessage: testError,
            setEmail: vi.fn(),
            setPassword: vi.fn(),
            handleSubmit: vi.fn(),
        });

        render(<Login switchForm={mockSwitchForm} />);

        const errorElement = screen.getByText(testError);
        expect(errorElement).toBeInTheDocument();
    });
});

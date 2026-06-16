import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import { Search } from "./Search";
import { useSearch } from "./useSearch";
import "@testing-library/jest-dom";
import { Movie } from "../../services/cinemaApi";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../app/store";

vi.mock("./useSearch", () => ({
    useSearch: vi.fn(),
}))

describe("компонент Search", () => {
    it("Проверяем пропадает ли кнопка зыкрыть при пустом поиске", () => {
        const inputText = ""

        vi.mocked(useSearch).mockReturnValue({
            inputValue: inputText,
            setInputValue: vi.fn(),
            isSearchOpen: false,
            isMobile: false,
            films: [],
            isFetching: false,
            handleCloseSearchClick: vi.fn(),
        })

        render(<Search />)

        const closeButton = screen.queryByRole("button", { name: /Закрыть поиск/i })
        expect(closeButton).not.toBeInTheDocument()
    })

    it("Проверяем отображается ли сообщение о пустом списке", () => {
        const inputText = "SamoePlohoeKino"

        vi.mocked(useSearch).mockReturnValue({
            inputValue: inputText,
            setInputValue: vi.fn(),
            isSearchOpen: true,
            isMobile: false,
            films: [],
            isFetching: false,
            handleCloseSearchClick: vi.fn(),
        })

        render(<Search />)

        const listEmptyElement = screen.getByText("Список пуст")
        expect(listEmptyElement).toBeInTheDocument()
    })

    it("Проверяем перестраивается ли отображение результата поиска под мобильные устройства", () => {
        const inputText = "Pirates"

        const mockFilms = [
            {
                id: 1,
                originalTitle: "Pirates of the Caribbean",
                genres: ["action"],
                releaseYear: 2003,
                runtime: 143,
            }
        ] as unknown as Movie[];

        vi.mocked(useSearch).mockReturnValue({
            inputValue: inputText,
            setInputValue: vi.fn(),
            isSearchOpen: true,
            isMobile: true,
            films: mockFilms,
            isFetching: false,
            handleCloseSearchClick: vi.fn(),
        })

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Search />
                </MemoryRouter>
            </Provider>
        );

        const filmTitle = screen.getByText("Pirates of the Caribbean");
        expect(filmTitle).toBeInTheDocument();

        const desktopList = screen.queryByRole("list");
        expect(desktopList).not.toBeInTheDocument();
    })

    it("Проверяем не отображается ли пустой список пока грузятся фильмы", () => {
        const inputText = "Harry Potter";

        vi.mocked(useSearch).mockReturnValue({
            inputValue: inputText,
            setInputValue: vi.fn(),
            isSearchOpen: true,
            isMobile: false,
            films: [],
            isFetching: true,
            handleCloseSearchClick: vi.fn(),
        });

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Search />
                </MemoryRouter>
            </Provider>
        );
        const emptyMessage = screen.queryByText("Список пуст");
        expect(emptyMessage).not.toBeInTheDocument();
    });
})
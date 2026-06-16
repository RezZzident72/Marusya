export const translateGenre = (genre: string): string => {
    const dictionary: Record<string, string> = {
        action: "Боевики",
        adventure: "Приключения",
        animation: "Мультфильмы",
        comedy: "Комедии",
        crime: "Криминал",
        documentary: "Документальные",
        drama: "Драмы",
        family: "Семейные",
        fantasy: "Фэнтези",
        history: "Исторические",
        horror: "Ужасы",
        music: "Музыкальные",
        mystery: "Детективы",
        romance: "Мелодрамы",
        scifi: "Фантастика",
        "stand-up": "Стендап",
        thriller: "Триллеры",
        "tv-movie": "Телефильмы",
        war: "Военные",
        western: "Вестерны"
    };

    return dictionary[genre] || genre;
};
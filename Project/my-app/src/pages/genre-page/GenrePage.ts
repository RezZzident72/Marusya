import actionImg from "../../assets/image/genre-img/action.jpg";
import adventureImg from "../../assets/image/genre-img/adventure.jpg";
import animationImg from "../../assets/image/genre-img/animation.jpg";
import comedyImg from "../../assets/image/genre-img/comedy.jpg";
import crimeImg from "../../assets/image/genre-img/crime.jpg";
import documentaryImg from "../../assets/image/genre-img/documentary.jpg";
import dramaImg from "../../assets/image/genre-img/drama.jpg";
import familyImg from "../../assets/image/genre-img/family.jpg";
import fantasyImg from "../../assets/image/genre-img/fantasy.jpg";
import historyImg from "../../assets/image/genre-img/history.jpg";
import horrorImg from "../../assets/image/genre-img/horror.jpg";
import musicImg from "../../assets/image/genre-img/music.jpg";
import mysteryImg from "../../assets/image/genre-img/mystery.jpg";
import romanceImg from "../../assets/image/genre-img/romance.jpg";
import sciFiImg from "../../assets/image/genre-img/sciFi.jpg";
import standupImg from "../../assets/image/genre-img/stand-up.jpg";
import thrillerImg from "../../assets/image/genre-img/thriller.jpg";
import tvmovieImg from "../../assets/image/genre-img/tv-movie.jpg";
import warImg from "../../assets/image/genre-img/war.jpg";
import westernImg from "../../assets/image/genre-img/western.jpg";

// Добавляем export, чтобы словарь можно было забрать в другой файл
export const genreDictionary: Record<string, { id: string; title: string; image: string }> = {
  action: { id: "action", title: "Боевики", image: actionImg },
  adventure: { id: "adventure", title: "Приключения", image: adventureImg },
  animation: { id: "animation", title: "Мультфильмы", image: animationImg },
  comedy: { id: "comedy", title: "Комедии", image: comedyImg },
  crime: { id: "crime", title: "Криминал", image: crimeImg },
  documentary: { id: "documentary", title: "Документальные", image: documentaryImg },
  drama: { id: "drama", title: "Драмы", image: dramaImg },
  family: { id: "family", title: "Семейные", image: familyImg },
  fantasy: { id: "fantasy", title: "Фэнтези", image: fantasyImg },
  history: { id: "history", title: "Исторические", image: historyImg },
  horror: { id: "horror", title: "Ужасы", image: horrorImg },
  music: { id: "music", title: "Музыкальные", image: musicImg },
  mystery: { id: "mystery", title: "Детективы", image: mysteryImg },
  romance: { id: "romance", title: "Мелодрамы", image: romanceImg },
  scifi: { id: "scifi", title: "Фантастика", image: sciFiImg },
  "stand-up": { id: "stand-up", title: "Стендап", image: standupImg },
  thriller: { id: "thriller", title: "Триллеры", image: thrillerImg },
  "tv-movie": { id: "tv-movie", title: "Телефильмы", image: tvmovieImg },
  war: { id: "war", title: "Военные", image: warImg },
  western: { id: "western", title: "Вестерны", image: westernImg },
};
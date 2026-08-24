export const convertAndFormatCurrency = (usdString: string | undefined): string => {
  if (!usdString) return "Нет информации";

  const usdAmount = Number(usdString.replace(/[^0-9]/g, ""));

  if (isNaN(usdAmount) || usdAmount === 0) return "Нет информации";

  const rubRate = 71; 
  const rubAmount = usdAmount * rubRate;

  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(rubAmount);
};

const languageTranslator = new Intl.DisplayNames(['ru'], { type: 'language' });

export const getRussianLanguageName = (rawLanguage: string | undefined): string => {
  if (!rawLanguage) return "Нет информации";

  try {
    const translated = languageTranslator.of(rawLanguage);
    return translated 
      ? translated.charAt(0).toUpperCase() + translated.slice(1) 
      : rawLanguage;
  } catch {
    return rawLanguage;
  }
};

const getPluralForm = (number: number, one: string, two: string, five: string): string => {
  const n = Math.abs(number) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) return five;
  if (n1 > 1 && n1 < 5) return two;
  if (n1 === 1) return one;
  return five;
};

export const translateAwards = (awardsString: string | undefined): string => {
  if (!awardsString) return "Нет информации";

  const winMatch = awardsString.match(/(\d+)\s*win/i);
  const nominationMatch = awardsString.match(/(\d+)\s*nomination/i);

  const winsCount = winMatch ? parseInt(winMatch[1], 10) : 0;
  const nominationsCount = nominationMatch ? parseInt(nominationMatch[1], 10) : 0;

  if (winsCount === 0 && nominationsCount === 0) {
    return awardsString === "Нет информации" ? "Нет информации" : awardsString;
  }
  const winsText = winsCount > 0 
    ? `${winsCount} ${getPluralForm(winsCount, "победа", "победы", "побед")}` 
    : "";
    
  const nominationsText = nominationsCount > 0 
    ? `${nominationsCount} ${getPluralForm(nominationsCount, "номинация", "номинации", "номинаций")}` 
    : "";

  if (winsText && nominationsText) {
    return `${winsText} и ${nominationsText}`;
  }
  
  return winsText || nominationsText || "Нет информации";
};

export const translateDirectorName = (name: string | undefined): string => {
  if (!name) return "Нет информации";
  const trimmedName = name.trim();
  return directorDictionary[trimmedName] || trimmedName;
};

const directorDictionary: Record<string, string> = {
  "Christopher Nolan": "Кристофер Нолан",
  "Quentin Tarantino": "Квентин Тарантино",
  "Steven Spielberg": "Стивен Спилберг",
  "Martin Scorsese": "Мартин Скорсезе",
  "James Cameron": "Джеймс Кэмерон",
  "David Fincher": "Дэвид Финчер",
  "Ridley Scott": "Ридли Скотт",
  "Denis Villeneuve": "Дени Вильнёв",
  "Peter Jackson": "Питер Джексон",
  "Tim Burton": "Тим Бёртон",
  "Guy Ritchie": "Гай Ричи",
  "Hayao Miyazaki": "Хаяо Миядзаки",
  "David Lynch": "Дэвид Линч",
  "Stanley Kubrick": "Стэнли Кубрик",
  "Alfred Hitchcock": "Альфред Хичкок",
  "Francis Ford Coppola": "Фрэнсис Форд Коппола",
  "Guillermo del Toro": "Гильермо дель Торо",
  "Zack Snyder": "Зак Снайдер",
  "Robert Zemeckis": "Роберт Земекис",
  "George Lucas": "Джордж Лукас",
  "Darren Aronofsky": "Даррен Аронофски",
  "Wes Anderson": "Уэс Андерсон",
  "Bong Joon Ho": "Пон Джун-хо",
  "James Wan": "Джеймс Ван",
  "Ang Lee": "Энг Ли",
  "Alfonso Cuarón": "Альфонсо Куарон",
  "Alejandro G. Iñárritu": "Алехандро Г. Иньярриту",
  "Taika Waititi": "Тайка Вайтити",
  "Lana Wachowski": "Лана Вачовски",
  "Lilly Wachowski": "Лилли Вачовски",
  "Clint Eastwood": "Клинт Иствуд",
  "Michael Bay": "Майкл Бэй",
  "Sam Raimi": "Сэм Рэйми",
  "Edgar Wright": "Эдгар Райт",
  "Todd Phillips": "Тодд Филлипс",
  "Jon Favreau": "Джон Фавро",
  "Greta Gerwig": "Грета Гервиг",
  "Christopher McQuarrie": "Кристофер Маккуорри",
  "Chad Stahelski": "Чад Стахелски",
  "Rian Johnson": "Райан Джонсон"
};
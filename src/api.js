// Base URL
const base_url = "https://api.rawg.io/api/";
const API_key = "key=5f32a98595ea47279929b69edcb79435";

// Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `games?${API_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=9`;
const upcoming_games = `games?${API_key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=9`;
const new_games = `games?${API_key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=9`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`


// How URL should look >>>
//https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7

import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

//Action Creator

export const loadGames = () => async (dispatch) => {
  // Fetch axios
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  // allways put await after async data
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

// payload is an aditional data which is send to reducer and than used there > action.payload."name of initState"  to mount it to state []
// Explain of popular: popularData.data.results, = name > api link > and than just way to your data if needed "data>results" (deconstruction) 
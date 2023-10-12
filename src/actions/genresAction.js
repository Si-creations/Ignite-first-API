import axios from "axios";
import { gameGenresURL } from "../api";

//Action Creator

export const loadGenres = () => async (dispatch) => {
    // Fetch axios
    const genresData = await axios.get(gameGenresURL());
    
    // allways put await befor async data
    dispatch({
      type: "FETCH_GENRES",
      payload: {
        genres: genresData.data.results,
      },
    });
  };
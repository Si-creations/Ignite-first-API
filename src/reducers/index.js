import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";
import genresReducer from "./genresReducer";



const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
  genres: genresReducer, 
});

export default rootReducer;

//takze basic postup > vytvorenie URL > vytvorenie action > vytvorenie reducer > pridanie do root reducer
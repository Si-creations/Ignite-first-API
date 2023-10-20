import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";
import genresReducer from "./genresReducer";
import isLoggedReducer from "./isLoggedRecuer"
import testReducer from "./testReducer";



const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
  genresboi: genresReducer, 
  logged: isLoggedReducer,
  test: testReducer
});

export default rootReducer;

//takze basic postup > vytvorenie URL > vytvorenie action > vytvorenie reducer > pridanie do root reducer a import rootReducer do hlavneho index.js
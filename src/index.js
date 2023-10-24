import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//Redux SETUP
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

//Hook extencion to view state in page
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnchancer(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// How to create STORE (run reux)
//1- import {createStore} from 'redux' in index.js
// const store = createStore(
//   rootReducer,
//   composeEnchancer(applyMiddleware(thunk)) >> spojenie Redux devtools, thunk is for dispatching async actions
// );

//2- in Reducers folder create another index.js nad in it do import { combineReducers } from "redux";  than> import  "nameofreducer" from "./genresReducer"; and create rootReducer = combineReducers({name you want to give it(that name will show on page state): nameofreducer})

//3- Action> function that tells what are we going to do > const "name of the function" = () => { return {name/type: ''name of the function}}

//4- Reducer> function that filters out Actions> const "name of function" = (state-example"false/0" , action) => { switch (action.type/name){ case "describes what is the action doing": return state "do what we need" > example state +1, default: return state}}   >> reducer is the place where you apply the logic of what is going to happen to your state

//5- Dispatch> means that you are going to send action to reducer > dispatch("type of aciotn")

//6- Wrap the whole <App/> in <Provider store={store}/>

//7- import {useSelector} from 'react-redux' > it extracts anything from redux store example: const "name of state from rootReducer" = useSelector(state => state."name of state from rootReducer") >> state in useSelector can be allso named store because it's basicly the  whole redux store  store is where we keep all of our states.

//8- add > import {useSelector, useDispatch} from 'react-redux' + code > const dispatch = useDispatch(); example: useEffect(() => {dispatch("actionname"());}, [dispatch]); OR : <button onClick={() => dispatch("actionname" or {type/name:'name of action-function'})}>"button-text"</button>


// Using react-router-dom

//1- in index.js import { BrowserRouter } from "react-router-dom"; and wrap the APP with it

//2- in App import { Route, Routes } from "react-router-dom"; and replace elements with : <Route path="/" element={<Home/>}></Route>  WHICH are wrapped if <Routes>

//3- in Home which is an element of App in this case import {useLocation} from 'react-router-dom' and create const location = useLocation() and than create const pathId = location.pathname.split("/")[2]; > gives me back the id I need from arr that was created byt the split()

//4- than import {Link} from 'react-router-dom' in "Game" element and wrap the element you want to link to somethink in <Link>

//5- than type {pathId && <GameDetail/> } so it would load the element "GameDetail" only when it has the correct id to display it, and to fix the bug that occurs in this situation you have to add   const initialState = { game: { platforms:[] }, screen:{ results :[]}  }; "platforms:[] and results:[]" in Reducer of this component because game and screen wonth display before they are fetched 

// How to make pictures from API smaller so your page will be faster:
//1- create function (located in util.js) witch chcecks for url and than changes it> it takes 2 parameters (original image, size in px "example:640/1280")

//2- than inport this function where your images are displayed and display those images with this function "example: img src={smallImage(image, 640)}"

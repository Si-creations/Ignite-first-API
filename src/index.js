import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//Redux SETUP
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

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
      <App />
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
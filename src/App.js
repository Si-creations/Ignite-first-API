import React from "react";
//Components and pages
import Home from "./pages/Home";
import Nav from './components/Nav'
//Styles
import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/game/:id" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

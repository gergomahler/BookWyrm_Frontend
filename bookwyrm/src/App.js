import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <p>Welcome</p>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { useContext } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import styled from "styled-components";
import PageContext from "./pageContext";
import BookList from "./components/books/BookList";

const CardContainer = styled.div`
  width: 80%;
  background-color: #bfa58a;
  border-radius: 15px;
  margin: auto;
  margin-top: 10px;
  padding: 20px;
`;

const App = (props) => {
  const pc = useContext(PageContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <CardContainer>
          <PageContext.Provider value={pc}>
            <Route exact path="/books" component={BookList} />
            <Route exact path="/authors/" />
            <Route exact path="/publishers/" />
          </PageContext.Provider>

          <Route exact path="/register" />
          <Route exact path="/login" />
        </CardContainer>
      </BrowserRouter>
    </div>
  );
};

export default App;

import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import styled from "styled-components";
import PageContext from "./pageContext";

import Navbar from "./components/layout/Navbar";
import Register from "./components/users/Register";
import Login from "./components/users/Login";
import BookList from "./components/books/BookList";
import AuthorList from "./components/authors/AuthorList";
import PublisherList from "./components/publishers/PublisherList";
import AddNewBook from "./components/books/AddNewBook";

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
            <Route exact path="/addbook" component={AddNewBook} />
            <Route exact path="/books" component={BookList} />
            <Route exact path="/authors/" component={AuthorList} />
            <Route exact path="/publishers/" component={PublisherList} />
          </PageContext.Provider>

          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </CardContainer>
      </BrowserRouter>
    </div>
  );
};

export default App;

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLabel = styled.label`
  margin: 10px;
  color: lightgray;
`;

const StyledButton = styled.button`
  margin-top: 30px;
  width: 20%;
  align-self: center;
`;

const CenterDiv = styled.div`
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

function AddNewBook(props) {
  let addBook = (event) => {
    event.preventDefault();
    console.log(event.target);
    let form = event.target;
    let book = {
      Title: form.title.value,
      Author: [form.author.value],
      ISBN: form.isbn.value,
      Description: form.description.value,
      Publishing: form.publisher.value,
      Language: form.language.value,
      pyear: form.pyear.value,
    };

    axios
      .post("https://localhost:44327/api/Books", book)
      .then((response) => console.log(response));
  };

  return (
    <React.Fragment>
      <CenterDiv className="newBookInfos">
        <form onSubmit={addBook}>
          <StyledLabel for="title">
            <b>Title</b>
          </StyledLabel>
          <input
            type="text"
            placeholder="Book Title"
            name="title"
            //required
          ></input>

          <h3>Author</h3>
          <StyledLabel for="author">
            <b>Author</b>
          </StyledLabel>
          <input
            type="text"
            placeholder="Author Name"
            name="author"
            //required
          ></input>

          <h3>ISBN</h3>
          <StyledLabel for="isbn">
            <b>ISBN</b>
          </StyledLabel>
          <input
            type="text"
            placeholder="ISBN code"
            name="isbn"
            //required
          ></input>

          <h3>Description</h3>
          <StyledLabel for="description">
            <b>Description</b>
          </StyledLabel>
          <input
            type="text"
            placeholder="Desription"
            name="description"
            width="100%"
            height="400%"
            //required
          ></input>

          <h3>Publisher</h3>
          <StyledLabel for="publisher">
            <b>Publisher</b>
          </StyledLabel>
          <input
            type="text"
            placeholder="Publisher"
            name="publisher"
            // required
          ></input>

          <h3>Language</h3>
          <StyledLabel for="language">
            <b>Language</b>
          </StyledLabel>
          <input
            type="text"
            placeholder="Language"
            name="language"
            //  required
          ></input>

          <h3>Publsihing Year</h3>
          <StyledLabel for="pyear">
            <b>Publishing Year</b>
          </StyledLabel>
          <input
            type="date"
            placeholder="YYYY"
            name="pyear"
            //required
          ></input>

          <StyledButton type="submit" className="addbook" position="center">
            Add Book
          </StyledButton>
        </form>
      </CenterDiv>
    </React.Fragment>
  );
}

export default AddNewBook;

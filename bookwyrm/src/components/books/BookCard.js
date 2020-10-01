import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Sprite = styled.img`
  width: 153px;
  height: 230px;
  object-fit: cover;
  margin: 0px;
`;

const StyledLink = styled(Link)`
  color: gray;
`;

function BookCard(props) {
  const [state, setstate] = useState({
    book: {
      authors: [],
      publishers: [],
    },
  });

  return (
    <div className="card-container">
      <div className="card">
        <StyledLink to={`/book/${state.book.id}`}>
          <Sprite className="cover-img" />
          <h5>{state.book.title}</h5>
        </StyledLink>
        <StyledLink to={`/author/${state.book.authorId}`}>
          <h6>{state.author.name}</h6>
        </StyledLink>
      </div>
    </div>
  );
}

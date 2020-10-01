import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Sprite = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 0px;
`;

const StyledLink = styled(Link)`
  color: gray;
`;

function AuthorCard(props) {
  const [state, setstate] = useState({
    author: {
      books: [],
    },
  });

  return (
    <div className="card-container">
      <div className="card">
        <StyledLink to={`/author/${state.author.id}`}>
          <Sprite className="author-img" />
          <h5>{/*{state.author.name}*/} Author Name holder</h5>
        </StyledLink>
      </div>
    </div>
  );
}

export default AuthorCard;

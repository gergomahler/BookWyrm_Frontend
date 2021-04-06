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

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost/63425/api/Books',
      
    })
    .then((response) => {
      setstate({ book: response.data });
    })
    .catch((error) => {
      console.log(error);
    });
  }, [props.book.id]);
  // eslint-disable-next-line no-unused-vars
  let writers = "";
  writers += state.book.authors.map((writer) => {
    return writer.name;
  });

  return (
    <div className="card-container">
      <div className="card">
        <StyledLink to={`/book/${state.book.id}`}>
          <Sprite className="cover-img" />
          <h5>{/*{state.book.title}*/} Book Title holder</h5>
        </StyledLink>
        {state.book.authors.map((writer) => {
          return (
          <StyledLink key={writer.id} to={`/author/${writer.id}`}>
            <h6>{/*{writer.name}*/} Author Name holder</h6>
          </StyledLink>
          );
        })}
        
        <StyledLink to={`/publisher/${state.book.publisherId}`}>
          <h6>{/*{state.book.publisher*/} Publisher Name holder</h6>
        </StyledLink>
      </div>
    </div>
  );
}

export default BookCard;

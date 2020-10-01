import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Sprite = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin: 0px;
`;

const StyledLink = styled(Link)`
  color: gray;
`;

function PublisherCard(props) {
  const [state, setstate] = useState({
    publisher: {
      books: [],
    },
  });

  return (
    <div className="card-container">
      <div className="card">
        <StyledLink to={`/publisher/${state.publisher.id}`}>
          <Sprite className="publisher-logo" />
          <h5>{/*{state.publisher.name}*/} Publisher Name holder</h5>
        </StyledLink>
      </div>
    </div>
  );
}

export default PublisherCard;

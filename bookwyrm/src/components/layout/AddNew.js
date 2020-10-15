import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Sprite = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 0px;
`;

const StyledLink = styled(Link)`
  color: gray;
`;

function AddNew(props) {
    

    return (
        <div className="AddNew">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <Sprite></Sprite>
                        <StyledLink to="/addnew/book">New Book</StyledLink>
                        <Sprite></Sprite>
                        <StyledLink to="/addnew/author">New Author</StyledLink>
                        <Sprite></Sprite>
                        <StyledLink to="/addnew/publisher">New Publisher</StyledLink>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default AddNew;
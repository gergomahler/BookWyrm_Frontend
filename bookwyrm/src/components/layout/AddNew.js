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
                        <div className="card">
                            <StyledLink to="/addnew/book">
                            <Sprite src={process.env.PUBLIC_URL + '/img/bookicon.png'}></Sprite>
                            <h4>New Book</h4>
                            </StyledLink>
                        
                        
                        <StyledLink to="/addnew/author">
                            <Sprite src={process.env.PUBLIC_URL + '/img/authoricon.png'}></Sprite>
                            <h4>New Author</h4>
                            </StyledLink>
                            
                        
                        <StyledLink to="/addnew/publisher">
                            <Sprite src={process.env.PUBLIC_URL + '/img/publishericon.png'}></Sprite>
                            <h4>New Publisher</h4>
                            </StyledLink>
                            </div>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default AddNew;
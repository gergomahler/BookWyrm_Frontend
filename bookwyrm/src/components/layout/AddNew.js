import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

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
            <Grid container direction="row" justify="center" alignItems="center">
                <div className="addcard">
                    <StyledLink to="/addnew/book">
                        <Sprite src={process.env.PUBLIC_URL + '/img/bookicon.png'}></Sprite>
                        <h4>New Book</h4>
                    </StyledLink>
                </div>
                <div className="addcard">
                    <StyledLink to="/addnew/author">
                        <Sprite src={process.env.PUBLIC_URL + '/img/authoricon.png'}></Sprite>
                        <h4>New Author</h4>
                    </StyledLink>
                </div>
                <div className="addcard">
                    <StyledLink to="/addnew/publisher">
                        <Sprite src={process.env.PUBLIC_URL + '/img/publishericon.png'}></Sprite>
                        <h4>New Publisher</h4>
                    </StyledLink>
                </div>
            </Grid>
        </div>
    );
}

export default AddNew;
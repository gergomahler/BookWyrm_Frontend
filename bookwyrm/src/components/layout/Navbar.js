import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkStyle = styled(Link)`
  font-weight: bold;
  color: darkblue;
  &:hover {
    color: darkblue;
    opacity: 0.7;
  }
`;

const Navbar = (props) => {
  return (
    <div className="navbar navbar-expand-md fixed-top justify-content-between">
      <h4>
        <LinkStyle to="/">Home</LinkStyle>
      </h4>
      <h4>
        <LinkStyle to="/addbook">Add Book</LinkStyle>
      </h4>
      <h4>
        <LinkStyle to="/books">Books</LinkStyle>
      </h4>
      <h4>
        <LinkStyle to="/authors">Authors</LinkStyle>
      </h4>
      <h4>
        <LinkStyle to="/publishers">Publishers</LinkStyle>
      </h4>
      <h4>
        <LinkStyle to="/login">Login</LinkStyle>
      </h4>
      <h4>
        <LinkStyle to="/register">Register</LinkStyle>
      </h4>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Navbar;

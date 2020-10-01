import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AuthorCard from "./AuthorCard";

function AuthorList(props) {
  return (
    <div className="authors">
      <div className="row">
        <div className="col">
          <div className="row">
            <AuthorCard></AuthorCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorList;

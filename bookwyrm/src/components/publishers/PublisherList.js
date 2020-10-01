import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PublisherCard from "./PublisherCard";

function PublisherList(props) {
  return (
    <div className="publishers">
      <div className="row">
        <div className="col">
          <div className="row">
            <PublisherCard></PublisherCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublisherList;

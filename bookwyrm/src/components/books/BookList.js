import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";

function BookList(props) {
  const [state, setstate] = useState({ books: { results: [] } });

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:44327/api/Books",
    })
      .then((response) => {
        setstate({ books: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="books">
      <div className="row">
        <div className="col">
          <div className="row">
            {state.books.results.map((b) => (
              <BookCard key={b.id} book={b} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookList;

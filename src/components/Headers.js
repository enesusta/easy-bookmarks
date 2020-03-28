import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Headers = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/headers")
      .then(res => {
        setTitles(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bookmarks-titles">
      <ul>
        {titles.length
          ? titles.map(title => {
              return (
                <li>
                  <Link to={`/bookmark/${title.id}`}>{title.name}</Link>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default Headers;

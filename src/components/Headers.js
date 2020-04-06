import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Headers = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:9050/headers')
      .then((res) => {
        setTitles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='bookmarks-title'>
      {titles.length
        ? titles.map((title) => {
            return (
              <Link className='bookmarks-title-item' to={`/bookmark/${title.id}`}>
                {title.name}
              </Link>
            );
          })
        : null}
    </div>
  );
};

export default Headers;

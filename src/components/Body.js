import React, { useState, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const isArray = (data) => data.hasOwnProperty('children');

const Body = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:9050/bookmark/${id}`)
      .then((res) => {
        setData(res.data.children);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className='bookmarks-body'>
      <ul>
        {data.length
          ? data.map((e) => {
            return isArray(e) ? (
              e.children.map((k) => {
                return isArray(k) ? (
                  k.children.map((p) => {
                    return (
                      <a href={p.url} className='bookmarks-body-item'>
                        {p.name}
                      </a>
                    );
                  })
                ) : (
                    <a href={k.url} className='bookmarks-body-item'>
                      {k.name}
                    </a>
                  );
              })
            ) : (
                <a href={e.url} className='bookmarks-body-item'>
                  {e.name}
                </a>
              );
          })
          : null}
      </ul>
    </div>
  );
};

export default Body;

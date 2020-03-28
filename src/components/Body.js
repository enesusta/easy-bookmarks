import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

const Body = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:3001/bookmark/${id}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return <div className="bookmarks-body">hey {id}</div>;
};

export default Body;

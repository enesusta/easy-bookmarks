import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Body = () => {
  const [datas, setDatas] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/bookmark/${id}`)
      .then(res => {
        setDatas(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="bookmarks-body">
      <ul>
        {datas.length
          ? datas.map(e => {
              return (
                <a className="bookmarks-body-item" href={e.url}>
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

/**
 * 
 *  <ul>
        {datas.length
          ? datas[0].children.map(e => {
              console.log(`e is ${e}`);

              return <li key={e.id}>{e.name}</li>;
            })
          : null}
      </ul>

 */

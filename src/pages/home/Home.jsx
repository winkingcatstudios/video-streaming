import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    // `http://localhost:5000/api/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`
    const getRandomLists = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmYxYjM5OGViNDIxMTEzYmQxY2QzZmEiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NjAxNDIwMDUsImV4cCI6MTY2MDE0NTYwNX0.zkTGpA_1d5TzQxu5sSCwugaHKcrQX4f0L56nqY6fIOQ",
            },
          }
        );
        setLists(response.data.lists);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;

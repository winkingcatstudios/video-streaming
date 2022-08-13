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
    const getRandomLists = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/lists/random10${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("userData")).token,
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
      <Featured type={type} setGenre={setGenre}/>
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;

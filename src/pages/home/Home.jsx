import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import ComingSoon from "../../components/comingSoon/ComingSoon";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/lists/random10${
            type ? "?type=" + type : ""
          }${genre ? "&genre=" + genre : ""}`,
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

  let content;

  if (type === "oneshots") {
    content = <ComingSoon />;
  } else if (type === "series") {
    content = <ComingSoon />;
  } else if (type === "cats") {
    content = (
      <React.Fragment>
        <Featured type={type} setGenre={setGenre} />
        {lists.map((list) => (
          <List key={list._id} list={list} />
        ))}
      </React.Fragment>
    );
  } else {
    content = (
      <React.Fragment>
        <Featured type={type} setGenre={setGenre} />
        {lists.map((list) => (
          <List key={list._id} list={list} />
        ))}
      </React.Fragment>
    );
  }

  return (
    <div className="home">
      <Navbar />
      {content}
    </div>
  );
};

export default Home;

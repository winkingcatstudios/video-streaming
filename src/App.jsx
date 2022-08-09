import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./app.scss";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import MainNavigation from "./components/navbar/MainNavigation"
import { AuthContext } from "./context/auth-context";
import { useAuth } from "./hooks/auth-hook";

const App = () => {
  const { token, login, logout, userId } = useAuth();

  let routes;

  const user = true;

  if (token) {
    routes = (
      <React.Fragment>
        <Route path="/" element={<Home />} />
        <Route path="/oneshots" element={<Home type="oneshots" />} />
        <Route path="/series" element={<Home type="series" />} />
        <Route path="/watch" element={<Watch />} />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </React.Fragment>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Routes>{routes}</Routes>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;

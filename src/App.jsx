import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./app.scss";
import LoadingSpinner from "./components/uiElements/LoadingSpinner";
import { AuthContext } from "./context/auth-context";
import { useAuth } from "./hooks/auth-hook";

const Home = React.lazy(() => import("./pages/home/Home"));
const Signup = React.lazy(() => import("./pages/signup/Signup"));
const Watch = React.lazy(() => import("./pages/watch/Watch"));
const Login = React.lazy(() => import("./pages/login/Login"));
const MyList = React.lazy(() => import("./pages/myList/MyList"));
const Settings = React.lazy(() => import("./pages/settings/Settings"));
const Footer = React.lazy(() => import("./components/uiElements/Footer"))

const App = () => {
  const { token, login, logout, userId, name } = useAuth();

  let routes;

  if (token) {
    routes = (
      <React.Fragment>
        <Route path="/" element={<Home />} />
        <Route path="/oneshots" element={<Home type="oneshots" />} />
        <Route path="/series" element={<Home type="series" />} />
        <Route path="/cats" element={<Home type="cats" />} />
        <Route path="/myList" element={<MyList />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/signup" replace />} />
      </React.Fragment>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        name: name,
        login: login,
        logout: logout,
      }}
    >
      <Suspense
        fallback={
          <div className="center">
            <LoadingSpinner />
          </div>
        }
      >
        <Router>
          <Routes>{routes}</Routes>
        </Router>
        {/* <Footer /> */}
      </Suspense>
    </AuthContext.Provider>
  );
};

export default App;

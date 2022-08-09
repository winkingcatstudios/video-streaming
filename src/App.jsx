import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./app.scss";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";

const App = () => {
  const user = true;
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oneshots" element={<Home type="oneshots" />} />
        <Route path="/series" element={<Home type="series" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </Router>
  );
};

export default App;

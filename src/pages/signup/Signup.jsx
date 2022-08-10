import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./signup.scss";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleName = () => {
    setName(nameRef.current.value);
  };
  const handleEmail = () => {
    setEmail(emailRef.current.value);
  };
  const handlePassword = () => {
    setPassword(passwordRef.current.value);
  };
  return (
    <div className="signup">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://winkingcatstudio.com/winkingcatlogo-transparent-white.png"
            alt=""
          />
          <Link to="/login" className="link">
            <span className="loginButton">Sign In</span>
          </Link>
        </div>
      </div>
      <div className="container">
        <h1>Tabletop role-playing game videos and more.</h1>
        <h2>Full series, oneshots, and extras.</h2>
        <p>Ready to watch? Create an account below.</p>
        {!name && (
          <div className="input">
            <input type="type" placeholder="name" ref={nameRef} />
            <button className="signupButton" onClick={handleName}>
              Get Started
            </button>
          </div>
        )}
        {name && !email && (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="signupButton" onClick={handleEmail}>
              Next
            </button>
          </div>
        )}
        {email && !password && (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="signupButton" onClick={handlePassword}>
              Finish
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

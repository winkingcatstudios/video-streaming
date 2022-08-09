import { useRef } from "react";
import { useState } from "react";
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
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Tabletop role-playing game videos and more.</h1>
        <h2>Full series, oneshots, and extras.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
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
              Get Started
            </button>
          </div>
        )} 
        {email && !password && (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="signupButton" onClick={handlePassword}>
              Sign up
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

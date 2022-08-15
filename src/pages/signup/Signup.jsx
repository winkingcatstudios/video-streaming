import { useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";

import Card from "../../components/uiElements/Card";
import Input from "../../components/formElements/Input";
import Button from "../../components/formElements/Button";
import ErrorModal from "../../components/uiElements/ErrorModal";
import LoadingSpinner from "../../components/uiElements/LoadingSpinner";
import ImageUpload from "../../components/formElements/ImageUpload";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_REQUIRE,
} from "../..//util/validators";
import { useForm } from "../../hooks/form-hook";
import { useHttpClient } from "../../hooks/http-hook";
import { AuthContext } from "../../context/auth-context";
import "./signup.scss";

export default function Signup() {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/users/signup`,
        "POST",
        JSON.stringify({
          name: formState.inputs.name.value,
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
        }),
        {
          "content-Type": "application/json",
        }
      );
      auth.login(responseData.userId, responseData.name, responseData.token);
    } catch (err) {
      // caught in http-hook
    }
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
        </div>
      </div>
      <div className="container">
        <h1>Tabletop role-playing game videos and more.</h1>
        <h2>Full series, oneshots, and extras.</h2>
        <p>Ready to watch? Create an account below.</p>
        <div className="form">
        <ErrorModal error={error} onClear={clearError} />
        {isLoading && <LoadingSpinner asOverlay />}
        <form onSubmit={authSubmitHandler}>
          <Input
            element="input"
            id="name"
            type="text"
            label="Username"
            validators={[VALIDATOR_MINLENGTH(3), VALIDATOR_MAXLENGTH(12)]}
            errorText="Please use 3-12 characters"
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="email"
            type="email"
            label="Email"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(12), VALIDATOR_MAXLENGTH(127)]}
            errorText="Please use 12-127 characters"
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            SIGN UP
          </Button>
          <span className="signUpText">
            Already have an account?{" "}
            <Link to="/login" className="link">
              <b>Log in now.</b>
            </Link>
          </span>
        </form>
      </div>
      </div>
    </div>
  );
}

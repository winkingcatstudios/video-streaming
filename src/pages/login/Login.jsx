import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";

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
import "./login.scss";

export default function Login() {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler] = useForm(
    {
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
        "http://localhost:5000/api/users/login",
        "POST",
        JSON.stringify({
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
    <div className="login">
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
        <ErrorModal error={error} onClear={clearError} />
        {isLoading && <LoadingSpinner asOverlay />}
        <form onSubmit={authSubmitHandler}>
          <h1>Sign In</h1>
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
            errorText="Please enter a valid password (at least 12 characters)"
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            LOGIN
          </Button>
          <span className="signUpText">
            New to Dicecats?{" "}
            <Link to="/signup" className="link">
              <b>Sign up now.</b>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

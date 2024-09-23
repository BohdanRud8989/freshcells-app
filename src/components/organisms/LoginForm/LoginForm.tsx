import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LoginButton, EmailFormItem } from "../../atoms";
import { PasswordFormItem } from "../../molecules";
import { useTask } from "../../../hooks";
import { ExtractRef, UserLoginMutationResponse } from "../../../types";
import { UserLoginMutation } from "../../../data";
import { JWT_TOKEN_KEY } from "../../../utils";

import "./loginForm.less";

/**
 * Login Form - Provides a form to the user to log in(contains validation for each field)
 * @returns {JSX.Element}
 */
const LoginForm = () => {
  const emailFormItemRef = useRef<ExtractRef<typeof EmailFormItem>>(null);
  const passwordFormItemRef = useRef<ExtractRef<typeof PasswordFormItem>>(null);
  const navigate = useNavigate();
  const [loginMutation, { data, error }] =
    useMutation<UserLoginMutationResponse>(UserLoginMutation);

  // If login is successful - redirects the user to the Profile page
  useEffect(() => {
    if (data?.login.jwt) {
      sessionStorage.setItem(JWT_TOKEN_KEY, data.login.jwt);
      navigate(`/profile`);
    }
  }, [data, navigate]);

  // Logs in the user(call GraphQL mutation)
  const [submitting, handleSubmit] = useTask(
    async (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (
        submitting ||
        emailFormItemRef.current === null ||
        passwordFormItemRef.current === null
      ) {
        return;
      }

      const { isValid: isPasswordValid, value: password } =
        passwordFormItemRef.current;
      const { isValid: isEmailValid, value: email } = emailFormItemRef.current;

      if (isEmailValid && isPasswordValid) {
        await loginMutation({ variables: { identifier: email, password } });
      }
    },
  );

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-form__titles">
        <h1 className="login-form__titles__item--lighter">Welcome to</h1>
        <h1 className="login-form__titles__item">My test task</h1>
      </div>
      <EmailFormItem ref={emailFormItemRef} />
      <PasswordFormItem ref={passwordFormItemRef} />
      <LoginButton disabled={submitting} loading={submitting}>
        Login
      </LoginButton>
      {error && (
        <span className="login-form__error">
          Failed to login. Please try with another credentials. (Error:{" "}
          {error.message})
        </span>
      )}
    </form>
  );
};

export default LoginForm;

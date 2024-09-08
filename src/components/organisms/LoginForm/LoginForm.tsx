import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { LoginButton, EmailFormItem } from "../../atoms";
import { PasswordFormItem } from "../../molecules";
import { useTask } from "../../../hooks";
import { ExtractRef } from "../../../types";
// import { app } from "../../../config";

import "./loginForm.less";

/**
 * Login Form - Provides a form to the user to log in(contains validation for each field)
 * @returns {JSX.Element}
 */
const LoginForm = () => {
  const emailFormItemRef = useRef<ExtractRef<typeof EmailFormItem>>(null);
  const passwordFormItemRef = useRef<ExtractRef<typeof PasswordFormItem>>(null);
  const navigate = useNavigate();

  // Submits the form(saves the data to GraphQL API and if it's successful redirects the user to profile page)
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
        // Handle successful login here
        console.log(
          "LoginForm: Login successful: email, password: ",
          email,
          password,
        );

        // const payload = { email, password } as FormValues;
        //TODO call API with app.apiUrl
        const apiCall = new Promise((resolve) => {
          // call real API
          setTimeout(() => {
            resolve({
              success: true,
              error: false,
              firstName: "Bodya",
              lastName: "RUD",
            });
          }, 3000);
        });
        const { error, firstName, lastName }: any = await apiCall;

        if (error) {
          alert(`Error saving data to API: ${error}`);
        }
        navigate(`/profile/${firstName} ${lastName}`);
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
      {/*!emailFormItemRef.current?.isValid ||
        !passwordFormItemRef.current?.isValid || TODO */}
      <LoginButton disabled={submitting} loading={submitting}>
        Login
      </LoginButton>
    </form>
  );
};

export default LoginForm;

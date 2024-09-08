import { forwardRef, useImperativeHandle, useState } from "react";
import cx from "classnames";
import { InputRef } from "../../../types";

import "./emailFormItem.less";

export type EmailFormItemProps = {
  className?: string;
};

/**
 * Email form item for the form which has its own state and validation
 * Made as forwardRef + useImperativeHandle in order to manipulate by state in one place
 * and just get it in the form
 * @param {string} className - alternative css class name of the main container
 * @returns {JSX.Element}
 */
const EmailFormItem = forwardRef<InputRef, EmailFormItemProps>(
  ({ className }, ref) => {
    const [email, setEmail] = useState<string | undefined>();
    const [isValid, setIsValid] = useState(true);
    const [emailError, setEmailError] = useState<string | undefined>();

    useImperativeHandle(ref, () => ({ isValid, value: email }), [
      isValid,
      email,
    ]);

    const validateEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const handleEmailChange = ({
      target: { value },
    }: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(value);
      const valid = validateEmail(value);
      setIsValid(validateEmail(value));

      if (!value) {
        setEmailError("Please enter a valid email address.");
      } else if (!valid) {
        setEmailError("Invalid email address.");
      } else {
        setEmailError(undefined);
      }
    };

    return (
      <section className={cx("email-form-item", className)}>
        <label className="email-form-item__label" htmlFor="email">
          E-mail:
        </label>
        <input
          className="email-form-item__input"
          type="email"
          id="email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <p className="email-form-item__error">{emailError}</p>}
      </section>
    );
  },
);

export default EmailFormItem;

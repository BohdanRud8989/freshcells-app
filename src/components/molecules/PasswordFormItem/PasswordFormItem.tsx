import { forwardRef, useImperativeHandle, useState } from "react";
import cx from "classnames";
import { PasswordRequirements } from "../../atoms/PasswordRequirements";
import { validatePassword } from "../../../utils";
import { InputRef } from "../../../types";

import "./passwordFormItem.less";

export type PasswordFormItemProps = {
  className?: string;
};

/**
 * Password form item for the form which has its own state and validation
 * Made as forwardRef + useImperativeHandle in order to manipulate by state in one place
 * and just get it in the form
 * @param {string} className - alternative css class name of the main container
 * @returns {JSX.Element}
 */
export const PasswordFormItem = forwardRef<InputRef, PasswordFormItemProps>(
  ({ className }, ref) => {
    const [password, setPassword] = useState<string | undefined>();
    const [isValid, setIsValid] = useState(false);

    useImperativeHandle(ref, () => ({ isValid, value: password }), [
      isValid,
      password,
    ]);

    console.log("PasswordFormItem: isValid: ", isValid);

    const handlePasswordChange = ({
      target: { value },
    }: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(value);
      const { valid } = validatePassword(value, true);
      setIsValid(valid);
    };

    return (
      <section className={cx("password-form-item", className)}>
        <PasswordRequirements value={password} />
        <label className="password-form-item__label" htmlFor="password">
          Password:
        </label>
        <input
          className="password-form-item__input"
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </section>
    );
  },
);

export default PasswordFormItem;

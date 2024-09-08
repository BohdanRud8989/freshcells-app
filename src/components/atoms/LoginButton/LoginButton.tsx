import cx from "classnames";

import "./loginButton.less";

type LoginButtonProps = {
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
};

/**
 * Login button for the form
 * @param {string} className - alternative css class name of the main container
 * @param {boolean} disabled - disabled state
 * @param {boolean} loading - loading state
 * @param {React.ReactNode} children - children component
 * @param {Object} props - rest of the props
 * @returns {JSX.Element}
 */
const LoginButton = ({
  className,
  disabled = false,
  loading = false,
  children,
  ...props
}: LoginButtonProps) => (
  <button
    className={cx(
      "login-button",
      { "login-button--disabled": disabled },
      className,
    )}
    type="submit"
    disabled={disabled}
    {...props}
  >
    {loading ? (
      <span className="login-button__loading">Logging in...</span>
    ) : (
      <span className="login-button__text">{children}</span>
    )}
  </button>
);

export default LoginButton;

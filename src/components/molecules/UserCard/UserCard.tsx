import cx from "classnames";
import { useParams } from "react-router-dom";
import { FormItem } from "../../atoms";

import "./userCard.less";

type UserCardProps = {
  className?: string;
};

//TODO update
/**
 * Login form button
 * @param {boolean} disabled - disabled state
 * @param {React.ReactNode} children - children component
 * @param {Object} props - rest of the props
 * @returns {JSX.Element}
 */
const UserCard = ({ className }: UserCardProps) => {
  const { fullName = "" } = useParams<string>();
  const [firstName, lastName] = fullName.split(" ");

  return (
    <section className={cx("user-card", className)}>
      <FormItem label="First Name" value={firstName} id="firstName" />
      <FormItem label="Last Name" value={lastName} id="lastName" />
    </section>
  );
};

export default UserCard;

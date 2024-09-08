import cx from "classnames";
import { FormItem } from "../../atoms";

import "./userCard.less";

type UserCardProps = {
  className?: string;
  firstName?: string;
  lastName?: string;
};

/**
 * User card - displays main user info
 * @param {string} className - alternative css class name of the main container
 * @param {string} firstName - user first name
 * @param {string} lastName - user last name
 * @returns {JSX.Element}
 */
const UserCard = ({ className, firstName, lastName }: UserCardProps) => {
  return (
    <section className={cx("user-card", className)}>
      <FormItem label="First Name" value={firstName} id="firstName" />
      <FormItem label="Last Name" value={lastName} id="lastName" />
    </section>
  );
};

export default UserCard;

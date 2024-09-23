import cx from "classnames";
import { FormItem, FormItemProps } from "../../atoms";

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
  const formItems: FormItemProps[] = [
    { value: firstName, id: "firstName", label: "First Name" },
    { value: lastName, id: "lastName", label: "Last Name" },
  ];
  return (
    <section className={cx("user-card", className)}>
      {formItems.map(({ value, id, label }) => (
        <FormItem key={id} id={id} label={label} value={value} />
      ))}
    </section>
  );
};

export default UserCard;

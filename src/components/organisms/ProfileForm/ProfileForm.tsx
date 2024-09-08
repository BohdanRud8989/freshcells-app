import { useNavigate } from "react-router-dom";
import { UserCard } from "../../molecules";

import "./profileForm.less";

/**
 * Profile Form - Displays main info about logged in user
 * @returns {JSX.Element}
 */
const ProfileForm = () => {
  const navigate = useNavigate();

  const handleUserLogout = () => {
    // TODO refresh the token
    navigate("/");
  };

  return (
    <section className="profile-form">
      <UserCard />
      <button
        className="profile-form__logout-button"
        onClick={handleUserLogout}
      >
        <span className="profile-form__logout-button__text">Log out</span>
      </button>
    </section>
  );
};

export default ProfileForm;

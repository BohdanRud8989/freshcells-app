import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { UserCard } from "../../molecules";
import { GetUserQuery } from "../../../data";
import { JWT_TOKEN_KEY, USER_ID_QUERY_VAR } from "../../../utils";

import "./profileForm.less";

/**
 * Profile Form - Displays main info about logged in user
 * @returns {JSX.Element}
 */
const ProfileForm = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(GetUserQuery, {
    variables: {
      userId: USER_ID_QUERY_VAR,
    },
    context: {
      headers: {
        authorization: `Bearer ${sessionStorage.getItem(JWT_TOKEN_KEY)}`,
      },
    },
  });

  const handleUserLogout = () => {
    sessionStorage.removeItem(JWT_TOKEN_KEY);
    navigate("/");
  };

  if (loading) {
    return (
      <h1 className="profile-form__notification">
        Please wait, user data is being loaded...
      </h1>
    );
  }
  if (error) {
    return (
      <h1 className="profile-form__notification profile-form__notification--error">
        Failed to load user data: {error.message}
      </h1>
    );
  }

  return (
    <section className="profile-form">
      <UserCard
        firstName={data?.user.firstName}
        lastName={data?.user.lastName}
      />
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

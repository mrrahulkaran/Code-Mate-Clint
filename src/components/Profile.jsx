import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user: userData } = useSelector((store) => store.user);
  const navigate = useNavigate();
  if (!userData) {
    navigate("/login");
    return null;
  }

  return <div>{userData.firstName} s Profile</div>;
};

export default Profile;

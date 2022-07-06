import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {selectUser} from "../features/userSlice"


function IsUser(props) {
  const currentUser=useSelector(selectUser)
  const navigate = useNavigate();
  if (!currentUser) {

    navigate("/login");
  }

  return props.children;
}
export default IsUser;

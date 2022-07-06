import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {selectUser} from "../features/userSlice"

function IsAdmin(props) {
  const navigate = useNavigate();
  const currentUser=useSelector(selectUser)

  if (!currentUser || currentUser.uid !=="TO6H8ieUTaasShf9toInVH4kuD82") {
    navigate("/");
    
  }

  return props.children;
}
export default IsAdmin;
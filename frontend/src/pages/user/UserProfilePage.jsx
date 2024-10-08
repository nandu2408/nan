import UserProfilePageComponent from "./components/UserProfilePageComponent"

import axios from "axios"

import { useSelector, useDispatch  } from "react-redux";
import { setReduxUserState } from "../../redux/actions/UserAction"

const updateUserApiRequest = async(name, lastName, phoneNumber, address, country, zipCode, city, state, password) => {
  const { data } = await axios.put(
      '/api/users/profile',
      { name, lastName, phoneNumber, address, country, zipCode, city, state, password },
  )
  return data
}

const fetchUser = async (user_id) => {
const { data } = await axios.get("/api/users/profile/" + user_id);
return data;
}

const UserProfilePage = () => {
  const reduxDispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userRegisterLogin);

  return (


    <UserProfilePageComponent updateUserApiRequest={updateUserApiRequest} userInfoFromRedux={userInfo} fetchUser={fetchUser} reduxDispatch={reduxDispatch} setReduxUserState={setReduxUserState} localStorage={window.localStorage}
    sessionStorage={window.sessionStorage} />  )
  }
  
  export default UserProfilePage
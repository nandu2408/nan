import LoginPageComponent from "./components/LoginPageComponent";

import axios from "axios";

import { useDispatch } from "react-redux";
import { setReduxUserState } from "../redux/actions/UserAction";




const loginUserApiRequest = async (email, password, doNotLogout) => {
  const { data } = await axios.post("/api/users/login", { email, password, doNotLogout });
  if (data.userLoggedIn.doNotLogout) localStorage.setItem("userInfo", JSON.stringify(data.userLoggedIn));
  else sessionStorage.setItem("userInfo", JSON.stringify(data.userLoggedIn));
  console.log(data)
   return data;
}



const LoginPage= () => {
  const reduxDispatch = useDispatch();
  
  
  return (
    <LoginPageComponent loginUserApiRequest={loginUserApiRequest} setReduxUserState={setReduxUserState} reduxDispatch={reduxDispatch} />
  );
  }
  
  export default LoginPage
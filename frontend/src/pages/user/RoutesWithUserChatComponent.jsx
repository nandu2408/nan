import { Outlet } from "react-router-dom"
import UserChatComponent from "../../Component/user/UserChatComponent"

const RoutesWithUserChatComponent = () => {
  return(
    <>
    <UserChatComponent />
    <Outlet />
    </>
  )
}

export default RoutesWithUserChatComponent
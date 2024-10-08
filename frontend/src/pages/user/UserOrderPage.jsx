import UserOrdersPageComponent from "./components/UserOrdersPageComponent"
import axios from "axios";

const getOrders = async () => {
    const { data } = await axios.get("/api/orders");
    return data;
}

const UserOrderPage = () => {
  return (
    <UserOrdersPageComponent getOrders={getOrders} />
  )
   
  }
  
  export default UserOrderPage
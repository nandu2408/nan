import { BrowserRouter, Routes, Route } from "react-router-dom"





import HomePage from "./pages/HomePage"
import CartPage from "./pages/CartPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import ProductListPage from "./pages/ProductListPage"


import ProtectedRouteComponent from "./Component/ProtectedRouteComponent"


import UserOrderPage from "./pages/user/UserOrderPage"
import UserProfilePage from "./pages/user/UserProfilePage"
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage"
import UserCartDetailsPage from "./pages/user/UserCartDetailspage"


import AdminUsersPage from "./pages/admin/AdminUsersPage"
import AdminChatPage from "./pages/admin/AdminChatPage"
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage"
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage"
import AdminEDitProductPage from "./pages/admin/AdminEDitProductPage"
import AdminEditUserPage from "./pages/admin/AdminEditUserPage"
import AdminOrdersPage from "./pages/admin/AdminOrdersPage"
import AdminProductsPage from "./pages/admin/AdminProductsPage"
import AdminOrdersDetailsPage from "./pages/admin/AdminOrdersDetailsPage"


import HeaderComponent from "./Component/HeaderComponent"
import FooterComponent from "./Component/FooterComponent"




import RoutesWithUserChatComponent from "./pages/user/RoutesWithUserChatComponent"


import ScrollTop from "./utils/ScrollTop"




function App() {
  return (
    <BrowserRouter>
    <ScrollTop />
    <HeaderComponent />
    <Routes>


      <Route element={<RoutesWithUserChatComponent />}>
      <Route path="/home" element={<HomePage />}/>
      <Route path="/cart" element={<CartPage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/register" element={<RegisterPage />}/>
      
      <Route path="/productdetailspage/:id" element={<ProductDetailsPage />}/>
      <Route path="/productlistpage" element={<ProductListPage />}/>
      <Route path="/productlistpage/:pageNumParam" element={<ProductListPage />}/>
      
      <Route path="/productlistpage/category/:categoryName" element={<ProductListPage />}/>
      <Route path="/productlistpage/category/:categoryName/:pageNumParam" element={<ProductListPage />}/>
      <Route path="/productlistpage/category/:categoryName/search/:searchQuery" element={<ProductListPage />}/>
      <Route path="/productlistpage/category/:categoryName/search/:searchQuery/:pageNumParam" element={<ProductListPage />}/>
      <Route path="*" element="page not exists" />

      
      </Route>


      <Route element={<ProtectedRouteComponent admin={false} />}>


      
      <Route path="/user" element={<UserProfilePage />}/>
      <Route path="/user/order" element={<UserOrderPage />}/>
      <Route path="/user/orderdetails/:id" element={<UserOrderDetailsPage />}/>
      <Route path="/user/cartdetails" element={<UserCartDetailsPage />}/>

      
      





      
      
      </Route>



      


      <Route element={<ProtectedRouteComponent admin={true} />}>


      
      <Route path="/admin/users" element={<AdminUsersPage />}/>
      <Route path="/admin/products" element={<AdminProductsPage />}/>
      <Route path="/admin/ordersdetails/:id" element={<AdminOrdersDetailsPage />}/>
      <Route path="/admin/orders" element={<AdminOrdersPage />}/>
      <Route path="/admin/analytics" element={<AdminAnalyticsPage />}/>
      <Route path="/admin/chat" element={<AdminChatPage />}/>
      <Route path="/admin/editusers/:id" element={<AdminEditUserPage />}/>
      <Route path="/admin/editproducts/:id" element={<AdminEDitProductPage />}/>
      <Route path="/admin/createproducts" element={<AdminCreateProductPage />}/>
      
      
      </Route>


      



    </Routes>
    <FooterComponent />
    </BrowserRouter>

    
  )
}

export default App

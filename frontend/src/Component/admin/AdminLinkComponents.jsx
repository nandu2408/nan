import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../../redux/actions/UserAction";
import { useDispatch } from "react-redux";

const AdminLinkComponents = () => {
  const dispatch=useDispatch()
  return (
    <Navbar bg="light" variant="light">
      <Nav className="flex-column">
        <LinkContainer to="/admin/orders">
          <Nav.Link>Orders</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/products">
          <Nav.Link>Products</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/users">
          <Nav.Link>Users</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/chat">
          <Nav.Link>Chats</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/analytics">
          <Nav.Link>Analytics</Nav.Link>
        </LinkContainer>
        <Nav.Link onClick={()=>dispatch(logout())}>Logout</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default AdminLinkComponents
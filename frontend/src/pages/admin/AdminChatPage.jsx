import AdminLinkComponents from "../../Component/admin/AdminLinkComponents"
import AdminChatRoomComponent from "../../Component/admin/AdminChatRoomComponent"
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const AdminChatPage = () => {
  const { chatRooms,socket } = useSelector((state) => state.adminChat);
  
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinkComponents />
      </Col>
      <Col md={10}>
        <Row>
        {Object.entries(chatRooms).map((chatRoom, index) => (
            <AdminChatRoomComponent key={index} chatRoom={chatRoom} roomIndex={index + 1} socket={socket} socketUser={chatRoom[0]} />
          ))}
        </Row>
      </Col>
    </Row>
  );
  
}

export default AdminChatPage
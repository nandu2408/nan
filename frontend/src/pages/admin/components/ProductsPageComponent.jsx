import { Row, Col, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinkComponents from "../../../Component/admin/AdminLinkComponents";

import { useState, useEffect } from "react";

  import { logout } from "../../../redux/actions/UserAction";
  import { useDispatch } from "react-redux";


const ProductsPageComponent = ({ fetchProducts, deleteProduct }) => {
    const [products, setProducts] = useState([]);
    const [productDeleted, setProductDeleted] = useState(false); 
    
      const dispatch=useDispatch()
 
   const deleteHandler = async (productId) => {
     if (window.confirm("Are you sure?")) {
         const data = await deleteProduct(productId)
         if (data.message === "product removed") {
             setProductDeleted(!productDeleted);
         }
     }
   };
   

   useEffect(() => {
    const abctrl = new AbortController();
    fetchProducts(abctrl).then((res) => setProducts(res)).catch((er) => 
        dispatch(logout())
        // setProducts([
            //{name: er.response.data.message ? er.response.data.message : er.response.data}
        //console.log(er)
//])
) 
return () => abctrl.abort();
}, [productDeleted])
  
    return (
      <Row className="m-5">
        <Col md={2}>
          <AdminLinkComponents />
        </Col>
        <Col md={10}>
          <h1>
            Product List{" "}
            <LinkContainer to="/admin/createproducts">
              <Button variant="primary" size="lg">
                Create new
              </Button>
            </LinkContainer>
          </h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>
                    <LinkContainer to={`/admin/editproducts/${item._id}`}>
                      <Button className="btn-sm">
                        <i className="bi bi-pencil-square"></i>
                      </Button>
                    </LinkContainer>
                    {" / "}
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(item._id)}
                    >
                      <i className="bi bi-x-circle"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    );
}

export default ProductsPageComponent
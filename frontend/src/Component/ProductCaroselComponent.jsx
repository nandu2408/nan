import { Carousel } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap";


const ProductCaroselComponent = ({ bestsellers }) => {
    const cursorP = {
        cursor: "pointer",
      };
      return bestsellers.length > 0 ? (
        <Carousel>
          {bestsellers.map((item, idx) => (
            <Carousel.Item key={idx}>
              <img
                crossOrigin="anonymous"
                className="d-block w-100"
                style={{ height: "300px", objectFit: "cover" }}
                src={item.images ? item.images[0].path : null}
                alt="First slide"
              />
              <Carousel.Caption>
                <LinkContainer style={cursorP} to={`/productdetailspage/${item._id}`}>
                  <h3>Bestseller in {item.category} Category</h3>
                </LinkContainer>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : null;
    }
 
         

export default ProductCaroselComponent
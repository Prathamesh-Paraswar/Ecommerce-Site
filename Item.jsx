import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Card, Row, Col } from "react-bootstrap";
function Item(props) {
  const [cart, setCart] = useState([]);
  return (
    <>
    <Header />
    <Row xs={1} md={3} className="g-4">
      {props.products.map((item) => (
        <Col>
          <Card>
            <img src={item.Image} alt={item.Name}></img>
            <Card.Body>
              <Card.Title>{item.Name}</Card.Title>
              <Card.Text>{`Rating: ${item.Rating}`}</Card.Text>
              <button
                onClick={() => {
                  props.onSelect(item.id);
                }}
                className="btn btn-primary"
                value={item.id}
              >
                Add To Cart
              </button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    <Footer />
    </>
  );
}
export default Item;

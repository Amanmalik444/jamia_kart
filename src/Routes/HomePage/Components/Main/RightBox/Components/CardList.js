import * as React from "react";
import Card from "./Card";
// import product from './Array.js'
import { Col, Row } from "reactstrap";
import axios from "axios";
import PlaceHolder from "../../../../../../Components/PlaceHolder";

const CardList = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data));
  }, []);

  if (!products.length) return <PlaceHolder />;

  return (
    <Row
      data-aos="zoom-in-left"
      style={{ marginTop: "18vh", paddingBottom:"30px" }}
      className="display-flex justify-content-center"
    >
      {products.map((product, i) => {
        return (
          <Col md="3" sm="3">
            <Card
              key={i}
              id={product.id}
              price={product.price}
              name={product.title}
              imgTag={product.image}
              category={product.category}
              description={product.description}
            />
          </Col>
        );
      })}
    </Row>
  );
};
export default CardList;

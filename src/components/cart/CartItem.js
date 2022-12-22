import React from "react";
import classes from "./CartItem.module.css";
import { Row, Col, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li>
      <Container>
        <Row>
          <Col>
            <Table responsive="sm">
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
              </tr>

              <tbody>
                <tr>
                  <td>
                    <img src={props.imageUrl} width="20%" />
                    <h4>{props.title}</h4>
                  </td>
                  <td>
                    <span className={classes.price}>{price}</span>
                  </td>

                  <td>
                    <span className={classes.amount}>x {props.amount}</span>
                  </td>
                  <td>
                  <Button variant="danger">Remove</Button>

                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </li>
  );
};

export default CartItem;

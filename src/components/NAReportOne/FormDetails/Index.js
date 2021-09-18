import React, { useState } from "react";
import styles from "./FormDetails.module.css";
import { Container, Row, Col, Form } from "react-bootstrap";

const Index = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    address: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`${data.fullname}&${data.phone}&${data.address}`);
  };

  return (
    <>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={3}>
            <Form onSubmit={formSubmit} className={styles.form}>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  className={styles.formControl}
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  required
                  placeholder="Invictus Innocent"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Phone No*</Form.Label>
                <Form.Control
                  type="text"
                  className={styles.formControl}
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  required
                  placeholder="Enter Phone No"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address*</Form.Label>
                <Form.Control
                  type="text"
                  className={styles.formControl}
                  className={styles.formControl}
                  name="address"
                  value={data.address}
                  onChange={InputEvent}
                  required
                  placeholder="Please enter address"
                />
              </Form.Group>
              <div className={styles.textCenterv2}>
                <button type="submit" className={styles.btn}>
                  Proceed
                </button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;

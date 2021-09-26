import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import styles from "./SecondSlide.module.css";

const SecondSlide = (props) => {
  const InputEvent = (event) => {
    const { name, value } = event.target;

    props.setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `${props.data.fullAddress}&${props.data.neighbourName}&${props.data.landmark}&${props.data.cityOrTown}&${props.data.district}&${props.data.policeStation}&${props.data.state}&${props.data.pin}`
    );
    console.log(
      `${props.data.fullAddress}&${props.data.neighbourName}&${props.data.landmark}&${props.data.cityOrTown}&${props.data.district}&${props.data.policeStation}&${props.data.state}&${props.data.pin}`
    );
  };

  return (
    <>
      <div className={styles.fullWidth}>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md={6}>
              <Form onSubmit={formSubmit} className="text-start">
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column md="6">
                    Full Address
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      type="text"
                      name="fullAddress"
                      value={props.data.fullAddress}
                      onChange={InputEvent}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    Neighbourhood Name
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      type="text"
                      name="neighbourName"
                      value={props.data.neighbourName}
                      onChange={InputEvent}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    Landmark
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      type="text"
                      name="landmark"
                      value={props.data.landmark}
                      onChange={InputEvent}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    City/Town
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      type="text"
                      name="cityOrTown"
                      value={props.data.cityOrTown}
                      onChange={InputEvent}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    District
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      type="text"
                      name="district"
                      value={props.data.district}
                      onChange={InputEvent}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    Police Station/P.O
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      type="text"
                      name="policeStation"
                      value={props.data.policeStation}
                      onChange={InputEvent}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    State
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      type="text"
                      name="state"
                      value={props.data.state}
                      onChange={InputEvent}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    PIN
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      type="text"
                      name="pin"
                      value={props.data.pin}
                      onChange={InputEvent}
                    />
                  </Col>
                </Form.Group>

                <div className={styles.textCenterv2}>
                  <button
                    className={styles.btn}
                    onClick={() => props.updateStep(props.currentStep - 1)}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className={styles.btn}
                    onClick={() => props.updateStep(props.currentStep + 1)}
                  >
                    Save & Next
                  </button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SecondSlide;

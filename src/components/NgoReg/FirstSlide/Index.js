import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import styles from "./FirstSlide.module.css";

const FirstSlide = (props) => {
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
      `${props.data.applicantOrganaization}&${props.data.headOfOrganaization}&${props.data.panNumber}&${props.data.gender}&${props.data.emailID}&${props.data.phone}&${props.data.Password}`
    );
    e.preventDefault();
    console.log(
      `${props.data.applicantOrganaization}&${props.data.headOfOrganaization}&${props.data.panNumber}&${props.data.gender}&${props.data.emailID}&${props.data.phone}&${props.data.Password}`
    );
  };
  return (
    <>
      <div className={styles.fullWidth}>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md={6}>
              <Form onSubmit={formSubmit} className="text-start">
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    Name of the Applicant Organization
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      type="text"
                      name="applicantOrganaization"
                      value={props.data.applicantOrganaization}
                      onChange={InputEvent}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    Name of the Head of the Organisation
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      type="text"
                      name="headOfOrganaization"
                      value={props.data.headOfOrganaization}
                      onChange={InputEvent}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    PAN Number of Applicant Organization
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      type="text"
                      name="panNumber"
                      value={props.data.panNumber}
                      onChange={InputEvent}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    Gender
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      type="text"
                      name="gender"
                      value={props.data.gender}
                      onChange={InputEvent}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    Email ID
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      type="email"
                      name="emailID"
                      value={props.data.emailID}
                      onChange={InputEvent}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    Phone No.
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      type="text"
                      name="phone"
                      value={props.data.phone}
                      onChange={InputEvent}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    Password
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      type="password"
                      name="Password"
                      value={props.data.Password}
                      onChange={InputEvent}
                    />
                  </Col>
                </Form.Group>

                <div className={styles.textCenterv2}>
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

export default FirstSlide;

import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import styles from "./ThirdSlide.module.css";
const ThirdSlide = (props) => {
  const [data, setData] = useState({
    bankAccNumber: "",
    accountType: "",
    ifsc: "",
    bankName: "",
    bankBranch: "",
    mobileNumber: "",
    emailId: "",
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
    alert(
      `${data.bankAccNumber}&${data.accountType}&${data.ifsc}&${data.bankName}&${data.bankBranch}&${data.mobileNumber}&${data.emailId}&$&$&$&$&`
    );
    console.log(
      `${data.bankAccNumber}&${data.accountType}&${data.ifsc}&${data.bankName}&${data.bankBranch}&${data.mobileNumber}&${data.emailId}&$&$&$&$&`
    );
  };

  return (
    <>
      <div className={styles.fullWidth}>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md={6}>
              <Form onSubmit={formSubmit} className="text-start">
                <Form.Group as={Row} className="mb-3" controlId="formPlainText">
                  <Form.Label column md="6">
                    Bank Account Number
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      type="text"
                      name="bankAccNumber"
                      value={data.bankAccNumber}
                      onChange={InputEvent}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    Account type
                  </Form.Label>
                  <Col md="6">
                    <Form.Select
                      className={styles.formControl}
                      defaultValue="Select"
                      name="accountType"
                      value={data.accountType}
                      onChange={InputEvent}
                    >
                      <option>Select</option>
                      <option>...</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    IFSC
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      type="text"
                      name="ifsc"
                      value={data.ifsc}
                      onChange={InputEvent}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    Bank Name
                  </Form.Label>
                  <Col md="6">
                    <Form.Select
                      className={styles.formControl}
                      defaultValue="Select"
                      name="bankName"
                      value={data.bankName}
                      onChange={InputEvent}
                    >
                      <option>Select</option>
                      <option>...</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    Bank Branch
                  </Form.Label>
                  <Col md="6">
                    <Form.Select
                      className={styles.formControl}
                      defaultValue="Select"
                      type="text"
                      name="bankBranch"
                      value={data.bankBranch}
                      onChange={InputEvent}
                    >
                      <option>Select</option>
                      <option>...</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-2" controlId="formPlaintext">
                  <Form.Label column md="6">
                    Mobile Number
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      type="tel"
                      name="mobileNumber"
                      value={data.mobileNumber}
                      onChange={InputEvent}
                    />
                    <h5 className={styles.notationText}>
                      Please provide mobile number linked with the bank account
                    </h5>
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
                      name="emailId"
                      value={data.emailId}
                      onChange={InputEvent}
                    />
                    <h5 className={styles.notationText}>
                      Please provide Email ID linked with the bank account
                    </h5>
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

export default ThirdSlide;

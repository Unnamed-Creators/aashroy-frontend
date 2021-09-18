import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import styles from "./FourthSlide.module.css";

const FourthSlide = (props) => {
  const [data, setData] = useState({
    identityProof: "",
    uploadFile: "",
    addressProof: "",
    addressProofUploadFile: "",
    passport: "",
    regOfficeAddressProof: "",
    cancelledCheque: "",
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
      `${data.identityProof}&${data.uploadFile}&${data.addressProof}&${data.addressProofUploadFile}&${data.passport}&${data.regOfficeAddressProof}&${data.cancelledCheque}`
    );
    console.log(
      `${data.identityProof}&${data.uploadFile}&${data.addressProof}&${data.addressProofUploadFile}&${data.passport}&${data.regOfficeAddressProof}&${data.cancelledCheque}`
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
                    Identity Proof
                  </Form.Label>
                  <Col md="6">
                    <Form.Select
                      className={styles.formControl}
                      defaultValue="Select"
                      name="identityProof"
                      value={data.identityProof}
                      onChange={InputEvent}
                    >
                      <option>Select</option>
                      <option>...</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    Upload file
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      type="file"
                      name="uploadFile"
                      value={data.uploadFile}
                      onChange={InputEvent}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    Address Proof
                  </Form.Label>
                  <Col md="6">
                    <Form.Select
                      className={styles.formControl}
                      defaultValue="Select"
                      name="addressProof"
                      value={data.addressProof}
                      onChange={InputEvent}
                    >
                      <option>Select</option>
                      <option>...</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    Upload file
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      type="file"
                      name="addressProofUploadFile"
                      value={data.addressProofUploadFile}
                      onChange={InputEvent}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    Passport
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      type="file"
                      name="passport"
                      value={data.passport}
                      onChange={InputEvent}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    Registered Office Address Proof
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      type="file"
                      name="regOfficeAddressProof"
                      value={data.regOfficeAddressProof}
                      onChange={InputEvent}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    Cancelled cheque
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      type="file"
                      name="cancelledCheque"
                      value={data.cancelledCheque}
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

export default FourthSlide;

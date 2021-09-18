import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import styles from "./SecondSlide.module.css";

const SecondSlide = (props) => {
  const [data, setData] = useState({
    suspectDetails: "",
    nearbyNGO: "",
    photoOfSuspect: "",
    otherInfoOrDetails: "",
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
      `${data.suspectDetails}&${data.nearbyNGO}&${data.photoOfSuspect}&${data.otherInfoOrDetails}`
    );
    console.log(
      `${data.suspectDetails}&${data.nearbyNGO}&${data.photoOfSuspect}&${data.otherInfoOrDetails}`
    );
  };
  return (
    <>
      <div className={styles.fullWidth}>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md={6}>
              <Form onSubmit={formSubmit} className="text-start">
                <div className={styles.Infobox}>
                  <h3 className={styles.blueText}>Suspect Details</h3>
                  <h5 className={styles.notationText}>
                    Please share the deatils of the suspects.Any information
                    provided will be kept confidential and may help during
                    investigation.
                  </h5>
                </div>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column md="6">
                    Suspect Name
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      type="text"
                      placeholder="name"
                      name="suspectDetails"
                      value={data.suspectDetails}
                      onChange={InputEvent}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    Nearby NGO
                  </Form.Label>

                  <Col md="6">
                    <Form.Select
                      className={styles.formControl}
                      defaultValue="Select"
                      name="nearbyNGO"
                      value={data.nearbyNGO}
                      onChange={InputEvent}
                      required
                    >
                      <option>Select</option>
                      <option>Meghalaya</option>
                      <option>Assam</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    Photograph of suspect
                    <span className="d-block">(if any)</span>
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      type="file"
                      name="photoOfSuspect"
                      value={data.photoOfSuspect}
                      onChange={InputEvent}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    Any other informations/details
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      as="textarea"
                      rows={3}
                      name="otherInfoOrDetails"
                      value={data.otherInfoOrDetails}
                      onChange={InputEvent}
                      required
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
                  <button className={styles.btn2}>Reset</button>
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

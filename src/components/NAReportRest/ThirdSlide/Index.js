import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import styles from "./ThirdSlide.module.css";

const ThirdSlide = (props) => {
  const [data, setData] = useState({
    categoryOfCrime: "",
    approDate: "",
    stateOrUts: "",
    district: "",
    policeStation: "",
    additionalInfo: "",
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
      `${data.categoryOfCrime}&${data.approDate}&${data.stateOrUts}&${data.district}&${data.policeStation}&${data.additionalInfo}&$&$&`
    );
  };
  return (
    <>
      <div className={styles.fullWidth}>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md={6} className="">
              <div className={styles.designedDiv}>
                <Col className="d-flex justify-content-center py-4 my-2">
                  <Form onSubmit={formSubmit} className={styles.form}>
                    <div className={styles.Infobox}>
                      <h3 className={styles.blueText}>
                        Complaint/Incident details
                      </h3>
                    </div>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintext"
                    >
                      <Form.Label column md="6">
                        Catagory of crime
                      </Form.Label>
                      <Col md="6">
                        <Form.Control
                          className={styles.formControl}
                          type="text"
                          name="categoryOfCrime"
                          value={data.categoryOfCrime}
                          onChange={InputEvent}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formDate">
                      <Form.Label column md="6">
                        Apporximate date & time of incident/crime
                      </Form.Label>
                      <Col md="6">
                        <Form.Control
                          className={styles.formControl}
                          type="date"
                          name="approDate"
                          value={data.approDate}
                          onChange={InputEvent}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintext"
                    >
                      <Form.Label column md="6">
                        State/Uts
                      </Form.Label>
                      <Col md="6">
                        <Form.Control
                          className={styles.formControl}
                          type="text"
                          name="stateOrUts"
                          value={data.stateOrUts}
                          onChange={InputEvent}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintext"
                    >
                      <Form.Label column md="6">
                        District
                      </Form.Label>
                      <Col md="6">
                        <Form.Control
                          className={styles.formControl}
                          type="text"
                          name="district"
                          value={data.district}
                          onChange={InputEvent}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintext"
                    >
                      <Form.Label column md="6">
                        Police Station
                      </Form.Label>
                      <Col md="6">
                        <Form.Control
                          className={styles.formControl}
                          type="text"
                          name="policeStation"
                          value={data.policeStation}
                          onChange={InputEvent}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintext"
                    >
                      <Form.Label column md="6">
                        Please provide any additional information about the
                        crime/incident
                      </Form.Label>
                      <Col md="6">
                        <Form.Control
                          className={styles.formControl}
                          as="textarea"
                          rows={3}
                          name="additionalInfo"
                          value={data.additionalInfo}
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
                        Submit
                      </button>
                    </div>
                  </Form>
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ThirdSlide;

import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import styles from "./FirstSlide.module.css";

const FirstSlide = (props) => {
  const [data, setData] = useState({
    categoryOfCrime: "",
    appDate: "",
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
    console.log(
      `${data.categoryOfCrime}&${data.appDate}&${data.stateOrUts}&${data.district}&${data.policeStation}&${data.additionalInfo}`
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
                    Catagory of crime
                  </Form.Label>

                  <Col md="6">
                    <Form.Select
                      className={styles.formControl}
                      defaultValue="Select"
                      type="dropdown"
                      name="categoryOfCrime"
                      value={data.categoryOfCrime}
                      onChange={InputEvent}
                      required
                    >
                      <option>Select</option>
                      <option>Violence</option>
                      <option>Sexual Abuse</option>
                      <option>Racism</option>
                      <option>Others</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <div className={styles.Infobox}>
                  <h3 className={styles.blueText}>
                    Complaint/Incident details
                  </h3>
                </div>
                <Form.Group as={Row} className="mb-3" controlId="formDate">
                  <Form.Label column md="6">
                    Apporximate date & time of incident/crime
                  </Form.Label>
                  <Col md="6">
                    <Form.Control
                      className={styles.formControl}
                      type="date"
                      name="appDate"
                      value={data.appDate}
                      onChange={InputEvent}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    State/Uts
                  </Form.Label>

                  <Col md="6">
                    <Form.Select
                      className={styles.formControl}
                      defaultValue="Select"
                      type="dropdown"
                      name="stateOrUts"
                      value={data.stateOrUts}
                      onChange={InputEvent}
                      required
                    >
                      <option>Select</option>
                      <option>Meghalaya</option>
                      <option>Assam</option>
                      <option>Bihar</option>
                      <option>West Bengal</option>
                      <option>Uttar Pradesh</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    District
                  </Form.Label>

                  <Col md="6">
                    <Form.Select
                      className={styles.formControl}
                      defaultValue="Select"
                      type="dropdown"
                      name="district"
                      value={data.district}
                      onChange={InputEvent}
                      required
                    >
                      <option>Select</option>
                      <option>Dhemaji</option>
                      <option>Lakhimpur</option>
                      <option>Mongoldoi</option>
                      <option>Barpeta</option>
                      <option>Kamrup(M)</option>
                      <option>Jorhat</option>
                      <option>Dibrugarh</option>
                      <option>Dhubri</option>
                      <option>Nagaon</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                  <Form.Label column md="6">
                    Police Station
                  </Form.Label>

                  <Col md="6">
                    <Form.Select
                      className={styles.formControl}
                      defaultValue="Select"
                      type="dropdown"
                      name="policeStation"
                      value={data.policeStation}
                      onChange={InputEvent}
                      required
                    >
                      <option>Select</option>
                      <option>Kadambar P.O</option>
                      <option>Borpothar P.O</option>
                      <option>Gogamukh P.O</option>
                      <option>Simen Sapori P.O</option>
                    </Form.Select>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
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
                      required
                    />
                    <h5 className={styles.notationText}>
                      Please insert additional information about the complaint.
                    </h5>
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

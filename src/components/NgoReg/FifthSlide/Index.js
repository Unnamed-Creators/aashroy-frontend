import React, { useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./FifthSlide.module.css";
import axios from "../../../helper/axiosinstance";
const FifthSlide = (props) => {
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
      `$${props.data.applicantOrg}&${props.data.headOfOrg}&${props.data.panOfApplicantOrg}&${props.data.gender}&${props.data.emailId}&${props.data.phoneNo}`
    );
    console.log(
      `$${props.data.applicantOrg}&${props.data.headOfOrg}&${props.data.panOfApplicantOrg}&${props.data.gender}&${props.data.emailId}&${props.data.phoneNo}`
    );
  };
  async function postHandler() {
    try {
      const res = await axios.post("/ngo/register", JSON.stringify(props.data));
    } catch {
      console.log("lalalalalalalala");
    }
  }

  return (
    <>
      <div className={styles.fullWidth}>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md={6} className="">
              <div className={styles.designedDiv}>
                <Col className="d-flex justify-content-center py-4">
                  <Form onSubmit={formSubmit} className="text-start">
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintext"
                    >
                      <Form.Label column md="6">
                        Name of the Applicant Organization
                      </Form.Label>
                      <Col md="6">
                        <Form.Control
                          className={styles.formControl}
                          type="text"
                          name="applicantOrg"
                          value={props.data.applicantOrg}
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
                        Name of the Head of the Organisation
                      </Form.Label>
                      <Col md="6">
                        <Form.Control
                          className={styles.formControl}
                          type="text"
                          name="headOfOrg"
                          value={props.data.headOfOrg}
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
                        PAN Number of Applicant Organization
                      </Form.Label>
                      <Col md="6">
                        <Form.Control
                          className={styles.formControl}
                          type="text"
                          name="panOfApplicantOrg"
                          value={props.data.panOfApplicantOrg}
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
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintext"
                    >
                      <Form.Label column md="6">
                        Email ID
                      </Form.Label>
                      <Col md="6">
                        <Form.Control
                          className={styles.formControl}
                          type="email"
                          name="emailId"
                          value={props.data.emailId}
                          onChange={InputEvent}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="" controlId="formPlaintext">
                      <Form.Label column md="6">
                        Phone No.
                      </Form.Label>
                      <Col md="6">
                        <Form.Control
                          className={styles.formControl}
                          type="text"
                          name="phoneNo"
                          value={props.data.phoneNo}
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
                      <Link to="/ngo">
                        <button
                          type="submit"
                          className={styles.btn}
                          onClick={() => postHandler()}
                        >
                          Submit
                        </button>
                      </Link>
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

export default FifthSlide;

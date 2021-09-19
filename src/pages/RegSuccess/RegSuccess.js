import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import styles from "./RegSuccess.module.css";
import Animation from "../../components/RegSuccess/Animation/Animation";
import Details from "../../components/RegSuccess/Details/Index"
const RegSuccess = () => {
  return (
    <>
      <div className={styles.fullWidth}>
        <Container fluid>
          <Row className="justify-content-md-center text-center">
            <Col md={6}>
              <Details />  
              <Animation />
              <button
                  className={styles.btn}
                >
                  Return to Homepage
                </button>

            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default RegSuccess;

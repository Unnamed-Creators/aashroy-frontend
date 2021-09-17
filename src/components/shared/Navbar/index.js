import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles.module.css";
const Appbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="#home" className={styles.aashroy}>
              AASHROY
            </Navbar.Brand>
            <Nav className={styles.meAuto}>
              <Nav.Link href="#home" className={styles.navLink}>
                Home
              </Nav.Link>
              <Nav.Link href="#features" className={styles.navLink}>
                User
              </Nav.Link>
              <Nav.Link href="#pricing" className={styles.navLink}>
                Donation
              </Nav.Link>
              <Nav.Link href="#pricing" className={styles.navLink}>
                Crime
              </Nav.Link>
              <Nav.Link href="#pricing" className={styles.navLink}>
                NGO
              </Nav.Link>
              <Nav.Link href="#pricing" className={styles.navLink}>
                Admin
              </Nav.Link>
              <Nav.Link href="#pricing" className={styles.navLink}>
                <Button
                  variant="outline-primary"
                  size="sm"
                  className={styles.bttn}
                >
                  Log In
                </Button>{" "}
              </Nav.Link>
              <Nav.Link href="#pricing" className={styles.navLink}>
                <Button variant="info" size="sm" className={styles.bttn}>
                  SignUp
                </Button>{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Appbar;

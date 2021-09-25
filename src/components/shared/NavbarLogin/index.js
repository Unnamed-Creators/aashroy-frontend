import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles.module.css";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import styled from "styled-components";
import CustomizedDialogs from "../../LogInDialog";

const Appbar = () => {
  return (
    <div>
      <Navbar
        className={styles.resize}
        collapseOnSelect
        expand="md"
        style={{ backgroundColor: "#ebe6e6" }}
        variant="light"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="/" className={styles.aashroy}>
              AASHROY
            </Navbar.Brand>
            <Nav className={styles.meAuto}>
              <Nav.Link href="/" className={styles.navLink}>
                Home
              </Nav.Link>
              <Nav.Link href="/loginUser" className={styles.navLink}>
                User
              </Nav.Link>
              <Nav.Link href="/donation" className={styles.navLink}>
                Donation
              </Nav.Link>
              <Nav.Link href="/crimereporting" className={styles.navLink}>
                Crime
              </Nav.Link>
              <Nav.Link href="/loginNGO" className={styles.navLink}>
                NGO
              </Nav.Link>
              <Nav.Link href="/loginAdmin" className={styles.navLink}>
                Admin
              </Nav.Link>
              <Nav.Link href="/" className={styles.navLink}>
                <Button
                  variant="outline-primary"
                  size="sm"
                  className={styles.bttn}
                >
                  Log Out
                </Button>
                <CustomAccountIcon />
                {/* <CustomizedDialogs/> */}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Appbar;

const CustomAccountIcon = styled(AccountCircleRoundedIcon)`
  margin-left: 20px;
  color: #0d6efd;
  font-size: 2rem !important;
`;

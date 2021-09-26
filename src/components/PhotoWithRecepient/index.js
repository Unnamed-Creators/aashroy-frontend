import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Upload from "../File_upload";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding: 2rem 0 3.8rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f5f7;
`;
const Text = styled.div`
  margin-bottom: 20px;
  font-size: 1.6rem;
  color: #383874;
  font-weight: 500;
  text-align: center;
`;
const UploadDiv = styled.div`
  height: 300px;
  width: 450px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  @media only screen and (max-width: 400px) {
    height: 198px;
    width: 322px;
  }
`;
const ButtonGrp = styled.div`
  margin-top: 20px;
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  button {
    background: linear-gradient(270deg, #02a4ff 0%, #7d40ff 162.75%);
    box-shadow: 0px 7px 30px 10px rgba(134, 118, 255, 0.2);
    border-radius: 5px;
    border: none;
    outline: none;
    color: #fff;
    padding: 7px 20px;
  }
  @media only screen and (max-width: 400px) {
    width: 71%;
  }
`;

const PhotoRecepient = () => {
  return (
    <Container>
      <Text>Upload a photo with the recipient</Text>
      <UploadDiv>
        <Upload />
      </UploadDiv>
      <ButtonGrp>
        <Link to="/chooseRecipient" style={{ textDecoration: "none" }}>
          <button>Go Back</button>
        </Link>
        <Link to="/success" style={{ textDecoration: "none" }}>
          <button>Submit</button>
        </Link>
      </ButtonGrp>
    </Container>
  );
};

export default PhotoRecepient;

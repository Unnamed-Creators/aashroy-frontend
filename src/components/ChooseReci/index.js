import React from "react";
import styled from "styled-components";
import Card from "../ChooseResCard";
import image1 from "./homeless1.jpg";
import image2 from "./homeless2.jpg";
import image3 from "./homeless3.jpg";
import image4 from "./homeless4.webp";
import image5 from "./homeless5.jpg";
import image6 from "./homeless6.jpg";

const ChooseReci = () => {
  return (
    <Container>
      <Text>Choose a Recipient</Text>
      <Wrapper>
        <Card name="Anonymous" location="Bhangagarh" img={image1} />
        <Card name="Lakhan Kumar" location="Noonmati" img={image2} />
        <Card name="Anonymous" location="Kahilipara" img={image3} />
        <Card name="Anonymous" location="Bhangagarh" img={image4} />
        <Card name="Hiren Boro" location="Guwahati Club" img={image5} />
        <Card name="Anonymous" location="Narengi" img={image6} />
      </Wrapper>
    </Container>
  );
};

export default ChooseReci;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f5f7;
  flex-direction: column;
  height: 100vh;
`;

const Text = styled.div`
  font-size: 1.3rem;
  margin-bottom: 20px;
  margin-top: 3rem;
  color: #383874;
`;

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 400px) {
    width: 88%;
  }
`;

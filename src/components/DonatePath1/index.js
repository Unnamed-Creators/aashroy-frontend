import React from "react";
import DonateCard from "../donateUiPathCompo";
import styled from 'styled-components'
import userImg from './img/Vector.svg'
import wallet from './img/Vector (1).svg'
import { Link } from "react-router-dom";


const index = () => {
  return (
    <>
    <Container>
    <Heading>Select Payment Procedure</Heading>
      <Wrapper>
      <Link to ='chooseRecipient'>
        <DonateCard img={userImg} text='Donate Physically' />
       </Link>
       <Link to ='donatePath2'>
        <DonateCard img={wallet} text='Donate Online'/>
        </Link>
      </Wrapper>
      </Container>
    </>
  );
};

export default index;

const Wrapper = styled.div ` 
 display: flex;
 width: 50%;
 justify-content: space-between;
 align-items: center;
 a{
 text-decoration: none;
 }
 @media only screen and (max-width:1130px){
     flex-direction: column;
 }
`
const Container = styled.div ` 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 90vh;
`
const Heading = styled.div ` 
margin-bottom: 60px;
font-size: 1.8rem;
color: #383874;

`
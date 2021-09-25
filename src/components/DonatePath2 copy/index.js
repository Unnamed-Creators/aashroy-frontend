import React from "react";
import DonateCard from "../donateUiPathCompo";
import styled from 'styled-components'
import upi from './img/upi-ar21 1.svg'
import wallet from './img/Vector (1).svg'


const index = () => {
  return (
    <>
    <Container>
    <Heading>Select Payment Procedure</Heading>
      <Wrapper>
        <DonateCard img={upi} text='Pay through UPI' />
        <DonateCard img={wallet} text='Pay through Debit Card'/>
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
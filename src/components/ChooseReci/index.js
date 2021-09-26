import React from 'react'
import styled from 'styled-components'
import Card from '../ChooseResCard'

const ChooseReci = () => {
    return (
        <Container>
            <Text>Choose a Recipient</Text>
            <Wrapper>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Wrapper>
        </Container>
    )
}

export default ChooseReci

const Container=styled.div ` 
display: flex;
justify-content: center;
align-items: center;
background-color: #F2F5F7;
flex-direction: column;
height: 100vh;
`

const Text=styled.div ` 
font-size: 2rem;
margin-bottom: 20px;
color: #383874;
`

const Wrapper=styled.div ` 
width: 70%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
@media (max-width:400px){
    width: 88%;
}
`
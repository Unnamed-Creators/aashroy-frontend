import React from 'react'
import styled from 'styled-components'
import tick from './img/tick.svg'

const Submit = () => {
    return (
        <Container>
        <Text>
            <h1>Submitted Successsfully</h1>
            <p>Thank you for your valuable time</p>
        </Text>
        <Icon>
            <img src={tick} alt="" />
        </Icon>
        <Button>Return to NGO Portal</Button>
        </Container>
    )
}

export default Submit

const Container = styled.div ` 
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
`
const Text = styled.div ` 
h1{
    color: #383874;
}
p{
    color: #828282;
}
`
const Icon = styled.div ` 
img{
    width: 150px;
}
padding: 25px;
`
const Button = styled.button `
    background: linear-gradient(270deg, #02A4FF 0%, #7D40FF 162.75%);
box-shadow: 0px 7px 30px 10px rgba(134, 118, 255, 0.2);
border-radius: 5px;
border: none;
outline: none;
color: #fff;
padding: 7px 20px;

`
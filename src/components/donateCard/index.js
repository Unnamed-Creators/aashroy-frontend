import React from 'react'
import styled from 'styled-components'
import img from './DELHI.jpg'
import Dialog from '../DonateDialog'
import { Link } from 'react-router-dom'

const Card = () => {
    return (
        <>
            <Wrap>
            <Content>
                <Image src={img}/>
                <Overlay className="overlay">
                    {/* <Button2>See Details</Button2> */}
                <Dialog/>
                </Overlay>
                </Content>
                <Button> <Link to='donatePath1'>Donate</Link> </Button>
            </Wrap>
        </>
    )
}

export default Card
const Wrap=styled.div `
margin: 10px;
position: relative;
height :200px ;
width: 200px;
border-radius: 5px;
display: flex;
flex-direction: column;
overflow: hidden;
`
const Image=styled.img ` 
width: 100%;
flex: 1;
`
const Button=styled.button ` 
background: linear-gradient(87.47deg, #4C67FF 0%, #05A0FF 100%);
border-radius: 0px 0px 5px 5px;
outline: none;
border: none;
padding: 10px;
width: 100%;
a{
color: #fff;
letter-spacing: 1.4px;
text-decoration: none;
}
`
const Overlay = styled.div `
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%); */
  text-align: center;
  background: linear-gradient(45deg, #4969FF 0%, #099CFF 100%);
box-shadow: 0px 10px 30px 6px rgba(56, 56, 116, 0.15);
display: flex;
justify-content: center;
align-items: center;
   `
const Content = styled.div `
position: relative;
&:hover .overlay{
      opacity: 1;
  }
`
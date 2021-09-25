import React from 'react'
import styled from 'styled-components'
import img from './DELHI.jpg'

const Card = () => {
    return (
        <Wrap>
            <Image src={img}/>
            <Details>
                <Text>
                    <h3>Name</h3>
                    <p>Location</p>
                </Text>
                <Button>
                    <button>Donate</button>
                </Button>
            </Details>
        </Wrap>
    )
}

export default Card
const Wrap = styled.div ` 
margin: 12px;
height: 150px;
width: 400px;
background-color: #fff;
display: flex;
box-shadow: 0px 2px 14px 1px rgba(0, 0, 0, 0.06);
border-radius: 6px;
overflow: hidden;
@media (max-width:400px){
    height: 96px;
    margin: 8px;
}
`
const Image = styled.img ` 
width: 25%;
height: 100%;
object-fit: cover;
`
const Details = styled.div ` 
width: 75%;
display: flex;
justify-content: space-around;
`
const Text = styled.div ` 
display: flex;
flex-direction: column;
justify-content: center;
p{
    color: #8692A6;
}
`
const Button = styled.div ` 
display: flex;
flex-direction: column;
justify-content: flex-end;
margin-bottom: 20px;
button{
    background: linear-gradient(83.66deg, #052CE0 0%, #099CFF 100%);
border-radius: 5px;
border: none;
outline: none;
color: #fff;
padding:4px 25px;
}
@media (max-width:400px){
    padding: 3px 17px;
    font-size: 0.8rem;
}
`
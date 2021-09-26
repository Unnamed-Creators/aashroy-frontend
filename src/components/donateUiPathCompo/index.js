import React from 'react'
import styled from 'styled-components'

const index = ({img, text}) => {
    return (
        <Wrap>
            <Image>
                <img src={img} alt="" />
            </Image>
            <Text> <a href="#">{text}</a></Text>
        </Wrap>
    )
}

export default index

const Wrap = styled.div ` 
margin-top: 25px;
    height: 250px;
    width: 250px;
    border-radius: 7px;
    background-color: #F5F9FF;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    &:hover{
        border:1px solid #383874;
    }
`
const Image = styled.div ` 

`
const Text = styled.div `
 padding-top: 50px;
 font-weight: 500;
 a{
     text-decoration: none;
     color: #000;
 }
`
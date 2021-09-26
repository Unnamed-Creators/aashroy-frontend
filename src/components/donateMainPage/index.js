import React from 'react'
import Card from '../donateCard'
import styled from 'styled-components'
import Appbar from "../../components/shared/Navbar";



const DonateMainPage = () => {
    return (
        <>
        <Container>
        <Text>
            <h3>Donate to the needy</h3>
            <p> You can donate to the people listed here directly or through NGOs</p>
        </Text>
        <Selector>
            Sort by : <select>
                <option value="">Name</option>
                <option value="">2</option>
                <option value="">3</option>
            </select>
        </Selector>
        <Wrapper>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Wrapper>
        </Container>
        </>
    )
}

export default DonateMainPage
const Container=styled.div `
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
background-color: #EAECF1;
`
const Text=styled.div `
padding: 10px 20px;
h3{
    color: #383874;
    font-weight: 400;
}
p{
    color: #828282;
}
margin-bottom: 20px;

`
const Wrapper=styled.div `
    width: 53%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @media (max-width:968px){
        width: 70%;
    }
`
const Selector=styled.div  ` 
display: flex;
justify-content: flex-end;
width: 80%;
font-weight: 500;
select{
    width: 75px;
    margin-left: 10px;
    border: none;
    border-radius: 4px;
    padding: 2px;
    font-size: 0.9rem;
}

`
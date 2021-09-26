import React from 'react'
import styled from 'styled-components'
import Upload from '../File_upload'

const PhotoRecepient = () => {
    return (
        <Container>
            <Text>Upload a photo with the recipient</Text>
            <UploadDiv>
                <Upload/>
            </UploadDiv>
            <ButtonGrp>
                <button>Go Back</button>
                <button>Submit</button>
            </ButtonGrp>
        </Container>
    )
}

export default PhotoRecepient

const Container=styled.div ` 
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #F2F5F7;
`
const Text=styled.div ` 
margin-bottom: 20px;
font-size: 1.6rem;
color: #383874;
font-weight: 500;
text-align: center;
`
const UploadDiv=styled.div ` 
height: 300px;
width: 450px;
border: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
background-color: #fff;
@media only screen and (max-width:400px){
    height: 198px;
    width: 322px;
}
`
const ButtonGrp=styled.div ` 
margin-top: 20px;
width: 30%;
display: flex;
justify-content: space-around;
align-items: center;
button{
background: linear-gradient(270deg, #02A4FF 0%, #7D40FF 162.75%);
box-shadow: 0px 7px 30px 10px rgba(134, 118, 255, 0.2);
border-radius: 5px;
border: none;
outline:none;
color: #fff;
padding: 7px 20px;
}
@media only screen and (max-width:400px){
        width: 71%;
}
`
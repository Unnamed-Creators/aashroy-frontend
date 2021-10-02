import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = (props) => {
  return (
    <Wrap>
      <Image src={props.img} />
      <Details>
        <Text>
          <p>{props.name}</p>
          <p>{props.location}</p>
        </Text>
        <Button>
          <Link to="/photowithrecepient">
            <button>Donate</button>
          </Link>
        </Button>
      </Details>
    </Wrap>
  );
};

export default Card;
const Wrap = styled.div`
  margin: 12px;
  height: 150px;
  width: 400px;
  background-color: #fff;
  display: flex;
  box-shadow: 0px 2px 14px 1px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  overflow: hidden;
  @media (max-width: 400px) {
    height: 96px;
    margin: 8px;
  }
`;
const Image = styled.img`
  width: 25%;
  height: 100%;
  object-fit: cover;
`;
const Details = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-around;
`;
const Text = styled.div`
  display: flex;
  font-size: 1.3rem;
  flex-direction: column;
  justify-content: center;
  p {
    color: #8692a6;
  }
`;
const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 10px;
  button {
    background: linear-gradient(83.66deg, #052ce0 0%, #099cff 100%);
    border-radius: 5px;
    border: none;
    outline: none;
    color: #fff;
    padding: 4px 25px;
  }
  @media (max-width: 400px) {
    padding: 3px 0;
    padding-left: 1rem;
    font-size: 0.5rem;
  }
`;

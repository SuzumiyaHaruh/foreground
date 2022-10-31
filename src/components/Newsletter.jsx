import React from 'react';
import {Send} from "@material-ui/icons";
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
  height: 50vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({'font-size': "30px"})}
`
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({textAlign: "center"})}
`
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "80%" })}
`
const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  flex: 8;
  padding-left: 10px;
`
const Button = styled.button`
  flex: 1;
  border: none;
  color: white;
  cursor: pointer;
  background: #8d4bbb;
`
const Newsletter = () => {
    return (
        <div>
            <Container>
                <Title>通訊</Title>
                <Description>從我們最喜歡的產品獲得及時的更新</Description>
                <InputContainer>
                    <Input placeholder='你的郵箱'></Input>
                    <Button>
                        <Send/>
                    </Button>
                </InputContainer>
            </Container>
        </div>
    )
}
export default Newsletter

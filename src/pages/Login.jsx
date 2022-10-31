import React from 'react';
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url("https://images.unsplash.com/photo-1560972550-aba3456b5564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80") no-repeat fixed center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({width: "75%"})}
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`
const From = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`
const Button = styled.button`
  border: none;
  padding: 15px 20px;
  background-color: #3f51b5;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`
const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`
const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>登錄</Title>
                <From>
                    <Input placeholder='用戶名'></Input>
                    <Input placeholder='密碼'></Input>
                    <Button>登錄</Button>
                    <Link>忘記密碼?</Link>
                    <Link>注冊賬戶</Link>
                </From>
            </Wrapper>

        </Container>
    )
}
export default Login

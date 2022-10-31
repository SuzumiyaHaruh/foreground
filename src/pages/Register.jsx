import React from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url("https://images.unsplash.com/photo-1560972550-aba3456b5564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80") 
  no-repeat fixed center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.h1`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({width: "75%"})}
`
const Title = styled.div`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`
const From = styled.form`
  display: flex;
  flex-wrap: wrap;
`
const Input = styled.input`
  flex: 1;
  min-width: 40px;
  margin: 20px 10px 0 0;
  padding: 10px;
`
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`
const Button = styled.button`
  width: 40%;
  height: 40px;
  border: none;
  background-color: #3f51b5;
  margin: 10px 10px 10px auto;
  color: white;
  cursor: pointer;
`
const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>創建一個新賬戶</Title>
                <From>
                    <Input placeholder='名字'></Input>
                    <Input placeholder='姓'></Input>
                    <Input placeholder='用戶名'></Input>
                    <Input placeholder='郵箱'></Input>
                    <Input placeholder='密碼'></Input>
                    <Input placeholder='確認密碼'></Input>
                    <Agreement>
                        設立帳戶，即表示本人同意根據本條例處理個人資料<b>隱私政策</b>
                    </Agreement>
                    <Button>創建</Button>
                </From>
            </Wrapper>
        </Container>
    )
}
export default Register

import React from 'react';
import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 1s;
`
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  overflow: hidden;
  &:hover ${Image} {
    transform: scale(1.4); //放大 倍数随意
  }
`
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`
const Button = styled.button`
  border: none;
  padding: 10px;
  font-size: 15px;
  background: white;
  color: #3f51b5;
  cursor: pointer;

  &:hover {
    background: #E7F7FF;
  }
`
const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>立即訂購</Button>
            </Info>
        </Container>
    )
}
export default CategoryItem

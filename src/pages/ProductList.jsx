import React from 'react';
import styled from 'styled-components';
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div`
`
const Title = styled.h1`
  margin-left: 22px;
  margin-top: 20px;
`
const FilterContainer = styled.div`
  display: flex;
  margin-left: 4px;
`
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`
const Select = styled.select`
  margin-right: 20px;
  outline:none;
  ${mobile({ margin: "10px 0px" })}
`
const Option = styled.option`
  text-align: center;
`
const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>禮服</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>過濾:</FilterText>
                    <Select>
                        <Option disabled selected>
                            顔色
                        </Option>
                        <Option>白色</Option>
                        <Option>黑色</Option>
                        <Option>紅色</Option>
                        <Option>藍色</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            大小
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>排序:</FilterText>
                    <Select>
                        <Option selected>最新的</Option>
                        <Option>價格(升序)</Option>
                        <Option>價格(降序)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}
export default ProductList

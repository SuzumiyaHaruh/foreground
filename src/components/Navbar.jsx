import React from 'react';
import styles from 'styled-components'
import {Search, ShoppingCartOutlined} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import {mobile} from "../responsive";
// 自定義樣式
const Container = styles.div`
  height:60px;
  position: sticky;
  top: -1px;
  z-index:999;
  background-color:white;
  ${mobile({height: "50px"})}
`
const Wrapper = styles.div`
  padding:10px 20px;
  display: flex;
  align-items: center;
  justify-content:space-between;
   ${mobile({padding: "10px 0px"})}
`
const Left = styles.div`
  flex:1;
  display: flex;
  align-items:center;
`
const Language = styles.div`
  font-size:14px;
  cursor:pointer;
  ${mobile({display: "none"})}
  &:active{
  color:#3e3e3e;
  }
  
`
const SearchContainer = styles.div`
  border:1px solid  lightgray;
  display: flex;
  align-items:center;
  margin-left:25px;
  padding:5px;
`
const Input = styles.input`
  background:none;
  outline:none;
  border:none;
  ${mobile({ width: "50px" })}
`
const Center = styles.div`
  flex:1;
  text-align:center;
`
const Logo = styles.h1`  
  font-weight:bold;
   ${mobile({ display: "none"})}
`
const Right = styles.div`
  flex:1;
  display: flex;
  align-items:center;
  justify-content:flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem = styles.div`
  font-size:14px;
  cursor:pointer;
  margin-left:25px;
   ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  &:active{
  color:#3e3e3e;
  }
`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>中文</Language>
                    <SearchContainer>
                        <Input placeholder='良品搜索'/>
                        <Search color='primary' fontSize="small"/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>有印良品.</Logo>
                </Center>
                <Right>
                    <MenuItem>注冊</MenuItem>
                    <MenuItem>登錄</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}
export default Navbar

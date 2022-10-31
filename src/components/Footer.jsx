import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection: "column"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-left: 120px;
  ${mobile({display: "none"})}
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display: "none"})}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor: "#fff8f8"})}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const PaymentImg = styled.img`
  width: 40px;
  margin-right: 10px;
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>有印良品.</Logo>
                <Desc>
                    把背心、襯衫、毛衣，穿在腳上
                    以製衣剩余線紗織成殘系襪織背心遺留的紅色紗線，
                    織襯衫剩余的藍色紗線，織貿易殘余的綠色紗線…
                    這些，我們將之收集起來織成色彩豐富、舒爽好穿的襪子，
                    每一種顏色的組合都是獨一無二，把環保美意落實成實用美學
                    純棉沙線讓襪子更強韌、不易變形。
                    這款舒爽堅韌的殘系襪，
                    只是無印良品堅持『所有設計與機能，都要對生活表達善意』的證明之一。
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>我的鏈接</Title>
                <List>
                    <ListItem>首頁</ListItem>
                    <ListItem>購物車</ListItem>
                    <ListItem>男人與時尚</ListItem>
                    <ListItem>女人與浪漫</ListItem>
                    <ListItem>髮飾</ListItem>
                    <ListItem>我的賬戶</ListItem>
                    <ListItem>訂單跟蹤</ListItem>
                    <ListItem>願望清單</ListItem>
                    <ListItem>我的博客</ListItem>
                    <ListItem>條款</ListItem>
                </List>
            </Center>
            <Right>
                <Title>聯係方式</Title>
                <ContactItem>
                    <Room style={{marginRight: "10px"}}/> 廣東省佛山市 廣東東軟學院
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight: "10px"}}/> +86 159 899 605 93
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight: "10px"}}/> contact@lama.dev
                </ContactItem>
                    <PaymentImg src='https://upload.cc/i1/2022/10/30/5jvK7r.png'/>
                    <PaymentImg src='https://upload.cc/i1/2022/10/30/tZqzyp.png'/>
            </Right>
        </Container>
    );
};

export default Footer;

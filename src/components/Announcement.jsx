import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: #3f51b5;
  color: white;
  line-height: 30px;
  text-align: center;
  font-size: 12px;
`
const Announcement = () => {
    return (
        <Container>
            {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
            <marquee loop="-1">
                限時折扣！訂單超過200￥免運費！&nbsp;&nbsp;&nbsp;限時好貨等你入手！
            </marquee>
        </Container>
    )
}
export default Announcement

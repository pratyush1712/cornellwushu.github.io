import React from 'react';
import NavBar from '../components/NavBar';
import Content from '../components/Content';
import { Banner } from '../styles/HeaderStyles';
import header_background from "../images/header_background.jpg";

function Header() {
  return (
    <>
      <div>
        <Banner >
          <img src={header_background} height='20%' width={'100%'}></img>
          <NavBar />
          <Content />
        </Banner>
      </div>
    </>
  )
}

export default Header;
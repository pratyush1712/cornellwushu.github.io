import React from 'react';
import NavBar from '../components/NavBar';
import Content from '../components/Content';
import { Banner } from '../styles/HeaderStyles';
import header_background from "../images/header_background.jpg";

function Header() {
  return (
    <>
      <Banner style={{ marginBottom: '-450px' }}>
        <img src={header_background} height='20%'></img>
        <NavBar />
        <Content />
      </Banner>
    </>
  )
}

export default Header;
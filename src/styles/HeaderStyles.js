import styled from 'styled-components';
import { Link } from 'react-router-dom';
import header_background from "../images/header_background.jpg";
import { rgba } from 'polished';
import logo from '../images/logo.jpg';

export const Banner = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    @media (min-width: 600px) {
      }
`

export const Typing = styled.div`
    fontFamily: Fira Sans;
    font-size: 30px;
`

export const Logo = styled.div`
      background-image: url(${logo});
      background-size: contain;
      position: absolute;
      height:100px;
      width: 100px;
      color: ${props => props.primary ? "white" : "#FF4000"};
      align-self: center;
      top: 6vw;
      @media (min-width: 600px) {
        width:300px;
        height:300px;
        top: 5vw;
      } 
`
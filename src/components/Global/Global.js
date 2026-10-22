import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";


export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100..900&display=swap" rel="stylesheet');

       *,
 *::before,
 *::after {
     margin: 0;
     padding: 0;
     border: 0;
     -moz-box-sizing: border-box;
     -webkit-box-sizing: border-box;
     -ms-box-sizing: border-box;
     box-sizing: border-box;
 }

 :focus,
 :active {
     outline: none;
 }

 a:focus,
 a:active {
     outline: none;
 }

 header,
 nav,
 footer,
 aside,
 section {
     display: block;
 }

 html,
 body {
     height: 100%;
     width: 100%;
     line-height: 1;
     font-size: 16px;
     
     overflow-wrap: break-word;
     font-family: 'Poppins', sans-serif;
     font-size: 1.15em;

     background-color: white;
    
     -ms-text-size-adjust: 100%;
     -moz-text-size-adjust: 100%;
     -webkit-text-size-adjust: 100%;
     -ms-user-select: none;
     -moz-user-select: none;
     -webkit-user-select: none;
     user-select: none;
     scroll-behavior: smooth;

 }


 input,
 button,
 textarea {
     font-family: inherit;
 }

 input::-ms-clear {
     display: none;
 }

 input[type="number"]::-webkit-inner-spin-button,
 input[type="number"]::-webkit-outer-spin-button {
     -webkit-appearance: none;
     margin: 0;
 }

 input[type="number"] {
     -moz-appearance: textfield;
     appearance:textfield;
 }

 button {
     cursor: pointer;
 }

 button::-moz-focus-inner {
     padding: 0;
     border: 0;
 }

 a:hover {
     text-decoration: none;
 }

 ul li {
     list-style: none;
 }
ol li {list-style: none;} 

 img {
     vertical-align: top;
 }

 h1,
 h2,
 h3,
 h4,
 h5,
 h6 {
     margin: 0;
     padding: 0;
 }

   // [fill]{fill:currentColor;}
    [stroke]{stroke:currentColor;}


 svg *{
   transition-property: fill,stroke;
 }
`
export const SCommonLink = styled.a`
    &:focus,
    &:active {
        outline: none;
    }
   text-decoration: none;
   cursor: pointer;
   &:visited {
    text-decoration: none;
    cursor: pointer;
  }
`
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
${normalize()}

*,
*::after,
*::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}


html {
    font-size: 62.5%;
    @media only screen and (min-width: 900px) {
        font-size: 75%;
    }
    @media only screen and (min-width: 1200px) {
        font-size: 87.5%;
    }    
}


body {
    transition: all 0.05s linear;
    width: 100%;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    font-family: 'Gelion Regular';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fff;
    background: #fff;
}


h1 {
    font-style: normal;
    font-family: 'Gelion Regular';
    text-align: left;
    margin: 0 ;



}
h2 {
     font-style: normal;
    font-family: 'Gelion Regular';
    text-align: left;
        margin: 0 ;



}
h3 {
    font-style: normal;
    font-family: 'Gelion Regular';
    text-align: left;
        margin: 0 ;



}
h4 {
    font-style: normal;
    font-family: 'Gelion Regular';
    font-size: 40px;
    font-weight: 700;
    line-height: 52px;
    text-align: center;
        margin: 0 ;





}
h5 {
    font-style: normal;
    font-family: 'Gelion Regular';
    text-align: left;
        margin: 0 ;



}  
h6 {
    font-style: normal;
    font-family: 'Gelion Regular';
    font-size: 21px;
    font-weight: 400;
    line-height: 32px;
    text-align: left;
        margin: 0 ;




}  
p{
    font-family: 'Gelion Regular';
    text-align: left;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
        margin: 0 ;

}

.ant-menu-submenu-selected {
color: #6837EF;
}

.ant-menu-item-selected {
color: #060213;
font-family: 'Gelion bold';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
}

 .ant-menu-light .ant-menu-item-active,
 .ant-menu-light .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
 .ant-menu-light .ant-menu-submenu-active {
 color: #060213;
}
.ant-menu-light .ant-menu-item:hover,
 .ant-menu-light .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
 .ant-menu-light .ant-menu-submenu-title:hover {
color: #6837EF;
}

hover_as_link {
    background-color: transparent;
    cursor: pointer;
}


ul {
    margin: 0;
}

`;

export default GlobalStyle;

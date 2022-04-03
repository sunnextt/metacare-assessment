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


.btn {
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.6rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
    .btn {
        transition: none;
    }
}
.btn:hover {
    color: #212529;
    text-decoration: none;
}
.btn.focus,
.btn:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
.btn.disabled,
.btn:disabled {
    opacity: 0.65;
}
.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}
a.btn.disabled,
fieldset:disabled a.btn {
    pointer-events: none;
}
.btn-primary {
    color: #fff;
  background: #25bb87;
}
.btn-primary:hover {
    color: #fff;
  background: #25bb87;
}
.btn-primary.focus,
.btn-primary:focus {
    color: #fff;
  background: #25bb87;
}

`;

export default GlobalStyle;

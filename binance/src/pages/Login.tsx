import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../styles/register.css';
import '../components/Input'
import Input from '../components/Input';
import PwdInput from '../components/pwdInput';
import Button from '../components/Button';
import Tab from 'react-bootstrap/Tab'
import { Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { createTheme, } from '@mui/material/styles';
import { green, orange } from '@mui/material/colors';

import {
    Link
  } from 'react-router-dom';
  


export default function Login() {

const [theme, setTheme] = useState('dark')
const [openReferral, setOpenReferral] = useState(false)

const [value, setValue] = React.useState('1');

const NG = require('../img/ng-flag.png')
const QR = require('../img/qr-code.png')

useEffect(() => {
    document.title = "Log In | Binance";
  }, []);
  

const outerTheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

const innerTheme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});



const RegisterDiv = styled.div`
box-sizing: border-box;
    margin: 30px auto 0;
    display: block;
    width: 100%;
    padding: 0 0px;

        
 .nav-pills .nav-link.active,
  .show > .nav-link{
    background-color: ${theme === 'light' ? 'rgb(245, 245, 245)' : 'rgb(138, 138, 138)'}!important;
    color: rgb(234, 236, 239) !important;
    border-radius: 8px !important;
}



    /* .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected {
    background-color: ${theme === "light" ? 'rgb(245, 245, 245)' : 'rgb(30, 35, 41)'};
    color: rgb(234, 236, 239);
    border-radius: 8px;
    padding: 8px 16px;
    border-bottom: unset;
    margin: 0px 16px 0px 0px;
    width: 20px;
    } */
    @media only screen and (min-width: 769px){
      display: flex;
    }
    
`

const Select = styled.select`
  margin: 0;
    min-width: 0px;
    position: relative;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1.6;
    border-radius: 4px;
    height: 48px;
    background: transparent;
    fill: transparent;
    border: 1px solid rgb(71, 77, 87);
    color: #646464;
    background-image: url('../img/ng-flag.png');
    /* flex-shrink: 0.5; */
    &:hover {
      border-color: rgb(240, 185, 11);
    }

    &:focus-visible {
      border-color: rgb(240, 185, 11) !important;
    }
/* 
    option{
        background-image: url('../img/ng-flag.png');
        background: transparent;
        position: absolute;
        left: 5;
      } */
  
`;

const Veri = styled.div`
    box-sizing: border-box;
    margin: 20px 0;
    min-width: 0px;
    display: flex;
    width: 100%;
    background-color: ${theme=== 'light'?'rgb(254, 246, 216)' : 'rgb(60, 38, 1, 0.8)'};
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding-top: 8px;
    padding-bottom: 8px;
`

    return (
      <>
    <Veri>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="padLock"><path d="M16.27 10.5V8.07C16.27 5.82 14.45 4 12.2 4S8.13 5.82 8.13 8.07v2.43H6v8.94h12.43V10.5h-2.16zm-3.07 6.46h-2v-4h2v4zm1.07-6.46h-4.14V8.07c0-1.14.93-2.07 2.07-2.07 1.14 0 2.07.93 2.07 2.07v2.43z" fill="currentColor"></path></svg>
    <span className='veri-text'>URL verification: https://accounts.binance.com</span>
    </Veri>
    <RegisterDiv>
      <div className='innerDiv-two'>
      <form action='/dashboard'>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <h1 className="LogTitle">Binance Account Login</h1>
    <p className='LogPara'>Welcome back! Log In with your Email, Phone number or QR code</p>
      <Nav variant="pills" style={{display: 'flex', margin: '20px 0'}}>
        <Nav.Item>
          <Nav.Link  eventKey="first" style={{width: '65px', textAlign:'center', cursor: 'pointer'}}>Email</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second" style={{width: '65px', textAlign:'center', cursor: 'pointer'}}>Mobile</Nav.Link>
        </Nav.Item>
      </Nav>
      
      <Tab.Content style={{margin: '20px 0'}}>
        <Tab.Pane eventKey="first">
        <Input label="Email" width="100%"/>
          <PwdInput label="Password" width="100%"/>
         
        </Tab.Pane>
        <Tab.Pane eventKey="second">
         <label>Phone Number</label>
          <div style={{display: 'flex', alignItems: 'center', width: '100%',  }}>
          
          <img src={NG} alt="" style={{width: '20px', margin:'0 5px 0', position: 'absolute', zIndex: 1000}} />
          <Select style={{margin: '0 5px 0 0', flexGrow: '1'}}>
            
            <option value="ng">----- +234</option>
          </Select>
          <div style={{flexGrow: '2'}}>
          <Input label="" width="100%" />
          </div>
        </div>
          <PwdInput label="Password" width="100%"/>
         
        </Tab.Pane>
      </Tab.Content>
     

</Tab.Container>
<Button text='Log In' width='100%' bgColor='rgb(255, 219, 75)'/>
</form>
<div style={{ margin:'15px 0 15px'}}>
         <span style={{margin: '0 5px'}}><a href="#sss" className="forgot-pwd" >Forgot password?</a></span>

         </div>
<div style={{ margin:'15px 0 15px'}}>
         <span style={{margin: '0 5px'}}><Link to="/" className="forgot-pwd" >Register now</Link></span>

         </div>


</div>
<div className="QR-container">
    <div className="QR">
 <img src={QR} alt="qr-code" style={{borderRadius: '4px'}} />
 </div>
 <p style={{textAlign:'center', fontSize: '18px', fontWeight: '600', lineHeight: '24px', margin: '24px 10px 0px',}}>Log in with QR code</p>
 <p style={{textAlign:'center', fontSize: '14px', fontWeight: '400', lineHeight: '20px', margin: '24px 0px 0px',}}>Scan this code with the <span className="BMobileApp">Binance mobile app</span> to log in instantly.</p>
</div>


    </RegisterDiv>
    <footer className='regFoot'> &copy; 2017 - 2021 Binance.com. All rights reserved</footer>
    </>
    )
}

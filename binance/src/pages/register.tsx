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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import { green, orange } from '@mui/material/colors';

import {
  Link
} from 'react-router-dom';


export default function Register() {

const [theme, setTheme] = useState('dark')
const [openReferral, setOpenReferral] = useState(false)

const [value, setValue] = React.useState('1');

const NG = require('../img/ng-flag.png')

useEffect(() => {
  document.title = "Create a free account | Binance";
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
    padding: 0 20px;

        
 .nav-pills .nav-link.active,
  .show > .nav-link{
    background-color: ${theme === 'light' ? 'rgb(245, 245, 245, 0.3)' : 'rgb(138, 138, 138)'}!important;
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

    return (
      
     <> 
    <RegisterDiv>
      <div className='innerDiv'>
        <form action='/dashboard'>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <h1 className="regTitle">Create Binance Account</h1>
    <p className='regPara'>Register with your email or mobile</p>
      <Nav variant="pills" style={{display: 'flex'}}>
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
          <div className='openRef' onClick={() => setOpenReferral(!openReferral)}><span>Referral ID (Optional) </span>
          <span style={{padding: '20px 0'}}>
            {
          openReferral === false ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M16 9v2l-4 4.24L8 11V9h8z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M8 15.24v-2L12.24 9l4.24 4.24v2H8z"></path></svg>
          
          }
          </span>
       </div>
       <div style={{display: `${openReferral === false ? 'none' : 'block'}`}}>
         <Input label="" width="100%" />
         </div>
      
         <div style={{display: 'flex', alignItems:'center', margin:'5px 0 15px'}}>
         <ThemeProvider theme={outerTheme}>
         <Checkbox defaultChecked />
         </ThemeProvider>
         <span style={{margin: '0 5px'}}>I agree to receive email updates from Binance</span>

         </div>
         <div style={{display: 'flex', alignItems:'center', margin:'5px 0 15px'}}>
         <ThemeProvider theme={outerTheme}>
         <Checkbox defaultChecked />
         </ThemeProvider>
         <span style={{margin: '0 5px'}}>I have read and agree to Binance’s <a href="#sss" className="terms" >Terms of Service</a></span>

         </div>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
         <label>Phone Number</label>
          <div style={{display: 'flex', alignItems: 'center', width: '100%',  }}>
          
          <img src={NG} alt="" style={{width: '20px', margin:'0 5px 0', position: 'absolute', zIndex: 1000}} />
          <Select style={{margin: '0 5px 0 0', flexGrow: '1'}}>
            
            <option value="ng">-----Nigeria</option>
          </Select>
          <div style={{flexGrow: '2'}}>
          <Input label="" width="100%" />
          </div>
        </div>
          <PwdInput label="Password" width="100%"/>
          <div className='openRef' onClick={() => setOpenReferral(!openReferral)}><span>Referral ID (Optional) </span>
          <span style={{padding: '20px 0'}}>
            {
          openReferral === false ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M16 9v2l-4 4.24L8 11V9h8z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M8 15.24v-2L12.24 9l4.24 4.24v2H8z"></path></svg>
          
          }
          </span>
       </div>
       <div style={{display: `${openReferral === false ? 'none' : 'block'}`}}>
         <Input label="" width="100%" />
         </div>
         <div style={{display: 'flex', alignItems:'center', margin:'5px 0 15px'}}>
         <ThemeProvider theme={outerTheme}>
         <Checkbox defaultChecked />
         </ThemeProvider>
         <span style={{margin: '0 5px'}}>I have read and agree to Binance’s <a href="#sss" className="terms" >Terms of Service</a></span>

         </div>
        </Tab.Pane>
      </Tab.Content>

</Tab.Container>
<Button text='Create Account' width='100%' bgColor='rgb(255, 219, 75)'/>
<p style={{fontWeight: '500', margin: '15px 0'}}>Already registered? <Link to="/login" className="terms">Log In</Link></p>
</form>
</div>
<div style={{width: '350px', opacity: '0'}}>
 
</div>

    </RegisterDiv>
    <footer className='regFoot'> &copy; 2017 - 2021 Binance.com. All rights reserved</footer>
    </>
    )
}

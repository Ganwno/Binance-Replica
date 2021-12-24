import React, {useEffect, useState} from 'react'
import { Nav, Navbar, Container, Offcanvas, NavDropdown, Row } from 'react-bootstrap';
import '../styles/dashboard.css'
import styled from 'styled-components';
import Pill from '../components/Pill';
import MiniToast from '../components/MiniToast';
import MiniToastII from '../components/MiniToastII';
import ModalToast from '../components/ModalToast';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Col } from 'react-bootstrap';

function Dashboard() {

    const [theme, setTheme] = useState('dark')
    const [buyCrypto, setBuyCrypto] = useState(false)
    const [trade, setTrade] = useState(false)
    const [deriv, setDeriv] = useState(false)
    const [earn, setEarn] = useState(false)
    const [finance, setFinance] = useState(false)
    const [products, setProducts] = useState(false)
    const [profile, setProfile] = useState(false)
    const [menu, setMenu] = useState(false)
    const [value, setValue] = useState('1');
    const [btcBalance, setBtcBalance] = useState(false)
    const [menuHover, setMenuHover] = useState(false)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

    useEffect(() => {
    const nav = document.querySelector<HTMLElement>('.header')!;
    nav.style.display = "none";
    }, [])

  const Lang = styled.div `
    font-size: 16px, 
    cursor: pointer;
    margin-bottom: 8px, 
    flex: 1 1 0%,
    margin: 0px,
   align-items: center;
   padding: 16px 10px;

   &:hover{
    cursor: pointer;
    background-color: rgb(43, 49, 57);
  }

  &:hover *{
    color: rgb(240, 185, 11);
  }
    `

const I = styled.i`
  
color: #ffffff !important;
font-size: 24px !important;
margin: 0 0 0 10px;
cursor: pointer;

&:hover{
  color: #F0B90B !important;
}

  `

const Trade = styled.div`
box-sizing: border-box;
margin: 10px 0;
min-width: 0px;
background: #fff;
box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px, rgb(0 0 0 / 8%) 0px 0px 2px;
border-radius: 4px;
padding: 10px 16px;
-webkit-box-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
align-items: center;
color: #111;
font-weight: 600;
font-size: 14px;
cursor: pointer;

.modal-div{
display: block;
font-weight: 400;
}
.title {
color: rgb(30, 35, 41);
font-size: 12px;
}

.title:hover{
    color:#f8d12f;
}

.spot-trade{
    box-sizing: border-box;
    margin: 0px 0px 40px;
    min-width: 0px;
    position: relative;

}

.i-icon{
  display: inline-block;
  width: 18px;
}

.off{
    margin: 0px 0px 0px 4px;
    min-width: 0px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    padding-left: 4px;
    padding-right: 4px;
    display: inline-block;
    background-color: rgb(245, 245, 245);
    color: rgb(112, 122, 138);
}

.vip-trading {
    min-width: 0px;
    margin: 0px;
    background: #111;
    border-radius: 4px;
    padding: 20px;
}


`



const Toast = styled.div`
box-sizing: border-box;
margin: 10px 0;
min-width: 0px;
display: flex;
flex: 1 1 0%;
-webkit-box-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
align-items: center;
color: #111;
font-weight: 600;
font-size: 14px;
cursor: pointer;


.d-right {
box-sizing: border-box;
margin: 0px;
min-width: 0px;
color: rgb(0, 0, 0);
font-size: 24px;
fill: rgb(0, 0, 0);
width: 25px;
}
.d-right:hover {
color: #f8d12f;
}

.title {
color: rgb(30, 35, 41);
font-size: 14px;
}

.title:hover{
    color:#f8d12f;
}

`

const DeviceActivity = styled.div`
    box-sizing: border-box;
    margin: 10px 0;
    min-width: 0px;
    display: flex;
    align-items: center;
    background: #fff;
    box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px, rgb(0 0 0 / 8%) 0px 0px 2px;
    border-radius: 4px;
    flex: 1 1 0%;
    padding: 14px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    color: #111;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;


    p{
        font-size: 16px;
    }

    p:hover{
        color: #f8d12f;
    }
    .d-right {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    color: rgb(0, 0, 0);
    font-size: 24px;
    fill: rgb(0, 0, 0);
    width: 25px;
}

.d-right:hover {
    color: #f8d12f;
}

    `

    
    return (
        <div>
             <nav className='header-dash'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5120 1024" className="binance-logo"><path d="M230.997333 512L116.053333 626.986667 0 512l116.010667-116.010667L230.997333 512zM512 230.997333l197.973333 197.973334 116.053334-115.968L512 0 197.973333 314.026667l116.053334 115.968L512 230.997333z m395.989333 164.992L793.002667 512l116.010666 116.010667L1024.981333 512l-116.992-116.010667zM512 793.002667l-197.973333-198.997334-116.053334 116.010667L512 1024l314.026667-314.026667-116.053334-115.968L512 793.002667z m0-165.973334l116.010667-116.053333L512 396.032 395.989333 512 512 626.986667z m1220.010667 11.946667v-1.962667c0-75.008-40.021333-113.024-105.002667-138.026666 39.978667-21.973333 73.984-58.026667 73.984-121.002667v-1.962667c0-88.021333-70.997333-145.024-185.002667-145.024h-260.992v561.024h267.008c126.976 0.981333 210.005333-51.029333 210.005334-153.002666z m-154.026667-239.957333c0 41.984-34.005333 58.965333-89.002667 58.965333h-113.962666V338.986667h121.984c52.010667 0 80.981333 20.992 80.981333 58.026666v2.005334z m31.018667 224c0 41.984-32.981333 61.013333-87.04 61.013333h-146.944v-123.050667h142.976c63.018667 0 91.008 23.04 91.008 61.013334v1.024z m381.994666 169.984V230.997333h-123.989333v561.024h123.989333v0.981334z m664.021334 0V230.997333h-122.026667v346.026667l-262.997333-346.026667h-114.005334v561.024h122.026667v-356.010666l272 356.992h104.96z m683.946666 0L3098.026667 228.010667h-113.962667l-241.024 564.992h127.018667l50.986666-125.994667h237.013334l50.986666 125.994667h130.005334z m-224.981333-235.008h-148.992l75.008-181.973334 73.984 181.973334z m814.037333 235.008V230.997333h-122.026666v346.026667l-262.997334-346.026667h-114.005333v561.024h122.026667v-356.010666l272 356.992h104.96z m636.970667-91.008l-78.976-78.976c-44.032 39.978667-83.029333 65.962667-148.010667 65.962666-96 0-162.986667-80-162.986666-176v-2.986666c0-96 67.968-174.976 162.986666-174.976 55.978667 0 100.010667 23.978667 144 62.976l78.976-91.008c-51.968-50.986667-114.986667-86.997333-220.970666-86.997334-171.989333 0-292.992 130.986667-292.992 290.005334V512c0 160.981333 122.965333 288.981333 288 288.981333 107.989333 1.024 171.989333-36.992 229.973333-98.986666z m527.018667 91.008v-109.994667h-305.024v-118.016h265.002666v-109.994667h-265.002666V340.992h301.013333V230.997333h-422.997333v561.024h427.008v0.981334z" p-id="2935"></path></svg>
        <div>
          
  <Navbar expand={false} className='mobile'>
  <Container fluid>
  <Navbar.Toggle onClick={() => [setMenu(false), setProfile(true)]}  style={{ backgroundColor: 'transparent', boxShadow: 'none', border: 'none' }} aria-controls="offcanvasNavbar" >
  <I className="far fa-user-circle" style={{ fontSize: '24px'
}} ></I>

</Navbar.Toggle>

    <Navbar.Toggle onClick={() => [setMenu(true), setProfile(false)]} style={{ backgroundColor: 'transparent', boxShadow: 'none', border: 'none' }} aria-controls="offcanvasNavbar" >
      <I className="fas fa-bars" style={{}}></I>
      </Navbar.Toggle>
    <Navbar.Offcanvas
      id='offcanvasNavbarDark'
      aria-labelledby="offcanvasNavbarLabel"
      placement="end">
      <Offcanvas.Header closeButton >
        <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
        
      </Offcanvas.Header>
      <Offcanvas.Body style={{padding: '0',  overflowY: 'auto',whiteSpace: 'nowrap', display:`${menu === false ? 'none' : 'block'}` }}>
        <Nav className="justify-content-end flex-grow-1">
        <div className='nav-links'>
    <div style={{display: 'flex'}}>
      <i className="fab fa-bitcoin" style={{fontSize: '22px',
                color: 'rgb(112, 122, 138)',}}></i>
        <span style={{margin: '0 10px',fontSize: '16px',flexShrink: '1', color: 'rgb(234, 236, 239)'}}>Buy Crypto</span>
        <div data-bn-type="text" className="css-1oowbt2">USD</div>
</div>
       <div onClick={() => setBuyCrypto(!buyCrypto)}>
          <span style={{padding: '20px 0'}}>
            {
          buyCrypto === false ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M16 9v2l-4 4.24L8 11V9h8z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M8 15.24v-2L12.24 9l4.24 4.24v2H8z"></path></svg>
          
          }
          </span>
       </div>
         </div>
        <div className="childLinks" style={{display: `${buyCrypto === false ? 'none' : 'block'}`, color: 'white'}}>
    <ul>
        <li style={{display: 'flex',justifyContent:'space-between', }}><span>Pay with</span>
            <span>USD</span>
        </li>
        <li>Bank Deposit</li>
        <li>Credit/Debit Card</li>
        <li>P2P Trading</li>
        <li>Third-party Payment</li>
    </ul>
         </div>
        <div className='nav-links'>
            <div>
        <i className="far fa-analytics" style={{fontSize: '22px',
            color: 'rgb(112, 122, 138)',}}></i>
       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
          Markets</span>
          </div>
        </div>
        <div className='nav-links'>
            <div>
        <i className="far fa-dot-circle" style={{fontSize: '22px',
            color: 'rgb(112, 122, 138)',}}></i>
       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
          Trade</span>
          </div>
          <div  onClick={() => setTrade((prevState) => !prevState)}>
          <span style={{padding: '20px 0'}}>
            {
          trade === false ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M16 9v2l-4 4.24L8 11V9h8z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M8 15.24v-2L12.24 9l4.24 4.24v2H8z"></path></svg>
          
          }
          </span>
       </div>
          
        </div>
        <div className="childLinks" style={{display: `${trade === false ? 'none' : 'block'}`, color: 'white'}}>
    <ul>
        <li>Convert</li>
        <li>Classic</li>
        <li>Advanced</li>
        <li>Margin</li>
        <li>P2P</li>
        <li>Strategy Trading</li>
        <li>Swap Farming</li>
        <li>Fan Token</li>
    </ul>
         </div>
        <div className='nav-links'>
            <div>
        <i className="far fa-external-link-square"  style={{fontSize: '22px',
            color: 'rgb(112, 122, 138)',}}></i>
       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
       Derivatives</span>
       </div>
       <div onClick={() => setDeriv((prevState) => !prevState)}>
          <span style={{padding: '20px 0'}}>
            {
          earn === false ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M16 9v2l-4 4.24L8 11V9h8z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M8 15.24v-2L12.24 9l4.24 4.24v2H8z"></path></svg>
          
          }
          </span>
       </div>
        </div>
        <div className="childLinks" style={{display: `${deriv === false ? 'none' : 'block'}`, color: 'white'}}>
    <ul>
        <li>Binance Futures Overview</li>
        <li>Responsible Trading</li>
        <li>USDⓈ-M Futures</li>
        <li>COIN-M Futures</li>
        <li>Vanilla Options</li>
        <li>Leveraged Tokens</li>
        <li>Battle</li>

    </ul>
         </div>
        <div className='nav-links'>
            <div>
        <i className="fal fa-usd-circle" style={{fontSize: '22px',
            color: 'rgb(112, 122, 138)',}}></i>
       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
       Earn</span>
       </div>
       <div onClick={() => setEarn((prevState) => !prevState)}>
          <span style={{padding: '20px 0'}}>
            {
          earn === false ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M16 9v2l-4 4.24L8 11V9h8z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M8 15.24v-2L12.24 9l4.24 4.24v2H8z"></path></svg>
          
          }
          </span>
       </div>
        </div>
        <div className="childLinks" style={{display: `${earn === false ? 'none' : 'block'}`, color: 'white'}}>
    <ul>
        <li>Binance Earn</li>
        <li>Launchpad</li>
        <li>Savings</li>
        <li>Staking</li>
        <li>BNB Vault</li>
        <li>Dual Investment</li>
        <li>Liquidity Farming</li>
        <li>Auto-Invest <div data-bn-type="text" className="css-1oowbt2">new</div></li>
        <li>Binance Pool</li>

    </ul>
         </div>
        <div className='nav-links'>
            <div>
        <i className="fab fa-stumbleupon-circle" style={{fontSize: '22px',
            color: 'rgb(112, 122, 138)',}}></i>
    
       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
       Finance</span>
       </div>
       <div onClick={() => setFinance((prevState) => !prevState)}>
          <span style={{padding: '20px 0'}}>
            {
          finance === false ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M16 9v2l-4 4.24L8 11V9h8z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M8 15.24v-2L12.24 9l4.24 4.24v2H8z"></path></svg>
          
          }
          </span>
       </div>
        </div>
        <div className="childLinks" style={{display: `${finance === false ? 'none' : 'block'}`, color: 'white'}}>

    <ul>
        <li>Binance Visa Card</li>
        <li>Crypto Loans</li>
        <li>Binance Pay</li>

    </ul>
         </div>
        <div className='nav-links'>
            <div style={{display: 'flex'}}>
        <i className="fal fa-th-large" style={{fontSize: '22px',
            color: 'rgb(112, 122, 138)',}}></i>
       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
       NFT </span>
       <div data-bn-type="text" className="css-1oowbt2">New</div>
        </div>
        </div>

        <div className='nav-links'>
            <div>
            <i className="fas fa-th" style={{fontSize: '22px',
            color: 'rgb(112, 122, 138)',}}></i>

       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
       Products</span>
       </div>
       <div onClick={() => setProducts((prevState) => !prevState)}>
          <span style={{padding: '20px 0'}}>
            {
          products === false ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M16 9v2l-4 4.24L8 11V9h8z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M8 15.24v-2L12.24 9l4.24 4.24v2H8z"></path></svg>
          
          }
          </span>
       </div>
        </div>

<div className="childLinks" style={{display: `${products === false ? 'none' : 'block'}`, color: 'white'}}>

    <ul>
        <li>Exchange</li>
        <li>Academy</li>
        <li>Broker</li>
        <li>Institutional & VIP Services</li>
        <li>Charity</li>
        <li>Cloud</li>
        <li>DEX</li>
        <li>Labs</li>
        <li>Launchpad</li>
        <li>Research</li>
        <li>Gift Card</li>
        <li>Binance Live <div data-bn-type="text" className="css-1oowbt2">new</div></li>

    </ul>
         </div>

        <hr style={{color: 'gray'}}/>
        <div className='nav-links'>
            <div>
        <i className="far fa-file-download" style={{fontSize: '22px',
            color: 'rgb(112, 122, 138)',}}></i>

       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
       Downloads
       </span>
       </div>
        </div>

          <Lang><svg style={{width: '22px',
            color: 'rgb(112, 122, 138)',}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe" className="svg-inline--fa fa-globe fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg>
          <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>English</span>
          
          </Lang>

          <div className='nav-links'>
              <div>
          <i className="far fa-usd-circle" style={{fontSize: '22px',
            color: 'rgb(112, 122, 138)',}}></i>
       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
       USD
       </span>
       </div>
        </div>

        </Nav>
      </Offcanvas.Body>
      <Offcanvas.Body style={{padding: '0',overflowY: 'auto',whiteSpace: 'nowrap',  display:`${profile === false ? 'none' : 'block'}`}}>
        <Nav className="justify-content-end flex-grow-1">
        <div className='prof-link' style={{display: 'block'}}>
        <p style={{paddingTop:' 8px', paddingBottom: '8px',paddingRight: '24px',color: 'rgb(234, 236, 239)',fontWeight: '500',fontSize: '20px'}}>at***@gmail.com</p>
    <div style={{display: 'flex', justifyContent:'space-between'}}>
     <span style={{color: 'rgb(240, 185, 11)'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="eye"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 10l6-6h10l6 6-11 11L1 10zm9-2H8v2h2V8z" fill="url(#vip-g_svg__paint0_linear)"></path><path d="M19 3l1.5-1.5L22 3l-1.5 1.5L19 3zM12.5 12L10 14.5l2.5 2.5 2.5-2.5-2.5-2.5zM3.5 15L2 16.5 3.5 18 5 16.5 3.5 15z" fill="#76808F"></path><defs><linearGradient id="vip-g_svg__paint0_linear" x1="12" y1="21" x2="12" y2="4" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>VIP 0</span>
     <div className='unverified'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none"><path d="M16 8l-1.6-2.1.1-2.7-2.6-.6L10.5.4 8 1.3 5.5.4 4.1 2.6l-2.6.7.1 2.7L0 8l1.6 2.1-.1 2.6 2.5.7 1.5 2.2 2.5-.9 2.5 1 1.5-2.2 2.6-.7-.2-2.8L16 8zm-9.2 3.3L4 8.5l1.1-1.1 1.7 1.7 4-4 1.1 1.1-5.1 5.1z" fill="currentColor"></path></svg>   Verified</div>
</div>
         </div>
     
        <div className='nav-links'>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="User-icon"><path d="M12 11.673c1.914 0 3.465-1.494 3.465-3.337C15.465 6.494 13.914 5 12 5S8.535 6.494 8.535 8.336c0 1.843 1.551 3.337 3.465 3.337zM15.089 13.008H8.91c-2.161 0-3.9 1.673-3.911 3.755v3.03h14v-3.03c-.012-2.082-1.75-3.755-3.911-3.755zm1.562 4.524H7.349v-.77c.012-.825.705-1.492 1.562-1.492h6.178c.857 0 1.55.667 1.562 1.492v.77z" fill="currentColor"></path></svg>
       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
        Dashboard</span>
          </div>
        </div>
        <div className='nav-links'>
            <div>
            <i className="fal fa-wallet" style={{fontSize: '22px',
            color: 'rgb(112, 122, 138)',}}></i>
       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
    Wallet</span>
          </div>
          <div  onClick={() => setTrade((prevState) => !prevState)}>
          <span style={{padding: '20px 0'}}>
            {
          trade === false ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M16 9v2l-4 4.24L8 11V9h8z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M8 15.24v-2L12.24 9l4.24 4.24v2H8z"></path></svg>
          
          }
          </span>
       </div>
          
        </div>
        <div className="childLinks" style={{display: `${trade === false ? 'none' : 'block'}`, color: 'white'}}>
    <ul>
        <li>Overview</li>
        <li>Fiat and Spot</li>
        <li>Margin</li>
        <li>Futures</li>
        <li>Earn</li>
        <li>Pool</li>
        <li>Funding Wallet</li>
        <li>Vanilla Options</li>
        <li>Transaction History</li>
        <li>Account Statement</li>
    </ul>
         </div>
        <div className='nav-links'>
            <div>
            <i className="fal fa-ticket-alt" style={{fontSize: '22px',
            color: 'rgb(112, 122, 138)',}}></i>
       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
       Orders</span>
       </div>
       <div onClick={() => setDeriv((prevState) => !prevState)}>
          <span style={{padding: '20px 0'}}>
            {
          earn === false ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M16 9v2l-4 4.24L8 11V9h8z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M8 15.24v-2L12.24 9l4.24 4.24v2H8z"></path></svg>
          
          }
          </span>
       </div>
        </div>
        <div className="childLinks" style={{display: `${deriv === false ? 'none' : 'block'}`, color: 'white'}}>
    <ul>

        <li>Spot Order</li>
        <li>Margin Order</li>
        <li>P2P Order</li>
        <li>Earn History</li>
        <li>Buy Crypto History</li>
        <li>Loan History</li>
        <li>Convert History</li>
        <li>Launchpad History</li>
        <li>Payment History</li>

    </ul>
         </div>
        <div className='nav-links'>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="User-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 5h16v9.58l-8 4.572-8-4.572V5zm2 2v6.42l6 3.428 6-3.428V7H6z" fill="currentColor"></path></svg>

       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
       Security</span>
       </div>
        </div>
       
        <div className='nav-links'>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="User-icon"><path d="M13 11h5V9h-5v2zM13 15h5v-2h-5v2zM11 13v2H6v-2h5zM8.5 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#76808F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22 4H2v16h20V4zm-2 2v12H4V6h16z" fill="#76808F"></path></svg>
    
       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
       Identification</span>
       </div>
        </div>
  
        <div className='nav-links'>
            <div style={{display: 'flex'}}>
          <i className="far fa-user-plus" style={{fontSize: '22px',
            color: 'rgb(112, 122, 138)',}}></i>
       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
       Referral </span>
       <div data-bn-type="text" className="css-1oowbt2">New</div>
        </div>
        </div>

        <div className='nav-links'>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="User-icon"><path d="M21 19H3v-6h1c.5 0 1-.4 1-1s-.4-1-1-1H3V5h18v6h-1c-.5 0-1 .4-1 1s.4 1 1 1h1v6zM5 17h14v-2.2c-1.2-.4-2-1.5-2-2.8 0-1.3.8-2.4 2-2.8V7H5v2.2c1.2.4 2 1.5 2 2.8 0 1.3-.8 2.4-2 2.8V17z" fill="currentColor"></path><path d="M15 9h-2v2h2V9zM15 13h-2v2h2v-2z" fill="currentColor"></path></svg>

       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
       Reward Center</span>
       </div>
        </div>

        <div className='nav-links'>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="User-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3V1h-2v2H8v2h8V3h-3zM6 20V3H4v19h16V3h-2v17H6zm4-12H8v2h2V8zm-2 4h2v2H8v-2zm8-4h-4v2h4V8zm-4 4h4v2h-4v-2z" fill="currentColor"></path></svg>

       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
       Task Center
       </span>
       </div>
        </div>
        <div className='nav-links'>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="User-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.07 13A7.002 7.002 0 0010 19h4v-3h4v-2h-4v-4h4V8h-4V5h-4a7.002 7.002 0 00-6.93 6H1v2h2.07zM10 7a5 5 0 000 10h2V7h-2z" fill="#76808F"></path><path d="M22 19h-2V5h2v14z" fill="#76808F"></path></svg>

       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
       API Management
       </span>
       </div>
        </div>
        <div className='nav-links'>
            <div>
            <i className="fal fa-bell" style={{fontSize: '22px',
            color: 'rgb(112, 122, 138)',}}></i>
       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
       Notification</span>
       </div>
          <div className='notification'>
    19
          </div>
        </div>

        <hr style={{color: 'gray'}}/>


          <div className='nav-links'>
              <div>
              <i className="fal fa-sign-out" style={{fontSize: '22px',
            color: 'rgb(112, 122, 138)',}}></i>
       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
       Log Out
       </span>
       </div>
        </div>

        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
<div className='desktop' style={{fontSize: '14px', color: 'rgb(234, 236, 239)',}}>

  <div className='menuParentHover'>
  <i className="fas fa-th" style={{fontSize: '18px',
            color: 'rgb(255, 255, 255)',}}>
  </i>

  <span>
      {
      menuHover === false ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M16 9v2l-4 4.24L8 11V9h8z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M8 15.24v-2L12.24 9l4.24 4.24v2H8z"></path></svg>    
    }
  </span>
  
  <div className='mainMenuHover'>
<div className="mainMenuJnr">
<i className="fad fa-coin"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Exchange</p>
    <p style={{fontSize: '12px'}}>Blockchain and crypto asset exchange</p>
  </div>
  <i className="rightHoverArr fal fa-long-arrow-right"></i>
</div>
<div className="mainMenuJnr">
<i className="fad fa-graduation-cap"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Academy</p>
    <p style={{fontSize: '12px'}}>Blockchain and crypto education</p>
  </div>
  <i className="rightHoverArr fal fa-long-arrow-right"></i>

</div>
<div className="mainMenuJnr">
<i className="fad fa-chart-pie"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Broker</p>
    <p style={{fontSize: '12px'}}>Trading terminal solutions</p>
  </div>
  <i className="rightHoverArr fal fa-long-arrow-right"></i>

</div>
<div className="mainMenuJnr">
<i className="fad fa-suitcase"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Institutional & VIP Services</p>
    <p style={{fontSize: '12px'}}>White-glove approach for tailored trading solutions</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>
<div className="mainMenuJnr">
<i className="fad fa-heart"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Charity</p>
    <p style={{fontSize: '12px'}}>Powering blockchain for good</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>
<div className="mainMenuJnr">
<i className="fad fa-clouds"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Cloud</p>
    <p style={{fontSize: '12px'}}>Enterprise exchange solutions</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>
<div className="mainMenuJnr">
<i className="fad fa-hexagon"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>DEX</p>
    <p style={{fontSize: '12px'}}>Fast and secure decentralized digital asset exchange</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>
<div className="mainMenuJnr">
<i className="fad fa-vial"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Labs</p>
    <p style={{fontSize: '12px'}}>Incubator for top blockchain projects</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>
<div className="mainMenuJnr">
<i className="fad fa-rocket"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Launchpad</p>
    <p style={{fontSize: '12px'}}>Token Launch Platform</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>
<div className="mainMenuJnr">
<i className="fad fa-microscope"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Research</p>
    <p style={{fontSize: '12px'}}>Institutional-grade analysis and reports</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>
<div className="mainMenuJnr">
<i className="fas fa-shield"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Trust Wallet</p>
    <p style={{fontSize: '12px'}}>Binance's official crypto wallet</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>
<div className="mainMenuJnr">
<i className="fad fa-gift-card"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Gift Card</p>
    <p style={{fontSize: '12px'}}>Customizable crypto gift card</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>
<div className="mainMenuJnr">
<i className="fad fa-wave-square"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Binance Live</p>
    <p style={{fontSize: '12px'}}>Bringing blockchain broadcasts to you live</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>

    </div>
  </div>
  <div className='buyCryptoParent' style={{display: 'flex'}}>
        <span style={{fontSize: '14px',flexShrink: '1', color: 'rgb(234, 236, 239)'}}>Buy Crypto</span>
        <div data-bn-type="text" className="css-1oowbt2">USD</div>
        <span>
      {
      btcBalance === false ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M16 9v2l-4 4.24L8 11V9h8z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M8 15.24v-2L12.24 9l4.24 4.24v2H8z"></path></svg>    
    }
  </span>
  <div className='buyCryptoHover'>

<div className="buyCryptoJnr">
<i className="fad fa-university"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Bank Deposit</p>
    <p style={{fontSize: '12px'}}>SWIFT Bank Transfer</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>
<div className="buyCryptoJnr">
<i className="far fa-credit-card"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Credit/Debit Card</p>
    <p style={{fontSize: '12px'}}>Buy crypto via card</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>
<div className="buyCryptoJnr">
<i className="fad fa-people-carry"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>P2P Trading</p>
    <p style={{fontSize: '12px'}}>Bank transfer and 100+ options</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>
<div className="buyCryptoJnr">
<i className="fad fa-usd-circle"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Third-party Payment</p>
    <p style={{fontSize: '12px'}}>Simplex, Banxa, Paxos</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>

    </div>
</div>
  <div>
      <p>Markets</p>
</div>
  <div className='tradeParent' style={{display: 'flex'}}>
      <span>Trade</span>
      <span>
      {
      btcBalance === false ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M16 9v2l-4 4.24L8 11V9h8z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M8 15.24v-2L12.24 9l4.24 4.24v2H8z"></path></svg>    
    }
  </span>

  <div className='tradeHover'>
    
<div className="tradeJnr">
<i className="fad fa-sync"></i>

  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Convert</p>
    <p style={{fontSize: '12px'}}>The easiest way to trade</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>
<div className="tradeJnr">
<i className="fas fa-cube"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Classic</p>
    <p style={{fontSize: '12px'}}>Simple and easy-to-use interface</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>
<div className="tradeJnr">
<i className="fas fa-cubes"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Advanced</p>
    <p style={{fontSize: '12px'}}>Full access to all trading tools</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>
<div className="tradeJnr">
<i className="far fa-expand-alt"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Margin</p>
    <p style={{fontSize: '12px'}}>Increase your profits with leverage</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>
<div className="tradeJnr">
<i className="fad fa-people-carry"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>P2P</p>
    <p style={{fontSize: '12px'}}>Bank transfer and 100+ options</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>
<div className="tradeJnr">
<i className="fad fa-chart-line"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Strategy Trading</p>
    <p style={{fontSize: '12px'}}>Trading made easy, trade like a pro</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>
<div className="tradeJnr">
<i className="fad fa-retweet"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Swap Farming</p>
    <p style={{fontSize: '12px'}}>Swap to earn BNB</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>
<div className="tradeJnr">
<i className="fad fa-chart-area"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Fan Token</p>
    <p style={{fontSize: '12px'}}>Upgrade your fan experience</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>

    </div>
</div>
<div className='forDesktop'>
  <div style={{display: 'flex'}} className='derivParent'>
      <span>Derivatives</span>
      <span>
      {
      btcBalance === false ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M16 9v2l-4 4.24L8 11V9h8z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M8 15.24v-2L12.24 9l4.24 4.24v2H8z"></path></svg>    
    }
  </span>
  <div className='derivHover'>
    
<div className="derivJnr">
<i className="fad fa-external-link-square-alt"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Binance Futures Overview</p>
    <p style={{fontSize: '12px'}}>View our full range of crypto-derivative instruments</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>
<div className="derivJnr">
<i className="fad fa-user-shield"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Responsible Trading</p>
    <p style={{fontSize: '12px'}}>Learn how you could practice responsible trading with Binance Futures</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>

<div className="derivJnr">
<i className="fad fa-usd-square"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>USDⓈ-M Futures</p>
    <p style={{fontSize: '12px'}}>Perpetual or Quarterly Contracts settled in USDT or BUSD</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>
<div className="derivJnr">
<i className="fad fa-compact-disc"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>COIN-M Futures</p>
    <p style={{fontSize: '12px'}}>Perpetual or Quarterly Contracts settled in Cryptocurrency</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>
<div className="derivJnr">
<i className="fad fa-sort-alpha-up"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Vanilla Options</p>
    <p style={{fontSize: '12px'}}>Buy and Sell European-style Vanilla Options.</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>
<div className="derivJnr">
<i className="fad fa-sort-down"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Leveraged Tokens</p>
    <p style={{fontSize: '12px'}}>Enjoy increased leverage without risk of liquidation</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>
<div className="derivJnr">
<i className="fad fa-swords"></i>
  <div style={{display: 'block', margin: 'auto 0'}}>
    <p style={{fontSize: '16px', lineHeight: '1'}}>Battle</p>
    <p style={{fontSize: '12px'}}>Battle to Win, Long vs Short</p>
  </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

  
</div>

    </div>
</div>
  <div style={{display: 'flex'}} className='earnParent'>
      <p>Earn</p>
      <span>
      {
      btcBalance === false ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M16 9v2l-4 4.24L8 11V9h8z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M8 15.24v-2L12.24 9l4.24 4.24v2H8z"></path></svg>    
    }

</span>
<div className='earnHover'>
    
    <div className="earnJnr">
    <i className="fad fa-piggy-bank"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '16px', lineHeight: '1'}}>Binance Earn</p>
        <p style={{fontSize: '12px'}}>One-stop Investment Solution</p>
      </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

      
    </div>
    <div className="earnJnr">
    <i className="fad fa-rocket"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '16px', lineHeight: '1'}}>Launchpad</p>
        <p style={{fontSize: '12px'}}>Token Launch Platform</p>
      </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

      
    </div>
    <div className="earnJnr">
    <i className="fad fa-coin"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '16px', lineHeight: '1'}}>Savings</p>
        <p style={{fontSize: '12px'}}>Your Crypto Savings Account</p>
      </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

      
    </div>
    <div className="earnJnr">
    <i className="fad fa-compact-disc"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '16px', lineHeight: '1'}}>Staking</p>
        <p style={{fontSize: '12px'}}>Easy Stake, Higher Returns</p>
      </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

      
    </div>
    <div className="earnJnr">
    <i className="fad fa-compact-disc"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '16px', lineHeight: '1'}}>BNB Vault</p>
        <p style={{fontSize: '12px'}}>Earn Multi-benefits with BNB</p>
      </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

      
    </div>
    <div className="earnJnr">
    <i className="fad fa-coins"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '16px', lineHeight: '1'}}>Dual Investment</p>
        <p style={{fontSize: '12px'}}>Commit your crypto holdings and enjoy high returns</p>
      </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

      
    </div>
    <div className="earnJnr">
    <i className="fad fa-hurricane"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '16px', lineHeight: '1'}}>Liquidity Farming</p>
        <p style={{fontSize: '12px'}}>Add liquidity and earn double</p>
      </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

      
    </div>
    <div className="earnJnr">
    <i className="fad fa-recycle"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '16px', lineHeight: '1'}}>Auto-Invest</p>
        <p style={{fontSize: '12px'}}>Accumulate crypto on autopilot</p>
      </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

      
    </div>
    <div className="earnJnr">
    <i className="fad fa-digging"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '16px', lineHeight: '1'}}>Binance Pool</p>
        <p style={{fontSize: '12px'}}>Mine more rewards by connecting to the pool</p>
      </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

      
    </div>
    
        </div>

  
</div>
  <div style={{display: 'flex'}} className='financeParent'>
      <p>Finance</p>
      <span>
      {
      btcBalance === false ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M16 9v2l-4 4.24L8 11V9h8z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M8 15.24v-2L12.24 9l4.24 4.24v2H8z"></path></svg>    
    }
  </span>

  <div className='financeHover'>
    
    <div className="financeJnr">
    <i className="fad fa-credit-card-front"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '16px', lineHeight: '1'}}>Binance Visa Card</p>
        <p style={{fontSize: '12px'}}>Convert and pay with crypto worldwide</p>
      </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

      
    </div>
    <div className="financeJnr">
    <i className="fad fa-wallet"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '16px', lineHeight: '1'}}>Crypto Loans</p>
        <p style={{fontSize: '12px'}}>Get an instant loan secured by crypto assets</p>
      </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

      
    </div>
    <div className="financeJnr">
    <i className="fad fa-credit-card-front"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '16px', lineHeight: '1'}}>Binance Pay</p>
        <p style={{fontSize: '12px'}}>Send and spend crypto at zero fees</p>
      </div>  <i className="rightHoverArr fal fa-long-arrow-right"></i>

      
    </div>
  
    
        </div>

</div>
</div>
  <div style={{display: 'flex'}}>
  <span  style={{fontSize: '14px',flexShrink: '1', color: 'rgb(234, 236, 239)'}}>NFT</span>
        <div data-bn-type="text" className="css-1oowbt2">New</div>
</div>
<div style={{display: 'flex'}} className='walletParent'>
      <p>Wallet</p>
      <span>
      {
      btcBalance === false ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M16 9v2l-4 4.24L8 11V9h8z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M8 15.24v-2L12.24 9l4.24 4.24v2H8z"></path></svg>    
    }
  </span>

  <div className='walletHover'>
    
    <div className="walletJnr">
    <i className="far fa-th-large"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '14px', lineHeight: '1'}}>Overview</p>
      </div>
    </div>
    <div className="walletJnr">
    <i className="fad fa-coins"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '14px', lineHeight: '1'}}>Fiat and Spot</p>
        <p style={{fontSize: '12px'}}>(Deposit & Withdraw)</p>
      </div> 

      
    </div>
    <div className="walletJnr">
    <i className="fad fa-external-link-square-alt"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '14px', lineHeight: '1'}}>Margin</p>
      </div>

    </div>
    <div className="walletJnr">
    <i className="fad fa-external-link-square-alt"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '14px', lineHeight: '1'}}>Futures</p>
      </div>
      

    </div>
    <div className="walletJnr">
    <i className="fad fa-spinner"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '16px', lineHeight: '1'}}>Earn</p>
      </div>
      

    </div>
    <div className="walletJnr">
    <i className="fad fa-digging"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '14px', lineHeight: '1'}}>Pool</p>
      </div>
      

    </div>
    <div className="walletJnr">
    <i className="fal fa-stop-circle"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '14px', lineHeight: '1'}}>Funding Wallet</p>
      </div>
      

    </div>
    <div className="walletJnr">
    <i className="fab fa-viacoin"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '14px', lineHeight: '1'}}>Vanilla options</p>
      </div>
      

    </div>
    <div className="walletJnr">
    <i className="fad fa-history"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '14px', lineHeight: '1'}}>Transaction History</p>
      </div>
      

    </div>
    <div className="walletJnr">
    <i className="fad fa-chart-pie"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '14px', lineHeight: '1'}}>Account Statement</p>
      </div>
      

    </div>
    
        </div>
</div>
<div style={{display: 'flex'}} className='orderParent'>
      <p>Orders</p>
      <span>
      {
      btcBalance === false ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M16 9v2l-4 4.24L8 11V9h8z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M8 15.24v-2L12.24 9l4.24 4.24v2H8z"></path></svg>    
    }
  </span>

  <div className='orderHover'>
    
    <div className="orderJnr">
    <i className="fad fa-coins"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '14px', lineHeight: '1'}}>Spot Order</p>
      </div>


    </div>
    <div className="orderJnr">
    <i className="fad fa-external-link-square-alt"></i>
    
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '14px', lineHeight: '1'}}>Margin Order</p>
      </div>
      

    </div>
    <div className="orderJnr">
    <i className="fad fa-people-carry"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '14px', lineHeight: '1'}}>P2P Order</p>
      </div>
      

    </div>
    <div className="orderJnr">
    <i className="fad fa-spinner"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '14px', lineHeight: '1'}}>Earn History</p>
      </div>
      

    </div>
    <div className="orderJnr">
    <i className="fad fa-coins"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '14px', lineHeight: '1'}}>Buy Crypto History</p>
      </div>
      

    </div>
    <div className="orderJnr">
    <i className="fas fa-hand-holding-usd"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '14px', lineHeight: '1'}}>Loan History</p>
      </div>
      

    </div>
    <div className="orderJnr">
    <i className="fal fa-coin"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '14px', lineHeight: '1'}}>Convert History</p>
      </div>
      

    </div>
    <div className="orderJnr">
    <i className="fad fa-rocket"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '14px', lineHeight: '1'}}>Launchpad History</p>
      </div>
      

    </div>
    <div className="orderJnr">
    <i className="fal fa-credit-card-front"></i>
      <div style={{display: 'block', margin: 'auto 0'}}>
        <p style={{fontSize: '14px', lineHeight: '1'}}>Payment History</p>
      </div>
      

    </div>
    
        </div>
</div>
<div>
  <div className="profileLgParent">
<I className="far fa-user-circle" style={{ fontSize: '24px'
}}></I>
</div>
<div className='profile-lg-hover'>
        <Nav>
        <div className='prof-link' style={{display: 'block'}}>
        <p style={{paddingTop:' 8px', paddingBottom: '8px',paddingRight: '24px',color: 'rgb(234, 236, 239)',fontWeight: '500',fontSize: '20px'}}>at***@gmail.com</p>
    <div style={{display: 'flex', justifyContent:'space-between'}}>
     <span style={{color: 'rgb(240, 185, 11)'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="eye"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 10l6-6h10l6 6-11 11L1 10zm9-2H8v2h2V8z" fill="url(#vip-g_svg__paint0_linear)"></path><path d="M19 3l1.5-1.5L22 3l-1.5 1.5L19 3zM12.5 12L10 14.5l2.5 2.5 2.5-2.5-2.5-2.5zM3.5 15L2 16.5 3.5 18 5 16.5 3.5 15z" fill="#76808F"></path><defs><linearGradient id="vip-g_svg__paint0_linear" x1="12" y1="21" x2="12" y2="4" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>VIP 0</span>
     <div className='unverified'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none"><path d="M16 8l-1.6-2.1.1-2.7-2.6-.6L10.5.4 8 1.3 5.5.4 4.1 2.6l-2.6.7.1 2.7L0 8l1.6 2.1-.1 2.6 2.5.7 1.5 2.2 2.5-.9 2.5 1 1.5-2.2 2.6-.7-.2-2.8L16 8zm-9.2 3.3L4 8.5l1.1-1.1 1.7 1.7 4-4 1.1 1.1-5.1 5.1z" fill="currentColor"></path></svg>   Verified</div>
</div>
         </div>
     
        <div className='nav-links'>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="User-icon"><path d="M12 11.673c1.914 0 3.465-1.494 3.465-3.337C15.465 6.494 13.914 5 12 5S8.535 6.494 8.535 8.336c0 1.843 1.551 3.337 3.465 3.337zM15.089 13.008H8.91c-2.161 0-3.9 1.673-3.911 3.755v3.03h14v-3.03c-.012-2.082-1.75-3.755-3.911-3.755zm1.562 4.524H7.349v-.77c.012-.825.705-1.492 1.562-1.492h6.178c.857 0 1.55.667 1.562 1.492v.77z" fill="currentColor"></path></svg>
       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
        Dashboard</span>
          </div>
        </div>

        <div className='nav-links'>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="User-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 5h16v9.58l-8 4.572-8-4.572V5zm2 2v6.42l6 3.428 6-3.428V7H6z" fill="currentColor"></path></svg>

       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
       Security</span>
       </div>
        </div>
       
        <div className='nav-links'>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="User-icon"><path d="M13 11h5V9h-5v2zM13 15h5v-2h-5v2zM11 13v2H6v-2h5zM8.5 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#76808F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22 4H2v16h20V4zm-2 2v12H4V6h16z" fill="#76808F"></path></svg>
    
       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
       Identification</span>
       </div>
        </div>
  
        <div className='nav-links'>
            <div style={{display: 'flex'}}>
          <i className="far fa-user-plus" style={{fontSize: '22px',
            color: 'rgb(112, 122, 138)',}}></i>
       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
       Referral </span>
       <div data-bn-type="text" className="css-1oowbt2">New</div>
        </div>
        </div>

        <div className='nav-links'>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="User-icon"><path d="M21 19H3v-6h1c.5 0 1-.4 1-1s-.4-1-1-1H3V5h18v6h-1c-.5 0-1 .4-1 1s.4 1 1 1h1v6zM5 17h14v-2.2c-1.2-.4-2-1.5-2-2.8 0-1.3.8-2.4 2-2.8V7H5v2.2c1.2.4 2 1.5 2 2.8 0 1.3-.8 2.4-2 2.8V17z" fill="currentColor"></path><path d="M15 9h-2v2h2V9zM15 13h-2v2h2v-2z" fill="currentColor"></path></svg>

       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
       Reward Center</span>
       </div>
        </div>

        <div className='nav-links'>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="User-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3V1h-2v2H8v2h8V3h-3zM6 20V3H4v19h16V3h-2v17H6zm4-12H8v2h2V8zm-2 4h2v2H8v-2zm8-4h-4v2h4V8zm-4 4h4v2h-4v-2z" fill="currentColor"></path></svg>

       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
       Task Center
       </span>
       </div>
        </div>
        <div className='nav-links'>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="User-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.07 13A7.002 7.002 0 0010 19h4v-3h4v-2h-4v-4h4V8h-4V5h-4a7.002 7.002 0 00-6.93 6H1v2h2.07zM10 7a5 5 0 000 10h2V7h-2z" fill="#76808F"></path><path d="M22 19h-2V5h2v14z" fill="#76808F"></path></svg>

       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
       API Management
       </span>
       </div>
        </div>

        <hr style={{color: 'gray'}}/>


          <div className='nav-links'>
              <div>
              <i className="fal fa-sign-out" style={{fontSize: '22px',
            color: 'rgb(112, 122, 138)',}}></i>
       <span style={{margin: '0 10px',fontSize: '16px', color: 'rgb(234, 236, 239)'}}>
       Log Out
       </span>
       </div>
        </div>

        </Nav>
      </div>

</div>

 <div>
        <div>
            <i className="fal fa-bell" style={{fontSize: '22px',
            color: 'rgb(112, 122, 138)', position: 'relative'}}></i>
            <div className='noti-lg'>
  19
            </div>
    </div>
    </div>
    <div>
      <p>Downloads</p>
    </div>
  <div style={{display: 'flex'}}>
    <p>English</p>
    <span style={{fontSize: '14px', fontWeight: '0', color:"#5e6673", margin: '0 5px' }}>|</span>
    <p>USD</p>
    </div>


  </div>

      {/* <div className='desktop'>
<p>sssssssssssss</p>
<p>sssssssssssss</p>
<p>sssssssssssss</p>
      </div> */}
      </div>
      </nav>

<main className='main'>

      <div className="horizontal-menu">
        <ul>
      
          <li><svg style={{color: 'rgb(240, 185, 11)',}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="H-icon"><path d="M12 11.673c1.914 0 3.465-1.494 3.465-3.337C15.465 6.494 13.914 5 12 5S8.535 6.494 8.535 8.336c0 1.843 1.551 3.337 3.465 3.337zM15.089 13.008H8.91c-2.161 0-3.9 1.673-3.911 3.755v3.03h14v-3.03c-.012-2.082-1.75-3.755-3.911-3.755zm1.562 4.524H7.349v-.77c.012-.825.705-1.492 1.562-1.492h6.178c.857 0 1.55.667 1.562 1.492v.77z" fill="currentColor"></path></svg>Dashboard</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="H-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 5h16v9.58l-8 4.572-8-4.572V5zm2 2v6.42l6 3.428 6-3.428V7H6z" fill="currentColor"></path></svg>Security</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="H-icon"><path d="M13 11h5V9h-5v2zM13 15h5v-2h-5v2zM11 13v2H6v-2h5zM8.5 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#76808F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22 4H2v16h20V4zm-2 2v12H4V6h16z" fill="#76808F"></path></svg>Identification</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="H-icon"><g clip-path="url(#sidebar-payment-s24_svg__clip0)" fill="currentColor"><path d="M12.589 11.251v-1.88a2.17 2.17 0 011.15.688l.031.032 1.126-1.024-.024-.032a3.208 3.208 0 00-2.14-1.065V6.858h-1.42V7.97c-1.486.184-2.332 1.008-2.332 2.273 0 1.208.806 1.968 2.483 2.32v2.05a2.724 2.724 0 01-1.589-.873l-.032-.024-1.086.992-.032.024.032.032a3.781 3.781 0 002.555 1.249V17.1h1.421v-1.136a2.448 2.448 0 001.624-.765 2.457 2.457 0 00.668-1.668c0-1.185-.75-1.889-2.435-2.28zm.734 2.417a.938.938 0 01-.734.912v-1.76c.654.216.734.584.734.848zm-1.86-2.673c-.559-.168-.783-.392-.783-.8 0-.456.256-.728.783-.848v1.648z"></path><path d="M11.973 5.6c1.263 0 2.497.376 3.547 1.079a6.397 6.397 0 012.352 2.872 6.413 6.413 0 01-1.384 6.974 6.38 6.38 0 01-6.958 1.387 6.388 6.388 0 01-2.866-2.357A6.41 6.41 0 015.588 12 6.414 6.414 0 017.46 7.477 6.385 6.385 0 0111.973 5.6zm0-1.6a7.97 7.97 0 00-4.435 1.348 7.996 7.996 0 00-2.94 3.59 8.017 8.017 0 001.73 8.719 7.965 7.965 0 008.699 1.734 7.985 7.985 0 003.583-2.946 8.013 8.013 0 00-.993-10.102A7.98 7.98 0 0011.973 4z"></path></g><defs><clipPath id="sidebar-payment-s24_svg__clip0"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg>Payment</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="H-icon"><path d="M18.554 13.309H16.49v-2.346h-2.446V8.976h2.446V6.62h2.064v2.356H21v1.987h-2.446v2.346zM9.151 10.864c1.682 0 3.045-1.313 3.045-2.932C12.196 6.312 10.833 5 9.151 5 7.47 5 6.107 6.313 6.107 7.932c0 1.62 1.363 2.932 3.044 2.932zM11.866 12.037h-5.43c-1.898 0-3.426 1.47-3.436 3.3V18h12.303v-2.664c-.01-1.828-1.538-3.3-3.437-3.3zm1.373 3.975H5.063v-.676c.01-.725.62-1.312 1.373-1.312h5.429c.753 0 1.362.587 1.373 1.312v.676z" fill="currentColor"></path></svg>Referral</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="H-icon"><path d="M21 19H3v-6h1c.5 0 1-.4 1-1s-.4-1-1-1H3V5h18v6h-1c-.5 0-1 .4-1 1s.4 1 1 1h1v6zM5 17h14v-2.2c-1.2-.4-2-1.5-2-2.8 0-1.3.8-2.4 2-2.8V7H5v2.2c1.2.4 2 1.5 2 2.8 0 1.3-.8 2.4-2 2.8V17z" fill="currentColor"></path><path d="M15 9h-2v2h2V9zM15 13h-2v2h2v-2z" fill="currentColor"></path></svg>Reward Center</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="H-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3V1h-2v2H8v2h8V3h-3zM6 20V3H4v19h16V3h-2v17H6zm4-12H8v2h2V8zm-2 4h2v2H8v-2zm8-4h-4v2h4V8zm-4 4h4v2h-4v-2z" fill="currentColor"></path></svg>Task Center</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="H-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.07 13A7.002 7.002 0 0010 19h4v-3h4v-2h-4v-4h4V8h-4V5h-4a7.002 7.002 0 00-6.93 6H1v2h2.07zM10 7a5 5 0 000 10h2V7h-2z" fill="#76808F"></path><path d="M22 19h-2V5h2v14z" fill="#76808F"></path></svg>API Management</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="H-icon"><path d="M20 10.982v2.036h-3v1.659h-2v-1.66H4v-2.035h11V9.333h2v1.65h3zM4 7.695V5.659h3V4h2v1.659h11v2.036H9v1.649H7v-1.65H4zM20 16.316v2.035h-7V20h-2v-1.649H4v-2.035h7v-1.66h2v1.66h7z" fill="currentColor"></path></svg>Settings</li>
  
        </ul>
      </div>
      <div className='sidebar'>
          <div className="sidebar-list">
            <div className='list'>
            <svg style={{color: 'rgb(240, 185, 11)',}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="H-icon"><path d="M12 11.673c1.914 0 3.465-1.494 3.465-3.337C15.465 6.494 13.914 5 12 5S8.535 6.494 8.535 8.336c0 1.843 1.551 3.337 3.465 3.337zM15.089 13.008H8.91c-2.161 0-3.9 1.673-3.911 3.755v3.03h14v-3.03c-.012-2.082-1.75-3.755-3.911-3.755zm1.562 4.524H7.349v-.77c.012-.825.705-1.492 1.562-1.492h6.178c.857 0 1.55.667 1.562 1.492v.77z" fill="currentColor"></path></svg>
            Dashboard
            </div>
            <div className='list'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="H-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 5h16v9.58l-8 4.572-8-4.572V5zm2 2v6.42l6 3.428 6-3.428V7H6z" fill="currentColor"></path></svg>
            Security
            </div>
            <div className='list'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="H-icon"><path d="M13 11h5V9h-5v2zM13 15h5v-2h-5v2zM11 13v2H6v-2h5zM8.5 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#76808F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22 4H2v16h20V4zm-2 2v12H4V6h16z" fill="#76808F"></path></svg>
            Identification
            </div>
            <div className='list'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="H-icon"><g clip-path="url(#sidebar-payment-s24_svg__clip0)" fill="currentColor"><path d="M12.589 11.251v-1.88a2.17 2.17 0 011.15.688l.031.032 1.126-1.024-.024-.032a3.208 3.208 0 00-2.14-1.065V6.858h-1.42V7.97c-1.486.184-2.332 1.008-2.332 2.273 0 1.208.806 1.968 2.483 2.32v2.05a2.724 2.724 0 01-1.589-.873l-.032-.024-1.086.992-.032.024.032.032a3.781 3.781 0 002.555 1.249V17.1h1.421v-1.136a2.448 2.448 0 001.624-.765 2.457 2.457 0 00.668-1.668c0-1.185-.75-1.889-2.435-2.28zm.734 2.417a.938.938 0 01-.734.912v-1.76c.654.216.734.584.734.848zm-1.86-2.673c-.559-.168-.783-.392-.783-.8 0-.456.256-.728.783-.848v1.648z"></path><path d="M11.973 5.6c1.263 0 2.497.376 3.547 1.079a6.397 6.397 0 012.352 2.872 6.413 6.413 0 01-1.384 6.974 6.38 6.38 0 01-6.958 1.387 6.388 6.388 0 01-2.866-2.357A6.41 6.41 0 015.588 12 6.414 6.414 0 017.46 7.477 6.385 6.385 0 0111.973 5.6zm0-1.6a7.97 7.97 0 00-4.435 1.348 7.996 7.996 0 00-2.94 3.59 8.017 8.017 0 001.73 8.719 7.965 7.965 0 008.699 1.734 7.985 7.985 0 003.583-2.946 8.013 8.013 0 00-.993-10.102A7.98 7.98 0 0011.973 4z"></path></g><defs><clipPath id="sidebar-payment-s24_svg__clip0"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg>
            Payment
            </div>
            <div className='list'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="H-icon"><path d="M18.554 13.309H16.49v-2.346h-2.446V8.976h2.446V6.62h2.064v2.356H21v1.987h-2.446v2.346zM9.151 10.864c1.682 0 3.045-1.313 3.045-2.932C12.196 6.312 10.833 5 9.151 5 7.47 5 6.107 6.313 6.107 7.932c0 1.62 1.363 2.932 3.044 2.932zM11.866 12.037h-5.43c-1.898 0-3.426 1.47-3.436 3.3V18h12.303v-2.664c-.01-1.828-1.538-3.3-3.437-3.3zm1.373 3.975H5.063v-.676c.01-.725.62-1.312 1.373-1.312h5.429c.753 0 1.362.587 1.373 1.312v.676z" fill="currentColor"></path></svg>
            Referral
            </div>
            <div className='list'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="H-icon"><path d="M21 19H3v-6h1c.5 0 1-.4 1-1s-.4-1-1-1H3V5h18v6h-1c-.5 0-1 .4-1 1s.4 1 1 1h1v6zM5 17h14v-2.2c-1.2-.4-2-1.5-2-2.8 0-1.3.8-2.4 2-2.8V7H5v2.2c1.2.4 2 1.5 2 2.8 0 1.3-.8 2.4-2 2.8V17z" fill="currentColor"></path><path d="M15 9h-2v2h2V9zM15 13h-2v2h2v-2z" fill="currentColor"></path></svg>
            Reward Center
            </div>
            <div className='list'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="H-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3V1h-2v2H8v2h8V3h-3zM6 20V3H4v19h16V3h-2v17H6zm4-12H8v2h2V8zm-2 4h2v2H8v-2zm8-4h-4v2h4V8zm-4 4h4v2h-4v-2z" fill="currentColor"></path></svg>
            Task Center
            </div>
            <div className='list'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="H-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.07 13A7.002 7.002 0 0010 19h4v-3h4v-2h-4v-4h4V8h-4V5h-4a7.002 7.002 0 00-6.93 6H1v2h2.07zM10 7a5 5 0 000 10h2V7h-2z" fill="#76808F"></path><path d="M22 19h-2V5h2v14z" fill="#76808F"></path></svg>
            API Management
            </div>
            <div className='list'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="H-icon"><path d="M20 10.982v2.036h-3v1.659h-2v-1.66H4v-2.035h11V9.333h2v1.65h3zM4 7.695V5.659h3V4h2v1.659h11v2.036H9v1.649H7v-1.65H4zM20 16.316v2.035h-7V20h-2v-1.649H4v-2.035h7v-1.66h2v1.66h7z" fill="currentColor"></path></svg>
            Settings
            </div>
            
          </div>
      </div>
     <div>
      <div className='last-login'>
          <div className='inner-LL'>
            <div className='name-tag'>
             <div className="at">at</div>
            </div>
            <div className='credentials'>
            <div className='user-id'>
            <p style={{fontSize: '16px'}}>at***@gmail.com</p>
            <p style={{color: '#aaaaaa', margin: '0 10px 14px'}}>User ID:<span style={{color: '#111'}}>309925594</span> </p>
            <div className='vip-desktop'>
            <p style={{ textDecoration: 'underline'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="eye"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 10l6-6h10l6 6-11 11L1 10zm9-2H8v2h2V8z" fill="url(#vip-g_svg__paint0_linear)"></path><path d="M19 3l1.5-1.5L22 3l-1.5 1.5L19 3zM12.5 12L10 14.5l2.5 2.5 2.5-2.5-2.5-2.5zM3.5 15L2 16.5 3.5 18 5 16.5 3.5 15z" fill="#76808F"></path><defs><linearGradient id="vip-g_svg__paint0_linear" x1="12" y1="21" x2="12" y2="4" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>VIP0</p>
            <div style={{ margin: '0 5px', height: '20px'}} className="personal">Personal</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="css-15mu06y"><path d="M8.287 20.5c7.545 0 11.675-6.535 11.675-12.198 0-.181 0-.362-.01-.555A8.518 8.518 0 0022 5.527a8.283 8.283 0 01-2.363.68 4.323 4.323 0 001.81-2.379c-.791.499-1.67.85-2.612 1.042a3.967 3.967 0 00-2.992-1.37c-2.266 0-4.109 1.925-4.109 4.292 0 .34.044.657.109.974-3.404-.17-6.428-1.89-8.455-4.485a4.44 4.44 0 00-.553 2.164c0 1.483.726 2.797 1.82 3.567a3.982 3.982 0 01-1.853-.532v.057c0 2.072 1.42 3.816 3.285 4.201a3.806 3.806 0 01-1.084.148c-.26 0-.52-.023-.77-.08.52 1.71 2.038 2.945 3.837 2.98a7.995 7.995 0 01-5.094 1.834c-.326 0-.662-.011-.976-.057A11.183 11.183 0 008.287 20.5z" fill="#76808F"></path></svg>
            <p style={{ textDecoration: 'underline', color: 'rgb(71, 77, 87)'}}>not linked</p>
            </div>
            </div>
            <div className='vip'>
            <p style={{ textDecoration: 'underline'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="eye"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 10l6-6h10l6 6-11 11L1 10zm9-2H8v2h2V8z" fill="url(#vip-g_svg__paint0_linear)"></path><path d="M19 3l1.5-1.5L22 3l-1.5 1.5L19 3zM12.5 12L10 14.5l2.5 2.5 2.5-2.5-2.5-2.5zM3.5 15L2 16.5 3.5 18 5 16.5 3.5 15z" fill="#76808F"></path><defs><linearGradient id="vip-g_svg__paint0_linear" x1="12" y1="21" x2="12" y2="4" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>VIP0</p>
            <div className="personal">Personal</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="css-15mu06y"><path d="M8.287 20.5c7.545 0 11.675-6.535 11.675-12.198 0-.181 0-.362-.01-.555A8.518 8.518 0 0022 5.527a8.283 8.283 0 01-2.363.68 4.323 4.323 0 001.81-2.379c-.791.499-1.67.85-2.612 1.042a3.967 3.967 0 00-2.992-1.37c-2.266 0-4.109 1.925-4.109 4.292 0 .34.044.657.109.974-3.404-.17-6.428-1.89-8.455-4.485a4.44 4.44 0 00-.553 2.164c0 1.483.726 2.797 1.82 3.567a3.982 3.982 0 01-1.853-.532v.057c0 2.072 1.42 3.816 3.285 4.201a3.806 3.806 0 01-1.084.148c-.26 0-.52-.023-.77-.08.52 1.71 2.038 2.945 3.837 2.98a7.995 7.995 0 01-5.094 1.834c-.326 0-.662-.011-.976-.057A11.183 11.183 0 008.287 20.5z" fill="#76808F"></path></svg>
            <p style={{ textDecoration: 'underline', color: 'rgb(71, 77, 87)'}}>not linked</p>
            </div>
            <div style={{color: 'rgb(71, 77, 87)', fontSize: '12px', lineHeight: '30px'}}>Last login time 2021-12-19 10:45:28 <span style={{marginLeft: '5px', fontSize:' 12px',}}>IP: 197.210.76.132</span>
            </div>

            </div>
          </div>
      </div>
      
      <div className="welcome">
    <h1>Welcome to Binance</h1>
<p style={{fontWeight: '400',fontSize: '14px',color: 'rgba(255, 255, 255, 0.5)'}}>Just a few more steps and you’re good to go!
</p>
<div className='welcome-lg'>
<div className="register-account">
  <div className="checkMark">
    
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="css-7g6s51"><path d="M13.667 4.947l-7.394 7.386-.94-.94L2 8.06l.94-.947 3.333 3.334L12.72 4l.947.947z"></path></svg>
  
  </div>
  {/* <span className="sm-dotLine">................................................................</span> */}
  <span className="lg-dotLine" style={{position: 'absolute',top: '0', margin: '15px 0 0', zIndex: '0', color: '#f8d12f',}}>............................................................................................................................................................................</span>
<p style={{margin:' -1px 5px 0px',fontWeight: '600',
    fontSize: '16px',lineHeight: '22px',color: 'rgb(255, 255, 255)',paddingBottom: '0px'}}>Register Account</p>
</div>
<div className="FA">
  
<p style={{margin:' -1px 5px 0px',fontWeight: '600',
    fontSize: '16px',lineHeight: '22px',color: 'rgb(255, 255, 255)',padding: '0px 170px 0 0'}}>
     <div style={{display: 'flex'}}>
     <div className="checkMark">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="css-7g6s51"><path d="M13.667 4.947l-7.394 7.386-.94-.94L2 8.06l.94-.947 3.333 3.334L12.72 4l.947.947z"></path></svg>
  </div>
  {/* <span style={{position: 'absolute',margin: '80px 0', left: '-12%', zIndex: '0', color: '#f8d12f', transform: 'rotate(-90deg)'}}>.......................................</span> */}
  <span style={{margin:' -1px 5px 0px',fontSize: '16px'}}>2FA</span>
  </div>
    <br />
    <p style={{fontWeight: '400',fontSize: '12px',color: 'rgba(255, 255, 255, 0.5)'}}>Secure your account with two-factor authentication！
</p>
    </p>
    <p style={{padding: '10px',fontWeight: '400',fontSize: '14px',color: 'rgba(255, 255, 255, 0.5)'}}>Verified
</p>
</div>
<div className='depositFund'>
<p style={{margin:' -1px 5px 0px',fontWeight: '600',
    fontSize: '16px',lineHeight: '22px',color: 'rgb(255, 255, 255)',padding: '0px 50px 0 0'}}>
     <div style={{display: 'flex'}}>
     <div className="checkMarkNum">
  3
  </div>
  <span style={{margin:' -1px 5px 0px', fontSize: '16px'}}>Deposit Funds</span>
  </div>
    <br />
    <p style={{padding:'0 50px 0 0',fontWeight: '400',fontSize: '12px',color: 'rgba(255, 255, 255, 0.5)'}}>Add cash or crypto funds to your wallet and start trading right away
</p>
    </p>
    <div className='depo'>Deposit
</div>
</div>
</div>
    </div>
    <Container fluid="lg" className="d-none d-lg-block">
  <Row >
  <Col lg={8}>
  <div className='balance'>
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
  <p style={{fontWeight: '600',fontSize: '14px',}}>Balance Details</p>
  <div className='pill-lg'>
  <Pill bgColor='rgb(252, 213, 53)' text='Deposit'/>
<Pill bgColor='rgb(234, 236, 239)' text='Withdraw'/>
<Pill bgColor='rgb(234, 236, 239)' text='Gift Card'/>
    </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="d-right"><path d="M14.65 12.24l-4.24 4.24L9 15.06l2.82-2.82L9 9.42 10.41 8l4.24 4.24z" fill="currentColor"></path></svg>
  </div>
    <div className='pill-sm'>
  <Pill bgColor='rgb(252, 213, 53)' text='Deposit'/>
<Pill bgColor='rgb(234, 236, 239)' text='Withdraw'/>
<Pill bgColor='rgb(234, 236, 239)' text='Gift Card'/>
    </div>
    <Box sx={{ width: '100%', typography: 'body1', margin: '10px 0' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Spot" value="1" />
            <Tab label="P2P" value="2" />
            <Tab label="Margin" value="3" />
            <Tab label="Futures" value="4" />
            <Tab label="Earn" value="5" />
            <Tab label="WazirX" value="6" />
            <Tab label="Pool" value="7" />
        
          </TabList>
        </Box>
        <TabPanel value="1">
        <div className='eye-lg' onClick={() => setBtcBalance(!btcBalance)}>Account balance : <div className="eye-lg-inner">
          {
              btcBalance === false  ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="eye"><path d="M18.076 7.395c-3.083-3.193-8.059-3.193-11.142 0L3 11.44l3.934 4.16c3.073 3.193 8.049 3.203 11.132.01l.01-.01L22 11.44l-3.924-4.045zm-1.422 6.697a5.724 5.724 0 01-8.308 0L5.833 11.44l2.513-2.579c2.302-2.371 6.006-2.371 8.308 0l2.513 2.58-2.513 2.651z" fill="currentColor"></path><path d="M14.732 11.44c.02 1.28-.96 2.34-2.192 2.361-1.231.02-2.252-.998-2.272-2.278-.02-1.279.96-2.34 2.192-2.36h.04v2.277h2.232z" fill="currentColor"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="eye"><path d="M13.03 15.652l1.712 1.71c-.73.219-1.481.329-2.242.329a7.92 7.92 0 01-5.576-2.299L3 11.505l2.913-2.948 2.393 2.378c-.02.18-.02.35 0 .53a4.23 4.23 0 004.194 4.227c.18 0 .35-.01.53-.04zM22 11.505l-3.934-3.997A7.842 7.842 0 0012.5 5.239c-.76 0-1.511.11-2.242.33l1.712 1.699c.18-.01.35-.01.53 0a4.232 4.232 0 014.235 4.227c0 .78-.21 1.539-.621 2.199L6.434 4 5.022 5.42l11.292 11.272.71.71L18.638 19l1.411-1.41-2.102-2.088L22 11.505z" fill="currentColor"></path></svg>
            }
            Show Balance
            </div> 
            </div>
          <div>
         <div style={{display: 'flex', color: '#111'}}>
           {
           btcBalance === false ? <span style={{fontSize: '24px',}}>********<sub style={{fontSize: '12px',}}>BTC</sub></span> : <span style={{fontSize: '24px',}}>0.00000000<sub style={{fontSize: '12px',}}>BTC</sub></span>
          }
          <div className='eye-div' onClick={() => setBtcBalance(!btcBalance)}>
            {
              btcBalance === false  ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="eye"><path d="M18.076 7.395c-3.083-3.193-8.059-3.193-11.142 0L3 11.44l3.934 4.16c3.073 3.193 8.049 3.203 11.132.01l.01-.01L22 11.44l-3.924-4.045zm-1.422 6.697a5.724 5.724 0 01-8.308 0L5.833 11.44l2.513-2.579c2.302-2.371 6.006-2.371 8.308 0l2.513 2.58-2.513 2.651z" fill="currentColor"></path><path d="M14.732 11.44c.02 1.28-.96 2.34-2.192 2.361-1.231.02-2.252-.998-2.272-2.278-.02-1.279.96-2.34 2.192-2.36h.04v2.277h2.232z" fill="currentColor"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="eye"><path d="M13.03 15.652l1.712 1.71c-.73.219-1.481.329-2.242.329a7.92 7.92 0 01-5.576-2.299L3 11.505l2.913-2.948 2.393 2.378c-.02.18-.02.35 0 .53a4.23 4.23 0 004.194 4.227c.18 0 .35-.01.53-.04zM22 11.505l-3.934-3.997A7.842 7.842 0 0012.5 5.239c-.76 0-1.511.11-2.242.33l1.712 1.699c.18-.01.35-.01.53 0a4.232 4.232 0 014.235 4.227c0 .78-.21 1.539-.621 2.199L6.434 4 5.022 5.42l11.292 11.272.71.71L18.638 19l1.411-1.41-2.102-2.088L22 11.505z" fill="currentColor"></path></svg>
            }
          
          </div>
          </div>
          
          </div>
          <div className='balance-sm'>
            <p style={{fontSize: '16px', color: 'gray'}}>{
              btcBalance === false ? '********' : '~$0.00' }</p>
            <span>
            {
          btcBalance === false ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M16 9v2l-4 4.24L8 11V9h8z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M8 15.24v-2L12.24 9l4.24 4.24v2H8z"></path></svg>
          
          }
          </span>
          </div>
          <div className='balance-lg'>
            <p>Estimated Value:</p>
            <p style={{fontSize: '16px', color: 'gray', lineHeight: '10px'}}>{
              btcBalance === false ? '********' : '~$0.00' }</p>
        <i className="far fa-circle" style={{fontSize: '150px', color: 'rgb(234, 236, 239)' }}></i>
          </div>

        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
    </div>
  <div className="transfer" style={{height: '120px'}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="transfer-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 9h-1.5V7H15a5 5 0 010 10h-1.5v-2H15a3 3 0 100-6zm-4.5-2v2H9a3 3 0 100 6h1.5v2H9A5 5 0 019 7h1.5zM9 11a1 1 0 100 2h6a1 1 0 000-2H9z" fill="#1E2329"></path></svg>
    <div className="transfer-inner">
      <p>Transfer coins or tokens between Binance.com account and Binance Chain Wallet.</p>
    
      <Pill bgColor='rgb(252, 213, 53)' text='Wallet Direct' width='120px'/>
    </div>
  </div>
  <Row>
    <Col>
    <Box sx={{ width: '100%', typography: 'body1' }} className="activity" style={{height:'400px'}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList style={{position: 'relative'}} onChange={handleChange} aria-label="lab API tabs example">
             
            <Tab label="Activity" value="1" />
            <Tab label="Devices" value="2" />
            <div style={{display: 'flex', position: 'absolute', alignItems:'center', right: '40px', margin: "10px 0"}}>
              <p className='dis-Acc' style={{display: 'none'}}>Disable account</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" style={{display: 'none'}} className="d-right"><path d="M14.65 12.24l-4.24 4.24L9 15.06l2.82-2.82L9 9.42 10.41 8l4.24 4.24z" fill="currentColor"></path></svg>
        </div>
          </TabList>
        </Box>
        <TabPanel value="1" style={{justifyContent: 'space-between', color: '#111'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', lineHeight: '1'}}>
          <div>
            <p>web</p>
            <p style={{fontSize:'12px', color:'gray'}}>Duste Nigeria</p>
          </div>
          <div>
        
            <p style={{fontSize:'12px',}}>197.210.70.30</p>
            <p style={{fontSize:'12px', color:'gray'}}>2021-12-20 11:27:35</p>
          </div>
          </div>
          <hr />
          <div style={{display: 'flex', justifyContent: 'space-between', lineHeight: '1'}}>
          <div>
            <p>web</p>
            <p style={{fontSize:'12px', color:'gray'}}>Keffi Nigeria</p>
          </div>
          <div>
        
            <p style={{fontSize:'12px',}}>197.210.70.30</p>
            <p style={{fontSize:'12px', color:'gray'}}>2021-12-20 11:27:35</p>
          </div>
          </div>
          <hr />
          <div style={{display: 'flex', justifyContent: 'space-between', lineHeight: '1'}}>
          <div>
            <p>web</p>
            <p style={{fontSize:'12px', color:'gray'}}>Ota Nigeria</p>
          </div>
          <div>
        
            <p style={{fontSize:'12px',}}>197.210.70.30</p>
            <p style={{fontSize:'12px', color:'gray'}}>2021-12-20 11:27:35</p>
          </div>
          </div>
          

        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </Box>
    </Col>
    <Col>
    <MiniToastII text='Increase your account security' spanText='2/4' progDisplay='flex' progDisplayLg='none' veriProps='block' numDisplay='none' manageProps='none' rightArr='block'/>
    <div className="api-lg">
<MiniToastII text='API' spanText='' progDisplay='none' progDisplayLg='none' veriProps='none' numDisplay='inline-block' manageProps='block' rightArr='none'/>

</div>
    </Col>
  </Row>
    </Col>
    <Col xs lg="4"> 
    <MiniToast bgColor='#f8d12f' text='Earn up to 40% commission: Invite friends now!' />
    <ModalToast text='Announcements' modalDisplay='block' svgDisplay='none' recordProps='none'/>
    <MiniToast bgColor='#fff' text='Task Center' sideText='View tasks to win rewards' />
    <ModalToast text='Distribution' modalDisplay='none' svgDisplay='block' recordProps='none'/>
    </Col>
    {/* <ModalToast text='Open Orders' modalDisplay='none' svgDisplay='block' recordProps='flex'/> */}
  </Row>

  <Row>
    <Col>
  <ModalToast text='Open Orders' modalDisplay='none' svgDisplay='block' recordProps='flex'/>
  </Col>
<Col>
<Trade>
        <Toast>
        <p className='title'>Your Trading Fee Level <span style={{color: '#f8d12f', margin: '0 20px', textDecoration: 'underline'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="eye"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 10l6-6h10l6 6-11 11L1 10zm9-2H8v2h2V8z" fill="url(#vip-g_svg__paint0_linear)"></path><path d="M19 3l1.5-1.5L22 3l-1.5 1.5L19 3zM12.5 12L10 14.5l2.5 2.5 2.5-2.5-2.5-2.5zM3.5 15L2 16.5 3.5 18 5 16.5 3.5 15z" fill="#76808F"></path><defs><linearGradient id="vip-g_svg__paint0_linear" x1="12" y1="21" x2="12" y2="4" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>VIP0</span> </p>
        <div style={{display: 'flex', alignItems: 'center',}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="d-right"><path d="M14.65 12.24l-4.24 4.24L9 15.06l2.82-2.82L9 9.42 10.41 8l4.24 4.24z" fill="currentColor"></path></svg>
        </div>
        </Toast>
        <hr style={{color: 'gray'}}/>
      <div className='trading-divs'>
        <div className="spot-trade">
          <h3 style={{fontWeight: '600',fontSize: '16px',lineHeight: '24px',
    color: 'rgb(30, 35, 41)',}}>Spot Trading Fee</h3>
    <div className='trading-lg'>
           <p style={{fontWeight: '600',fontSize: '20px', marginRight: '50px'}}><span style={{fontWeight: '400', fontSize: '14px', lineHeight: '20px', color: 'rgb(112, 122, 138)',minWidth: '40px',}}>
             Maker</span> 0.0750% <span style={{fontWeight: '400', fontSize: '14px', lineHeight: '20px', color: 'rgb(112, 122, 138)',minWidth: '40px', textDecorationLine: 'line-through'}}>0.1000%</span>
             </p>
           <p style={{fontWeight: '600',fontSize: '20px', }}><span style={{fontWeight: '400', fontSize: '14px', lineHeight: '20px', color: 'rgb(112, 122, 138)',minWidth: '40px',}}>
             Taker</span> 0.0750% <span style={{fontWeight: '400', fontSize: '14px', lineHeight: '20px', color: 'rgb(112, 122, 138)',minWidth: '40px', textDecorationLine: 'line-through'}}>0.1000%</span>
             </p>
             </div>
             <p style={{fontWeight: '400', fontSize: '14px', lineHeight: '20px', color: 'rgb(112, 122, 138)',minWidth: '40px', letterSpacing: '1px'}}>Using BNB Deduction (25% discount）<i style={{fontSize: '25px', color: '#f8d12f'}} className="fas fa-toggle-on"></i></p>
        </div>
        <div className="spot-trade">
          <h3 style={{fontWeight: '600',fontSize: '16px',lineHeight: '24px',
    color: 'rgb(30, 35, 41)',}}>USDⓈ-M Futures Trading</h3>
           <div className='trading-lg'>
           <p style={{fontWeight: '600',fontSize: '20px', marginRight: '50px'}}><span style={{fontWeight: '400', fontSize: '14px', color: 'rgb(112, 122, 138)',minWidth: '40px',}}>
             Maker</span> 0.0200% 
             </p>
           <p style={{fontWeight: '600',fontSize: '20px',}}><span style={{fontWeight: '400', fontSize: '14px', color: 'rgb(112, 122, 138)',minWidth: '40px',}}>
             Taker</span> 0.0400%
             </p>
             </div>
             <p style={{fontWeight: '400', fontSize: '14px', lineHeight: '20px', color: 'rgb(112, 122, 138)', letterSpacing: '1px'}}>Using BNB Deduction (10% discount）<div className='off'>OFF</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="i-icon"><path d="M13 8V6h-2v2h2zM13 18v-8h-2v8h2z" fill="#76808F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-2 0a8 8 0 10-16 0 8 8 0 0016 0z" fill="#76808F"></path></svg></p>
        </div>
        <div className="spot-trade">
          <h3 style={{fontWeight: '600',fontSize: '16px',lineHeight: '24px',
    color: 'rgb(30, 35, 41)',}}>COIN-M Futures Trading</h3>
           <div className='trading-lg'>
           <p style={{fontWeight: '600',fontSize: '20px', marginRight: '50px'}}><span style={{fontWeight: '400', fontSize: '14px', color: 'rgb(112, 122, 138)',minWidth: '40px',}}>
             Maker</span> 0.0100% 
             </p>
           <p style={{fontWeight: '600',fontSize: '20px',}}><span style={{fontWeight: '400', fontSize: '14px', color: 'rgb(112, 122, 138)',minWidth: '40px',}}>
             Taker</span> 0.0500%
             </p>
             </div>
        </div>
     <div className="vip-trading">
          <h2 style={{color: 'rgb(201, 148, 0)'}}>Trading 50 BTC or more? <span style={{color:"#fff", marginLeft: '10px',}}>Bespoke services for VIP clients.</span></h2>
     </div>
      </div>
 
    </Trade>
    </Col>
  </Row>
</Container> 

    <div className="desktop-Grid">
    <div className='balance'>
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
  <p style={{fontWeight: '600',fontSize: '14px',}}>Balance Details</p>
  <div className='pill-lg'>
  <Pill bgColor='rgb(252, 213, 53)' text='Deposit'/>
<Pill bgColor='rgb(234, 236, 239)' text='Withdraw'/>
<Pill bgColor='rgb(234, 236, 239)' text='Gift Card'/>
    </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="d-right"><path d="M14.65 12.24l-4.24 4.24L9 15.06l2.82-2.82L9 9.42 10.41 8l4.24 4.24z" fill="currentColor"></path></svg>
  </div>
    <div className='pill-sm'>
  <Pill bgColor='rgb(252, 213, 53)' text='Deposit'/>
<Pill bgColor='rgb(234, 236, 239)' text='Withdraw'/>
<Pill bgColor='rgb(234, 236, 239)' text='Gift Card'/>
    </div>
    <Box sx={{ width: '100%', typography: 'body1', margin: '10px 0' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Spot" value="1" />
            <Tab label="P2P" value="2" />
            <Tab label="Margin" value="3" />
            <Tab label="Futures" value="4" />
            <Tab label="Earn" value="5" />
            <Tab label="WazirX" value="6" />
            <Tab label="Pool" value="7" />
        
          </TabList>
        </Box>
        <TabPanel value="1">
        <div className='eye-lg' onClick={() => setBtcBalance(!btcBalance)}>Account balance : <div className="eye-lg-inner">
          {
              btcBalance === false  ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="eye"><path d="M18.076 7.395c-3.083-3.193-8.059-3.193-11.142 0L3 11.44l3.934 4.16c3.073 3.193 8.049 3.203 11.132.01l.01-.01L22 11.44l-3.924-4.045zm-1.422 6.697a5.724 5.724 0 01-8.308 0L5.833 11.44l2.513-2.579c2.302-2.371 6.006-2.371 8.308 0l2.513 2.58-2.513 2.651z" fill="currentColor"></path><path d="M14.732 11.44c.02 1.28-.96 2.34-2.192 2.361-1.231.02-2.252-.998-2.272-2.278-.02-1.279.96-2.34 2.192-2.36h.04v2.277h2.232z" fill="currentColor"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="eye"><path d="M13.03 15.652l1.712 1.71c-.73.219-1.481.329-2.242.329a7.92 7.92 0 01-5.576-2.299L3 11.505l2.913-2.948 2.393 2.378c-.02.18-.02.35 0 .53a4.23 4.23 0 004.194 4.227c.18 0 .35-.01.53-.04zM22 11.505l-3.934-3.997A7.842 7.842 0 0012.5 5.239c-.76 0-1.511.11-2.242.33l1.712 1.699c.18-.01.35-.01.53 0a4.232 4.232 0 014.235 4.227c0 .78-.21 1.539-.621 2.199L6.434 4 5.022 5.42l11.292 11.272.71.71L18.638 19l1.411-1.41-2.102-2.088L22 11.505z" fill="currentColor"></path></svg>
            }
            Show Balance
            </div> 
            </div>
          <div>
         <div style={{display: 'flex', color: '#111'}}>
           {
           btcBalance === false ? <span style={{fontSize: '24px',}}>********<sub style={{fontSize: '12px',}}>BTC</sub></span> : <span style={{fontSize: '24px',}}>0.00000000<sub style={{fontSize: '12px',}}>BTC</sub></span>
          }
          <div className='eye-div' onClick={() => setBtcBalance(!btcBalance)}>
            {
              btcBalance === false  ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="eye"><path d="M18.076 7.395c-3.083-3.193-8.059-3.193-11.142 0L3 11.44l3.934 4.16c3.073 3.193 8.049 3.203 11.132.01l.01-.01L22 11.44l-3.924-4.045zm-1.422 6.697a5.724 5.724 0 01-8.308 0L5.833 11.44l2.513-2.579c2.302-2.371 6.006-2.371 8.308 0l2.513 2.58-2.513 2.651z" fill="currentColor"></path><path d="M14.732 11.44c.02 1.28-.96 2.34-2.192 2.361-1.231.02-2.252-.998-2.272-2.278-.02-1.279.96-2.34 2.192-2.36h.04v2.277h2.232z" fill="currentColor"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="eye"><path d="M13.03 15.652l1.712 1.71c-.73.219-1.481.329-2.242.329a7.92 7.92 0 01-5.576-2.299L3 11.505l2.913-2.948 2.393 2.378c-.02.18-.02.35 0 .53a4.23 4.23 0 004.194 4.227c.18 0 .35-.01.53-.04zM22 11.505l-3.934-3.997A7.842 7.842 0 0012.5 5.239c-.76 0-1.511.11-2.242.33l1.712 1.699c.18-.01.35-.01.53 0a4.232 4.232 0 014.235 4.227c0 .78-.21 1.539-.621 2.199L6.434 4 5.022 5.42l11.292 11.272.71.71L18.638 19l1.411-1.41-2.102-2.088L22 11.505z" fill="currentColor"></path></svg>
            }
          
          </div>
          </div>
          
          </div>
          <div className='balance-sm'>
            <p style={{fontSize: '16px', color: 'gray'}}>{
              btcBalance === false ? '********' : '~$0.00' }</p>
            <span>
            {
          btcBalance === false ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M16 9v2l-4 4.24L8 11V9h8z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="dropDownIcon"><path d="M8 15.24v-2L12.24 9l4.24 4.24v2H8z"></path></svg>
          
          }
          </span>
          </div>
          <div className='balance-lg'>
            <p>Estimated Value:</p>
            <p style={{fontSize: '16px', color: 'gray', lineHeight: '10px'}}>{
              btcBalance === false ? '********' : '~$0.00' }</p>
        <i className="far fa-circle" style={{fontSize: '150px', color: 'rgb(234, 236, 239)' }}></i>
          </div>

        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
    </div>

      
 
<MiniToast bgColor='#f8d12f' text='Earn up to 40% commission: Invite friends now!' />
<ModalToast text='Announcements' modalDisplay='block' svgDisplay='none' recordProps='none'/>
<MiniToast bgColor='#fff' text='Task Center' sideText='View tasks to win rewards' />
<div className="transfer">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="transfer-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 9h-1.5V7H15a5 5 0 010 10h-1.5v-2H15a3 3 0 100-6zm-4.5-2v2H9a3 3 0 100 6h1.5v2H9A5 5 0 019 7h1.5zM9 11a1 1 0 100 2h6a1 1 0 000-2H9z" fill="#1E2329"></path></svg>
    <div className="transfer-inner">
      <p>Transfer coins or tokens between Binance.com account and Binance Chain Wallet.</p>
    
      <Pill bgColor='rgb(252, 213, 53)' text='Wallet Direct' width='120px'/>
    </div>
    </div>
    
    <Box sx={{ width: '100%', typography: 'body1' }} className="activity">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList style={{position: 'relative'}} onChange={handleChange} aria-label="lab API tabs example">
             
            <Tab label="Activity" value="1" />
            <Tab label="Devices" value="2" />
            <div style={{display: 'flex', position: 'absolute', alignItems:'center', right: '40px', margin: "10px 0"}}>
              <p className='dis-Acc'>Disable account</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="d-right"><path d="M14.65 12.24l-4.24 4.24L9 15.06l2.82-2.82L9 9.42 10.41 8l4.24 4.24z" fill="currentColor"></path></svg>
        </div>
          </TabList>
        </Box>
        <TabPanel value="1" style={{display: 'flex', justifyContent: 'space-between', color: '#111'}}>
          <div>
            <p>web</p>
            <p style={{fontSize:'12px', color:'gray'}}>Duste Nigeria</p>
          </div>
          <div>
        
            <p style={{fontSize:'12px',}}>197.210.70.30</p>
            <p style={{fontSize:'12px', color:'gray'}}>2021-12-20 11:27:35</p>
          </div>

        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </Box>
<MiniToastII text='Increase your account security' spanText='2/4' progDisplay='flex' progDisplayLg='flex' veriProps='block' numDisplay='none' manageProps='none' rightArr='block'/>
<div className="api-sm">
<MiniToastII text='API Management' spanText='' progDisplay='none' progDisplayLg='none' veriProps='none' numDisplay='inline-block' manageProps='block' rightArr='none'/>

</div>
<div className="api-lg">
<MiniToastII text='API' spanText='' progDisplay='none' progDisplayLg='none' veriProps='none' numDisplay='inline-block' manageProps='block' rightArr='none'/>

</div>

<ModalToast text='Distribution' modalDisplay='none' svgDisplay='block' recordProps='none'/>
<ModalToast text='Open Orders' modalDisplay='none' svgDisplay='block' recordProps='flex'/>
<Trade>
        <Toast>
        <p className='title'>Your Trading Fee Level <span style={{color: '#f8d12f', margin: '0 20px', textDecoration: 'underline'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="eye"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 10l6-6h10l6 6-11 11L1 10zm9-2H8v2h2V8z" fill="url(#vip-g_svg__paint0_linear)"></path><path d="M19 3l1.5-1.5L22 3l-1.5 1.5L19 3zM12.5 12L10 14.5l2.5 2.5 2.5-2.5-2.5-2.5zM3.5 15L2 16.5 3.5 18 5 16.5 3.5 15z" fill="#76808F"></path><defs><linearGradient id="vip-g_svg__paint0_linear" x1="12" y1="21" x2="12" y2="4" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>VIP0</span> </p>
        <div style={{display: 'flex', alignItems: 'center',}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="d-right"><path d="M14.65 12.24l-4.24 4.24L9 15.06l2.82-2.82L9 9.42 10.41 8l4.24 4.24z" fill="currentColor"></path></svg>
        </div>
        </Toast>
        <hr style={{color: 'gray'}}/>
      <div className='trading-divs'>
        <div className="spot-trade">
          <h3 style={{fontWeight: '600',fontSize: '16px',lineHeight: '24px',
    color: 'rgb(30, 35, 41)',}}>Spot Trading Fee</h3>
    <div className='trading-lg'>
           <p style={{fontWeight: '600',fontSize: '20px', marginRight: '50px'}}><span style={{fontWeight: '400', fontSize: '14px', lineHeight: '20px', color: 'rgb(112, 122, 138)',minWidth: '40px',}}>
             Maker</span> 0.0750% <span style={{fontWeight: '400', fontSize: '14px', lineHeight: '20px', color: 'rgb(112, 122, 138)',minWidth: '40px', textDecorationLine: 'line-through'}}>0.1000%</span>
             </p>
           <p style={{fontWeight: '600',fontSize: '20px', }}><span style={{fontWeight: '400', fontSize: '14px', lineHeight: '20px', color: 'rgb(112, 122, 138)',minWidth: '40px',}}>
             Taker</span> 0.0750% <span style={{fontWeight: '400', fontSize: '14px', lineHeight: '20px', color: 'rgb(112, 122, 138)',minWidth: '40px', textDecorationLine: 'line-through'}}>0.1000%</span>
             </p>
             </div>
             <p style={{fontWeight: '400', fontSize: '14px', lineHeight: '20px', color: 'rgb(112, 122, 138)',minWidth: '40px', letterSpacing: '1px'}}>Using BNB Deduction (25% discount）<i style={{fontSize: '25px', color: '#f8d12f'}} className="fas fa-toggle-on"></i></p>
        </div>
        <div className="spot-trade">
          <h3 style={{fontWeight: '600',fontSize: '16px',lineHeight: '24px',
    color: 'rgb(30, 35, 41)',}}>USDⓈ-M Futures Trading</h3>
           <div className='trading-lg'>
           <p style={{fontWeight: '600',fontSize: '20px', marginRight: '50px'}}><span style={{fontWeight: '400', fontSize: '14px', color: 'rgb(112, 122, 138)',minWidth: '40px',}}>
             Maker</span> 0.0200% 
             </p>
           <p style={{fontWeight: '600',fontSize: '20px',}}><span style={{fontWeight: '400', fontSize: '14px', color: 'rgb(112, 122, 138)',minWidth: '40px',}}>
             Taker</span> 0.0400%
             </p>
             </div>
             <p style={{fontWeight: '400', fontSize: '14px', lineHeight: '20px', color: 'rgb(112, 122, 138)', letterSpacing: '1px'}}>Using BNB Deduction (10% discount）<div className='off'>OFF</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="i-icon"><path d="M13 8V6h-2v2h2zM13 18v-8h-2v8h2z" fill="#76808F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-2 0a8 8 0 10-16 0 8 8 0 0016 0z" fill="#76808F"></path></svg></p>
        </div>
        <div className="spot-trade">
          <h3 style={{fontWeight: '600',fontSize: '16px',lineHeight: '24px',
    color: 'rgb(30, 35, 41)',}}>COIN-M Futures Trading</h3>
           <div className='trading-lg'>
           <p style={{fontWeight: '600',fontSize: '20px', marginRight: '50px'}}><span style={{fontWeight: '400', fontSize: '14px', color: 'rgb(112, 122, 138)',minWidth: '40px',}}>
             Maker</span> 0.0100% 
             </p>
           <p style={{fontWeight: '600',fontSize: '20px',}}><span style={{fontWeight: '400', fontSize: '14px', color: 'rgb(112, 122, 138)',minWidth: '40px',}}>
             Taker</span> 0.0500%
             </p>
             </div>
        </div>
     <div className="vip-trading">
          <h2 style={{color: 'rgb(201, 148, 0)'}}>Trading 50 BTC or more? <span style={{color:"#fff", marginLeft: '10px',}}>Bespoke services for VIP clients.</span></h2>
     </div>
      </div>
 
    </Trade>

  





</div>
</div>
      </main>
        </div>
    )
}

export default Dashboard

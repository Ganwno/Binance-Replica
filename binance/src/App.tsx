import React, {useState, useEffect} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme, GlobalStyles} from './theme'
import './styles/App.css';
import "react-bootstrap/dist/react-bootstrap.min.js"
import { Nav, Navbar, Container, Offcanvas, } from 'react-bootstrap';
import {Register, Login, Dashboard} from './pages/mainExport'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

function App() {

  const [theme, setTheme] = useState('dark')

  const themeToggler = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])
  
  const Body = styled.body`
    color: ${({theme}) => theme.fontColor};
    padding:  0px;
    
  `

  const MobTog = styled.div`
    font-size: 16px;
  margin-bottom: 8px;
  flex: 1 1 0%;
  margin: 0px;
  display: flex;
  justify-content:space-between;
  cursor: pointer;
  align-items: center;
  padding: 16px 10px;

  &:hover{
    background-color: ${theme === 'light' ? 'rgb(245, 245, 245)' : 'rgb(43, 49, 57)'};
  }

  &:hover *{
    color: rgb(240, 185, 11);
  }
  `

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
    background-color: ${theme === 'light' ? 'rgb(245, 245, 245)' : 'rgb(43, 49, 57)'};
  }

  &:hover *{
    color: rgb(240, 185, 11);
  }
    `
  // const biLogo = require('./img/favicon.ico')

  // 769

  // const themeToggler = () =>{
  //    theme === 'light' ? setTheme('dark') : setTheme('light')
  // }

  const I = styled.i`
  
color: #afafaf !important;
font-size: 24px !important;

&:hover{
  color: #F0B90B;
}

  `

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />
    <Body>
  
      <nav className='header'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5120 1024" className="binance-logo"><path d="M230.997333 512L116.053333 626.986667 0 512l116.010667-116.010667L230.997333 512zM512 230.997333l197.973333 197.973334 116.053334-115.968L512 0 197.973333 314.026667l116.053334 115.968L512 230.997333z m395.989333 164.992L793.002667 512l116.010666 116.010667L1024.981333 512l-116.992-116.010667zM512 793.002667l-197.973333-198.997334-116.053334 116.010667L512 1024l314.026667-314.026667-116.053334-115.968L512 793.002667z m0-165.973334l116.010667-116.053333L512 396.032 395.989333 512 512 626.986667z m1220.010667 11.946667v-1.962667c0-75.008-40.021333-113.024-105.002667-138.026666 39.978667-21.973333 73.984-58.026667 73.984-121.002667v-1.962667c0-88.021333-70.997333-145.024-185.002667-145.024h-260.992v561.024h267.008c126.976 0.981333 210.005333-51.029333 210.005334-153.002666z m-154.026667-239.957333c0 41.984-34.005333 58.965333-89.002667 58.965333h-113.962666V338.986667h121.984c52.010667 0 80.981333 20.992 80.981333 58.026666v2.005334z m31.018667 224c0 41.984-32.981333 61.013333-87.04 61.013333h-146.944v-123.050667h142.976c63.018667 0 91.008 23.04 91.008 61.013334v1.024z m381.994666 169.984V230.997333h-123.989333v561.024h123.989333v0.981334z m664.021334 0V230.997333h-122.026667v346.026667l-262.997333-346.026667h-114.005334v561.024h122.026667v-356.010666l272 356.992h104.96z m683.946666 0L3098.026667 228.010667h-113.962667l-241.024 564.992h127.018667l50.986666-125.994667h237.013334l50.986666 125.994667h130.005334z m-224.981333-235.008h-148.992l75.008-181.973334 73.984 181.973334z m814.037333 235.008V230.997333h-122.026666v346.026667l-262.997334-346.026667h-114.005333v561.024h122.026667v-356.010666l272 356.992h104.96z m636.970667-91.008l-78.976-78.976c-44.032 39.978667-83.029333 65.962667-148.010667 65.962666-96 0-162.986667-80-162.986666-176v-2.986666c0-96 67.968-174.976 162.986666-174.976 55.978667 0 100.010667 23.978667 144 62.976l78.976-91.008c-51.968-50.986667-114.986667-86.997333-220.970666-86.997334-171.989333 0-292.992 130.986667-292.992 290.005334V512c0 160.981333 122.965333 288.981333 288 288.981333 107.989333 1.024 171.989333-36.992 229.973333-98.986666z m527.018667 91.008v-109.994667h-305.024v-118.016h265.002666v-109.994667h-265.002666V340.992h301.013333V230.997333h-422.997333v561.024h427.008v0.981334z" p-id="2935"></path></svg>
        <div>
          
  <Navbar expand={false} className='mobile-nav'>
  <Container fluid>

    <Navbar.Toggle style={{ backgroundColor: 'transparent', boxShadow: 'none', border: 'none' }} aria-controls="offcanvasNavbar" >
      <I className="fas fa-bars" style={{}}></I>
      </Navbar.Toggle>
    <Navbar.Offcanvas
      id={`${theme === 'light' ? 'offcanvasNavbarLight' : 'offcanvasNavbarDark' }`}
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton >
        <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
        
      </Offcanvas.Header>
      <Offcanvas.Body style={{padding: '0',}}>
        <Nav className="justify-content-end flex-grow-1">
          <MobTog>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="biLogo"><path d="M6.517 12l-2.26 2.258L2 12l2.258-2.258L6.517 12zm5.482-5.486l3.87 3.87 2.26-2.258-3.872-3.87L12 2 9.74 4.258 5.87 8.128l2.258 2.259 3.872-3.873zm7.743 3.226l-2.259 2.258 2.259 2.258L22 11.998 19.742 9.74zm-7.743 7.748l-3.87-3.875-2.258 2.258 3.872 3.87L11.999 22l2.258-2.258 3.871-3.87-2.258-2.259-3.871 3.875zm0-3.226l2.258-2.258L12 9.742 9.74 12 12 14.262z" fill="currentColor"></path></svg>
          <span style={{margin: '0 10px', fontSize: '16px', color: `${theme === 'light' ? 'rgb(30, 35, 41);' : 'rgb(234, 236, 239)'}`,}}>Theme</span>
          </div>

          <button type="button" onClick={() => themeToggler()} role="switch" aria-checked={`${theme === 'light'? false : true}`} className={theme === 'light' ? 'mobile-toggle-light' : 'mobile-toggle-dark'} style={{direction: 'ltr',}}>
            <div className="icon-bg" style={{transform: `${theme === 'light' ? "translate(0px)" : "translate(16px)"}`}}>
              {
                theme === 'light' ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="css-ahjq13"><path d="M11 4V1h2v3h-2zM4 13H1v-2h3v2zM11 20v3h2v-3h-2zM23 13h-3v-2h3v2zM5.636 7.05L3.515 4.93l1.414-1.414L7.05 5.636 5.636 7.05zM7.05 18.364l-2.12 2.121-1.415-1.414 2.121-2.121 1.414 1.414zM16.95 18.364l2.121 2.121 1.414-1.414-2.12-2.121-1.415 1.414zM20.485 4.929l-2.12 2.121-1.415-1.414 2.121-2.121 1.414 1.414z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6a6 6 0 100 12 6 6 0 000-12zm-4 6a4 4 0 118 0 4 4 0 01-8 0z" fill="currentColor"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="css-8sesaq"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.929 4.93a9.959 9.959 0 015.288-2.77l.99 1.565a6.5 6.5 0 009.067 9.067l1.566.992a9.959 9.959 0 01-2.769 5.287c-3.905 3.905-10.237 3.905-14.142 0-3.905-3.905-3.905-10.237 0-14.142zm3.496-.09a8 8 0 109.232 12.816 7.992 7.992 0 001.502-2.08A8.5 8.5 0 018.424 4.84z" fill="currentColor"></path></svg> }
              </div>
          <input type="checkbox" data-bn-type="checkbox" className="togInput" checked/>
          </button>
          </MobTog>
          <Lang><svg style={{width: '22px',
            color: 'rgb(112, 122, 138)',}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe" className="svg-inline--fa fa-globe fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg>
          <span style={{margin: '0 10px',fontSize: '16px', color: `${theme === 'light' ? 'rgb(30, 35, 41);' : 'rgb(234, 236, 239)'}`,}}>English</span>
          
          </Lang>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
<div className='desktop-nav'>
    <h4>English</h4>
    <span style={{fontSize: '15px', fontWeight: '0', color:"#5e6673", }}>|</span>
      <button className="desktop-toggle" onClick={() => themeToggler()}>
      
        {
          theme=== 'light' ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="moon-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.929 4.93a9.959 9.959 0 015.288-2.77l.99 1.565a6.5 6.5 0 009.067 9.067l1.566.992a9.959 9.959 0 01-2.769 5.287c-3.905 3.905-10.237 3.905-14.142 0-3.905-3.905-3.905-10.237 0-14.142zm3.496-.09a8 8 0 109.232 12.816 7.992 7.992 0 001.502-2.08A8.5 8.5 0 018.424 4.84z" fill="currentColor"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className='sun-icon'><path d="M11 4V1h2v3h-2zM4 13H1v-2h3v2zM11 20v3h2v-3h-2zM23 13h-3v-2h3v2zM5.636 7.05L3.515 4.93l1.414-1.414L7.05 5.636 5.636 7.05zM7.05 18.364l-2.12 2.121-1.415-1.414 2.121-2.121 1.414 1.414zM16.95 18.364l2.121 2.121 1.414-1.414-2.12-2.121-1.415 1.414zM20.485 4.929l-2.12 2.121-1.415-1.414 2.121-2.121 1.414 1.414z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6a6 6 0 100 12 6 6 0 000-12zm-4 6a4 4 0 118 0 4 4 0 01-8 0z" fill="currentColor"></path></svg>
        }
      </button>
      </div>
      </div>
      </nav>
      <Router>
      <Switch>
  <Route exact path="/" component={Register} />
  <Route exact path="/login" component={Login} />
  <Route exact path="/dashboard" component={Dashboard} />
  {/* <Route exact path="/signin" component={Signin} /> */}
  </Switch>
        </Router>
     
    </Body>
    </ThemeProvider>
  );
}

export default App;

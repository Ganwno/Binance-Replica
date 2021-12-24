import React from 'react'
import styled from 'styled-components'


interface ModalToastProps {
    text?: string;
    modalDisplay?: string;
    svgDisplay?: string;
    recordProps?: string;

}

export default function ModalToast({text, modalDisplay, svgDisplay, recordProps}: ModalToastProps) {
    const ModalToast = styled.div<ModalToastProps>`
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
    display: ${props => props.modalDisplay};
    font-weight: 400;
}
.title {
    color: rgb(30, 35, 41);
    font-size: 12px;
    }

    .title:hover{
        color:#f8d12f;
    }
    
    .record{
        display:none;
    }
 
    .record div p{
        line-height: 0.5;
        font-size: 12px;
        font-weight: lighter;
        color: rgb(112, 122, 138);
    }
 
    @media screen and (min-width: 769px){
        .record{
        margin: 20px 0;
        display:${(props: ModalToastProps) => props.recordProps};
        justify-content: space-around;
    }

    .title {
    color: rgb(30, 35, 41);
    font-size: 12px;
    }

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

    const SvgDiv = styled.div<ModalToastProps>`
    display: ${props => props.svgDisplay};
    box-sizing: border-box;
    margin: 16px auto;
    min-width: 0px;
    text-align: center;

    p{
    font-weight: lighter;
    font-size: 14px;
    color: rgb(112, 122, 138);
    }

    .search-svg{
    min-width: 0px;
    color: rgb(132, 142, 156);
    font-size: 64px;
    fill: rgb(132, 142, 156);
    margin: 16px;
    width: 80px;
    }

    @media screen and (min-width: 992px){
  
        margin-bottom: 300px;
   }
    `


    return (

        <ModalToast modalDisplay={modalDisplay} recordProps={recordProps}>
            <Toast>
        <p className='title'>{text}</p>
        <div style={{display: 'flex', alignItems: 'center',}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="d-right"><path d="M14.65 12.24l-4.24 4.24L9 15.06l2.82-2.82L9 9.42 10.41 8l4.24 4.24z" fill="currentColor"></path></svg>
        </div>
        </Toast>
        <hr style={{color: 'gray'}}/>

        <div className='modal-div'>
        <p className='title'>Binance Will Support the Sologenic (SOLO) Airdrop Program for XRP (XRP) Holders
        </p>
        <p style={{color: 'gray', fontSize: '12px',}}>2021-12-21</p>
        </div>
        <div className="record">
            <div>
                <p>Pair</p>
                <p>Date</p>
            </div>
            <div>
                <p>Type / Side</p>
                <p>Trigger</p>
                <p>Conditions</p>
            </div>
            <div>
                <p>Price</p>
                <p>Amount</p>
            </div>
            <div>
                <p>Total</p>
                <p>Filled</p>
            </div>
            <div>
                <br/>
                <p>Action</p>
            </div>
        </div>
        <SvgDiv svgDisplay={svgDisplay}>
        <i style={{fontSize: '70px', margin: '20px 0'}} className="fad fa-file-search"></i>
        <p>No records found</p>
        </SvgDiv>
    </ModalToast>
    )
}

let X: ModalToastProps = {
    text: 'Announcements',
    modalDisplay: 'block',
    svgDisplay: 'none',
    recordProps: 'flex'
}
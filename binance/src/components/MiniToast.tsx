import React from 'react'
import styled from 'styled-components'


interface MiniToastProps {
    bgColor?: string;
    sideText?: string;
    text?: string;
}

function MiniToast({bgColor, sideText, text}: MiniToastProps) {

    const MiniToast = styled.div<MiniToastProps>`
    box-sizing: border-box;
    margin: 10px 0;
    min-width: 0px;
    display: flex;
    align-items: center;
    background: ${props => props.bgColor};
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
        <MiniToast bgColor={bgColor}>
            <p>{text}</p>
            <div style={{display: 'flex', alignItems: 'center',}}>
            <p style={{color: 'rgb(112, 122, 138)',fontSize: '12px', margin: '0'}}>{sideText}</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="d-right"><path d="M14.65 12.24l-4.24 4.24L9 15.06l2.82-2.82L9 9.42 10.41 8l4.24 4.24z" fill="currentColor"></path></svg>
            </div>
        </MiniToast>
    )
}


let X: MiniToastProps = {
    bgColor: '#f8d12f',
    text: 'Earn up to 40% commission: Invite friends now!',
    sideText: ''

}

export default MiniToast

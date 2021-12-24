import React from 'react'
import styled from 'styled-components'


interface ButtonProps{
    text?: string;
    color?: string;
    width?: string;
    bgColor?: string;
}


function Button({color, width, text, bgColor}: ButtonProps) {

const Button = styled.button<ButtonProps>`
    margin: 8px 0px 0px;
    appearance: none;
    user-select: none;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    box-sizing: border-box;
    font-family: inherit;
    text-align: center;
    text-decoration: none;
    outline: none;
    padding: 12px 24px;
    min-width: 80px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    word-break: keep-all;
    color: ${(props) => props.color};
    border-radius: 6px;
    min-height: 24px;
    border: none;
    background-image: none;
    background-color: ${(props) => props.bgColor};
    width: ${(props) => props.width};
    opacity: 1;
    &:hover{
        opacity: 0.9;
    }

`


    return (

<Button color={color} width={width} bgColor={bgColor}>{text}</Button>
    )
}

let X: ButtonProps = {
    text: '',
    color: 'rgb(33, 40, 51)',
    width: '100%',
    bgColor: 'rgb(252, 213, 53)'
}

export default Button

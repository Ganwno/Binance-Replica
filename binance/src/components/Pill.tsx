import React from 'react'
import styled from 'styled-components'


interface PillProps {
    bgColor?: string;
    text?: string;
    width?: string;
}

export default function Pill({bgColor, text, width}: PillProps) {

const Pill = styled.div<PillProps>`
    margin: 0px 4px;
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
    padding: 4px 16px;
    width: ${props => props.width};
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    word-break: keep-all;
    color: rgb(33, 40, 51);
    border-radius: 6px;
    border: none;
    background-image: none;
    background-color: ${props => props.bgColor};
    flex: 1 1 0%;
    min-height: 32px;

    &:hover {
      opacity: 0.9;
    }

`

    return (
        <Pill bgColor={bgColor} width={width}>
            {text}
        </Pill>
    )
}

let X: PillProps = {
    bgColor: 'rgb(252, 213, 53)',
    text: 'Deposit',
    width: '140px',
}

import React, { useState } from 'react'
import styled from 'styled-components'
import { GlobalStyles } from '../theme'



interface InputProps {
    label?: string;
    width?: string;
    type?: string;
}

export default function Input({label, width,type }: InputProps) {

    const [theme, setTheme] = useState('dark')
   
  const TextInput = styled.input<InputProps>`
    margin: 0px;
    min-width: 0px;
    display: inline-flex;
    position: relative;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1.6;
    border-radius: 4px;
    height: 48px;
    background-color: transparent;
    fill: transparent;
    width: ${(props:InputProps) => props.width};
    border: 1px solid rgb(71, 77, 87);
    color: #646464;
    
    &:hover {
      border-color: rgb(240, 185, 11);
    }

    &:focus-visible {
      border-color: rgb(240, 185, 11) !important;
    }

  `
   
    return (
        <div>
            <GlobalStyles />
            <label style={{display: 'block'}}>{label}</label>
            <TextInput type={type} width={width}  />
        </div>
    )
}

let x: InputProps = {
    label: '',
    width: '100%',
    type:"text"

}





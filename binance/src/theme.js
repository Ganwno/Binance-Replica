import { createGlobalStyle } from "styled-components"



const lightTheme = {
    body: '#fff',
    fontColor: '#111',
    bgColor: 'gray'
}

const darkTheme = {
    body: '#181A20',
    fontColor: 'rgb(234, 236, 239)'
}

const GlobalStyles = createGlobalStyle`

body{
    background-color: ${({theme}) => theme.body}
}

`

export {lightTheme, darkTheme, GlobalStyles}
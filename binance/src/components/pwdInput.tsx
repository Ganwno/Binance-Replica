import React from 'react'
import styled from 'styled-components'
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";


interface pwdInputProps {
    label?: string;
    width?: string;
}

export default function PwdInput({label, width}: pwdInputProps) {
   

const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
});

const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  
  const handlePasswordChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const TextInput = styled.input<pwdInputProps>`
    margin: 0px;
    min-width: 0px;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1.6;
    border: 1px solid rgb(234, 236, 239);
    border-radius: 4px;
    height: 48px;
    color: #646464;
    background-color: transparent;
    width: ${(props:pwdInputProps) => props.width};
    border: 1px solid rgb(71, 77, 87);
    position: relative;

    &:focus-visible {
      border-color: rgb(240, 185, 11);
    }
    &:focus {
      border-color: rgb(240, 185, 11);
    }

    &:hover {
      border-color: rgb(240, 185, 11);
    }

    
  `

  const Pwd = styled.div`
    position: relative;
  `
   
    return (
        <div style={{margin: '10px 0'}}>
            <label style={{display: 'block'}}>{label}</label>
           <Pwd>
            <TextInput
            type={values.showPassword ? "text" : "password"}
        onChange={handlePasswordChange("password")}
        value={values.password} 
        width={width} 
           
        />
         <InputAdornment position="end" style={{position: 'absolute', 
  top: '50%',right: '2%', zIndex: '1000'}}>
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
            </Pwd>
        </div>
    )
}

let x: pwdInputProps = {
    label: '',
    width: '100%',

}





import React from 'react'
import styled from 'styled-components'


interface MiniToastIIProps {
    spanText?: string;
    text?: string;
    progDisplay?: string;
    progDisplayLg?: string;
    numDisplay?: string;
    veriProps?: string;
    manageProps?: string;
    rightArr?: string;
}

function MiniToastII({spanText, text, progDisplay, progDisplayLg, numDisplay, veriProps, manageProps, rightArr}: MiniToastIIProps) {

    const MiniToastII = styled.div<MiniToastIIProps>`
    box-sizing: border-box;
    margin: 10px 0 0;
    min-width: 0px;
    background: #fff;
    padding: 10px;
    box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px, rgb(0 0 0 / 8%) 0px 0px 2px;
    border-radius: 4px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    color: #111;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;

    .title {
        display: flex;
        font-weight: 600;
    color: rgb(30, 35, 41);
    font-size: 14px;
    }

    .title:hover{
        color:#f8d12f;
    }

.title .num{
    box-sizing: border-box;
    margin: 0px 10px;
    display: ${props => props.numDisplay};
    height: 16px;
    min-width: 16px;
    line-height: 16px;
    overflow: hidden;
    white-space: nowrap;
    padding-left: 4px;
    padding-right: 4px;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    border-radius: 99999px;
    background-color: rgb(240, 185, 11);
    color: rgb(30, 35, 41);

}

    
.prog-div {
    box-sizing: border-box;
    margin: 0px;
    display: ${props => props.progDisplay};
    -webkit-box-align: center;
    align-items: center;
    flex: 1 1 0%;
    flex-wrap: wrap;
    min-width: 42px;
    padding: 16px;
}
.prog-div-lg {
   display: none;
}

.progress-green{
    box-sizing: border-box;
    margin: 0px 4px 0px 0px;
    flex: 1 1 0%;
    height: 4px;
    min-width: 6px;
    background-color: rgb(14, 203, 129);
}
.progress-gray{
    box-sizing: border-box;
    margin: 0px 4px 0px 0px;
    flex: 1 1 0%;
    height: 4px;
    min-width: 6px;
    background-color: rgb(234, 236, 239);
}

.verified-props{
    display: none;
}


@media only screen and (min-width: 769px){
    .prog-div {
   display: none;
}

.prog-div-lg {
    box-sizing: border-box;
    margin: 0px;
    display: ${(props: MiniToastIIProps) => props.progDisplayLg};
    -webkit-box-align: center;
    align-items: center;
    flex: 1 1 0%;
    flex-wrap: wrap;
    min-width: 42px;
    padding: 0 16px;
}

.verified-props{
    display: ${props => props.veriProps};
    padding: 16px;
    font-weight: lighter;
}

.green-dot{
    display: inline-block;
    box-sizing: border-box;
    margin: 8px 8px 0px 0px;
    min-width: 0px;
    width: 6px;
    height: 6px;
    background-color: rgb(14, 203, 129);
    border-radius: 3px;
    }
    .gray-dot{
        display: inline-block;
    box-sizing: border-box;
    margin: 8px 8px 0px 0px;
    min-width: 0px;
    width: 6px;
    height: 6px;
    background-color: lightgray;
    border-radius: 3px;
    }

    }
    `

const MiniToast = styled.div<MiniToastIIProps>`
    box-sizing: border-box;
    margin: 10px 0 0;
    min-width: 0px;
    height: 30px;
    display: flex;
    align-items: center;
    flex: 1 1 0%;
    padding: 16px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    color: #111;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;

    .d-right {
    display: block;
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

.manage{
    display: none;
}

.manage:hover{
    background-color: rgba(0, 0, 0, 0.02);

}

@media only screen and (min-width: 769px){

.manage{
    display: ${(props: MiniToastIIProps) => props.manageProps};
    margin: 0px;
    appearance: none;
    user-select: none;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    box-sizing: border-box;
    font-family: inherit;
    text-align: center;
    text-decoration: none;
    outline: none;
    padding: 6px 12px;
    font-weight: 500;
    word-break: keep-all;
    border-radius: 4px;
    min-height: 24px;
    border: none;
    background-color: transparent;
    box-shadow: rgb(234 236 239) 0px 0px 0px 1px inset;
    color: rgb(30, 35, 41);
    font-size: 14px;
    line-height: 1.5;
    min-width: 88px;
}

.d-right {
    display: ${(props: MiniToastIIProps) => props.rightArr}
}

}
    `


// const VerifiedProps = styled.div`
 



    


// `
    return (
        <MiniToastII progDisplay={progDisplay} numDisplay={numDisplay} progDisplayLg={progDisplayLg} veriProps={veriProps}>
        <MiniToast manageProps={manageProps} rightArr={rightArr}>
            <p className='title'>{text} <span className='num'>0</span>  <span style={{color: 'rgb(0, 0, 0)',fontSize: '16px', margin: '0 20px', fontWeight: 'lighter'}}>{spanText}</span>  
            <div className='prog-div-lg'>
          <div className="progress-green" >
          </div>
          <div className="progress-green">
          </div>
          <div className="progress-gray">
          </div>
          <div className="progress-gray">
          </div>
       </div></p>

            <div style={{display: 'flex', alignItems: 'center',}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="d-right"><path d="M14.65 12.24l-4.24 4.24L9 15.06l2.82-2.82L9 9.42 10.41 8l4.24 4.24z" fill="currentColor"></path></svg>
            </div>

            <div className='manage'>
                Manage
            </div>
      
        </MiniToast>
          <div className='prog-div'>
          <div className="progress-green">
          </div>
          <div className="progress-green">
          </div>
          <div className="progress-gray">
          </div>
          <div className="progress-gray">
          </div>
       </div>
       
    <div className='verified-props'>
        <div style={{display:'flex'}}>
        <div style={{display: 'flex',margin: '0px',minWidth: '0px',borderWidth: '0px 1px 1px 0px',borderStyle: 'solid',borderColor: 'rgb(234, 236, 239)',padding: '20px',lineHeight: '1.5',width: '50%'}}>
        <div className='green-dot'></div>
        <span>Enable 2FA<br></br> Enabled</span>
        </div>
        <div style={{display: 'flex',margin: '0px',minWidth: '0px',borderWidth: '0px 0px 1px 0px',borderStyle: 'solid',borderColor: 'rgb(234, 236, 239)',padding: '20px',lineHeight: '1.5',width: '50%'}}>
        <div className='green-dot'></div>
        <span>Identity Verification<br></br> Verified</span>
        </div>
        </div>
        <div style={{display:'flex'}}>
        <div style={{display: 'flex',margin: '0px',minWidth: '0px',borderWidth: '0px 1px 0px 0px',borderStyle: 'solid',borderColor: 'rgb(234, 236, 239)',padding: '20px',lineHeight: '1.5',width: '50%'}}>
        <div className='gray-dot'></div>
        <span>Anti-phishing Code<br></br> <span style={{textDecoration: 'underline',color: 'rgb(201, 148, 0)'}}>Setup</span></span>
        </div>
        <div style={{display: 'flex',margin: '0px',minWidth: '0px',borderWidth: '0px 0px 0px 0px',borderStyle: 'solid',borderColor: 'rgb(234, 236, 239)',padding: '20px',lineHeight: '1.5',width: '50%'}}>
        <div className='gray-dot'></div>
        <span>Turn-on Withdrawal Whitelist<br></br> <span style={{textDecoration: 'underline',color: 'rgb(201, 148, 0)'}}>Turn on</span></span>
        </div>
        </div>
</div>
    </MiniToastII>

    )
}


//This is the default props :)

let X: MiniToastIIProps = {
    text: 'Increase your account security',
    spanText: '',
    progDisplay: 'flex',
    progDisplayLg: 'flex',
    numDisplay: 'none',
    veriProps: 'block',
    manageProps: 'block',
    rightArr: 'none'

}

export default MiniToastII

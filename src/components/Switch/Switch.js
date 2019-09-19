import React from 'react';
import styled from 'styled-components';

import DarkModeIcon from '../../icon/moon.svg';
import LightModeIcon from '../../icon/sun.svg';

const SwitchContainer = styled.div`
    display: inherit;
    
`
const GlobalContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 80px;
    img {
        max-width: 16px;
        height: auto;
    }
`

const SwitchLabel = styled.label`
    cursor: pointer;
    text-indent: -9999px;
    width: 39px;
    height: 20px;
    background: #dbdbdb;
    display: block;
    border-radius: 45px;
    position: relative;
    margin: 0 8px;
    &:after {
        content: '';
        position: absolute;
        top: 2px;
        left: 3px;
        width: 16px;
        height: 16px;
        background: #fff;
        border-radius: 90px;
        transition: 0.2s;
    }
`

const SwitchInput = styled.input`
   height: 0;
   width: 0;
   display: none; 
   &:checked + label {
       background-color: ${props => props.theme.mainColor};
   }

   &:checked + label:after {
    right: 0;
	transform: translateX(100%);
   }
`

const Switch = ({ checked, switchId, onChange }) => {
    return(
        <GlobalContainer>
            <img src={LightModeIcon} alt="Light mode"/>
            <SwitchContainer>
                <SwitchInput 
                    checked={checked} 
                    type="checkbox" 
                    id={switchId} 
                    onChange={onChange}
                />
                <SwitchLabel htmlFor={switchId} /> 
            </SwitchContainer>
            <img src={DarkModeIcon} alt="Dark mode"/>
        </GlobalContainer>
    )
}

export default Switch;
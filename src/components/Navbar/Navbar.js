import React from 'react';
import styled from 'styled-components';

import Switch from './../Switch/Switch';

const Logo = styled.h1`
    font-size: 1.2em;
    font-weight: 700;
    text-transform: uppercase;
`

const NavbarStyle = styled.header`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 16px 32px;
    background-color: ${props => props.theme.navbarBackground};
    color: ${props => props.theme.navbarTextColor}
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.10);
`

const Navbar = ({setTheme, actualTheme}) => {
    return(
        <NavbarStyle>
            <Logo> Flags </Logo>
            <Switch 
                switchId="theme" 
                onChange={setTheme} 
                checked={actualTheme === "dark"}/>
        </NavbarStyle>
    )
}

export default Navbar;
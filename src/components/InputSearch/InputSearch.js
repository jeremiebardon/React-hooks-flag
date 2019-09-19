import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    height: 48px;
    width: 100%;
    border-radius: 0;
    border: 0;
    padding: 0px 16px;
    border: 2px solid #dbdbdb;
    transition: all .3s ease-in-out;
    &:focus {
        outline: none;
        border: 2px solid ${props => props.theme.mainColor};
    }
`

const InputSearch = (props) => {
    return(
        <Input 
            onChange={props.onChange}
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
            type={props.type}
        />
    )
}

export default InputSearch;
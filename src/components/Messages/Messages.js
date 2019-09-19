import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
    background-color: #fff;
    border-radius: 4px;
    padding : 32px 16px;
    text-align: center;
    p {
        font-size: 1em;
    }
`

const Message = ({message}) => {
    return(
        <MessageContainer>
            <p>{message}</p>
        </MessageContainer>
    ) 
}

export default Message;
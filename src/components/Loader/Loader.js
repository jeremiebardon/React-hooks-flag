import React from 'react';
import styled, {keyframes} from 'styled-components';

const keyframeSpinner = keyframes`
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`

const LoaderContainer = styled.div`
   width: 100%;
   margin: 4em 0;
`

const LoaderElement = styled.div`
    border-radius: 50%;
    width: 2em;
    height: 2em;
    margin: 0 auto;
    position: relative;
    text-indent: -9999em;
    border-top: .3em solid ${props => props.theme.mainColorOpacity};
    border-right: .3em solid ${props => props.theme.mainColorOpacity};
    border-bottom: .3em solid ${props => props.theme.mainColorOpacity};
    border-left: .3em solid ${props => props.theme.mainColor};
    transform: translateZ(0);
    animation: ${keyframeSpinner} .5s infinite linear;
    &:after {
        border-radius: 50%;
        width: 2em;
        height: 2em;
    }
`


const Loader = ({loading}) => {
    return loading ? <LoaderContainer> <LoaderElement />  </LoaderContainer> : false;
}

export default Loader;
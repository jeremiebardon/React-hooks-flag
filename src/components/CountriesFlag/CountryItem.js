import React from 'react';
import styled from 'styled-components';

const CountryItemCard = styled.div`
    max-width: 100%;
    overflow: hidden;
    background-color: #fff;
`

const CountryItemCardImage = styled.div.attrs(props => ({
	    style: { backgroundImage: `url(${props.imgUrl})` }
    }))`
    height: 180px;
    overflow: hidden;
    padding: 24px;
    background-size: cover;
    background-position: center center;
`

const CountryItemCardContent = styled.div`
    padding: 16px;
    h1 {
        text-transform: uppercase;
        font-size: 1em;
        font-weight: 700;
        margin-bottom: 16px;
    }

    ul {
        list-style-type: dot;
        li {
            line-height: 1.4em;
            sup {
                vertical-align:super;
                font-size: .6em;
            }
        }
    }

`

const CountryItem = ({name, area, capital, population, flag}) => {
    return(
        <CountryItemCard>
            <CountryItemCardImage imgUrl={flag}/>
            <CountryItemCardContent>
                <h1> {name} </h1>
                <ul>
                    <li> Capital: {capital} </li>
                    <li> Taille: {area} km<sup>2</sup> </li>
                    <li> Habitant: {population} </li>
                </ul>
            </CountryItemCardContent>
            
        </CountryItemCard>
    )
}

export default CountryItem;
import React from 'react';
import styled from 'styled-components';

import CountryItem from'./CountryItem';

const FlagsWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-gap: 16px;

    @media screen and (max-width: 1440px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 780px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

function CountriesFlag({countriesItems}) {
    const renderCountryItem = (countries) => {
        if(countries.length) {
            return countries.map(country => {
                console.log(country)
                return <CountryItem 
                    key={country.numericCode}
                    name={country.name}
                    area={country.area}
                    capital={country.capital}
                    population={country.population}
                    flag={country.flag}
                />
            })
        }
    }

    return (
        <FlagsWrapper>
            {renderCountryItem(countriesItems)}
        </FlagsWrapper>
    );
}

export default CountriesFlag;
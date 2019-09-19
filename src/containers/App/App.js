import React, {Fragment, useState, useEffect} from 'react';

// Plugins
import { ThemeProvider } from "styled-components";

// Style
import GlobalStyle from '../../style/global';
import {SiteLayout, Section} from '../../style/layout'
import {themeLight, themeBlack} from '../../style/themes';

// Helpers
import useTheme from '../../helpers/themeHook';
import useDebounce from '../../helpers/debounceHook';

// Components
import Navbar from '../../components/Navbar/Navbar';
import CountriesItems from '../../components/CountriesFlag/CountriesFlag';
import InputSearch from '../../components/InputSearch/InputSearch';
import Loader from "./../../components/Loader/Loader";
import Message from "./../../components/Messages/Messages";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const [theme, toggleTheme] = useTheme();
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  async function fetchData(apiUrl, searchTerm)  {
    const res = await fetch(apiUrl + searchTerm);
    res.json().then(res => {
      setCountries(res)
      setIsSearching(false)
    }).catch(error => {
      setIsSearching(false);
      return [];
    });
  }

  useEffect(() => {
    const apiUrl = 'https://restcountries.eu/rest/v2/';
    setIsSearching(true);
    if(!searchTerm.length) fetchData(apiUrl, `all`);
    if (debouncedSearchTerm && searchTerm.length) {
      fetchData(apiUrl, `name/${searchTerm}`);
    } else {
      setCountries([])
    }
  }, [debouncedSearchTerm]);

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeBlack}>
      <Fragment>
        <GlobalStyle />
        <Navbar setTheme={toggleTheme} actualTheme={theme}/>
        
        <SiteLayout>
          <Section marginSection={"24px 0"}>
            <InputSearch 
              type="search" 
              placeholder="Search country" 
              onChange={e => setSearchTerm(e.target.value)}
            />
          </Section>

          <Section marginSection={"24px 0"}>
            <Loader loading={isSearching} />

            {isSearching === false ? 
              <CountriesItems countriesItems={countries} /> : "" 
            }

            {!countries.length && searchTerm.length ? 
              <Message message="No countries to display" /> : "" 
            }
          </Section>
          
        </SiteLayout> 
      </Fragment>
    </ThemeProvider>
  );
}

export default App;

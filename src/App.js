import { useState } from 'react';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import { useGetAllCountriesQuery } from './features/api/apiSlice'

import CountriesList from './features/CountriesList';
import Header from './components/Header';
import SearchBar from './features/SearchBar';
import CountryCard from './components/CountryCard';

const themes = {
  light: './light.css',
  dark: './dark.css',
}

function App() {
  const [selectedInput, setSelectedInput] = useState('')
  const [selectedContinent, setSelectedContinent] = useState('')
  const [showDetails, setShowDetails] = useState(false)

  const {
    data: countries,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetAllCountriesQuery()

  return (
    <ThemeSwitcherProvider 
      defaultTheme='light' 
      insertionPoint={document.getElementById('inject-styles-here')} 
      themeMap={themes}>
      <div>
        <Header />
        <div className='mainContainer'>
          <SearchBar
            countries={countries}
            isSuccess={isSuccess}
            setSelectedInput={setSelectedInput}
            selectedInput={selectedInput}
            setSelectedContinent={setSelectedContinent}
            selectedContinent={selectedContinent}
            setShowDetails={setShowDetails}
          />
          {!showDetails ? 
            <CountriesList 
              countries={countries}
              isLoading={isLoading}
              isSuccess={isSuccess}
              isError={isError}
              error={error}
              selectedInput={selectedInput}
              selectedContinent={selectedContinent}
              setShowDetails={setShowDetails}
            />
            :
            <CountryCard
              countries={countries}
              showDetails={showDetails}
              setShowDetails={setShowDetails}
            />
          }
        </div>
      </div>
    </ThemeSwitcherProvider>
  );
}

export default App;

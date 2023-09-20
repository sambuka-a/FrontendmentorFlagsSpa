import React from 'react'

const CountriesList = ({countries, isLoading, isSuccess, isError, error, selectedInput, selectedContinent, setShowDetails}) => {

  const filteredCountries = selectedInput ?
    countries.filter(country => 
      country?.name?.common.toLowerCase() === selectedInput.toLowerCase()
    ) :
    selectedContinent ? 
      countries.filter(country => 
        country?.region.toLowerCase() === selectedContinent.toLowerCase()
      ) :
      countries

  return (
    <div className='listContainer'>
      {isLoading && <section>Loading</section>}
      {isError && <section>{error}</section>}
      {isSuccess && filteredCountries.map(item => (
        <article 
          className='countryCard' 
          key={item?.cca2}
          onClick={() => setShowDetails(item?.name?.common)}
        >
          <section className='countryFlag'><img src={item?.flags?.svg} alt={item?.flags?.alt}/></section>
          <section className='countryDetails'>
            <h2>{item?.name?.common}</h2>
            <section className='countryShorts'>
              <section><span>Population: </span>{item?.population.toLocaleString()}</section>
              <section><span>Region: </span>{item?.region}</section>
              <section><span>Capital: </span>{item?.capital}</section>
            </section>
          </section>
        </article>
      ))}
    </div>
  )
}

export default CountriesList
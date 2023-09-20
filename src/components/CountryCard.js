import React from 'react'
import Map from '../components/Map';

const CountryCard = ({countries, showDetails, setShowDetails}) => {

  const countryToshow = countries.find(country => 
      country?.name?.common.toLowerCase() === showDetails.toLowerCase() || 
      country?.cca3.toLowerCase() === showDetails.toLowerCase()
    )

    console.log(countryToshow);

  return (
    <div className='countryInfo'>
      <section className='cardHeader'>
        <button className='button' onClick={() => setShowDetails('')}>Back</button>
      </section>
      <section className='cardWrapper'>
        <section className='countryFlagInDetails'><img src={countryToshow?.flags?.svg} alt={countryToshow?.flags?.alt}/></section>
        <section className='countryDetailsInDetails'>
          <section><h2>{countryToshow?.name?.common}</h2></section>
          <section className='countryData'>
            <section className='countryShorts'>
              <section><span>Native Name: </span>{countryToshow?.name?.official}</section>
              <section><span>Population: </span>{countryToshow?.population.toLocaleString()}</section>
              <section><span>Region: </span>{countryToshow?.region}</section>
              <section><span>Sub Region: </span>{countryToshow?.subregion}</section>
              <section><span>Capital: </span>{countryToshow?.capital}</section>
            </section>
            <section className='countryShorts'>
              <section className='countryShortsAdditional'><span>Top Level Domain: </span>{countryToshow?.tld?.map((i, index, array) => <p key={i}>{i}{index !== array.length -1 ? ',' : ''}</p>)}</section>
              <section className='countryShortsAdditional'><span>Currencies: </span>{Object.keys(countryToshow?.currencies).map((i, index, array) =><p key={i}>{i}{index !== array.length -1 ? ',' : ''}</p>)}</section>
              <section className='countryShortsAdditional'><span>Languages:</span>{Object.values(countryToshow?.languages).map((i, index, array) =><p key={i}>{i}{index !== array.length -1 ? ',' : ''}</p>)}</section>
            </section>
          </section>
          <section className='countryBorders'>
            <span>Border Countries</span>
            <span>{countryToshow?.borders?.map((i, _, arr) => 
              <button
                className='button'
                key={i}
                onClick={() => setShowDetails(i)}
              >{i}</button>)}
            </span>
          </section>
        </section>
      </section>
      <section className='mapSection'>
        <Map data={countryToshow}/>
      </section>
    </div>
  )
}

export default CountryCard
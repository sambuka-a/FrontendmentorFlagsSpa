import {useState, useEffect, useRef} from 'react'
import { TbSearch, TbX } from "react-icons/tb"

import '../index.css'

const SearchBar = ({countries, isSuccess, setSelectedInput, selectedInput, setSelectedContinent, selectedContinent, setShowDetails}) => {

  const [filteredData, setFilteredData] = useState([])

  const inputRef = useRef()
  
  useEffect(() => {
    inputRef.current.focus()  
  })

  const handleFilter = (e) => {
    const keyword = e.target.value
    setSelectedInput(prev => keyword)
    const newFilter = countries.filter(country => {
      return country?.name?.common.toLowerCase().includes(keyword.toLowerCase()) 
    })

    if(keyword === '') {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  const handleClearInput = () => {
    inputRef.current.value = ''
    setFilteredData([])
    setSelectedInput('')
  }

  const handleSetInput = (selectedKeyword) => {
    inputRef.current.value = selectedKeyword
    setFilteredData([])
    setSelectedContinent('')
    setSelectedInput(prev => selectedKeyword)
    setShowDetails(false)
  }

  const continents = ['Europe', 'Americas', 'Asia', 'Oceania']

  const continentOptions = continents.map(item => (
    <option key={item} value={item}>
        {item}
    </option>
  ))

  const onContinentChange = (e) => {
    setSelectedContinent(prevState => e.target.value)
    handleClearInput()
    setShowDetails(false)
  }

  return (
    <div className='searchBarContainer'>
      <section className='searchBar'>
        <section className='searchInput'>
          <input 
            type='text'
            ref={inputRef}
            placeholder='Input Country Name...'
            onChange={handleFilter}
          />
          <section className='searchIcon'>
            {selectedInput.length === 0 ? 
              <span className='searchButton'>
                <TbSearch/>
              </span> : 
              <span 
                className='clearButton'>
                <TbX onClick={handleClearInput}/>
              </span>}
          </section>
        </section>
        { filteredData.length !== 0 && (
          <section className='searchResults'>
            {isSuccess && filteredData.map(country => {
              return <section
                key={country?.cca2} 
                className='resultsList'
                onClick={() => handleSetInput(country?.name?.common)}
              >
                <p>{country?.name?.common}</p>
              </section>
            })}
          </section>
        )}
      </section>
      <section className='searchDropdown'>
        <form>
          <select id='continent' value={selectedContinent} onChange={onContinentChange}>
            <option value=''>Filter by Region</option>
            {continentOptions}
          </select>
        </form>
      </section>
    </div>
  )
}

export default SearchBar
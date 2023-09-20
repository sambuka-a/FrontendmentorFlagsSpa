import '../index.css'

const Dropdown = ({selectedContinent, setSelectedContinent, handleClearInput }) => {

  const continents = ['Europe', 'Americas', 'Asia', 'Oceania']

  const continentOptions = continents.map(item => (
    <option key={item} value={item}>
        {item}
    </option>
  ))

  const onContinentChange = (e) => {
    setSelectedContinent(prevState => e.target.value)
    handleClearInput()
  }

  return (
    <section className='searchDropdown'>
      <form>
        <select id='continent' value={selectedContinent} onChange={onContinentChange}>
          <option value=''>Filter by Region</option>
          {continentOptions}
        </select>
      </form>
    </section>
  )
}

export default Dropdown
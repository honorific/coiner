import {useEffect, useState} from 'react'
import homeStore from '../stores/homeStore'
import {Link} from 'react-router-dom'

const Home = () => {
  const store = homeStore()
  const [debouncedInputValue, setDebouncedInputValue] = useState()
  const changeHandler = (e) => {
    setTimeout(() => {
      store.setQuery(e)
    }, 5000)
  }
  useEffect(() => {
    store.fetchCoins()
  }, [])
  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      store.searchCoins()
    }, 5000)
    return () => clearTimeout(delayInputTimeoutId)
  }, [store.query])
  return (
    <div>
      <input type='text' value={store.query} onChange={store.setQuery} />
      {store.coins.map((coin) => {
        return (
          <div key={coin.id}>
            <Link to={`/${coin.id}`}>{coin.name}</Link>
          </div>
        )
      })}
    </div>
  )
}

export default Home

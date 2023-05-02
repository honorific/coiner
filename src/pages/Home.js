import {useEffect, useState} from 'react'
import homeStore from '../stores/homeStore'
import {Link} from 'react-router-dom'
import Header from '../components/Header'

const Home = () => {
  const store = homeStore()
  useEffect(() => {
    store.fetchCoins()
  }, [])
  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      store.searchCoins()
    }, 500)
    return () => clearTimeout(delayInputTimeoutId)
  }, [store.query])
  return (
    <div>
      <Header />
      <header className='home-search'>
        <div className='width'>
          <h2>Searchfor a coin: </h2>
          <input type='text' value={store.query} onChange={store.setQuery} />
        </div>
      </header>
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

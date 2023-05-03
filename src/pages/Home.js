import {useEffect, useState} from 'react'
import homeStore from '../stores/homeStore'
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import ListItem from '../components/ListItem'

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
          <h2>Search for a coin: </h2>
          <input type='text' value={store.query} onChange={store.setQuery} />
        </div>
      </header>
      {store.coins.map((coin) => {
        return <ListItem key={coin.id} coin={coin} />
      })}
    </div>
  )
}

export default Home

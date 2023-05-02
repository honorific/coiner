import axios from 'axios'
import {create} from 'zustand'

const homeStore = create((set) => ({
  coins: [],
  trending: [],
  query: '',

  setQuery: (e) => {
    set({query: e.target.value})
    //homeStore.getState().searchCoins()
  },

  searchCoins: async () => {
    const {query, trending} = homeStore.getState()
    if (query.length > 2) {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${query}`,
      )
      const coins = res.data.coins.map((coin) => {
        return {
          name: coin.name,
          image: coin.large,
          id: coin.id,
        }
      })
      set({coins: coins})
    } else {
      set({coins: trending})
    }
  },

  fetchCoins: async () => {
    const [res, btcRes] = await Promise.all([
      axios.get('https://api.coingecko.com/api/v3/search/trending'),
      axios.get(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd',
      ),
    ])
    const btcPrice = btcRes.data.bitcoin.usd
    console.log(btcPrice)
    const coins = res.data.coins.map((coin) => {
      return {
        name: coin.item.name,
        image: coin.item.large,
        id: coin.item.id,
        priceBTC: coin.item.price_btc,
      }
    })
    set({coins: coins, trending: coins})
  },
}))

export default homeStore

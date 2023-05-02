import React, {useEffect} from 'react'
import showStore from '../stores/showStore'
import {useParams} from 'react-router-dom'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const Show = () => {
  const store = showStore()
  const params = useParams()

  useEffect(() => {
    console.log('params is:', params)
    store.fetchData(params.id)
  }, [])

  if (!store.data) {
    return <></>
  } else {
    return (
      <div>
        <header>
          <img src={store.data?.image?.large} />
          <h2>
            {store.data.name} ({store.data.symbol})
          </h2>
        </header>
        <AreaChart
          width={1200}
          height={400}
          data={store.graphData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='Date' />
          <YAxis />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='Price'
            stroke='#8884d8'
            fill='#8884d8'
          />
        </AreaChart>
        <div>
          <h4>24h high</h4>
          <span>{store?.data?.market_cap_rank}</span>
        </div>
        <div>
          <h4>24h high</h4>
          <span>${store?.data?.market_data?.high_24h?.usd}</span>
        </div>
        <div>
          <h4>24h low</h4>
          <span>${store?.data?.market_data?.low_24h?.usd}</span>
        </div>
        <div>
          <h4>circulating supply</h4>
          <span>${store?.data?.market_data?.circulating_supply}</span>
        </div>
        <div>
          <h4>current price</h4>
          <span>${store?.data?.market_data?.current_price?.usd}</span>
        </div>
        <div>
          <h4>1y change</h4>
          <span>
            {store?.data?.market_data?.price_change_percentage_1y.toFixed(2)}%
          </span>
        </div>
      </div>
    )
  }
}

export default Show

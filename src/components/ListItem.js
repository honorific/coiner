import {Link} from 'react-router-dom'

const ListItem = ({coin}) => {
  return (
    <div className='home-crypto'>
      <Link to={`/${coin.id}`}>
        <span className='home-crypto-image'>
          <img src={coin.image} />
        </span>
        <span className='home-crypto-name'>{coin.name}</span>
        <span className='home-crypto-prices'>
          <span>{coin.priceBTC} BTC</span>
          <span>{coin.priceUsd} USD</span>
        </span>
      </Link>
    </div>
  )
}

export default ListItem

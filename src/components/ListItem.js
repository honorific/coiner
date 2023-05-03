import {Link} from 'react-router-dom'

const ListItem = ({coin}) => {
  return (
    <div>
      <Link to={`/${coin.id}`}>{coin.name}</Link>
    </div>
  )
}

export default ListItem

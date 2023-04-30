import React, {useEffect} from 'react'
import showStore from '../stores/showStore'
import {useParams} from 'react-router-dom'

const Show = () => {
  const store = showStore()
  const params = useParams()

  useEffect(() => {
    console.log('params is:', params)
    store.fetchData(params.id)
  }, [])

  return <div>Show</div>
}

export default Show

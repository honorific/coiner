import axios from 'axios'
import {create} from 'zustand'

const showStore = create((set) => ({
  fetchData: (id) => {
    console.log('hey ', id)
  },
}))

export default showStore

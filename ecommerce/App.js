import { View, Text } from 'react-native'
import React from 'react'
import Product from './src/Product'
import { store } from './src/store'
import {Provider} from 'react-redux'

const App = () => {
  return (
    <Provider store={store} >
      <Product/>
    </Provider>
   
  )
}

export default App
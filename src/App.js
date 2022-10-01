import './App.css'

import { ProductsContextProvider } from '../src/global/ProductsContext'
import { CartContextProvider } from './global/CartContext'

import Routers from './config/Routers'

const App = () => {
  return (
    <>
      <ProductsContextProvider>
        <CartContextProvider >
          <Routers />
        </CartContextProvider>
      </ProductsContextProvider>
    </>
  )
}

export default App

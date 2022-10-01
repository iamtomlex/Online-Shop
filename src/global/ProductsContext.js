import React, { useContext, useState } from 'react'

import bed from '../assets/Products/bed.jpg'
import headphone from '../assets/Products/headphone.jpg'
import iphone from '../assets/Products/iphone.jpg'
import laptop from '../assets/Products/laptop.jpg'
import perfume from '../assets/Products/perfume.jpg'
import shoe1 from '../assets/Products/shoe-1.jpg'
import shoe2 from '../assets/Products/shoe-2.jpg'
import ring from '../assets/Products/ring.jpg'
import watch1 from '../assets/Products/watch.jpg'
import watch2 from '../assets/Products/watch-2.jpg'

const data = [
  {
    id: 1,
    name: 'Bed',
    price: 800,
    image: bed,
    status: 'hot',
  },
  {
    id: 2,
    name: 'Head Phone',
    price: 30,
    image: headphone,
    status: 'new',
  },
  {
    id: 3,
    name: 'Iphone',
    price: 400,
    image: iphone,
    status: 'hot',
  },
  {
    id: 4,
    name: 'Laptop',
    price: 1000,
    image: laptop,
    status: 'hot',
  },
  {
    id: 5,
    name: 'Perfume',
    price: 40,
    image: perfume,
    status: 'new',
  },
  {
    id: 6,
    name: 'Wing tip',
    price: 100,
    image: shoe1,
    status: 'hot',
  },
  {
    id: 7,
    name: 'Sneaker',
    price: 80,
    image: shoe2,
    status: 'new',
  },
  {
    id: 8,
    name: 'Ring',
    price: 130,
    image: ring,
    status: 'new',
  },
  {
    id: 9,
    name: 'Watch 1',
    price: 230,
    image: watch1,
    status: 'hot',
  },
  {
    id: 10,
    name: 'Watch 2',
    price: 200,
    image: watch2,
    status: 'new',
  },
]

const ProductsContext = React.createContext()

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data)

  return (
    <ProductsContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

const useProductContext = () => {
  return useContext(ProductsContext)
}

export { ProductsContext, ProductsContextProvider, useProductContext }

import React, { useContext, useReducer, useEffect, useState } from 'react'

import { CartReducer } from './CartReducer'

const CartContext = React.createContext()

const CartContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [id, setId] = useState(null)

  const initialState = {
    shoppingCart: [],
    total: 0,
    qty: 0,
    isModalOpen: false,
    modalContent: '',
    isDeleteModalOpen: false,
  }

  const [state, dispatch] = useReducer(
    CartReducer,
    initialState,
    (initial) => JSON.parse(localStorage.getItem('localCart')) || initial
  )

  useEffect(() => {
    localStorage.setItem('localCart', JSON.stringify(state))
  }, [state])

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const addToCart = (id, product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { id, product } })
  }

  const increase = (id, cart) => {
    dispatch({ type: 'LOADING' })
    dispatch({ type: 'INC', payload: { id, cart } })
  }

  const decrease = (id, cart) => {
    dispatch({ type: 'DEC', payload: { id, cart } })
  }

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
  }, [state.shoppingCart])

  const showDeleteModal = (id) => {
    dispatch({ type: 'SHOW_DELETE_MODAL', payload: id })
    setId(id)
  }

  const hideConfirmationModal = () => {
    dispatch({ type: 'HIDE_DELETE_MODAL' })
  }



  return (
    <CartContext.Provider
      value={{
        ...state,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        addToCart,
        decrease,
        increase,
        remove,
        closeModal,
        showDeleteModal,
        hideConfirmationModal,
        id,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCartContext = () => {
  return useContext(CartContext)
}

export { CartContext, CartContextProvider, useCartContext }

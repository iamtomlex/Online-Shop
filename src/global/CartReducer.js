export const CartReducer = (state, action) => {
  const { shoppingCart } = state

  let product

  if (action.type === 'ADD_TO_CART') {
    const check = shoppingCart.find(
      (product) => product.id === action.payload.id
    )

    if (check) {
      return {
        ...state,
        isModalOpen: true,
        modalContent: 'Ooops!!! Product has already been added to cart',
      }
    } else {
      product = action.payload.product
      product['qty'] = 1

      return {
        ...state,
        isModalOpen: true,
        modalContent: 'Product added successfully',
        shoppingCart: [product, ...shoppingCart],
      }
    }
  }

  if (action.type === 'INC') {
    let tempCart = state.shoppingCart
      .map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, qty: item.qty + 1 }
        }
        return item
      })
      .filter((item) => item.qty !== 0)
    return {
      ...state,
      isModalOpen: true,
      loading: false,
      shoppingCart: tempCart,
      modalContent: 'Product added successfully',
    }
  }
  if (action.type === 'SHOW_DELETE_MODAL') {
    return { ...state, isDeleteModalOpen: true }
  }
  if (action.type === 'DEC') {
    let tempCart = state.shoppingCart
      .map((item) => {
        if (item.id === action.payload.id && item.qty > 1) {
          return { ...item, qty: item.qty - 1 }
        }
        return item
      })
      .filter((item) => item.qty !== 0)

    return {
      ...state,
      shoppingCart: tempCart,
      isModalOpen: true,
      modalContent: 'Item quantity has been updated',
    }
  }

  if (action.type === 'HIDE_DELETE_MODAL') {
    return { ...state, isDeleteModalOpen: false }
  }

  if (action.type === 'GET_TOTALS') {
    let { total, qty } = state.shoppingCart.reduce(
      (cartTotal, cartItem) => {
        const { price, qty } = cartItem

        cartTotal.qty += qty
        cartTotal.total += price * qty

        return cartTotal
      },
      {
        total: 0,
        qty: 0,
      }
    )

    total = parseFloat(total.toFixed(2))
    return { ...state, total, qty }
  }

  if (action.type === 'REMOVE') {
    const newItems = state.shoppingCart.filter(
      (item) => item.id !== action.payload
    )
    return {
      ...state,
      isModalOpen: true,
      isDeleteModalOpen: false,
      modalContent: 'Product was removed from cart',
      shoppingCart: newItems,
    }
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false }
  }

  return state
}

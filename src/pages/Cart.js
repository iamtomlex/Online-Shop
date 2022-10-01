import { useCartContext } from '../global/CartContext'

import { FaPlus, FaMinus } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import Remove from '../components/deleteModal/DeleteModal'

const Cart = () => {
  const {
    shoppingCart,
    total,
    qty,
    increase,
    decrease,
    id,
    showDeleteModal,
    isDeleteModalOpen,
  } = useCartContext()

  return (
    <>
      {isDeleteModalOpen && <Remove id={id} />}
      <div className='cart-container'>
        <div className='cart-details' style={{ marginTop: '100px' }}>
          <h4 className='ct'>Cart ({qty})</h4>
          {shoppingCart.length > 0
            ? shoppingCart.map((cart) => (
                <div className='cart' key={cart.id}>
                  <div className='cart-header'>
                    <div className='cart-image'>
                      <img src={cart.image} alt='' />
                    </div>
                    <div className='cart-product-info'>
                      <p className='cart-product-name'>{cart.name}</p>
                      <h3 className='cart-product-price'>${cart.price}.00</h3>
                    </div>
                  </div>

                  <div className='cart-functions'>
                    <div
                      className='delete-product'
                      onClick={() => showDeleteModal(cart.id)}
                    >
                      <button>
                        <MdDeleteOutline />
                      </button>
                      <h4>Remove</h4>
                    </div>
                    <div className='cart-toggle'>
                      <button
                        onClick={() => decrease(cart.id, cart)}
                        style={{
                          background: cart.qty === 1 ? `#f6b894` : '',
                        }}
                      >
                        <FaMinus />
                      </button>
                      <h4>{cart.qty}</h4>
                      <button onClick={() => increase(cart.id, cart)}>
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : 'Sorry your cart is currently empty'}
        </div>

        <div className='cart-summary-container' style={{ marginTop: '100px' }}>
          {shoppingCart.length > 0 ? (
            <div className='cart-summary'>
              <div className='summary'>
                <h2>Cart Summary</h2>
                <div className='total-price'>
                  <p>Subtotal</p>
                  <h2>${total}.00</h2>
                </div>
                <div className='checkout-btn'>
                  <button>Checkout (${total}.00)</button>
                </div>

                <div className='stripe-section'>
                  {/* <StripeCheckout
                stripeKey='pk_test_HnF0cQhq9UGw2GvWRItNiAQM00kn9H1RCg'
                token={handleToken}
                billingAddress
                shippingAddress
                amount={total * 100}
                name='All Products'
              ></StripeCheckout> */}
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  )
}

export default Cart

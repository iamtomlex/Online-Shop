import './deleteModal.css'

import { FaTimes } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import { useCartContext } from '../../global/CartContext'

const DeleteModal = ({ id }) => {
  const { hideConfirmationModal, remove } = useCartContext()

  const handleDeleteModal = (e) => {
    if (e.target.classList.contains('overlay')) {
      hideConfirmationModal()
    }
  }

  return (
      <div className='remove-modal' onClick={handleDeleteModal}>
        <div className='overlay'></div>
        <div className='remove-container'>
          <div className='remove-header'>
            <h4>Remove from cart</h4>
            <i>
              <FaTimes onClick={hideConfirmationModal} />
            </i>
          </div>
          <p>Do you really want to remove the item from cart?</p>
          <div className='remove-footer' onClick={() => remove(id)}>
            <div>
              <i>
                <MdDeleteOutline />
              </i>
              <h4>Remove item</h4>
            </div>
          </div>
        </div>
      </div>
  )
}

export default DeleteModal

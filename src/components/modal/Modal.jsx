import './modal.css'

import { FaTimes } from 'react-icons/fa'
import { BsCheck2 } from 'react-icons/bs'
import { useEffect } from 'react'
import { useCartContext } from '../../global/CartContext'

const Modal = () => {
  const { closeModal, modalContent } = useCartContext()

  useEffect(() => {
    const timer = setTimeout(() => {
      closeModal()
    }, 2000)

    return () => clearTimeout(timer)
  },[closeModal])
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-content-text'>
          <BsCheck2 className='check' />
          <p>{modalContent}</p>
        </div>
        <FaTimes className='modal-close' onClick={closeModal} />
      </div>
    </div>
  )
}

export default Modal

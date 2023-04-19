import React from 'react';
import { onCloseModal } from '../features/modalSlice';
import { clearCart } from '../features/cartSlice';
import { useDispatch } from 'react-redux';

function Modal() {
  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            onClick={() => {
              dispatch(clearCart());
              dispatch(onCloseModal());
            }}
            type="button"
            className="btn confirm-btn"
          >
            confirm
          </button>
          <button
            onClick={() => dispatch(onCloseModal())}
            type="button"
            className="btn clear-btn"
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Modal;

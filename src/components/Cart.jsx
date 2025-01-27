import React, { useContext, useRef, useState } from "react";
import "./Cart.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { MdDiscount } from "react-icons/md";
import { DishList } from "../store/store";


const Cart = () => {
  const { cart, removeFromCart } = useContext(DishList);

  const [promoAreaVisible, setPromoAreaVisible] = useState(false);
  const toggleInput = () => {
    setPromoAreaVisible((prevState) => !prevState);
  }
  const applyCoupon = (event) => {
    console.log("Promo code applied", event.target.value);
  };


  const noteRef = useRef(null);
  const [noteTextAreaVisible, setNoteTextAreaVisible] = useState(false);
  const toggleTextArea = () => {
    setNoteTextAreaVisible((prevState) => !prevState);
  }

  return (
    <div className="cart-order">
      <div className="cart-section">
        <div className="cart-summary">
          <p className="cart-heading">My Cart</p>
          <div className="cart-content">
            {cart.length === 0 ? (
              <p className="cart-empty">Your cart is empty.</p>
            ) : (
              <ul className="cart-list">
                {cart.map((cartItem) => (
                  <li key={cartItem.id} >
                    <hr className="cart-hr" />
                    <div className="cart-item">
                      <div className="cart-row">
                        <div className="cart-image"></div>
                        <div className="cart-group1">
                          <span className="dish-item">{cartItem.name}</span>
                          <span className="dish-item">₹{cartItem.price}</span>
                        </div>
                        <div className="cart-group2">
                          <span className="dish-item">{cartItem.quantity}</span>
                          <span className="dish-item">₹{cartItem.price * cartItem.quantity}</span>
                        </div>
                        <div className="cart-group3">
                          <RiDeleteBinLine className="dish-remove" onClick={() => removeFromCart(cartItem.id)} />
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
                <hr />
              </ul>
            )}
          </div>
          {cart.length > 0 && (
            <div className="cart-other">
              <div className="promo-code">
                <div className="promo-content">
                  <MdDiscount className="promo-icon" />
                  <p onClick={toggleInput}>Enter a promo code</p>
                </div>
                {promoAreaVisible && (
                  <div className="promo-input-section">
                    <input
                      type="text"
                      className="promo-input"
                      id="coupon"
                      placeholder="e.g., SAVE50"
                    />
                    <p onClick={applyCoupon} className="apply-button">Apply</p>
                  </div>
                )}
              </div>
              <div className="cart-note">
                <div className="note-content">
                  <MdOutlineStickyNote2 className="note-icon" />
                  <p onClick={toggleTextArea}>Add a note</p>
                </div>
                {noteTextAreaVisible && (
                  <form onSubmit={(event) => {
                    event.preventDefault();
                    console.log("Note:", noteRef.current.value);
                  }}>
                    <textarea
                      name="note-input"
                      id="get-note"
                      rows="3"
                      className="note-textarea"
                      ref={noteRef}
                    ></textarea>
                    <button type="submit" className="note-submit">Add Note</button>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="order-section">
          {cart.length > 0 && (
            <div className="order-summary">
              <p className="cart-heading">Order summary</p>
              <hr />
              <div className="order-group">
                <p className="order-subtotal">Subtotal</p>
                <p>₹{cart.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)}
                </p>
              </div>
              <div className="order-group">
                <p>Pickup</p>
                <p>FREE</p>
              </div>
              <hr />
              <div className="order-group order-total">
                <p>Total</p>
                <p>₹{cart.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)}</p>
              </div>
              <button className="cart-payment">Checkout</button>
            </div>
          )}
        </div>
      </div >
    </div>
  );
};

export default Cart;

import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import Cart from "../Cart/Cart";
import Notification from "../Common/Notification/Notification";

import {
  openCart,
  closeCart,
  setWindowClosingProcess,
  setCoordinatesIconCart,
} from "../../redux/appReducer";

import style from "./Header.module.css";
import cart from "../../img/icon/cart.svg";

const Header = (props) => {
  // Close modal window
  const closePopup = () => {
    const ANIMATION_TIME = 210;
    props.setWindowClosingProcess(true);
    setTimeout(() => {
      props.closeCart();
      props.setWindowClosingProcess(false);
    }, ANIMATION_TIME);
  };

  // Get cart coordinates
  const cartElement = useRef();

  useEffect(() => {
    const coordinations = cartElement.current.getBoundingClientRect();
    const top = Math.round(coordinations.top);
    const left = Math.round(coordinations.left);
    props.setCoordinatesIconCart({ top, left });
  }, []);

  return (
    <header className={style.header}>
      <div className={style.rowTitle}>
        <NavLink to="/selectionGoods" className={style.title}>
          Google Shop
        </NavLink>
      </div>
      <div className={style.nav}>
        <div className={style.rowNav}>
          <div
            ref={cartElement}
            className={style.titleCart}
            onClick={props.openCart}
          >
            <img src={cart} alt="" />
            <span className={style.quan}>{props.cart.length}</span>
          </div>
          <Cart cart={props.cart} closePopup={closePopup} />
          {props.isAlreadyInCart && (
            <Notification
              className={style.alreadyNotification}
              direction="left"
            >
              <span className={style.message}>
                This goods is already in your cart
              </span>
            </Notification>
          )}
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    isAlreadyInCart: state.cardProduct.isAlreadyInCart,
    cart: state.cardProduct.cart,
    initializedApp: state.app.initializedApp,
  };
};
export default connect(mapStateToProps, {
  openCart,
  closeCart,
  setWindowClosingProcess,
  setCoordinatesIconCart,
})(Header);

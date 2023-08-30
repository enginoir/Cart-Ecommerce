import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import store from "./store";
import CartProduct from "./CartProduct";
import { actionTypes } from "./reducers/CartReducer";
import { ShoppingCartRounded } from "@material-ui/icons";
import { Typography, Button } from "@material-ui/core";

function Cart({ cart }) {
  const history = useNavigate();

  const placeOrder = () => {
    setTimeout(() => {
      store.dispatch({ type: actionTypes.RESET_CART });
      console.log("Cart Reset");
      history("/");
    }, 1000);
  };

  const goToHome = () => {
    history("/");
  };

  return (
    <div>
      <div style={{ marginTop: 30 }}></div>
      <Typography variant="h3">
        <ShoppingCartRounded fontSize="large" />
        &nbsp; Cart
      </Typography>
      {cart.map((item, id) => {
        return <CartProduct item={item} key={id} />;
      })}
      <div style={{ marginTop: 30 }}></div>
      <Button color="secondary" variant="contained" onClick={placeOrder}>
        Check Out
      </Button>
      <Button color="primary" variant="contained" onClick={goToHome}>
        Back to Home
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);

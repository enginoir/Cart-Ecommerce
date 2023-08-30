import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ShoppingCartIconRounded from "@material-ui/icons/ShoppingCart";

function CartCounter({ cart }) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.count;
    });
    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div>
      <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
        <div
          style={{
            width: "50px",
            height: "45px",
            backgroundColor: "black",
            WebkitBorderRadius: "50%",
            textAlign: "center",
            marginTop: "2%",
            marginLeft: "49%",
          }}
        >
          <ShoppingCartIconRounded
            fontSize="medium"
            style={{ marginTop: "10px" }}
          />
          <span className="cart-items" style={{ color: "white" }}>
            {cartCount}
          </span>
        </div>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(CartCounter);

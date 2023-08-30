import store from "./store";
import { useState } from "react";
import { actionTypes } from "./reducers/CartReducer";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { DeleteRounded } from "@material-ui/icons";

const CartProduct = ({ item }) => {
  const [qty, setQty] = useState(item.count);

  const deleteFromCart = () => {
    const action = {
      type: actionTypes.DELETE_FROM_CART,
      payload: {
        item: item,
      },
    };
    store.dispatch(action);
    console.log("Deleted a book from cart");
  };

  const changeQuantity = () => {
    const action = {
      type: actionTypes.CHANGE_QUANTITY,
      payload: {
        item: {
          ...item,
          count: parseInt(qty),
        },
      },
    };
    store.dispatch(action);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "10px 10px 10px 10px",
          marginLeft: "250px",
          marginRight: "50px",
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={3} md={3} lg={3}>
            <img
              src={item.link} // Assuming the 'link' property is where you store the image URL
              alt={item.name}
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={7} md={7} lg={7}>
            <Card>
              <CardHeader
                action={
                  <IconButton onClick={deleteFromCart} color="secondary">
                    <DeleteRounded fontSize="large" />
                  </IconButton>
                }
                title={" Product ID -  " + item.id}
              />
              <input
                type="number"
                value={qty}
                min="1"
                onChange={(e) => setQty(e.target.value)}
              />
              <button className="btn" onClick={changeQuantity}>
                Change
              </button>
              <CardContent>
                <Typography variant="h6" align="left">
                  {item.name}
                </Typography>
                &nbsp;
                <Typography variant="h6" align="left">
                  Instrument Price - Rp{item.price}
                </Typography>
                &nbsp;
                <Typography variant="h6" align="left">
                  Quantity - {item.count}
                </Typography>
                &nbsp;
                <Typography variant="h6" align="left">
                  Total = {" "}
                  {(
                    item.count *
                    parseInt(item.price.replace(/\D/g, ""))
                  ).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  })}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CartProduct;

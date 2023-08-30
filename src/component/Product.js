import React from "react";
import store from "./store";
import { Card, CardContent, Typography, Box, Button } from "@material-ui/core";
import { AddOutlined } from "@material-ui/icons";

function Product(props) {
  const book = props.instrument;

  const addToCart = (item) => {
    store.dispatch({ type: "ADD_TO_CART", payload: { item: item } });
    console.log("book id :" + item.id + " is added to cart");
  };

  return (
    <div>
      <Card
        elevation={4}
        style={{
          border: "solid",
          borderColor: "green",
          borderWidth: "2px",
          transition: "transform 0.2s, box-shadow 0.2s",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <CardContent>
          <Box display="flex" flexDirection="row">
            <Box
              sx={{
                marginTop: "30px",
                marginLeft: "60px",
                marginBottom: "30px",
              }}
            >
            <img
              src={book.link}
              style={{ width: 150, height: 250, objectFit: "cover" }}
              alt="bookImage"
            />
            </Box>
            <Box
              sx={{
                marginTop: "30px",
                marginLeft: "100px",
                marginRight: "30px",
                marginBottom: "30px",
              }}
            >
              <Typography variant="h6" align="left" style={{ fontWeight: "bold" }}>
                {book.name}
              </Typography>
              <Typography variant="h6" align="left">
                Price: Rp {book.price}
              </Typography>
              <Box sx={{ marginTop: "30px", marginRight: "100px" }}>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => addToCart(book)}
                  startIcon={<AddOutlined fontSize="large" />}
                  style={{ backgroundColor: "green", color: "white", fontWeight: "bold" }}
                >
                  Add To Cart
                </Button>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default Product;

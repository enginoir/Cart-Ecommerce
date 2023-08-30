import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Product from "./Product";
import Paginate from "./Paginate";
import CartCounter from "./CartCounter";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";

function Home() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedBook(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:3001/musicbooks`)
        .then((res) => {
          setBooks(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  return (
    <div
    style={{
      background: "linear-gradient(to bottom, #f8f9fa, #e9ecef)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
    >
      <CartCounter />
      {books.length === 0 ? (
        <div style={{ color: "white", fontSize: "18px", textAlign: "center", marginTop: "50px" }}>
          Loading...
        </div>
      ) : (
        <div style={{ marginTop: 20 }}>
          <Paginate
            items={books}
            Component={(props) => (
              <Product {...props} onBookClick={handleBookClick} />
            )}
          />
        </div>
      )}

      {/* Dialog */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Selected Book</DialogTitle>
        <DialogContent>
          {selectedBook && (
            <div>
              <h2>{selectedBook.title}</h2>
              <p>{selectedBook.description}</p>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <Button color="primary">Move to Cart</Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Home;

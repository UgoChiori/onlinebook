import React, { useState } from "react";
// import PayPalButton from "./PayPalButton";
// import NavBar from "./Components/NavBar";
import BookList from "./Components/BookList";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import CheckOut from "./Components/CheckOut";

// const books = [
//   {
//     title: "Name of the wind",
//     author: "patrick rothfuss",
//     id: 1,
//     price: 3500,
//     image: "https://images-na.ssl-images-amazon.com/images/I/51Zy9ZQZQWL._SX331_BO1,204,203,200_.jpg",
//   },
//   { title: "The Lean Startup", author: "Eric Ries", id: 2, price: 3500 },
//   {
//     title: "The Way of Kings",
//     author: "Brandon Sanderson",
//     id: 3,
//     price: 4500,
//   },
//   {
//     title: "The Final Empire",
//     author: "Brandon Sanderson",
//     id: 4,
//     price: 4500,
//   },
//   {
//     title: "The Hero of Ages",
//     author: "Brandon Sanderson",
//     id: 5,
//     price: 4500,
//   },
//   {
//     title: "The Long Earth",
//     author: "Terry Pratchett",
//     id: 6,
//     price: 3500,
//   },
//   {
//     title: "The Colour of Magic",
//     author: "Terry Pratchett",
//     id: 7,
//     price: 3500,
//   },
//   {
//     title: "The Light Fantastic",
//     author: "Terry Pratchett",
//     id: 8,
//     price: 3500,
//   },
//   {
//     title: "The Name of the Wind",
//     author: "Patrick Rothfuss",
//     id: 9,
//     price: 3500,
//   },
//   {
//     title: "The Wise Man's Fear",
//     author: "Patrick Rothfuss",
//     id: 10,
//     price: 3500,
//   },
//   {
//     title: "The Slow Regard of Silent Things",
//     author: "Patrick Rothfuss",
//     id: 11,
//     price: 3500,
//   },
//   {
//     title: "Things Fall Apart",
//     author: "Chinua Achebe",
//     id: 12,
//     price: 3500,
//   },
// ];

const App = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddToCart = (book) => {
    setCart([...cart, book]);
  };

  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
    setTotal((prevTotal) => prevTotal + book.price);
  };

  const handleCheckout = () => {
    const total = cart.reduce((acc, book) => acc + book.price, 0);
    return (
      <div>
        {/* <PayPalButton total={total} /> */}
        <CheckOut total={total} />
      </div>
    );
  };

  return (
    <div className="App">
      {/* <NavBar /> */}
      <BookList books={BookList} onAddToCart={handleAddToCart} />
      <div>
        <Cart cart={cart} />
        <CheckOut total={total} handleCheckout={handleCheckout} />
        <button onClick={handleCheckout}>Check out</button>
        <span>
          Total: ₦{cart.reduce((acc, book) => acc + book.price, 0).toFixed(2)}
        </span>
      </div>

      <Footer />
    </div>
  );
};

export default App;

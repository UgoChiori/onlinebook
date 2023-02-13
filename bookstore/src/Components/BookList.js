import React from "react";
import "./booklist.css";

const BookList = ({ onAddToCart }) => {
  const books = [
    {
      title: "Name of the wind",
      author: "patrick rothfuss",
      id: 1,
      price: 3500,
      image: "https://m.media-amazon.com/images/I/71jJcPTGd3L.jpg ",
    },
    { title: "The Lean Startup", author: "Eric Ries", id: 2, price: 3500, image:"data:image/jpeg;base64,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" },
    {
      title: "The Way of Kings",
      author: "Brandon Sanderson",
      id: 3,
      price: 4500,
      image: "https://m.media-amazon.com/images/I/51WcolketuS.jpg"
    },
    {
      title: "The Final Empire",
      author: "Brandon Sanderson",
      id: 4,
      price: 4500,
      image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41hfZXp+7YL.jpg"
    },
    {
      title: "The Hero of Ages",
      author: "Brandon Sanderson",
      id: 5,
      price: 4500,
      image: "https://target.scene7.com/is/image/Target/GUEST_6ea16b20-f995-4894-a057-d26ff0229059?wid=488&hei=488&fmt=pjpeg"
    },
    {
      title: "The Long Earth",
      author: "Terry Pratchett and Stephen Baxter",
      id: 6,
      price: 3500,
      image: "https://upload.wikimedia.org/wikipedia/en/8/80/The_Long_Earth_UK_Book_Cover.jpg"
    },
    {
      title: "The Colour of Magic",
      author: "Terry Pratchett",
      id: 7,
      price: 3500,
      image: "https://m.media-amazon.com/images/M/MV5BMjIyMTQ0MjMxNl5BMl5BanBnXkFtZTcwMzQ3ODg2Mg@@._V1_.jpg"
    },
    {
      title: "The Light Fantastic",
      author: "Terry Pratchett",
      id: 8,
      price: 3500,
      image: "https://m.media-amazon.com/images/I/51CTxllDd9L.jpg"
    },
    {
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      id: 9,
      price: 3500,
      image: "https://m.media-amazon.com/images/I/71jJcPTGd3L.jpg ",
    },
    {
      title: "The Wise Man's Fear",
      author: "Patrick Rothfuss",
      id: 10,
      price: 3500,
      image: "https://m.media-amazon.com/images/I/51QolUHRfuS.jpg"
    },
    {
      title: "The Slow Regard of Silent Things",
      author: "Patrick Rothfuss",
      id: 11,
      price: 3500,
      image: "https://m.media-amazon.com/images/I/91mtN24WxYL.jpg"
    },
    {
      title: "Things Fall Apart",
      author: "Chinua Achebe",
      id: 12,
      price: 3500,
      image: "https://upload.wikimedia.org/wikipedia/en/6/65/ThingsFallApart.jpg"
    },
  ];

  return (
    <div className="book-list">
      <h2> Book List </h2>
      {/* <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Price</th>
          <th>Action</th>
        </tr> */}

      <ul id="books">
        {books.map((book) => (
          <li key={book.id}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>By {book.author}</p>
            <p>₦{book.price}</p>

            <button onClick={() => onAddToCart(book)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;

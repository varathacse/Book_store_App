// BookCard.jsx
import React from "react";
import bookimg from "./../assets/book1.jpg";

const BookCard = ({ book, onClick }) => {
  const buttonStyle = {
    border: "none",
    backgroundColor: "transparent",
    alignItems: "center",
    cursor: "pointer",
  };

  return (
    <div className="bookCard" key={book.id}>
      <img src={bookimg} alt="Avatar" />
      <div className="bookDetails">
        <button onClick={onClick} style={buttonStyle}>
          {book.bookName}
        </button>
        <p>{book.edition}</p>
        <p>{book.yearOfPublish}</p>
        <p>
          {book.authors.map((a) => (
            <span key={a.authorName}> {a.authorName} | </span>
          ))}
        </p>
        <p>{book.price}.00</p>
      </div>
    </div>
  );
};

export default BookCard;

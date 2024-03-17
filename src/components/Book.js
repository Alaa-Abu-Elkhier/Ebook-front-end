// Book.js

import React from 'react';
import '../styles/Book.css'; 


const Book = ({ coverImage, author, category }) => {
  return (
    <div className="book">
      <img src={coverImage} alt="Book Cover" className="book-cover" />
      <div className="book-details">
        <p>Author: {author}</p>
        <p>Category: {category}</p>
      </div>
    </div>
  );
};

export default Book;

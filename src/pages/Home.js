import React from 'react';
import { useGetBooksQuery } from '../api/bookApi';
import Book from '../components/Book';
import '../styles/Home.css'; 

const Home = () => {
  // Fetch books using the useGetBooksQuery hook
  const { data: books, isLoading, isError } = useGetBooksQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching books.</div>;

  return (
    <div className="home">
      <h2 className='books-header'>Books</h2>
      <div className="books-container">
        {books.map((book) => (
          <Book key={book._id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default Home;

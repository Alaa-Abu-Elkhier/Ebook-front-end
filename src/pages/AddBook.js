import React, { useState } from 'react';
import { useAddBookMutation } from '../api/bookApi';
import '../styles/AddBook.css'; 

const AddBook = () => {
  const [formData, setFormData] = useState({
    coverImage: null,
    pdf: null,
    category: 'fiction',
    author: '',
  });

  const addBookMutation = useAddBookMutation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      bookData.append(key, value);
    });

    try {
      await addBookMutation.mutateAsync(bookData);
      // No need to log data here
      // onSuccess callback will handle logging
    } catch (error) {
      // Optionally handle any errors here
      console.error("Error adding book:", error);
    }
  };

  return (
    <div className="add-book">
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="coverImage">Cover Image:</label>
          <input type="file" id="coverImage" name="coverImage" accept="image/*" onChange={handleFileChange} />
        </div>
        <div className="form-group">
          <label htmlFor="pdf">PDF Upload:</label>
          <input type="file" id="pdf" name="pdf" accept=".pdf" onChange={handleFileChange} />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select id="category" name="category" value={formData.category} onChange={handleInputChange}>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" name="author" value={formData.author} onChange={handleInputChange} />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;

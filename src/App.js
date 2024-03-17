import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Header from './components/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import PrivateRoute from './components/PrivateRoute'; // Import the PrivateRoute component


const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>

    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-book" element={<PrivateRoute><AddBook /></PrivateRoute>} />
      </Routes>
    </div>
    </QueryClientProvider>
  );
}

export default App;

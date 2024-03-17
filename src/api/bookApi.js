import axios from "axios";
import {
  useQuery,
  useMutation,
  useQueryClient
} from "@tanstack/react-query";
import { getAccessToken } from "../utils/auth";

export async function getBooks() {
  const accessToken = getAccessToken();

  try {
    const response = await axios.get(`/api/v1/books`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const data = response.data.data;
    return data;
  } catch (error) {
    throw new Error("Failed to fetch books.");
  }
}

export const useGetBooksQuery = (queryOptions) => {
  return useQuery(
    ["books"],
    () => getBooks(),
    queryOptions
  );
};


export async function addBook(bookData) {
    const accessToken = getAccessToken();
  
    try {
      const response = await axios.post(`/api/v1/books/add-book`, bookData, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
  
      const data = response.data.data;
      console.log(data);
      return data;
    } catch (error) {
        console.log(error);
      throw new Error("Failed to add book.");
    }
  }

  export const useAddBookMutation = () => {
    return useMutation(
      (bookData) => addBook(bookData),
      {
        onSuccess: () => {
          // Optionally perform any actions after successfully adding the book

        },
        onError: (error) => {
          // Optionally handle any errors here
          console.error("Error adding book:", error);
        },
      }
    );
  };
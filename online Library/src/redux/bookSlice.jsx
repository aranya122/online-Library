import { createSlice } from "@reduxjs/toolkit";
import { books as dummyBooks } from "../data/books";

const loadBooksFromLocalStorage = () => {
  const savedBooks = localStorage.getItem("books");
  return savedBooks ? JSON.parse(savedBooks) : null;
};

const saveInitialBooksToLocalStorage = () => {
  if (!localStorage.getItem("books")) {
    localStorage.setItem("books", JSON.stringify(dummyBooks));
    return dummyBooks;
  }
  return loadBooksFromLocalStorage();
};

const initialBooks = saveInitialBooksToLocalStorage();

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: initialBooks, 
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload); 
      localStorage.setItem("books", JSON.stringify(state.books)); 
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
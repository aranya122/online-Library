import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import BrowseBooks from "./Pages/BrowseBooks";
import BookDetails from "./Pages/BookDetails";
import AddBookPage from "./Pages/AddBookPage";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" 
        element={<HomePage />} />
        <Route path="/browse" 
        element={<BrowseBooks />} />
        <Route path="/browse/category/:category" 
        element={<BrowseBooks />} />
        <Route path="/books/details/:id" 
        element={<BookDetails />} />
        <Route path="/add" 
        element={<AddBookPage />} />
        <Route path="*" 
        element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

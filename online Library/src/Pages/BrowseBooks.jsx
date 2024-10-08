import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";


const BrowseBooks = () => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  // Get books from the Redux store
  const books = useSelector((state) => state.books.books);

  const categories = [
    "All",
    "Fiction",
    "Non Fiction",
    "Biography",
    "Horror",
    "Fantasy",
    "History",
  ];

  const [selectedCategory, setSelectedCategory] = useState(category || "All");

  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    setSelectedCategory(category || "All");
  }, [category]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Browse Books</h1>

      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 p-2 mb-4 w-full"
      />

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border border-gray-300 p-2 mb-4 w-full"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="bg-white p-4 rounded shadow">
              <img
                src={book.imageUrl}
                alt={book.title}
                className="object-cover mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{book.title}</h2>
              <p className="text-gray-600 mb-2">by {book.author}</p>
              <Link to={`/books/details/${book.id}`} className="text-blue-500">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;

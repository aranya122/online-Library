import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";

const AddBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [Rating, setRating] = useState("");
  const [Pages, setPages] = useState(""); 

  const categories = [
    "Fiction",
    "Non Fiction",
    "Biography",
    "Horror",
    "Fantasy",
    "History",
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && category && description && Pages) {
      const newBook = {
        id: Date.now(),
        title,
        author,
        category,
        description,
        imageUrl,
        Rating,
        Pages,
      };
      dispatch(addBook(newBook));
      navigate("/browse");
    } else {
      alert("Please fill all required fields.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg p-2 bg-white rounded-lg shadow-lg mx-auto mt-10"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Add a New Book
      </h2>

      {/* Title Field */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Book Title"
          required
        />
      </div>

      {/* Author Field */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="author"
        >
          Author
        </label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Author Name"
          required
        />
      </div>

      {/* Category Dropdown */}
      <div className="mb-4">
        <label
          className="block text-black text-sm font-bold mb-2"
          htmlFor="category"
        >
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black"
          required
        >
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Description Field */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Book Description"
          rows="4"
          required
        />
      </div>

      {/* Image URL Field */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="imageUrl"
        >
          Image URL
        </label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Image URL"
        />
      </div>

      {/* Rating Field */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="Rating"
        >
          Rating
        </label>
        <input
          type="number"
          id="Rating"
          value={Rating}
          onChange={(e) => setRating(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Rating (1-5)"
          min="1"
          max="5"
        />
      </div>

      {/* Pages Field */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="Pages"
        >
          Pages
        </label>
        <input
          type="number"
          id="Pages"
          value={Pages}
          onChange={(e) => setPages(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Number of Pages"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Book
      </button>
    </form>
  );
};

export default AddBookForm;

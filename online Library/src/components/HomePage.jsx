import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const categories = [
  "Fiction",
  "Non-Fiction",
  "Horror",
  "Fantasy",
  "Biography",
  "History",
];

const HomePage = () => {
  const books = useSelector((state) => state.books.books);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/browse/category/${category}`);
  };

  return (
    <div className="p-6 bg-gradient-to-b">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-black">
        Welcome to the Online Library
      </h1>

      <div className="mb-7">
        <h2 className="text-3xl font-semibold mb-4 text-black">
          Book Categories
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <li
              key={category}
              className="text-lg font-medium p-3 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 rounded-lg shadow transition-all duration-300 cursor-pointer"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-4 text-black">
          Popular Books
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {books.slice(0, 5).map((book) => (
            <li
              key={book.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <img
                src={book.imageUrl}
                alt={`${book.title} imageUrl`}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800">{book.title}</h3>
              <p className="text-gray-600 mt-2">by {book.author}</p>
              <Link
                to={`/books/details/${book.id}`}
                className="inline-block mt-4 text-blue-600 font-semibold underline hover:text-blue-800"
              >
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;

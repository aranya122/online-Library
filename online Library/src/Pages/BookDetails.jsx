import { useParams, useNavigate } from "react-router-dom";
//import { books } from '../data/books';
import { useSelector } from "react-redux";

const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);
  const navigate = useNavigate();
  const book = books.find((book) => book.id === parseInt(id, 10));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-4 rounded shadow mt-5">
      <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
      <p className="text-lg font-semibold">Author: {book.author}</p>
      <p className="my-2">Description: {book.description}</p>
      <p className="my-2">Pages: {book.Pages}</p>
      <p className="text-yellow-500">Rating: {book.Rating} / 5</p>
      <button
        onClick={() => navigate("/browse")}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Back to Browse
      </button>
    </div>
  );
};
export default BookDetails;

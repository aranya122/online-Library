import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation(); // Get the current route

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto">
        <ul className="flex space-x-6 justify-center md:justify-start">
          <li>
            <Link
              to="/"
              className={`text-white hover:text-yellow-500 transition duration-300 ${
                location.pathname === '/' ? 'border-b-2 border-yellow-500' : ''
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/browse"
              className={`text-white hover:text-yellow-500 transition duration-300 ${
                location.pathname === '/browse' ? 'border-b-2 border-yellow-500' : ''
              }`}
            >
              Browse Books
            </Link>
          </li>
          <li>
            <Link
              to="/add"
              className={`text-white hover:text-yellow-500 transition duration-300 ${
                location.pathname === '/add' ? 'border-b-2 border-yellow-500' : ''
              }`}
            >
              Add Book
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
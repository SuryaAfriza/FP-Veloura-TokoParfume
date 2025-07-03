function Navbar(props) {
  return (
    <nav className="navbar">
        <div className="container mx-auto flex justify-between items-center p-4">
            <a href="/" className="text-xl font-bold text-gray-800">
            Veloura
            </a>
            <ul className="flex space-x-4">
            <li>
                <a href="/" className="text-gray-600 hover:text-gray-800">
                Home
                </a>
            </li>
            <li>
                <a href="/products" className="text-gray-600 hover:text-gray-800">
                Products
                </a>
            </li>
            <li>
                <a href="/about" className="text-gray-600 hover:text-gray-800">
                About Us
                </a>
            </li>
            <li>
                <a href="/contact" className="text-gray-600 hover:text-gray-800">
                Contact
                </a>
            </li>
            </ul>
        </div>
    </nav>
  );
}
export default Navbar;
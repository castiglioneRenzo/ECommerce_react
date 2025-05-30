function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi Sitio</h1>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">Inicio</a></li>
          <li><a href="#" className="hover:underline">Servicios</a></li>
          <li><a href="#" className="hover:underline">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
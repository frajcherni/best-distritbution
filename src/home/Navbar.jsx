import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineInventory } from "react-icons/md";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = [
    {
      name: "Accueil",
      link: "/Home",
    },
    {
      name: "Catalogue",
      link: "/Catalogue",
      items: [
        { name: "Sacs Biodégradables", link: "/Sacs Biodégradables" },
        { name: "Sacs Biodégradables2", link: "/Sacs Biodégradables2" },
      ],
    },
    {
      name: "A Propos",
      link: "/apropos",
    },
    {
      name: "Contact",
      link: "/Contacter-Nous",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className='flex justify-between items-center p-4 bg-white shadow-md'>
        <div className='flex items-center gap-2 text-gray-700'>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare size={24} className="hover:text-green-700 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="hover:text-green-700 transition duration-300" />
          </a>
        </div>
        <div className="flex items-center justify-center flex-1">
          <img  src={`../../${import.meta.env.BASE_URL}/images/result.png`} alt="Company Logo" className="h-28 w-28 md:h-32 md:w-32" />
        </div>
        <div className='hidden md:flex flex-col items-center gap-2 text-gray-700'>
          <Link to="/Devis" className="hover:text-green-700 hover:border-b-2 hover:border-green-700 flex items-center gap-2">
            <MdOutlineInventory /> Demande De Devis
          </Link>
          <Link to="/acheter" className="hover:text-green-700 flex items-center gap-2 hover:border-b-2 hover:border-green-700">
            <TiShoppingCart /> Acheter
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="hover:text-green-700 flex items-center gap-2 hover:border-b-2 hover:border-green-700"
          >
          </button>
        </div>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center gap-2 text-gray-700 p-4">
            <Link to="/Devis" className="hover:text-green-700 hover:border-b-2 hover:border-green-700 flex items-center gap-2">
              <MdOutlineInventory /> Demande De Devis
            </Link>
            <Link to="/acheter" className="hover:text-green-700 flex items-center gap-2 hover:border-b-2 hover:border-green-700">
              <TiShoppingCart /> Acheter
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="hover:text-green-700 flex items-center gap-2 hover:border-b-2 hover:border-green-700"
            >
              
            </button>
          </div>
        </div>
      )}
      <nav className="bg-gray-300">
        <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-10 py-4">
          {menu.map((item, idx) => (
            <li
              key={idx}
              className="relative"
              onMouseEnter={() => item.items && setIsDropdownOpen(idx)}
              onMouseLeave={() => item.items && setIsDropdownOpen(null)}
            >
              <Link
                to={item.link}
                className="text-lg text-gray-900 font-medium hover:text-green-700 py-2 transition-colors duration-300 hover:border-b-2 hover:border-green-700"
              >
                {item.name}
              </Link>
              {item.items && isDropdownOpen === idx && (
                <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-gray-200 shadow-lg rounded-md overflow-hidden z-50 transition-all duration-300 ease-in-out">
                  {item.items.map((subItem, subIdx) => (
                    <li key={subIdx}>
                      <Link
                        to={subItem.link}
                        className="block whitespace-nowrap hover:text-gray-900 hover:font-medium px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 transition duration-300"
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex justify-center items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
            <button
              className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl mb-4">Contactez-Nous</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

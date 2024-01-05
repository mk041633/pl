import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div>
      <nav className="mx-11 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-28 py-3 sm:py-5 text-blue-900">
        <div className="flex items-center justify-between">
          <span>
            <Link className="flex items-center" to="/">

              <img src="images/businesslogo.png" alt="logo" className="h-6 sm:h-9 pl-4 " />
              <div className="flex font-sans">
                <h4 className="text-2xl sm:text-4xl text-custom-red font-semibold">PRIME</h4>
                <h4 className="text-2xl sm:text-4xl">TEL</h4>
              </div>
            </Link>
          </span>

          <div className="md:hidden ">
            <button onClick={toggleMenu} className="text-2xl sm:text-4xl px-4 py-2 focus:outline-none
             w-[28px] h-[28px] object-contain">
              &#9776;
            </button>
          </div>

          <div
            className={`navigation-menu ${isMenuOpen ? "block" : "hidden"
              } md:flex  font-light items-center space-x-4  justify-end md:font-semibold
            mx-2 lg:mx-4  rounded-lg bg-blue-950 md:bg-white absolute md:relative z-40  top-14 md:top-0 right-0 min-w-[100px] py-2 md:py-0`}
          >
            <ul className="md:flex  md:space-x-2 lg:space-x-5 text-white md:text-blue-950 ">
              <li className="cursor-pointer border-b border-white md:border-none py-1 md:py-0 ">
                <a href="/">Главная</a>
              </li>
              <li className="cursor-pointer border-b border-white md:border-none py-1 md:py-0">
                <a href="/services">Сервисы</a>
              </li>
              <li className="group relative cursor-pointer  py-1 md:py-0">
                <button className="dropbtn">
                  <a href="/about">Обратная связь</a>
                </button>
              </li>
            </ul>
            <div className="flex">
              <a
                href="https://api.whatsapp.com/send?phone=79253443882"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="hidden shadow-green sm:inline-block bg-green-600 text-white rounded-md px-3 sm:px-4 mx-2 sm:mx-4 my-2 py-2">
                  Подать заявку
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

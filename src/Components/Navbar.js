import React, { useState, useEffect } from "react";
import { Inquiry } from "./homescreen/Inqury";
import { Link } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";
import Ghavi from "../5AD6AE8A-A6DF-4246-ABA4-BC8B70E851D2.png";
import { timeline } from "@material-tailwind/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(false);

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  // Function to handle scrolling
  const handleClick = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      let offsetTop = 0;
      let currentElement = element;
      // Traverse the offsetParent chain to calculate accurate offsetTop
      while (currentElement) {
        offsetTop += currentElement.offsetTop;
        currentElement = currentElement.offsetParent;
      }
      window.scrollTo({
        behavior: "smooth",
        top: offsetTop,
      });
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigation = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about", target: "about" },
    { title: "Gallery", path: "/gallery", target: "gallery" },
    { title: "Achivements", path: "/achievements", target: "achivements" },
    { title: "Players", path: "/players", target: "players" },
    { title: "Contact", path: "/contact", target: "contact" },
    
  ];

  const Brand = () => (
    <div className="flex items-center justify-between py-3 md:block bg-white  ">
    <LinkRoute to="/" className="text-white no-underline"/> 
    <img src={Ghavi} alt="" className="logo  "   />
    
      <div className="md:hidden">
        <button
          className="menu-btn text-gray-400 hover:text-gray-300"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
  return (
    <>
      <div>
        <Inquiry
          open={open}
          setopen={setOpen}
          handleClose={handleClose}
        />
        <header>
          <div className={`md:hidden ${state ? "mx-2" : "hidden"}`}>
            <Brand />
          </div>
          <nav 
            className={` md:text-sm bg-white ${
              state
                ? "absolute z-20 top-0 inset-x-0 bg-gray-800 rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent"
                : ""
            }`}
          >
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
              <Brand />
              <div
                className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
                  state ? "block" : "hidden"
                } `}
              >
                <ul className="flex-1 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                  {navigation.map((item, idx) => {
                    return (
                      <li
                        key={idx}
                        className="text-gray-300 hover:text-gray-400"
                      >
                        <Link
                          to={item.target}
                          spy={true}
                          smooth={true}
                          duration={500}
                          className="block text-black no-underline cursor-pointer"
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                  <li>
                    <button
                      onClick={handleOpen}
                      className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-full md:inline-flex"
                    >
                      Inquiry
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
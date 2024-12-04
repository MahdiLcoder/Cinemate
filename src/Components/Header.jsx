import React from 'react';
import cinemateLogo from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { WiMoonWaningCrescent3 } from "react-icons/wi";
import { CiBrightnessUp } from "react-icons/ci";

export default function Header() {
  const [hidden, setHidden] = React.useState(true); // Mobile menu visibility
  const [hidSearch, setHidSearch] = React.useState(true); // Search bar visibility
  const [darkMode, setDarkMode] = React.useState(false||JSON.parse(localStorage.getItem("darkMode"))); // Dark mode state
  
  // Define class names for active and inactive links
  const activeClass = "text-base block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
  const inActiveClass = "text-base block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  // Toggle functions for mobile menu and search bar
  const toggleMenu = () => setHidden(prevState => !prevState);
  const toggleSearch = () => setHidSearch(prevState => !prevState);

  // Toggle function for dark mode
  const toggleDarkMode = () => setDarkMode(prevState => !prevState);

  // Apply the dark mode class to the body element
  React.useEffect(() => {
    // Save dark mode state to localStorage
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  
    // Apply or remove the dark mode class to document.documentElement (html element)
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  
  return (
    <header className="sticky top-0 z-50">
      <nav className={` shadow-lg dark:border-gray-600 border-gray-200 ${darkMode ? 'dark:bg-gray-900' : 'bg-white'}`}>
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={cinemateLogo} className="h-8" alt="Cinemate Logo" />
            <span className={`self-center text-2xl font-semibold whitespace-nowrap ${darkMode ? 'dark:text-white' : 'text-gray-900'}`}>Cinemate</span>
          </Link>
          
          {/* Toggle button for search bar */}
          <div className="flex md:order-2">
            <button
              type="button"
              aria-label="Toggle search bar"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
              onClick={toggleSearch}
            >
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search</span>
            </button>

             {/* Dark mode toggle button */}
          <button
            type="button"
            aria-label="Toggle dark mode"
            className="text-gray-500 dark:text-gray-400 p-2.5 rounded-lg"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <WiMoonWaningCrescent3 className='w-5 h-5' />
            ) : (
              <CiBrightnessUp className='w-5 h-5' />
            )}
          </button>

            {/* Search input */}
            <div className={`relative ${hidSearch ? 'hidden' : 'block'} md:block`}>
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                autoComplete="off"
              />
            </div>
            
            {/* Mobile menu toggle button */}
            <button
              aria-label="Open main menu"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          {/* Navigation links */}
          <div className={`items-center justify-between ${hidden ? 'hidden' : 'flex'} w-full md:flex md:w-auto md:order-1`} id="navbar-search">
            <ul className={`flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inActiveClass} end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies/popular" className={({ isActive }) => isActive ? activeClass : inActiveClass}>
                  Popular
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies/top" className={({ isActive }) => isActive ? activeClass : inActiveClass}>
                  Top Rated
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies/upcoming" className={({ isActive }) => isActive ? activeClass : inActiveClass}>
                  Upcoming
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

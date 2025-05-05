// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { Oswald } from 'next/font/google';

// import Link from 'next/link';


// const oswald = Oswald({
//     subsets: ['latin'],
//     variable: '--font-oswald',
//     display: 'swap',
//     weight: '600'
// });

// const languages = {
//     en: {
//         label: 'English',
//         flag: 'https://flagcdn.com/24x18/gb.png',
//     },
//     hi: {
//         label: 'Hindi',
//         flag: 'https://flagcdn.com/24x18/in.png',
//     },
//     fr: {
//         label: 'French',
//         flag: 'https://flagcdn.com/24x18/fr.png',
//     },
//     es: {
//         label: 'Spanish',
//         flag: 'https://flagcdn.com/24x18/es.png',
//     },
//     de: {
//         label: 'German',
//         flag: 'https://flagcdn.com/24x18/de.png',
//     },
//     ja: {
//         label: 'Japanese',
//         flag: 'https://flagcdn.com/24x18/jp.png',
//     },
// };


// const Navbar = () => {
//     const [showDropdown, setShowDropdown] = useState(false);
//     const [selectedLang, setSelectedLang] = useState('en');
//     const dropdownRef = useRef(null);

//     const handleLanguageChange = (langKey) => {
//         setSelectedLang(langKey);
//         setShowDropdown(false);
//     };


//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setShowDropdown(false);
//             }
//         };
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     return (
//         <div className="sticky top-0 z-50">
//             <nav className="bg-slate-800 p-4 relative">
//                 <div className="flex justify-between items-center">
//                     <div>
//                         <img src="https://competingcompetitions.com/wp-content/uploads/2025/01/Header-v.-1.-.svg" alt="Logo" />
//                     </div>
//                     <div>
//                         <div className={`text-white flex gap-5 ${oswald.className} items-center`}>
//                             <Link href="#" className='hover:text-[#0070d1] transition-colors duration-300'>Home</Link>
//                             <Link href="#" className='hover:text-[#0070d1] transition-colors duration-300'>About</Link>
//                             <Link href="#" className='hover:text-[#0070d1] transition-colors duration-300'>Essentials</Link>
//                             <Link href="#" className='hover:text-[#0070d1] transition-colors duration-300'>Trends</Link>
//                             <Link href="#" className='hover:text-[#0070d1] transition-colors duration-300'>Problems</Link>
//                             <Link href="#" className='hover:text-[#0070d1] transition-colors duration-300'>Insights</Link>
//                             <Link href="#" className='hover:text-[#0070d1] transition-colors duration-300'>Contact</Link>
//                             <Link href="#" className='hover:text-[#0070d1] transition-colors duration-300'>Login</Link>
//                             <div className="relative w-5 h-5 group">
//                                 <img src="search-dark.svg" alt="Search" className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
//                                 <img src="search-hover.svg" alt="Search Hover" className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
//                             </div>
//                             <div className="relative" ref={dropdownRef}>
//                                 <button onClick={() => setShowDropdown(!showDropdown)} className="flex items-center justify-between text-white hover:text-blue-400">
//                                     <img src={languages[selectedLang].flag} alt={languages[selectedLang].label} className="" />

//                                     <svg className="w-2.5 h-2.5 ml-2.5" fill="none" viewBox="0 0 10 6">
//                                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
//                                     </svg>
//                                 </button>
//                                 {showDropdown && (
//                                     <div className="absolute left-[-15] top-8 z-10 font-normal  divide-y  rounded-lg shadow-sm bg-slate-700 divide-slate-600">
//                                         <ul className="text-md text-gray-700 dark:text-gray-400">
//                                             {Object.entries(languages).map(([key, { flag, label }]) => (
//                                                 <li key={key}>
//                                                     <button
//                                                         onClick={() => handleLanguageChange(key)}
//                                                         className="flex items-center gap-2 text-left px-4 py-2  rounded-lg hover:bg-slate-600 hover:text-white w-full"
//                                                     >
//                                                         <img src={flag} alt={label} className="w-5 h-4" />

//                                                     </button>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </div>

//     );
// }

// export default Navbar;


// "use client"
// import { Oswald, Barlow_Condensed, Poppins } from 'next/font/google';
// import Link from 'next/link';
// import { useState, useEffect } from "react";
// import { FiSearch } from "react-icons/fi";

// const barlow = Barlow_Condensed({
//   subsets: ['latin'],
//   weight: '500',
//   variable: '--font-barlow',
// });
// const oswald = Oswald({
//   subsets: ['latin'],
//   variable: '--font-oswald',
//   display: 'swap',
//   weight: '600'
// });

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['400', '500', '600'],
//   variable: '--font-poppins',
//   display: 'swap',
// });


// const navLinks = ["Home", "Essentials", "Trends", "Challenges", "Insights", "Contact", "About"];

// export default function Navbar() {
//   const [active, setActive] = useState("Home");
//   const [open, setOpen] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//     useEffect(() => {
//     document.body.style.overflow = isOpen ? 'hidden' : 'auto';
//     return () => (document.body.style.overflow = 'auto');
//   }, [isOpen]);

//   return (
//     <header className="sticky top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0b1120]/70 shadow-sm">
//       <div className=" flex items-center justify-between px-7 py-4">
//         <div>
//           <img src="https://competingcompetitions.com/wp-content/uploads/2025/01/Header-v.-1.-.svg" alt="Logo" className="h-9" />
//         </div>
//         <nav className={`${barlow.className} hidden md:flex space-x-6 text-lg font-medium text-white`}>
//           {navLinks.map((link) => (
//             <button
//               key={link}
//               onClick={() => setActive(link)}
//               className={`relative transition hover:text-blue-400 ${active === link ? "text-blue-400" : ""
//                 }`}
//             >
//               {link}
//               {active === link && (
//                 <span className="absolute left-0 bottom-[-6px] h-[2px] w-full bg-blue-500 animate-slide-in" />
//               )}
//             </button>
//           ))}
//         </nav>

//         <div className="flex items-center gap-4 text-white">
//           <input
//             type="text"
//             placeholder="Search..."
//             className={`${poppins.className} absolute right-45 transition-all duration-500 ease-in-out bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500 px-4 py-1 rounded-full shadow ${open ? "w-64 opacity-100 pr-10" : "w-0 opacity-0"}`}
//           />
//           <button onClick={() => setOpen(!open)} className="p-2 rounded-full hover:bg-white/10 hover:text-blue-500 transition-all duration-300">
//             <FiSearch size={18} />
//           </button>

//           <button className={`bg-blue-500 text-white text-sm font-semibold px-3 py-1.5 rounded-md hover:bg-blue-600 transition duration-300 ${poppins.className}`}>
//             Join Now
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

// _______________________________________

"use client";
import { useState, useEffect } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { Oswald, Barlow_Condensed, Poppins } from 'next/font/google';
import Link from "next/link";
import { usePathname } from 'next/navigation';

const barlow = Barlow_Condensed({ subsets: ['latin'], weight: '500' });
const oswald = Oswald({ subsets: ['latin'], weight: '600', display: 'swap' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'], display: 'swap' });

const navLinks = ["home", "essentials", "trends", "challenges", "insights", "contact", "about"];
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Navbar() {
  // const [active, setActive] = useState("Home");
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [drawerOpen]);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-[#0b1120]/70 backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-4">
          <button onClick={() => setDrawerOpen(true)} className="md:hidden text-white">
            <FiMenu size={24} />
          </button>
          <img
            src="https://competingcompetitions.com/wp-content/uploads/2025/01/Header-v.-1.-.svg"
            alt="Logo"
            className={`h-9 ${searchOpen ? "md:opacity-100 opacity-0" : "opacity-100"}`}
          />
        </div>

        {/* Center: Desktop Nav */}
        <nav className={`${barlow.className} hidden md:flex space-x-6 text-lg font-medium text-white`}>
          {navLinks.map((link) => {
            const href = link === "home" ? "/" : `/${link}`;
            const isActive = pathname === href;

            return (
              <Link
                href={href}
                key={link}
                className={`relative transition hover:text-blue-400 ${isActive ? "text-blue-400" : ""} ${searchOpen ? "lg:opacity-100 opacity-0" : "opacity-100"}`}
              >
                {capitalizeFirst(link)}
                {isActive && (
                  <span className="absolute left-0 bottom-[-6px] h-[2px] w-full bg-blue-500 animate-slide-in" />
                )}
              </Link>
            );
          })}
        </nav>
        {/* Right: Search + Join */}
        <div className="flex items-center gap-4 text-white">
          <div className="relative">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-full hover:bg-white/10 hover:text-blue-500 transition-all duration-300"
            >
              <FiSearch size={18} />
            </button>
            <input
              type="text"
              placeholder="Search..."
              className={`${poppins.className} absolute right-10 transition-all duration-500 ease-in-out bg-white/10 text-white z-50 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500 px-4 py-1 rounded-full shadow ${searchOpen ? "w-60 opacity-100 pr-10" : "w-0 opacity-0"}`}
            />
          </div>

        </div>
      </div>
      {drawerOpen && (
        <>


          {/* Slide-down drawer below the navbar */}
          <div
            className={`fixed top-[68px] left-0 w-full z-50 bg-[#0b1120]/85 backdrop-blur-md  text-white p-6 shadow-lg transition-all duration-300 ${drawerOpen ? 'animate-slideDown' : 'animate-slideUp'
              }`}
            onClick={(e) => e.stopPropagation()}
          >

            <div className="flex justify-between items-center mb-4">
              <h2 className={`${barlow.className} text-xl font-semibold`}>Menu</h2>
              <button onClick={() => setDrawerOpen(false)} className="text-white">
                <FiX size={24} />
              </button>
            </div>
            <div className="flex flex-col space-y-4 text-lg">
              {navLinks.map((link) => {
                const href = link === "home" ? "/" : `/${link}`;
                const isActive = pathname === href;
                return (
                  <Link
                    href={href}
                    key={link}
                    onClick={() => {
                      setActive(link);
                      setDrawerOpen(false);
                    }}
                    className={`transition text-left hover:text-blue-400 ${isActive ? "text-blue-400" : ""}`}
                  >
                    {capitalizeFirst(link)}
                  </Link>
                )
              })}
            </div>
          </div>
        </>
      )}

    </header>
  );
}


// ________________________________________

// FOR MOBILE VIEW RESPONSIVE

// 'use client';

// import { useState, useEffect } from 'react';
// import { FiMenu, FiX } from 'react-icons/fi';
// import Link from 'next/link';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   // Prevent scroll when mobile nav is open
//   useEffect(() => {
//     document.body.style.overflow = isOpen ? 'hidden' : 'auto';
//     return () => (document.body.style.overflow = 'auto');
//   }, [isOpen]);

//   const navItems = ['Home', 'Essentials', 'Trends', 'Problems', 'Insights', 'Contact', 'About', 'Login'];

//   return (
//     <header className="fixed w-full z-50">
//       <div className="backdrop-blur-md bg-[#0b1120]/80 border-b border-gray-700 text-white px-6 py-4 flex justify-between items-center">
//         <div className="text-xl font-bold tracking-wide">Competing Competitions</div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex gap-6 text-sm font-medium">
//           {navItems.map((item) => (
//             <Link
//               key={item}
//               href={`/${item.toLowerCase()}`}
//               className="hover:text-blue-400 transition"
//             >
//               {item}
//             </Link>
//           ))}
//         </nav>

//         {/* Mobile Menu Icon */}
//         <div className="md:hidden z-50">
//           <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
//             {isOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//       </div>

//       {/* Slide-down Mobile Drawer */}
//       <div
//         className={`fixed top-[64px] left-0 w-full z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
//           isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
//         }`}
//       >
//         <div className="bg-blue-900/80 backdrop-blur-md px-6 py-6 flex flex-col gap-5 text-white text-base">
//           {navItems.map((item) => (
//             <Link
//               key={item}
//               href={`/${item.toLowerCase()}`}
//               className="hover:text-blue-400 transition"
//               onClick={() => setIsOpen(false)}
//             >
//               {item}
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Blue Tint Background Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-blue-950/50 backdrop-blur-sm z-30 transition-opacity duration-300"
//           onClick={() => setIsOpen(false)}
//         />
//       )}
//     </header>
//   );
// }

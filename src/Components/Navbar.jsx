// import React, { useState } from 'react';
// import { FaHeart, FaShoppingBag } from 'react-icons/fa';
// import { SiNike } from 'react-icons/si';
// import { GiHamburgerMenu } from 'react-icons/gi'; // Import hamburger menu icon

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-red-500 px-5 py-2">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Left side */}
//         <div className="flex items-center space-x-8">
//           <SiNike className="h-8 w-8 text-black" />

//           {/* Navigation Links (hidden on mobile) */}
//           <div className='hidden md:flex items-center space-x-8 font-extrabold'>
//             <a href="#" className="text-black hover:text-gray-600">NEW & FEATURED</a>
//             <a href="#" className="text-black hover:text-gray-600">MEN</a>
//             <a href="#" className="text-black hover:text-gray-600">WOMEN</a>
//             <a href="#" className="text-black hover:text-gray-600">KIDS</a>
//             <a href="#" className="text-black hover:text-gray-600">SALE</a>
//             <a href="#" className="text-black hover:text-gray-600">CUSTOMISE</a>
//             <a href="#" className="text-black hover:text-gray-600">SNKRS</a>
//           </div>
//         </div>

//         {/* Center - Hamburger Menu */}
//         <div className="flex items-center md:hidden">
//           <button
//             className="text-black focus:outline-none"
//             onClick={toggleMenu}
//           >
//             <GiHamburgerMenu className="h-6 w-6" />
//           </button>
//         </div>

//         {/* Right side */}
//         <div className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'flex' : 'hidden'}`}>
//           <FaHeart className="h-6 w-6 text-black hover:text-gray-600" />
//           <FaShoppingBag className="h-6 w-6 text-black hover:text-gray-600" />
//         </div>
//       </div>

//       {/* Mobile Navigation Links (shown in hamburger menu) */}
//       <div className={`mt-2 md:hidden ${isOpen ? 'block' : 'hidden'}`}>
//         <div className="flex flex-col items-center space-y-2">
//           <a href="#" className="text-black hover:text-gray-600">NEW & FEATURED</a>
//           <a href="#" className="text-black hover:text-gray-600">MEN</a>
//           <a href="#" className="text-black hover:text-gray-600">WOMEN</a>
//           <a href="#" className="text-black hover:text-gray-600">KIDS</a>
//           <a href="#" className="text-black hover:text-gray-600">SALE</a>
//           <a href="#" className="text-black hover:text-gray-600">CUSTOMISE</a>
//           <a href="#" className="text-black hover:text-gray-600">SNKRS</a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// src/components/NavBar.jsx
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaHeart, FaShoppingBag } from 'react-icons/fa';
import  {SiNike} from 'react-icons/si';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-ui-2 px-4 py-2 flex justify-between items-center bg-red-500 font-font1 text-3xl">
      <div className="flex items-center space-x-4">
      <SiNike className="h-8 w-8 text-black" />
      </div>
      <div className="hidden md:flex md:flex-grow md:justify-center">
        <div className="flex space-x-4 ">
        <a href="#" className="text-black hover:text-gray-600">NEW & FEATURED</a>
         <a href="#" className="text-black hover:text-gray-600">MEN</a>
           <a href="#" className="text-black hover:text-gray-600">WOMEN</a>
           <a href="#" className="text-black hover:text-gray-600">KIDS</a>
           <a href="#" className="text-black hover:text-gray-600">SALE</a>
           <a href="#" className="text-black hover:text-gray-600">CUSTOMISE</a>
           <a href="#" className="text-black hover:text-gray-600">SNKRS</a>
        </div>
      </div>
      {/* <div className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'flex' : 'hidden'}`}>
          <FaHeart className="h-6 w-6 text-black hover:text-gray-600" />
           <FaShoppingBag className="h-6 w-6 text-black hover:text-gray-600" />
         </div> */}
      <div className="md:hidden flex items-center space-x-4">
      {/* <div className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'flex' : 'hidden'}`}>
          <FaHeart className="h-6 w-6 text-black hover:text-gray-600" />
           <FaShoppingBag className="h-6 w-6 text-black hover:text-gray-600" />
         </div> */}
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          {isOpen ? <FiX className="h-8 w-8" /> : <FiMenu className="h-8 w-8" />}
        </button>
      </div>
      {isOpen && (
        <div className=" absolute top-16 z-10 left-0 right-0 bg-accent  flex flex-col items-center space-y-4 md:hidden">
           <a href="#" className="text-black hover:text-gray-600">NEW & FEATURED</a>
         <a href="#" className="text-black hover:text-gray-600">MEN</a>
           <a href="#" className="text-black hover:text-gray-600">WOMEN</a>
           <a href="#" className="text-black hover:text-gray-600">KIDS</a>
           <a href="#" className="text-black hover:text-gray-600">SALE</a>
           <a href="#" className="text-black hover:text-gray-600">CUSTOMISE</a>
           <a href="#" className="text-black hover:text-gray-600">SNKRS</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
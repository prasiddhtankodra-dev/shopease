import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  FiMenu,
  FiX,
  FiShoppingCart,
  FiHeart,
  FiSearch,
  FiUser,
} from "react-icons/fi";

const Nav = () => {
  const {
  cart,
  wishlist,
  removeFromCart,
  toggleWishlist,
} = useCart();

  const [showCart, setShowCart] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
const [isRegister, setIsRegister] = useState(false);
const [showWishlist, setShowWishlist] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(false);

const handleRegister = () => {
  alert("✅ Register Successfully");
  setIsRegister(false); // Login page open
};

const handleLogin = () => {
  alert("✅ Login Successfully");
  setIsLoggedIn(true);
  setShowLogin(false); // Login popup band
};
  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}

          <Link
            to="/"
            className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
          >
            ShopEase
          </Link>

          {/* Desktop Menu */}

          <div className="hidden lg:flex gap-8 font-semibold">

            <Link to="/" className="hover:text-pink-500 duration-300">
              Home
            </Link>

            <Link to="/about" className="hover:text-pink-500 duration-300">
              About
            </Link>

            <Link to="/products" className="hover:text-pink-500 duration-300">
              Products
            </Link>

            <Link to="/contact" className="hover:text-pink-500 duration-300">
              Contact
            </Link>

            <Link to="/faq" className="hover:text-pink-500 duration-300">
              FAQ
            </Link>


 
          </div>

          {/* Search */}

          <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-[280px]">

            <FiSearch className="text-gray-500" />

            <input
              type="text"
              placeholder="Search Products..."
              className="bg-transparent outline-none px-3 w-full"
            />

          </div>

          {/* Icons */}

          <div className="flex items-center gap-4 text-2xl">
<div
  className="relative cursor-pointer"
  onClick={() => setShowWishlist(!showWishlist)}
>
  <FiHeart />

  <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
    {wishlist.length}
  </span>
</div>

<div
className="relative cursor-pointer"
onClick={() => setShowCart(!showCart)}
>

<FiShoppingCart />

<span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">

{cart.length}

</span>

</div>
          
           {!isLoggedIn && (
  <button
    onClick={() => setShowLogin(true)}
    className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full"
  >
    <FiUser />
    Login
  </button>
)}
        

          </div>

          {/* Mobile Button */}

          <button
            className="lg:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}

        {menuOpen && (

          <div className="lg:hidden bg-white shadow-xl">

            <div className="flex flex-col gap-5 p-6 font-semibold">

              <Link to="/">Home</Link>

              <Link to="/about">About</Link>

              <Link to="/products">Products</Link>

              <Link to="/contact">Contact</Link>

              <Link to="/faq">FAQ</Link>

             

            </div>

          </div>

        )}
      </nav>
      {showWishlist && (
  <div className="fixed right-5 top-24 w-80 bg-white shadow-xl rounded-xl p-4 z-[9999]">
    <h2 className="font-bold text-xl mb-3">Wishlist</h2>

    {wishlist.length === 0 ? (
      <p>No items in wishlist</p>
    ) : (
      wishlist.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-3"
        >
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p>{item.price}</p>
          </div>

          <button
            onClick={() => toggleWishlist(item)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))
    )}
  </div>
)}
      {showCart && (
  <div className="fixed right-5 top-24 w-80 bg-white shadow-xl rounded-xl p-4 z-[9999]">
    <h2 className="font-bold text-xl mb-3">Cart</h2>

    {cart.length === 0 ? (
      <p>Cart Empty</p>
    ) : (
      cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-3"
        >
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p>{item.price}</p>
            <p>Qty: {item.qty}</p>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))
    )}
  </div>
)}

      {showLogin && (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
    <div className="bg-white w-[450px] rounded-2xl p-6 relative max-h-[90vh] overflow-y-auto">

      <button
        onClick={() => {
          setShowLogin(false);
          setIsRegister(false);
        }}
        className="absolute top-3 right-4 text-2xl font-bold"
      >
        ×
      </button>

      {!isRegister ? (
        <>
          <form onSubmit={(e)=>{e.preventDefault();handleLogin();}}>
          <h2 className="text-3xl font-bold text-center mb-6">
            Login
          </h2>

          <input
            type="email"
              required
            placeholder="Email Address"
            className="w-full border rounded-lg p-3 mb-4"
          
          />

          <input
            type="password"
            required
            placeholder="Password"
            className="w-full border rounded-lg p-3 mb-4"
              
          />

         <button
  type="submit"
  className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg"
>
  Login
</button>

          </form>

          <p className="text-center mt-5">
            Don't have an account?
            <span
              onClick={() => setIsRegister(true)}
              className="text-pink-600 font-semibold cursor-pointer ml-2"
            >
              Register
            </span>
          </p>
        </>
      ) : (
        <>
          <form onSubmit={(e)=>{e.preventDefault();handleRegister();}}>
          <h2 className="text-3xl font-bold text-center mb-6">
            Create Account
          </h2>
      
         <div className="mb-4">
  <label className="block text-gray-700 font-semibold mb-2">
    Full Name
  </label>
  <input
    type="text"
    placeholder="Enter your full name"
    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
      required
  />
</div>

<div className="mb-4">
  <label className="block text-gray-700 font-semibold mb-2">
    Email Address
  </label>
  <input
    type="email"
    placeholder="Enter your email"
    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
      required
  />
</div>

<div className="mb-4">
  <label className="block text-gray-700 font-semibold mb-2">
    Mobile Number
  </label>
  <input
    type="tel"
    placeholder="Enter your mobile number"
    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
      required
  />
</div>

<div className="mb-4">
  <label className="block text-gray-700 font-semibold mb-2">
    Username
  </label>
  <input
    type="text"
    placeholder="Choose a username"
    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
      required
  />
</div>

<div className="mb-4">
  <label className="block text-gray-700 font-semibold mb-2">
    Password
  </label>
  <input
    type="password"
    placeholder="Enter your password"
    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
      required
  />
</div>

<div className="mb-4">
  <label className="block text-gray-700 font-semibold mb-2">
    Confirm Password
  </label>
  <input
    type="password"
    placeholder="Confirm your password"
    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
      required
  />
</div>

<div className="mb-4">
  <label className="block text-gray-700 font-semibold mb-2">
    Address
  </label>
  <textarea
    placeholder="Enter your address"
    rows={3}
    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
      required
  ></textarea>
</div>

          <label className="flex items-center gap-2 mb-4">
            <input type="checkbox" required />
            I agree to the Terms & Conditions
          </label>

       <button
  type="submit"
  className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg"
>
  Create Account
</button>

          </form>

          <p className="text-center mt-5">
            Already have an account?
            <span
              onClick={() => setIsRegister(false)}
              className="text-pink-600 font-semibold cursor-pointer ml-2"
            >
              Login
            </span>
          </p>
        </>
      )}
    </div>
  </div>
)}

</>
);
}

export default Nav;
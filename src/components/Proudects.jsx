import React from "react";
import { FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Apple",
    price: "₹120",
    image: "fruit.png",
  },
  {
    id: 2,
    name: "Fresh Vegetables",
    price: "₹90",
    image: "vegetable.png",
  },
  {
    id: 3,
    name: "Headphones",
    price: "₹2,499",
    image: "device.png",
  },
  {
    id: 4,
    name: "Chocolate",
    price: "₹250",
    image: "sweets.png",
  },
  {
    id: 5,
    name: "Milk",
    price: "₹70",
    image: "milk-cheese-eggs.png",
  },
  {
    id: 6,
    name: "Shopping Bag",
    price: "₹450",
    image: "shopping-bag.png",

  },
  {
  id: 7,
  name: "Clothes",
  price: "₹999",
  image: "brand.png",
},

{
  id: 8,
  name: "Groceries",
  price: "₹550",
  image: "basket.png",
},

{
  id: 9,
  name: "Toys",
  price: "₹799",
  image: "donate.png",
},
];

const Products = () => {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  return (
    <section className="bg-gray-100 min-h-screen bg-gradient-to-r from-pink-300 to-purple-300">
      <div className="max-w-7xl mx-auto px-6 py-10 ">
        {/* Heading */}

        <div className="text-center mb-10 ">
          <h1 className="text-5xl font-bold">Our Products</h1>

          <p className="text-gray-600 mt-4">Explore our latest collection</p>
        </div>

        {/* Search */}

        {/* <div className="bg-white rounded-xl shadow-md flex items-center px-5 py-3 mb-8">
          <FiSearch className="text-xl text-gray-500" />

          <input
            type="text"
            placeholder="Search Product..."
            className="w-full outline-none px-3"
          />
        </div> */}

        <div className=" ">
          
          {/* Product Grid */}

          <div className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {products.map((item) => (
               <div
  key={item.id}
  className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl hover:-translate-y-2 duration-300"
>
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-60 object-contain p-6 group-hover:scale-110 duration-500"
                    />
                  </div>

                  <div className="p-5">
                    <h2 className="text-xl font-bold">{item.name}</h2>

                    <p className="text-pink-500 font-bold text-2xl mt-2">
                      {item.price}
                    </p>

                    <div className="flex justify-between mt-6">
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-lg flex items-center gap-2"
                      >
                        <FiShoppingCart />
                        Add To Cart
                      </button>

                      <button
                        onClick={() => toggleWishlist(item)}
                        className={`border p-3 rounded-lg ${
                          wishlist.find((i) => i.id === item.id)
                            ? "bg-pink-500 text-white"
                            : ""
                        }`}
                      >
                        <FiHeart />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

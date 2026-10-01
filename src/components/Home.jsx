import React from "react";
import {
  FiArrowRight,
  FiTruck,
  FiShield,
  FiRefreshCw,
} from "react-icons/fi";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-300 to-purple-300">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col-reverse lg:flex-row items-center gap-10">

          {/* Left */}
          <div className="flex-1">

            <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full font-semibold">
              🔥 Flat 50% OFF Today
            </span>

            <h1 className="text-5xl lg:text-7xl font-extrabold mt-6 leading-tight">
              Discover Your
              <span className="text-pink-500"> Dream Shopping </span>
              Experience
            </h1>

            <p className="text-gray-600 mt-6 text-lg leading-8">
              Buy groceries, electronics, fashion, accessories and much more
              with amazing discounts. Fast delivery and secure payments.
            </p>

            <div className="flex gap-5 mt-8 flex-wrap">

              <button className="bg-pink-500 hover:bg-pink-600 text-white px-7 py-3 rounded-full flex items-center gap-2 duration-300">
                Shop Now
                <FiArrowRight />
              </button>

              <button className="border-2 border-pink-500 hover:bg-pink-500 hover:text-white px-7 py-3 rounded-full duration-300">
                Learn More
              </button>

            </div>

          </div>

          {/* Right */}
          <div className="flex-1 flex justify-center">

            <img
              src="online-shopping.png"
              alt="Shopping"
              className="w-full max-w-md drop-shadow-2xl hover:scale-105 duration-500"
            />

          </div>

        </div>
      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 duration-300">
            <FiTruck className="text-5xl text-pink-500 mb-5" />
            <h2 className="text-2xl font-bold">Free Delivery</h2>
            <p className="text-gray-600 mt-3">
              Free delivery on every order above ₹999.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 duration-300">
            <FiShield className="text-5xl text-pink-500 mb-5" />
            <h2 className="text-2xl font-bold">Secure Payment</h2>
            <p className="text-gray-600 mt-3">
              100% secure online payment with trusted gateways.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 duration-300">
            <FiRefreshCw className="text-5xl text-pink-500 mb-5" />
            <h2 className="text-2xl font-bold">Easy Returns</h2>
            <p className="text-gray-600 mt-3">
              Hassle-free returns within 7 days.
            </p>
          </div>

        </div>

      </section>

      {/* Offer Banner */}

      <section className="py-16 bg-gradient-to-r from-pink-300 to-purple-300 text-black">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Summer Mega Sale
          </h2>

          <p className="mt-5 text-xl">
            Up to 70% OFF on selected products.
          </p>

          <button className="mt-8 bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:scale-105 duration-300">
            Shop Collection
          </button>

        </div>

      </section>
    </>
  );
};

export default Home;
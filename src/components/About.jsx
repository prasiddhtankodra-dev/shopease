import React from "react";

const products = [
  {
    title: "Fruits",
    image: "/fruit.png",
    desc: "Fresh and delicious fruits sourced from local farms. Enjoy a variety of seasonal fruits to keep you healthy",
  },
  {
    title: "Vegetables",
    image: "/vegetable.png",
    desc: "Fresh and organic vegetables sourced from local farms. Nutritious and delicious, perfect for a healthy lifestyle.",
  },
  {
    title: "Mobile & Electronics",
    image: "/device.png",
    desc: "Explore the latest mobile phones and electronic gadgets. Stay connected with cutting-edge technology.",
  },
  {
    title: "All Items",
    image: "/shopping-bag.png",
    desc: "We offer a wide range of products, from groceries to electronics. Find everything you need in one place.",
  },
  {
    title: "Clothes",
    image: "/brand.png",
    desc: "Many brands of clothes are available here. Choose your favorite brand and shop easily.",
  },
  {
    title: "Toys",
    image: "/donate.png",
    desc: "A wide selection of toys for children of all ages. Educational toys and fun games available.",
  },
  {
    title: "Chocolates & More",
    image: "/sweets.png",
    desc: "Indulge in a variety of chocolates and sweet treats. Perfect for gifting or enjoying yourself.",
  },
  {
    title: "Groceries",
    image: "/basket.png",
    desc: "Fresh and organic groceries sourced from local farms. Healthy and delicious for your family.",
  },
  {
    title: "Milk, Cheese & Eggs",
    image: "/milk-cheese-eggs.png",
    desc: "Fresh and high-quality dairy products sourced from local farms for a healthy lifestyle.",
  },
];

const About = () => {
  return (
    <div className="bg-gradient-to-r from-pink-300 to-purple-300 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl hover:-translate-y-2 duration-300"
          >
            <div className="w-full h-52 flex items-center justify-center overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>

            <h2 className="text-xl font-bold mt-4">{item.title}</h2>

            <p className="text-gray-600 text-sm mt-2 leading-6">
              {item.desc}
            </p>

            <button className="mt-5 w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg transition duration-300">
              Visit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
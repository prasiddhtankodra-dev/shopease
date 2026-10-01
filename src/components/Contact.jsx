import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="bg-gradient-to-r from-pink-50 to-purple-100 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="text-gray-600 mt-4">
            We'd love to hear from you. Send us your queries anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Form */}

          <div className="bg-white p-8 rounded-2xl shadow-xl">

            <h2 className="text-3xl font-bold mb-6">
              Send Message
            </h2>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-3 mb-5 focus:ring-2 focus:ring-pink-500 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg p-3 mb-5 focus:ring-2 focus:ring-pink-500 outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-lg p-3 mb-5 focus:ring-2 focus:ring-pink-500 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full border rounded-lg p-3 mb-5 focus:ring-2 focus:ring-pink-500 outline-none"
            ></textarea>

            <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold duration-300">
              Send Message
            </button>

          </div>

          {/* Contact Details */}

          <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col justify-center">

            <h2 className="text-3xl font-bold mb-8">
              Contact Information
            </h2>

            <div className="space-y-8">

              <div className="flex items-center gap-5">
                <FiMail className="text-4xl text-pink-500" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p>support@shopease.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FiPhone className="text-4xl text-pink-500" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FiMapPin className="text-4xl text-pink-500" />
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p>Junagadh, Gujarat, India</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
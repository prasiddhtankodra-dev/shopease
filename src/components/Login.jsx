import React from "react";
import { RiMailLine, RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-pink-300 to-purple-300 flex items-center justify-center px-5">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-center">
          Login to Your Account
        </h1>

        <p className="text-center text-gray-500 mt-3 mb-8">
          Login to your account and continue shopping.
        </p>

        <form className="space-y-5">

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-xl py-3 pl-4 pr-12 outline-none focus:ring-2 focus:ring-pink-400"
            />

            <RiMailLine className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-gray-500" />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-xl py-3 pl-4 pr-12 outline-none focus:ring-2 focus:ring-pink-400"
            />

            <RiLockPasswordLine className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-gray-500" />
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" />
              Remember Me
            </label>

            <a
              href="#"
              className="text-pink-600 hover:underline"
            >
              Forgot Password?
            </a>

          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-semibold duration-300 hover:scale-105"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-pink-600 font-semibold hover:underline">
            Register
          </a>
        </p>

      </div>

    </section>
  );
};

export default Login;
import React from "react";

const FAQ = () => {
  return (
    <section className="bg-gray-100 min-h-screen py-16">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-12">

          <h1 className="text-5xl font-bold">
            Frequently Asked Questions
          </h1>

          <p className="text-gray-600 mt-4">
            Find answers to common questions.
          </p>

        </div>

        <div className="space-y-5">

          <details className="bg-white rounded-xl shadow-lg p-5 group">
            <summary className="font-bold text-xl cursor-pointer">
              How can I place an order?
            </summary>

            <p className="mt-4 text-gray-600">
              Browse products, add them to your cart, proceed to checkout,
              and complete the payment process.
            </p>
          </details>

          <details className="bg-white rounded-xl shadow-lg p-5">
            <summary className="font-bold text-xl cursor-pointer">
              What payment methods do you accept?
            </summary>

            <p className="mt-4 text-gray-600">
              We accept UPI, Credit Cards, Debit Cards,
              Net Banking and Cash on Delivery.
            </p>
          </details>

          <details className="bg-white rounded-xl shadow-lg p-5">
            <summary className="font-bold text-xl cursor-pointer">
              Can I return a product?
            </summary>

            <p className="mt-4 text-gray-600">
              Yes. Products can be returned within 7 days
              if they meet our return policy.
            </p>
          </details>

          <details className="bg-white rounded-xl shadow-lg p-5">
            <summary className="font-bold text-xl cursor-pointer">
              How long does delivery take?
            </summary>

            <p className="mt-4 text-gray-600">
              Delivery usually takes 2–5 business days,
              depending on your location.
            </p>
          </details>

          <details className="bg-white rounded-xl shadow-lg p-5">
            <summary className="font-bold text-xl cursor-pointer">
              Is my payment secure?
            </summary>

            <p className="mt-4 text-gray-600">
              Yes. All transactions are encrypted and processed
              through secure payment gateways.
            </p>
          </details>

        </div>

      </div>

    </section>
  );
};

export default FAQ;
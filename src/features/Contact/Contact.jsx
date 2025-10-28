import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-3">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md border-none"
      >
        <h2 className="text-xl font-semibold text-[#5b3a1e] mb-6">contact</h2>

        {/* Name and Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:border-[#5b3a1e]"
          />
          <input
            type="email"
            name="email"
            placeholder="E mail*"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:border-[#5b3a1e]"
          />
        </div>

        {/* Phone number */}
        <input
          type="text"
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-3 w-full mb-4 focus:outline-none focus:border-[#5b3a1e]"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="border border-gray-300 rounded-md p-3 w-full mb-4 focus:outline-none focus:border-[#5b3a1e]"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#5b3a1e] text-white px-6 py-3 rounded-md hover:bg-[#4b2e18] transition w-32"
        >
          Send
        </button>
      </form>

      {/* Brand Text */}
      <h1 className="text-[#5b3a1e] text-5xl font-extrabold tracking-widest mt-10">
        BLACK TERRY
      </h1>
    </div>
  );
}

export default Contact;

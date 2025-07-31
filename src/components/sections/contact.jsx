import React from "react";
import { RevealOnScroll } from "../revealonscroll";
import emailjs from "emailjs-com";

export const Contact = () => {

    const [formData, setFormData] = React.useState({name : "" , email : "" , message : ""});

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_Service_ID, import.meta.env.VITE_Template_ID, e.target, import.meta.env.VITE_Public_key).then((result)=>{
            alert("Message Sent!");
            setFormData({name : "" , email : "" , message : ""})
        }).catch((err)=>{
            alert("Oops! Something went wrong")
        })

    }

  return (
    <section
      style={{ backgroundImage: "url('/portfolio-bg.jpg')" }}
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-[url('/portfolio-bg.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <RevealOnScroll>
        <div className="w-full max-w-2xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
              Let's Work Together
            </h2>
          </div>

          <form className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={(e)=>setFormData({...formData , name : e.target.value})}
                className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email..."
                value={formData.email}
                onChange={(e)=>setFormData({...formData , email : e.target.value})}
                className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Message
              </label>
              <textarea
                rows="6"
                placeholder="Write your message here..."
                name="message"
                value={formData.message}
                onChange={(e)=>setFormData({...formData, message : e.target.value})}
                className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium shadow-md transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

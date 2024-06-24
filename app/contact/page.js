"use client";
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import axios from "axios";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const form = useRef();
  const router = useRouter();

  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (firstName === "") {
      setErrMsg("First name is required!");
    } else if (phone === "") {
      setErrMsg("Please give your Phone!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      sendEmail();
    }
  };

  const sendEmail = async () => {
    const data = { firstName, lastName, email, phone, message };
    try {
      const response = await axios.post('/api/emails', data);
      console.log('SUCCESS!', response.status, response.data);
      setSuccessMsg(`Thank you ${firstName}, Your message has been sent successfully!`);
      setErrMsg("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
      // Uncomment the line below if you want to redirect to a thank you page
      // router.push('/'); 
    } catch (error) {
      console.log('FAILED...', error.response.data);
      setErrMsg('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="flex items-center min-h-screen bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto my-10 bg-gray-100 p-4 rounded-lg shadow-lg dark:bg-gray-800">
          <div className="text-center">
            <h1 className="my-3 text-4xl font-bold text-gray-700 dark:text-gray-200">
              Contact Us
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Fill up the form below to send us a message.
            </p>
          </div>
          <div className="m-8">
            <form ref={form} onSubmit={handleSend} id="form">
              <div className="flex mb-6 space-x-4">
                <div className="w-full md:w-1/2">
                  <label htmlFor="fname" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">First Name</label>
                  <input type="text" name="name" id="first_name" placeholder="John" required className="w-full px-4 py-3 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="lname" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">Last Name</label>
                  <input type="text" name="last_name" id="lname" placeholder="Doe" required className="w-full px-4 py-3 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex mb-6 space-x-4">
                <div className="w-full md:w-1/2">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">Email Address</label>
                  <input type="email" name="email" id="email" placeholder="you@company.com" required className="w-full px-4 py-3 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="w-full md:w-1/2">
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">Phone Number</label>
                  <input type="text" name="phone" id="phone" placeholder="+1 (555) 1234-567" required className="w-full px-4 py-3 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">Your Message</label>
                <textarea rows="5" name="message" id="message" placeholder="Your Message" className="w-full px-4 py-3 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600" required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              {errMsg && <p className="mb-6 text-red-500 text-center">{errMsg}</p>}
              {successMsg && <p className="mb-6 text-green-500 text-center">{successMsg}</p>}
              <div className="mb-6">
                <button type="submit" className="w-full px-4 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800">
                  Send Message
                </button>
              </div>
              <p className="text-base text-center text-gray-400" id="result">@ Hakxcore</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

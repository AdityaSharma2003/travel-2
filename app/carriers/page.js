"use client";
import { useState } from 'react';
import axios from 'axios';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    position: '',
    coverLetter: '',
  });

  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name) {
      setErrMsg("Name is required!");
    } else if (!formData.email) {
      setErrMsg("Email is required!");
    } else if (!formData.phone) {
      setErrMsg("Phone is required!");
    } else if (!formData.address) {
      setErrMsg("Address is required!");
    } else if (!formData.position) {
      setErrMsg("Position applied for is required!");
    } else if (!formData.coverLetter) {
      setErrMsg("Cover letter is required!");
    } else {
      try {
        await axios.post('/api/careers', formData);
        setSuccessMsg('Application submitted successfully!');
        setErrMsg("");
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          position: '',
          coverLetter: '',
        });
      } catch (error) {
        console.error('Error submitting the application:', error);
        setErrMsg('There was an error submitting the application.');
      }
    }
  };


  return (
    <div className={`flex items-center min-h-screen bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 dark:bg-gray-900 p-8 transition-colors duration-500`}>
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto my-14 bg-gray-100 p-12 rounded-lg shadow-lg dark:bg-gray-800 transition-colors duration-500">
          <div className="text-center">
            <h1 className="my-3 text-4xl font-bold text-gray-700 dark:text-gray-200">Join Our Team</h1>
            <p className="text-gray-500 dark:text-gray-400">Fill up the form below to apply for a position.</p>
          </div>
          <div className="m-8">
            <form onSubmit={handleSubmit}>
              <div className="flex mb-6 space-x-4">
                <div className="w-full">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex mb-6 space-x-4">
                <div className="w-full md:w-1/2">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="+1 (555) 1234-567"
                    className="w-full px-4 py-3 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="123 Main St"
                  className="w-full px-4 py-3 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="position" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">Position Applied For</label>
                <input
                  type="text"
                  name="position"
                  id="position"
                  placeholder="Software Engineer"
                  className="w-full px-4 py-3 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600"
                  value={formData.position}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="coverLetter" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">Cover Letter</label>
                <textarea
                  rows="5"
                  name="coverLetter"
                  id="coverLetter"
                  placeholder="Your cover letter"
                  className="w-full px-4 py-3 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              {errMsg && <p className="mb-6 text-red-500 text-center">{errMsg}</p>}
              {successMsg && <p className="mb-6 text-green-500 text-center">{successMsg}</p>}
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full px-4 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                >
                  Submit Application
                </button>
              </div>
            </form>
            <p className="text-base text-center text-gray-400 dark:text-gray-500 mt-4">@ Hakxcore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;

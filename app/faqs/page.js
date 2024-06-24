"use client";
import { useState } from 'react';

const faqs = [
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible."
  },
  {
    question: "Can I change my plan later?",
    answer: "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid."
  },
  {
    question: "Can other info be added to an invoice?",
    answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
  },
  {
    question: "How does billing work?",
    answer: "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces."
  },
  {
    question: "How do I change my account email?",
    answer: "You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = index => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-indigo-600 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 mt-20 ">
          <h2 className="text-4xl font-bold text-white dark:text-gray-200">Frequently Asked Questions</h2>
          <p className="text-lg md:text-xl text-gray-200">Everything you need to know about the product and billing.</p>
        </div>
        <div className="flex flex-col items-center space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="w-full max-w-2xl bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{faq.question}</h3>
              <p className={`text-gray-700 dark:text-gray-300 mt-4 overflow-hidden transition-all duration-500 ${activeIndex === index ? 'max-h-48' : 'max-h-0'}`}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* "Still have questions?" section */}
        <div className="mt-12  py-8 px-7 rounded-2xl flex flex-col gap-5 text-center items-center justify-center dark:bg-gray-800">
          <span className="text-2xl text-white dark:text-gray-200">Still have questions?</span>
          <p className="text-gray-200">
            Can’t find the answer you’re looking for? Please chat to our friendly team.
          </p>
          <button className="py-3 px-7 w-fit border border-solid border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-300 active:bg-gray-200 transition dark:bg-gray-200 dark:text-gray-800">
            <a href="contact" >Get in touch</a>
          </button>
        </div>
      </div>
    </div>
  );
}

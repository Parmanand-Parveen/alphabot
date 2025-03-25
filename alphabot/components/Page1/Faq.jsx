"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  { question: "Is a crypto trading bot profitable?", answer: "Profitability depends on market conditions, strategy, and risk management." },
  { question: "How do bots trade crypto?", answer: "Trading bots use algorithms to analyze market trends and execute trades automatically." },
  { question: "Why should I use bots to trade crypto?", answer: "Bots can trade 24/7, eliminate emotions, and execute strategies efficiently." },
  { question: "How much can you earn with crypto bots?", answer: "Earnings vary based on market conditions, strategy, and capital." },
  { question: "Does automated trading work better than buying and holding?", answer: "It depends on strategy; trading aims for short-term gains, while holding targets long-term value." },
  { question: "How do you set up a crypto bot?", answer: "You need to connect your bot to an exchange, configure a strategy, and set risk parameters." },
  { question: "How much does it cost to use bot-trading tools?", answer: "Costs vary; some platforms offer free versions, while others charge monthly fees." },
  { question: "Why can't I get a paid subscription plan on 3Commas?", answer: "Subscription issues may be due to payment problems or regional restrictions." },
];

const FAQItem = ({ faq, isOpen, onClick }) => (
  <div className="border-b border-gray-200 dark:border-gray-600">
    <button
      className="w-full text-left py-4 px-6 flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      onClick={onClick}
    >
      <span className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</span>
      <span className="text-xl text-gray-600 dark:text-gray-300">{isOpen ? "−" : "+"}</span>
    </button>
    <motion.div
      className="px-6 overflow-hidden"
      initial={{ height: 0 }}
      animate={{ height: isOpen ? "auto" : 0 }}
      transition={{ duration: 0.3 }}
    >
      <p className="pb-4 text-gray-600 dark:text-gray-300">{faq.answer}</p>
    </motion.div>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-3xl mx-auto my-12 px-4">
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">FAQ</h2>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;

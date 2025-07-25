"use client";

import { useState } from "react";
import Image from "next/image";
import { Send, ChevronDown } from "lucide-react"; // Import icons

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([]);
  const [language, setLanguage] = useState("English"); // Default language
  const [showDropdown, setShowDropdown] = useState(false); // State to show/hide dropdown

  const languages = ["English", "Spanish", "French", "German", "Hindi", "Chinese", "Arabic", "Japanese"];

  // Function to send message
  const sendMessage = () => {
    if (message.trim() === "") return;

    const userMessage = { text: message, sender: "user" };
    const botReply = { text: "This is a sample reply.", sender: "bot" };

    setMessages([...messages, userMessage, botReply]);
    setMessage(""); // Clear input field
  };

  // Handle enter key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chatbot Icon */}
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-full shadow-md">
        <Image 
          src="/chatbot-img.png" 
          alt="Chatbot Icon"
          width={60} 
          height={60} 
          className="cursor-pointer transition-transform hover:scale-110"
        />
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="bg-white shadow-lg rounded-lg p-4 w-96 mt-2">
          {/* Header with Language Dropdown */}
          <div className="flex justify-between items-center border-b pb-2 relative">
            <h2 className="text-lg font-semibold text-maroon">Chat with INTELLICA</h2>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-black border border-gray-300 rounded-md px-2 py-1 text-sm"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {language} <ChevronDown size={16} className="ml-1" />
              </button>

              {/* Dropdown List */}
              {showDropdown && (
                <div className="absolute right-0 mt-1 bg-white shadow-md rounded-md w-32 border border-gray-200">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setShowDropdown(false); // Hide dropdown after selection
                      }}
                      className="block px-3 py-1 text-sm text-black hover:bg-gray-200 w-full text-left"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Close Button */}
            <button onClick={() => setIsOpen(false)} className="text-gray-500">✖</button>
          </div>

          {/* Chat Display Area (Increased Size) */}
          <div className="h-96 overflow-y-auto mt-3 bg-gray-100 p-3 rounded-md">
            {messages.length === 0 ? (
              <p className="text-gray-500">How can I assist you today?</p>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className={`p-2 rounded-lg mb-2 max-w-[80%] ${
                  msg.sender === "user" ? "bg-orange-100 text-maroon self-end" : "bg-gray-300 text-gray-800 self-start"
                }`}>
                  {msg.text}
                </div>
              ))
            )}
          </div>

          {/* Input Area */}
          <div className="flex items-center mt-3 border border-gray-300 rounded-lg p-2">
            <input 
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress} // Listen for Enter key
              className="w-full outline-none bg-transparent text-black"
              placeholder="Type your message..."
            />
            <button 
              onClick={sendMessage}
              className="ml-2 text-orange-500 hover:text-maroon transition"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

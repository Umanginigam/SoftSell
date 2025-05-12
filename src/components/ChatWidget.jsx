import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! Ask me anything about SoftSell.", type: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, type: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5001/chat", {
        message: input,
      });
      const botMessage = { text: res.data.reply, type: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "Oops! Server error. Try again later.", type: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-full shadow-2xl hover:scale-105 transition-transform"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="w-80 bg-white border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-3 flex justify-between items-center">
            <span className="font-semibold text-sm">Ask SoftSell AI</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="hover:text-red-300 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-80 space-y-3 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.type === "bot" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[75%] px-4 py-2 rounded-xl text-sm shadow-md ${
                    msg.type === "bot"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-blue-100 text-blue-900"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start items-center text-gray-500 text-sm">
                <div className="bg-gray-200 px-3 py-2 rounded-xl animate-pulse">
                  Typing<span className="animate-bounce">...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Field */}
          <div className="p-3 border-t flex gap-2 bg-gray-50">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 p-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ask a question..."
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg text-sm shadow"
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ChatWidget;

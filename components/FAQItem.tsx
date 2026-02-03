"use client";

import { useState } from "react";

export default function FAQItem({ question, answer, className = "" }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className={`border rounded-lg p-5 cursor-pointer transition-all duration-300 hover:bg-black/5 ${className}`}
    >
      <div className="flex justify-between items-center">
        <span className="font-medium">{question}</span>
        <span className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

import React from "react";
import "../components/Comp.css";

const Publications = () => {
  return (
    <div
      name="Publications"
      className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen text-white p-4"
    > 
    <h2 className="text-center text-3xl mb-12 font-bold border-b-1 border-gray-500">Publications</h2>

      <div className="max-w-screen-lg mx-auto">
        <div className="publication-item p-4 text-center rounded-lg shadow-md shadow-gray-600 bg-gray-700 mb-4 mx-4 sm:mx-auto">
          <h2 className="text-2xl font-semibold mb-2">
            Learning Cost-Adjusted Predictive Models with Margin-Based Framework
          </h2>
          <p className="mb-2">Authors: Naved Anwar, Moshe Battula, Jaismeen Kaur, Saumya Pailwan</p>
          <p className="mb-2">Published: 2024, Las Vegas, NV, USA</p>
          <p className="mb-2">Conference: 2024 IEEE 14th Annual Computing and Communication Workshop and Conference (CCWC)</p>
          <p className="mb-2">Publisher: IEEE</p>
          <a 
            href="https://doi.org/10.1109/CCWC60891.2024.10427738" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 underline hover:text-blue-500"
          >
            DOI: 10.1109/CCWC60891.2024.10427738
          </a>
        </div>
      </div>
    </div>
  );
};

export default Publications;

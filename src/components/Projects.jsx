import React from "react";
import "../components/Comp.css";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "MALL-INSIGHT",
      para: "Analyse customer data from a mall and segment customers into distinct groups based on their purchasing behaviours. Deep insights into mall customers to enhance their retail experience. User can store their daily or important tasks.",
      techUsed: "Python, Pandas, Numpy, Matplotlib, Seaborn, PowerBI, SQL, Excel"
    },
    {
      id: 2,
      title: "X-SCAN (Disease Detection from X-ray Scan)",
      para: "Developed a deep learning model to detect specific diseases from X-ray scans. Provides clear and understandable results to laypeople who may not have the expertise to interpret the scans.",
      techUsed: "Python, Tensorflow, Keras, OpenCV, PyTorch, PIL, Django"
    },
    {
      id: 3,
      title: "SHIELD-CITY (City’s Crime Insights)",
      para: "Analyse the crime data for a particular city, comparing the number of crimes month-over-month and year-over-year. Tracks the number of arrests made and identifies the time at which crimes occur.",
      techUsed: "Python, Pandas, Numpy, Matplotlib, Seaborn, PowerBI"
    },
    {
      id: 4,
      title: "WOOD-VISTA (TimberStore Stock Inventory and Billing System)",
      para: "Web-based application to manage and track timber wood inventory. Implements a comprehensive billing system for a retail store.",
      techUsed: "Python, HTML, Django, CSS, JavaScript, Bootstrap, SQL"
    },
    {
      id: 5,
      title: "CURELINK (Hospital’s Appointment System)",
      para: "Desktop-based application to streamline hospital operations. Focuses on appointment scheduling, patient registration, and doctor scheduling.",
      techUsed: "Python, HTML, Django, CSS, JavaScript, Bootstrap, SQL"
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <h1 className="text-3xl text-center mb-12 font-bold border-b-4 border-gray-500">
            Projects
          </h1>
        </div>

        <div className="portfolio-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolios.map(({ id, title, para, techUsed }) => (
            <div key={id} className="project-item bg-gray-900 p-4 rounded-lg shadow-md">
              <p className="project-title text-xl font-semibold mb-2">{title}</p>
              <p className="project-description mb-2">{para}</p>
              <div className="tech-details mt-2 text-sm">{techUsed}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

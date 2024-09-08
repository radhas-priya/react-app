import React from "react";
import htmlpng from "../assets/html.png";
import csspng from "../assets/css.png";
import javascript from "../assets/javascript.png";
import python from "../assets/pythonimage.jpg";
import cpp from "../assets/cppimage.jpg";
import bootstrappng from "../assets/bootstrappng.png";
import "../components/Comp.css";

const Experience = () => {
  const techs = [
    { id: 1, src: htmlpng, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: csspng, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: bootstrappng, title: "Bootstrap", style: "shadow-purple-700" },
    { id: 5, src: python, title: "Python", style: "shadow-yellow-400" },
    { id: 6, src: cpp, title: "C++", style: "shadow-blue-400" },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full min-h-screen text-white">
        <div className="mb-12">
          <p className="text-3xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-4 text-xl font-bold mt-2 text-center">
            These are the technologies I have worked on
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-6 px-10 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img className="w-20 mx-auto" src={src} alt={title} />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <div className="major-skills mb-12">
          <h2 className="skills-h2 text-2xl font-semibold mb-4">Major Skills</h2>
          <ul className="ul-details list-disc list-inside">
            <li>Python, Python Libraries (Pandas, Numpy, Matplotlib, Keras, Seaborn), Python Frameworks (Flask, Tkinter, Django)</li>
            <li>SQL, PowerBI, Microsoft Suites (MS Word, MS Excel, MS PowerPoint)</li>
            <li>Desktop App Development, Web Development (HTML, CSS, JavaScript, Bootstrap)</li>
            <li>Data Science/Data Science Ethics/Machine Learning/Deep Learning</li>
            <li>Programming Languages (Python, C, C++)</li>
          </ul>
        </div>

        {/* Experience Section */}
        <div className="experience-details bg-gray-800 p-6 rounded-lg shadow-md shadow-gray-600">
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
          <h3 className="text-xl font-bold mb-2">Solitaire Infosys</h3>
          <p className="text-lg mb-2">Software Intern (2023 - 2024)</p>
          <p className="mb-4">Mohali, Punjab, India (Remote)</p>
          <ul className="list-disc list-inside mb-4">
            <li>Gained hands-on experience with various projects in Python, C, and C++.</li>
            <li>Directed and implemented various projects, emphasizing tasks such as data cleansing, data acquisition, software analysis, testing, and design.</li>
            <li>Collaborated with team members to identify and fix software issues.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;

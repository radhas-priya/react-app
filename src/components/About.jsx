import React from "react";
import "../components/Comp.css"
const About = () => {
  return (
    <div
      name="about "
      className="w-full h-[120vh] bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <h1 className="text-3xl font-bold inline border-b-4  border-gray-500 text-white">
            About me 

          </h1>
          <h3 className="phone-details">+91 8146949649</h3>
          
          <p className="text-xl mt-14 text-center">
         A  Software Developer  with expertise in Python,Power Bi,Html,Css JAvascript and many more like this and 
           currently trying my best in sharpning the skills with engaging augmentations.
           <br />
              <p className="text-xl mt-6 text-center">I  always remain curious for  learning about new technologies.
                I have hands on experience with languages like C,C++ and python.I have been working with many other tehnologies 
                also.My main goal is to explore as much as i can do .
              </p>
          <br />
              </p>
          
        </div>
      </div>
    </div>
  );
};

export default About;

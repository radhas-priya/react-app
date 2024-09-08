import React from 'react';

const Awards = () => {
  const awards = [
    {
      id: 1,
      title: 'Award of Third Position 2023',
      event: 'Hackathon (Project Based Competition)',
      location: 'DAV University, Punjab, India',
    },
    {
      id: 2,
      title: 'Award of Third Position 2022',
      event: 'Mathematics Competition at National Mathematics Day',
      location: 'DAV University, Punjab, India',
    },
    {
      id: 3,
      title: 'Bronze Medal 2016',
      event: 'National Astronomy Olympiad',
      location: 'Kapurthala, India',
    },
  ];

  return (
    <div name="awards" className="bg-gradient-to-b from-black to-gray-800 w-full h-full p-4 text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">Awards</h2>
          <p className="py-6 text-xl">Here are some of the awards I have achieved:</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {awards.map(({ id, title, event, location }) => (
            <div key={id} className="bg-gray-700 p-6 rounded-lg shadow-md hover:scale-105 duration-500">
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-lg">{event}</p>
              <p className="text-sm text-gray-400">{location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;

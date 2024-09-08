import React from 'react';

const Activities = () => {
  const activities = [
    {
      id: 1,
      title: 'Supporting Strayed Dogs',
      duration: 'Present',
      points: [
        'Provided food, necessary medication, and treatment for the well-being of strayed dogs at the university.',
        'Taking initiative to collaborate with NGOs of strayed dogs and help them by using advanced technologies.',
      ],
    },
    {
      id: 2,
      title: 'Volunteer Technology Instructor',
      duration: '2021 - 2024',
      points: [
        'Assisted MBA and BBA students in mastering various upcoming AI technologies that can help in their profession.',
        'Topics covered included automation tools, sales analytical skills, general business tools such as Google Analytics and the Microsoft Suite, and how to collect data from different companies ethically.',
      ],
    },
    {
      id: 3,
      title: 'Volunteer Mentor of Juniors of Computer Science and Engineering Department',
      duration: '2021 - 2024',
      points: [
        'Consistently provided notes and helped junior students who faced financial issues.',
        'By sharing knowledge and resources, I aim to help them understand complex concepts without paying online tutors. They feel free to reach out anytime to solve their problems.',
      ],
    },
    {
      id: 4,
      title: 'Coordinator of Hackathon 2023',
      duration: '2023',
      points: [
        'Planned and organized various aspects of the competition.',
        'Collaborated with sponsors, team members, participants, and volunteers.',
      ],
    },
  ];

  return (
    <div name="activities" className="bg-gradient-to-b from-gray-800 to-black w-full h-full p-4 text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">Volunteer Work & Co-Curricular Activities</h2>
          <p className="py-6 text-xl">These are some of the activities I have been involved in:</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2">
          {activities.map(({ id, title, duration, points }) => (
            <div key={id} className="bg-gray-700 p-6 rounded-lg shadow-md hover:scale-105 duration-500">
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-400 mb-2">{duration}</p>
              <ul className="list-disc list-inside text-lg">
                {points.map((point, index) => (
                  <li key={index} className="mb-1">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;

let timelineData = [
  {
    id: 7,
    name: "Cosmic Crawlers",
    title: "Game Dev Student",
    location: "Atlanta, Georgia",
    description: [
      "Project managed a small team in the development of an outer space-themed cat version of Dungeon Crawlers.",
      "Organized scrum meetings and provided technical support to new developers and ensured effective task prioritization.",
      "Implemented major game aspects such as player movement and entity collisions, contributing to core gameplay mechanics.",
    ],
    date: "August 2023 - December 2023",
    icon: "school",
  },
  {
    id: 6,
    name: "GT Webdev Project Platform",
    title: "Backend Student",
    location: "Atlanta, Georgia",
    description: [
      " Developed a dynamic project platform to showcase club projects.",
      "Leveraged MongoDB to establish secure user authentication and streamlined project storage.",
      "Designed user endpoints to facilitate navigation through the project gallery, and incorporated a filtering search bar forenhanced user experience.",
    ],
    date: "September 2023 - December 2023",
    icon: "school",
  },
  {
    id: 5,
    name: "Junior Market",
    title: "Full-Stack Developer",
    location: "Cumming, Georgia",
    description: [
      "Independently designed and developed a comprehensive store management website.",
      "Successfully executed the migration of the website from PHP to JavaScript, effectively minimizing downtime to only 5 hours and ensuring a smooth transition for users.",
      "Employed agile development methodologies to maintain constant communication with the client, ensuring their requirements were met throughout the entire website development process.",
      "Implemented MEAN framework for back-end server connections, dynamic front-end, and efficient database management",
    ],
    date: "May 2023 - August 2023",
    icon: "work",
  },
  {
    id: 4,
    name: "AV/IT Classrom Tech Support",
    title: "Student Assistant",
    location: "Athens, Georgia",
    description: [
      "Provided comprehensive support for roughly 100 classroom AV/IT systems, helping with troubleshooting and maintenance.",
      "Properly communicated through phone to help give instructions.",
      "Forwarded calls to designated technicians as well as write maintenance tickets.",
    ],
    date: "September 2022 - May 2023",
    icon: "work",
  },
  {
    id: 3,
    name: "Hackathon",
    title: "Leadership",
    location: "Athens, Georgia",
    description: [
      "Demonstrated effective leadership in the development of a road-trip travel application.",
      "Delegated tasks for the team to complete within a challenging 48-hour time frame.",
      "Enforced a collaborative environment, ensuring each team member contributed effectively to tasks.",
    ],
    date: "February 2023",
    icon: "school",
  },
  {
    id: 2,
    name: "Space Invaders",
    title: "Game Dev Student",
    location: "Athens, Georgia",
    description: [
      "Developed a personalized version of the classic arcade game Space Invaders in Java.",
      "Acquired expertise in JavaFX to create an intuitive user interface, prioritizing a user-friendly experience for players.",
      "Conducted significant code refactoring, systematically eliminating redundancies to enhance runtime efficiency by 50 percent.",
    ],
    date: "November 2022 - December 2022",
    icon: "school",
  },
  {
    id: 1,
    name: "Time Warp",
    title: "Game Dev Student",
    location: "Duluth, Georgia",
    description: [
      "Led the development of a 2D platformer PC game, taking charge of both asset design and entity programming, showcasing skills in game development within the Unity framework.",
      "Implemented enemy pathfinding functionality by integrating the A* search algorithm, significantly optimizing runtime performance by 60 percent.",
    ],
    date: "November 2021 - February 2022",
    icon: "school",
  },
];

timelineData.sort((a, b) => b.id - a.id);

export default timelineData;

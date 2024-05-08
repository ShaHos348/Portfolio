let projectData = [
  {
    id: 5,
    name: "Junior Market Store Management",
    attributes: { languages: ["JavaScript", "mySQL"], IDE: "AngularJS", Type: "Website" },
    description:
      "This is a basic store management website with features from employee clock-ins and payroll to store sells.",
    imageUrl: "JuniorMarketScreen.png",
  },
  {
    id: 4,
    name: "UGA MarketPlace",
    attributes: { languages: ["Javascript", "Java"], IDE: "React", Type: "Website" },
    description:
      "UGA MarketPlace is an open-source website for UGA students to do things ranging from tutoring and selling items to swapping courses and parking passes.",
    imageUrl: "UGAMarketPlaceScreen.png",
  },
  {
    id: 3,
    name: "Space Invaders",
    attributes: { languages: ["Java"], IDE: "Shell", Type: "Game" },
    description:
      "Space Invaders is an implementation of the classic arcade game of the same name: Space Invaders.",
    imageUrl: "SpaceInvadersScreen.png",
  },
  {
    id: 2,
    name: "Time Warp",
    attributes: { languages: ["C#"], IDE: "Unity", Type: "Game" },
    description:
      "Time Warp is a 2D platformer with the concept of traveling through different periods of time.",
    imageUrl: "TimeWarpScreen.png",
  },
  {
    id: 1,
    name: "Cosmic Crawlers",
    attributes: { languages: ["Java"], IDE: "Android Studio", Type: "Game" },
    description:
      "Cosmic Crawlers is an android inmplementation of the Dungeon Crawlers video game with the theme of cats in outer space.",
    imageUrl: "CosmicCrawlersScreen.png",
  },
];

projectData.sort((a, b) => a.id - b.id);

export default projectData;

import projectUltraImage from '../images/Project Ultra.png';
import backToBackImage from '../images/Back to Back.png';
import vrtsImage from '../images/Virtual Reality Training Simulation.png';
import sfmlPacManImage from '../images/SFML Pac-Man.png';
import quizifyImage from '../images/Quizify.png';
import tasmSpaceInvadersImage from '../images/TASM-Space-Invaders.png';

const projects = [
  {
    id: 1,
    title: "Project Ultra",
    shortDescription: "An indie multiplayer sci-fi third-person shooter developed solo using Unreal Engine, featuring Epic Online Services integration.",
    fullDescription: `Project Ultra is an ambitious indie multiplayer sci-fi third-person shooter that I developed entirely solo using Unreal Engine. Released in its alpha state, the game has already garnered over 190 downloads, showcasing its potential in the gaming community.\n\nThe project features full integration with Epic Online Services (EOS), leveraging Epic's robust infrastructure for comprehensive multiplayer functionality. This includes sophisticated matchmaking systems, secure player authentication, and efficient server management.\n\nKey technical achievements include:\n- Implementation of real-time multiplayer networking\n- Advanced player movement and combat mechanics\n- Dynamic weapon systems with unique sci-fi elements\n- Custom UI/UX design for multiplayer interactions\n- Integration with Epic's backend services for player data management\n\nThe game represents a significant technical achievement in solo game development, demonstrating expertise in both game design and multiplayer systems implementation.`,
    image: projectUltraImage,
    links: [
      { type: "GitHub", url: "https://github.com/budi641/Project-Ultra" },
      { type: "Itch.io", url: "https://abdelrahman-ameen.itch.io/project-ultra" }
    ],
    technologies: ["Unreal Engine", "C++", "Epic Online Services", "Multiplayer Networking"]
  },
  {
    id: 2,
    title: "Back to Back",
    shortDescription: "A cooperative two-player game set in three distinct historical periods of Egypt, developed with Unreal Engine 5.",
    fullDescription: `Back to Back is an innovative cooperative game developed by Di-Tri Studio, where two players must work together to survive in a unique gameplay experience. The game takes players on a journey through three distinct historical periods of Egypt, each with its own unique challenges and environments.\n\nMy contributions to the project included:\n- Development of core game mechanics focusing on player cooperation\n- Implementation of the user interface system\n- Integration of historical elements into gameplay\n- Optimization of multiplayer interactions\n- Development of environmental storytelling elements\n\nThe game emphasizes the importance of teamwork and communication, as players must coordinate their actions to overcome challenges. The historical setting adds an educational dimension while maintaining engaging gameplay.`,
    image: backToBackImage,
    links: [
      { type: "Itch.io", url: "https://bassel.itch.io/backtoback" },
      { type: "Steam", url: "https://store.steampowered.com/app/3304730/Back_To_Back/" }
    ],
    technologies: ["Unreal Engine 5", "C++", "Multiplayer Development", "UI/UX Design"]
  },
  {
    id: 3,
    title: "Virtual Reality Training Simulation",
    shortDescription: "A VR-based training platform for medical students to safely practice and learn human anatomy.",
    fullDescription: `The Virtual Reality Training Simulation (VRTS) is an innovative educational platform designed to revolutionize how medical students learn and practice human anatomy. This project addresses the limitations of traditional learning methods by providing a safe, interactive, and immersive environment for students to make mistakes and learn from them.\n\nKey features include:\n- Detailed 3D models of human anatomy\n- Interactive learning modules\n- Real-time feedback system\n- Progress tracking and assessment tools\n- Multi-user collaboration capabilities\n\nThe platform offers several advantages over traditional methods:\n- Safe environment for practice\n- Unlimited repetition of procedures\n- Detailed visualization of complex anatomical structures\n- Immediate feedback on actions\n- Cost-effective compared to physical models\n\nThis project demonstrates the potential of VR technology in medical education and training.`,
    image: vrtsImage,
    links: [
      { type: "GitHub", url: "https://github.com/budi641/VrTrainingSimulation" }
    ],
    technologies: ["Unreal Engine", "C++", "VR Development", "3D Modeling", "Medical Education"]
  },
  {
    id: 4,
    title: "SFML Pac-Man",
    shortDescription: "A complete recreation of the classic Pac-Man game using C++ and SFML, focusing on authentic enemy behavior.",
    fullDescription: `This project is a faithful recreation of the classic Pac-Man game, developed entirely in C++ using the SFML (Simple and Fast Multimedia Library). The implementation focuses on accurately replicating the original game's mechanics, particularly the sophisticated enemy AI behavior that made the original game so challenging and engaging.\n\nTechnical achievements include:\n- Precise recreation of ghost movement patterns\n- Authentic game physics and collision detection\n- Original sound effects and music implementation\n- Faithful visual reproduction of the classic arcade style\n- Efficient memory management and performance optimization\n\nThe project demonstrates:\n- Strong understanding of game development fundamentals\n- Mastery of C++ programming\n- Ability to work with multimedia libraries\n- Attention to detail in game mechanics\n- Understanding of classic game design principles.`,
    image: sfmlPacManImage,
    links: [
      { type: "GitHub", url: "https://github.com/budi641/SFML_Pac_Man" }
    ],
    technologies: ["C++", "SFML", "Game Development", "AI Programming"]
  },
  {
    id: 5,
    title: "Quizify",
    shortDescription: "A gamified social learning platform built with ASP.NET, featuring comprehensive documentation and Azure deployment.",
    fullDescription: `Quizify is a sophisticated online learning platform that combines social features with gamification elements to create an engaging educational experience. The project was developed using modern web technologies and follows industry best practices in software development.\n\nTechnical Implementation:\n- Built with ASP.NET Razor pages using C#\n- Comprehensive database design using SQL\n- Azure cloud deployment with App Services\n- Automated CI/CD pipelines via Azure DevOps\n- Secure authentication and authorization systems\n\nDevelopment Process:\n- Followed Agile and Scrum methodologies\n- Implemented comprehensive testing strategies\n- Created detailed system documentation\n- Utilized modern development tools and practices\n- Incorporated user feedback in iterative development\n\nThe platform features:\n- Interactive quiz creation and management\n- Social learning features\n- Progress tracking and analytics\n- Gamification elements\n- Real-time feedback systems.`,
    image: quizifyImage,
    links: [
      { type: "GitHub", url: "https://github.com/budi641/Quizify" }
    ],
    technologies: ["ASP.NET", "C#", "SQL", "Azure", "CI/CD", "Agile Development"]
  },
  {
    id: 6,
    title: "TASM-Space-Invaders",
    shortDescription: "A Space Invaders clone written in assembly language for the 8086 architecture, exploring low-level programming concepts.",
    fullDescription: `This project is a technical deep-dive into low-level programming, recreating the classic Space Invaders game entirely in assembly language for the 8086 architecture. The project serves as an educational tool to understand fundamental computer architecture and how high-level game concepts translate to machine code.\n\nTechnical aspects explored:\n- Direct hardware interaction\n- CPU instruction set utilization\n- Memory management\n- Input/output handling\n- Screen rendering techniques\n- Timing and synchronization\n\nThe implementation demonstrates:\n- Deep understanding of computer architecture\n- Mastery of assembly language programming\n- Ability to work with hardware directly\n- Understanding of game development at the lowest level\n- Efficient resource management\n\nThis project provides valuable insights into:\n- How computers execute instructions\n- The relationship between high-level concepts and machine code\n- The fundamentals of game development\n- The importance of optimization in low-level programming.`,
    image: tasmSpaceInvadersImage,
    links: [
      { type: "GitHub", url: "https://github.com/budi641/TASM-Space-Invaders" }
    ],
    technologies: ["Assembly Language", "8086 Architecture", "TASM", "Low-level Programming"]
  }
];

export default projects; 
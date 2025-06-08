// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/BG.jpg";
import HeroDark from "./images/BG.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "budi641";

// Navbar Logo image
export const navLogo = "./images/nav.svg"

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, React Bootstrap, Redux, and the GitHub REST API.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 6,
    skill: <Icon icon="skill-icons:unrealengine" className="display-4" />,
    name: "Unreal Engine",
  },
  {
    id: 1,
    skill: <Icon icon="skill-icons:cpp" className="display-4" />,
    name: "C++",
  },
  {
    id: 2,
    skill: <Icon icon="skill-icons:c" className="display-4" />,
    name: "C",
  },
  {
    id: 3,
    skill: <Icon icon="skill-icons:c" className="display-4" />,
    name: "C#",
  },
  {
    id: 3,
    skill: <Icon icon="skill-icons:java-dark" className="display-4" />,
    name: "Java",
  },
  {
    id: 6,
    skill: <Icon icon="skill-icons:cmake-dark" className="display-4" />,
    name: "CMake",
  },
  {
    id: 3,
    skill: <Icon icon="skill-icons:javascript" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="file-icons:opengl" className="display-4" />,
    name: "OpenGL",
  },
  {
    id: 5,
    skill: <Icon icon="skill-icons:react-dark" className="display-4" />,
    name: "React",
  },

  {
    id: 7,
    skill: <Icon icon="simple-icons:vulkan" className="display-4" />,
    name: "Vulkan",
  },
  {
    id: 8,
    skill: <Icon icon="skill-icons:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="skill-icons:github-dark" className="display-4" />,
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://drive.google.com/file/d/1iAOxp6L1LT2DlaTYNEFMdxYRUWTZws8i/view?usp=sharing";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["OpenGL_Game_Engine", "SFML_Pac_Man", "Quizify"];




// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "OpenGL_Game_Engine",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mjkrgnvk";

// Footer icons theme (light or dark)
export const footerTheme = "dark";

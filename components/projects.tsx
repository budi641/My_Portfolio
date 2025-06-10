"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye } from "lucide-react"
import { ProjectModal } from "./project-modal"
import { useMobile } from "@/hooks/use-mobile"

// Complete project data with all 12 projects
const projects = [
  {
    id: 1,
    title: "Vulkan Ray Tracing Engine with Monte Carlo Integration",
    shortDescription:
      "A real-time physically-based rendering engine using Vulkan's ray tracing extensions, Monte Carlo integration, and cosine-weighted hemisphere sampling for global illumination and realistic light transport.",
    fullDescription: `This project implements a real-time physically-based rendering engine using Vulkan's ray tracing extensions, Monte Carlo integration, and cosine-weighted hemisphere sampling to simulate global illumination and realistic light transport. It leverages RTX GPU acceleration for efficient sampling and rendering in complex 3D environments.

📐 Core Technologies
API: Vulkan 1.3 with VK_KHR_ray_tracing_pipeline, VK_KHR_acceleration_structure

Shading: SPIR-V shaders written in GLSL

Math Library: GLM (OpenGL Mathematics) for vector/matrix operations

Sampling Methods: Monte Carlo integration, Cosine-weighted hemisphere sampling

Hardware: NVIDIA RTX (tested on RTX 3060+)

🎯 Objectives
Implement the rendering equation via numerical integration.

Capture indirect lighting, soft shadows, reflections, and caustics.

Compare CPU-based (Python) and GPU-based (Vulkan) implementations.

Evaluate rendering quality and convergence using statistical error metrics.

📊 Mathematical Foundation
At the heart of the renderer is the rendering equation:

𝐿𝑜(𝑥,𝜔𝑜) = 𝐿𝑒(𝑥,𝜔𝑜) + ∫Ω 𝑓𝑟(𝑥,𝜔𝑖,𝜔𝑜)𝐋𝑖(𝑥,𝜔𝑖)(𝜔𝑖⋅𝑛)𝑑𝜔𝑖

Approximated with Monte Carlo integration:

𝐋𝑜(𝑥,𝜔𝑜) ≈ 1/𝑁 ∑𝑖=1𝑁 𝑓𝑟(𝑥,𝜔𝑖,𝜔𝑜)𝐋𝑖(𝑥,𝜔𝑖)(𝜔𝑖⋅𝑛)/𝑝(𝜔𝑖)

💡 Key Features
✅ Vulkan Ray Tracing Implementation
Acceleration Structures: BVH-based BLAS (bottom-level) and TLAS (top-level) acceleration using Vulkan ray tracing extensions.

Shader Stages:
- raygen: Generates rays for each pixel
- closest-hit: Computes light contribution using Monte Carlo sampling
- miss: Handles rays that don't hit geometry (e.g., background color)

✅ Sampling & Light Transport
Cosine-weighted sampling over hemispheres to reduce variance for diffuse surfaces.

Support for multiple light bounces to simulate global illumination.

Unbiased estimator using random sampling with variance analysis and convergence tracking.

🚀 Performance & Optimization
GPU Acceleration: Real-time rendering at HD resolutions using RTX hardware and Vulkan's parallel compute model.

Sample Budget: Over 1,000 samples per pixel in under a second—compared to 1 sample per second in the Python version.

Noise Reduction: Higher sampling density and cosine importance sampling reduce visible noise.

📚 Skills Demonstrated
- Physically-based rendering (PBR) and light transport modeling
- Advanced Vulkan development with GPU ray tracing
- Numerical methods: Monte Carlo integration, error estimation, variance reduction
- Shader programming (SPIR-V)
- Real-time GPU optimization and pipeline management
- Comparative evaluation of rendering techniques`,
    image: "/images/vulkan-raytracing.png",
    links: [{ type: "GitHub", url: "https://github.com/budi641/Vulkan-Raytracing-Engine" }],
    technologies: [
      "Vulkan",
      "C++",
      "GLSL",
      "SPIR-V",
      "Monte Carlo Integration",
      "Ray Tracing",
      "GPU Programming",
      "Computer Graphics",
    ],
  },
  {
    id: 2,
    title: "Vulkan Abstraction Engine",
    shortDescription:
      "A modern C++20 abstraction layer for Vulkan, providing a clean and type-safe interface for graphics programming.",
    fullDescription: `A modern C++20 abstraction layer for Vulkan, providing a clean and type-safe interface for graphics programming. This project demonstrates advanced C++ features and modern graphics programming techniques.

🔧 Core Features
- RAII-based resource management
- Type-safe API design
- Modern C++20 features
- Comprehensive error handling
- Efficient memory management
- Cross-platform support

🛠️ Technical Implementation
- Smart pointers for resource management
- Template metaprogramming for type safety
- Exception handling for robust error management
- Memory pools for efficient allocation
- Command buffer management
- Pipeline state objects
- Descriptor sets and layouts
- Synchronization primitives

📚 Key Concepts
- Modern C++ best practices
- Graphics programming fundamentals
- Resource management
- Error handling
- Performance optimization
- Cross-platform development

🎯 Project Goals
- Simplify Vulkan programming
- Provide type-safe abstractions
- Maintain performance
- Ensure resource safety
- Support modern C++ features
- Enable cross-platform development`,
    image: "/images/vulkan-abstraction.png",
    links: [{ type: "GitHub", url: "https://github.com/budi641/VulkanAbstraction" }],
    technologies: ["C++", "Vulkan", "GLFW", "Modern C++", "Graphics Programming", "RAII", "System Programming"],
  },
  {
    id: 3,
    title: "Custom 3D Game Engine",
    shortDescription:
      "A custom-built 3D game engine developed from the ground up in modern C++20 using OpenGL, designed to power a third-person beat 'em up game inspired by Adventure Time: Guardians of Sunshine.",
    fullDescription: `A custom-built 3D game engine developed from the ground up in modern C++20 using OpenGL, designed to power a third-person beat 'em up game inspired by Adventure Time: Guardians of Sunshine. The engine integrates real-time physics, skeletal animation, rendering, and audio systems into a modular, extensible framework.

🔧 Core Features

Entity-Component System (ECS)
- Modular architecture for managing entities and components
- Enables clean separation of logic and data, optimized for scalability

Physics System
- Integrated ReactPhysics3D for real-time rigid body simulation
- Supports dynamic, static, and kinematic objects
- Collision filtering and multiple collider types (box, sphere, capsule, mesh)
- Built-in physics debug rendering integrated into the rendering pipeline

Rendering System
- Forward renderer based on OpenGL
- Skybox system using cubemaps for immersive background rendering
- Transparency support with correct depth sorting and blending
- Multiple dynamic light types: directional, point, and spotlights
- Post-processing effects: bloom, tone mapping, and more
- Material system with support for diffuse, specular, and normal maps

Model Loading & Skeletal Animation
- Model importing via Assimp, supporting .OBJ and .DAE formats
- Fully-featured skeletal animation system
- Bone hierarchy and keyframe interpolation
- Supports animated 3D characters and enemies

Audio System
- OpenAL integration for 3D positional audio
- Supports ambient sounds, spatial effects, and music

Level & Scene Management
- JSON-based scene loading and saving
- Easily serializes game state, including entity/component setups

Gameplay Systems
- Switchable characters: Finn and Jake, each with custom emotes and behavior
- Custom enemy AI for attack and detection logic
- Coin collection, combat mechanics, and enemy interactions

Debugging & Development Tools
- Real-time physics collider visualization
- Engine-level logging and diagnostics tools

⚙️ Technologies Used
- C++20 – modern language features for clean, performant architecture
- OpenGL – graphics rendering
- GLFW – cross-platform windowing and input
- ReactPhysics3D – physics simulation and collision detection
- Assimp – model and animation importing
- OpenAL – 3D audio playback
- JSON for Modern C++ – data serialization
- Custom engine modules – ECS, rendering, lighting, animation, physics, audio, and AI`,
    image: "/images/game-engine.png",
    links: [
      { type: "GitHub", url: "https://github.com/budi641/OpenGL_Game_Engine" },
      { type: "YouTube", url: "https://youtu.be/i6tOqgaCUBs?si=t0aTFZTMxgfQdaC2" },
    ],
    technologies: ["C++20", "OpenGL", "GLFW", "ReactPhysics3D", "Assimp", "OpenAL", "ECS", "3D Graphics"],
  },
  {
    id: 4,
    title: "Back to Back",
    shortDescription:
      "A cooperative asymmetric multiplayer game set in three distinct historical periods of Egypt, developed with Unreal Engine 5.5 and available on Steam.",
    fullDescription: `A cooperative asymmetric multiplayer game set in three distinct historical periods of Egypt, developed with Unreal Engine 5.5 and available on Steam.

🎮 Game Overview
Back to Back is an immersive cooperative experience where two players must work together to overcome challenges across different eras of Egyptian history. The game features asymmetric gameplay mechanics, where each player has unique abilities and roles.

🤖 AI & Combat Systems
Enemy AI
- Developed sophisticated enemy behavior systems using Unreal Engine's AI framework
- Implemented state machines for different enemy types (ranged, melee, special units)
- Created dynamic pathfinding and combat decision-making systems
- Designed group coordination behaviors for enemy squads

Boss AI
- Created unique boss encounters with distinct attack patterns and phases
- Implemented adaptive difficulty scaling based on player performance
- Developed complex state machines for boss behaviors and transitions
- Designed telegraphing systems for boss attacks and special moves

Trap System
- Built a modular trap system with various types (mechanical, magical, environmental)
- Implemented trap detection and disarming mechanics
- Created trap placement and triggering systems
- Designed visual and audio feedback for trap interactions

Weapon Systems
- Developed a comprehensive weapon framework supporting multiple weapon types
- Implemented weapon customization and upgrade systems
- Created unique weapon abilities and special attacks
- Designed weapon switching and combo systems

🎯 Key Features
- Asymmetric multiplayer gameplay with unique character abilities
- Three distinct historical periods with unique environments and challenges
- Advanced AI systems for enemies and bosses
- Complex trap and weapon systems
- Steam integration for multiplayer matchmaking
- Cross-platform play support

🛠️ Technical Highlights
- Developed using Unreal Engine 5.5's latest features
- Implemented advanced AI systems using Behavior Trees and EQS
- Created custom gameplay systems for traps and weapons
- Optimized networking for smooth multiplayer experience
- Integrated Steam SDK for multiplayer functionality

🎨 Art & Design
- Historically accurate environments and assets
- Distinct visual styles for each time period
- Detailed character designs and animations
- Atmospheric lighting and effects

The game showcases advanced AI programming, complex gameplay systems, and professional game development practices, all while maintaining historical accuracy and engaging cooperative gameplay.`,
    image: "/images/back-to-back.jpeg",
    links: [
      { type: "Steam", url: "https://store.steampowered.com/app/3304730/Back_To_Back/" },
      { type: "Itch.io", url: "https://bassel.itch.io/backtoback" },
    ],
    technologies: [
      "Unreal Engine 5.5",
      "C++",
      "Blueprints",
      "AI Programming",
      "Multiplayer",
      "Steam SDK",
      "Game Design",
    ],
  },
  {
    id: 5,
    title: "Project Ultra",
    shortDescription:
      "An indie multiplayer sci-fi third-person shooter developed solo using Unreal Engine, featuring Epic Online Services integration.",
    fullDescription: `Project Ultra is an ambitious indie multiplayer sci-fi third-person shooter that I developed entirely solo using Unreal Engine. Released in its alpha state, the game has already garnered over 190 downloads, showcasing its potential in the gaming community.

The project features full integration with Epic Online Services (EOS), leveraging Epic's robust infrastructure for comprehensive multiplayer functionality. This includes sophisticated matchmaking systems, secure player authentication, and efficient server management.

Key technical achievements include:
- Implementation of real-time multiplayer networking
- Advanced player movement and combat mechanics
- Dynamic weapon systems with unique sci-fi elements
- Custom UI/UX design for multiplayer interactions
- Integration with Epic's backend services for player data management

The game represents a significant technical achievement in solo game development, demonstrating expertise in both game design and multiplayer systems implementation.`,
    image: "/images/project-ultra.png",
    links: [
      { type: "GitHub", url: "https://github.com/budi641/Project-Ultra" },
      { type: "Itch.io", url: "https://abdelrahman-ameen.itch.io/project-ultra" },
      { type: "YouTube", url: "https://youtu.be/avYfwPt-Ftg?si=XUtLp-emfcTVx_8O" },
    ],
    technologies: ["Unreal Engine", "C++", "Epic Online Services", "Multiplayer Networking"],
  },
  {
    id: 6,
    title: "Time Bomb",
    shortDescription:
      "A proof-of-concept 3D side-scrolling platformer featuring innovative time-manipulation mechanics, built with Unreal Engine 5.5.",
    fullDescription: `Time Bomb is a bite-sized, proof-of-concept 3D side-scrolling platformer where you play as a mad scientist trying to escape a chaotic lab overrun by your own creations. The game explores creative time-manipulation mechanics within a single, hand-crafted level that encourages mastery of timing, movement, and experimentation.

🧠 Key Features
Time Control Mechanics

Pause Time to line up precision jumps and avoid hazards

Rewind Time to restore broken terrain or outsmart enemies

Ability Progression

Pickups scattered across the level teach you new mechanics (e.g., double-jump, extended rewind) as part of natural gameplay flow

Environmental Interaction

Turn enemy missiles back against their launchers

Collapse or restore walkways to open new paths

🛠 Technology & Tools
Unreal Engine 5.5 (Blueprints and Level Design)

Facial Scanning + MetaHuman Creator:
I appear in the game's main menu as a MetaHuman version of myself—scanned and customized using Unreal's tools

Level Scripting & Animation:
Built all mechanics from scratch using Blueprints, including time effects and triggers

🎯 Project Focus
Time Bomb serves as a design and tech demo showcasing my ability to:

Script unique game mechanics using UE5's visual system

Design a focused gameplay experience around a single core idea (time manipulation)

Integrate player progression through level design without tutorials

Apply polish and personality with custom animations, sound, and a personal Easter egg`,
    image: "/images/timebomb.png",
    links: [{ type: "Itch.io", url: "https://abdelrahman-ameen.itch.io/time-bomb" }],
    technologies: [
      "Unreal Engine 5.5",
      "Blueprints",
      "MetaHuman Creator",
      "Game Design",
      "Level Design",
      "3D Animation",
    ],
  },
  {
    id: 7,
    title: "Virtual Reality Training Simulation",
    shortDescription: "A VR-based training platform for medical students to safely practice and learn human anatomy.",
    fullDescription: `The Virtual Reality Training Simulation (VRTS) is an innovative educational platform designed to revolutionize how medical students learn and practice human anatomy. This project addresses the limitations of traditional learning methods by providing a safe, interactive, and immersive environment for students to make mistakes and learn from them.

Key features include:
- Detailed 3D models of human anatomy
- Interactive learning modules
- Real-time feedback system
- Progress tracking and assessment tools
- Multi-user collaboration capabilities

The platform offers several advantages over traditional methods:
- Safe environment for practice
- Unlimited repetition of procedures
- Detailed visualization of complex anatomical structures
- Immediate feedback on actions
- Cost-effective compared to physical models

This project demonstrates the potential of VR technology in medical education and training.`,
    image: "/images/virtual-reality-training.png",
    links: [{ type: "GitHub", url: "https://github.com/budi641/VrTrainingSimulation" }],
    technologies: ["Unreal Engine", "C++", "VR Development", "3D Modeling", "Medical Education"],
  },
  {
    id: 8,
    title: "Python 2D Physics Engine",
    shortDescription:
      "A custom-built 2D physics engine with position-based dynamics, showcased through a realistic 8-ball pool game implementation.",
    fullDescription: `2D Physics Engine + Game Demo | Python & Pygame

This project features a custom-built 2D physics engine implemented in Python and showcased through a fully functional 8-ball pool game. The engine models realistic physical interactions using position-based dynamics (PBD), Verlet integration, and a constraint-solving system, offering both soft- and rigid-body simulation capabilities.

🧠 Engine Features
Physics Core

Custom rigid body system with mass, inertia, and restitution

Verlet integration for stable, time-step-independent motion

Position-based constraint solver for soft-body dynamics

Collision Handling

Circle-circle and circle-edge collision detection

Impulse-based collision response with penetration resolution

Friction modeling using contact forces

Constraint System

Distance constraints for soft-body modeling (e.g., springs)

Iterative constraint resolution for stable simulation

Particles & Effects

Lightweight particle emitters for collisions and visual feedback

Configurable lifetime and visual styles (e.g., impact sparks, confetti)

🕹️ Game Mechanics
Realistic 8-Ball Pool

Customizable ball mass, friction, and restitution

Accurate cue control and power-charging mechanics

Ball-pocket detection and physics-based collision behavior

Game Components

Cue stick mechanics with angle and force control

Pocketing and game reset logic

Configurable table dimensions and materials

📁 Tech Stack & Structure
Python 3.8+, Pygame, NumPy

Modular structure:

physics/: core engine (collision, body, constraints, world)

game/: visual and gameplay logic (table, ball, cue)

main.py: entry point with game loop and UI integration

🛠 Notable Equations
Verlet Integration:

𝑥(𝑡+Δ𝑡) = 2𝑥(𝑡) − 𝑥(𝑡−Δ𝑡) + 𝑎(𝑡)Δ𝑡²

Impulse Response:

𝑗 = −(1+𝑒)⋅(𝑣₁−𝑣₂)⋅𝑛 / (1/𝑚₁ + 1/𝑚₂)

Friction:

𝐹 = −𝜇𝑁⋅𝑣/|𝑣|

🧪 Focus & Takeaways
This project demonstrates my ability to design and implement:

A physics engine from first principles

Real-time interactive simulations

Stable constraint-solving with visually satisfying outcomes

Modular game architecture with clean separation of concerns`,
    image: "/images/physics-engine.png",
    links: [{ type: "GitHub", url: "https://github.com/budi641/Python-2D-Physics-Engine" }],
    technologies: [
      "Python",
      "Pygame",
      "NumPy",
      "Physics Simulation",
      "Game Development",
      "Mathematics",
      "Software Architecture",
    ],
  },
  {
    id: 9,
    title: "PathFinder-AI",
    shortDescription:
      "A Python-based AI pathfinding visualizer for grid-based environments, implementing various search algorithms with real-time visualization.",
    fullDescription: `A Python-based AI pathfinding visualizer for grid-based environments.

🔍 Overview
Developed an AI agent capable of traversing an n×n grid filled with:
- Obstacles (impassable terrain)
- Collectibles (items to gather)
- Empty passable cells

Objective: Maximize collected items while reaching a specified goal cell optimally.

🛠 Technologies Used
- Python 3.10+
- Pygame – Real-time grid and path visualization
- NetworkX & Matplotlib – Search tree visualizations
- OOP Design – Grid and AI states modeled using classes (Grid, State, etc.)

🧭 AI Features
State-Space Modeling:
- Includes position and collected item state
- Accounts for collectible combinations and movement restrictions

Search Algorithms Implemented:
- Uninformed: DFS, BFS, Iterative Deepening Search
- Informed: Greedy Best-First, A* Search
- Cost-Based: Uniform Cost Search
- Local Search: Hill Climbing, Simulated Annealing

Action Space:
- Supports four-directional movement (no diagonal)
- Avoids obstacles, collects items on contact

🧪 Testing & Optimization
Test framework for:
- Valid path correctness
- Path optimality (when applicable)
- Robustness against edge cases (e.g., no path, full obstacles)

State Space Estimation:
- Considers valid cells × collectible combinations
- Example: 5×5 grid with 3 obstacles and 2 collectibles → 88 possible states

📊 Visualization
Real-Time Grid Display:
- Pygame interface for simulating and observing agent movement

Search Tree Output:
- Optional display of explored search tree
- Nodes and edges colored and labeled for clarity

📌 Highlights
- Modular and scalable grid design
- Clear separation of logic and visualization
- Easily extensible for more AI strategies or environment variations
- Great for teaching pathfinding algorithms and AI search strategies`,
    image: "/images/pathfinder-ai.png",
    links: [{ type: "GitHub", url: "https://github.com/budi641/PathFinder-AI" }],
    technologies: ["Python", "Pygame", "NetworkX", "Matplotlib", "AI", "Pathfinding", "OOP", "Data Structures"],
  },
  {
    id: 10,
    title: "SFML Pac-Man",
    shortDescription:
      "A complete recreation of the classic Pac-Man game using C++ and SFML, focusing on authentic enemy behavior.",
    fullDescription: `This project is a faithful recreation of the classic Pac-Man game, developed entirely in C++ using the SFML (Simple and Fast Multimedia Library). The implementation focuses on accurately replicating the original game's mechanics, particularly the sophisticated enemy AI behavior that made the original game so challenging and engaging.

Technical achievements include:
- Precise recreation of ghost movement patterns
- Authentic game physics and collision detection
- Original sound effects and music implementation
- Faithful visual reproduction of the classic arcade style
- Efficient memory management and performance optimization

The project demonstrates:
- Strong understanding of game development fundamentals
- Mastery of C++ programming
- Ability to work with multimedia libraries
- Attention to detail in game mechanics
- Understanding of classic game design principles.`,
    image: "/images/sfml-pac-man.png",
    links: [{ type: "GitHub", url: "https://github.com/budi641/SFML_Pac_Man" }],
    technologies: ["C++", "SFML", "Game Development", "AI Programming"],
  },
  {
    id: 11,
    title: "Quizify",
    shortDescription:
      "A gamified social learning platform built with ASP.NET, featuring comprehensive documentation and Azure deployment.",
    fullDescription: `Quizify is a sophisticated online learning platform that combines social features with gamification elements to create an engaging educational experience. The project was developed using modern web technologies and follows industry best practices in software development.

Technical Implementation:
- Built with ASP.NET Razor pages using C#
- Comprehensive database design using SQL
- Azure cloud deployment with App Services
- Automated CI/CD pipelines via Azure DevOps
- Secure authentication and authorization systems

Development Process:
- Followed Agile and Scrum methodologies
- Implemented comprehensive testing strategies
- Created detailed system documentation
- Utilized modern development tools and practices
- Incorporated user feedback in iterative development

The platform features:
- Interactive quiz creation and management
- Social learning features
- Progress tracking and analytics
- Gamification elements
- Real-time feedback systems.`,
    image: "/images/quizify.png",
    links: [{ type: "GitHub", url: "https://github.com/budi641/Quizify" }],
    technologies: ["ASP.NET", "C#", "SQL", "Azure", "CI/CD", "Agile Development"],
  },
  {
    id: 12,
    title: "TASM-Space-Invaders",
    shortDescription:
      "A classic Space Invaders game implementation in x86 Assembly Language (TASM), demonstrating low-level programming skills.",
    fullDescription: `This project is a complete implementation of the classic Space Invaders game using x86 Assembly Language (TASM). The game features authentic gameplay mechanics, smooth graphics, and responsive controls, all achieved through direct hardware interaction and efficient assembly programming.

Key technical achievements include:
- Direct video memory manipulation for graphics
- Precise timing control using system interrupts
- Efficient collision detection algorithms
- Smooth sprite animation and movement
- Sound effects using PC speaker

The project demonstrates:
- Deep understanding of computer architecture
- Mastery of assembly language programming
- Ability to work with hardware directly
- Optimization skills for performance-critical code
- Understanding of retro game development techniques.`,
    image: "/images/tasm-space-invaders.png",
    links: [{ type: "GitHub", url: "https://github.com/budi641/TASM-Space-Invaders" }],
    technologies: ["Assembly", "TASM", "x86", "Low-Level Programming", "Game Development"],
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const isMobile = useMobile()

  const openProjectModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <section
      id="projects"
      className="py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-navy-950/80 via-navy-900/60 to-violet-950/80"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-electric-400 via-violet-400 to-electric-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-6 md:mb-8">
            A comprehensive showcase of my work in game development, graphics programming, AI, and interactive
            experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group bg-gradient-to-br from-navy-900/40 via-navy-800/30 to-violet-900/40 border-navy-700/30 hover:border-electric-500/50 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer backdrop-blur-xl glow-effect"
              onClick={() => openProjectModal(project)}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: "fadeInUp 0.8s ease-out forwards",
                opacity: 0,
                transform: "translateY(30px)",
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image ? `${process.env.NODE_ENV === 'production' ? '/My_Portfolio' : ''}${project.image.startsWith('/') ? project.image : `/${project.image}`}` : `${process.env.NODE_ENV === 'production' ? '/My_Portfolio' : ''}/placeholder.svg`}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center rounded-t-xl">
                  <div className="bg-gradient-to-r from-electric-500/90 to-violet-600/90 hover:from-electric-600/90 hover:to-violet-700/90 text-gray-100 px-4 sm:px-6 py-2 sm:py-3 rounded-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center space-x-2 shadow-2xl">
                    <Eye className="h-4 w-4" />
                    <span className="font-medium">View Details</span>
                  </div>
                </div>
              </div>

              <CardHeader className="p-4 sm:p-5">
                <CardTitle className="text-base sm:text-lg text-gray-200 group-hover:bg-gradient-to-r group-hover:from-electric-400 group-hover:to-violet-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 line-clamp-2">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="p-4 sm:p-5 pt-0 space-y-4">
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, isMobile ? 2 : 3).map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-gradient-to-r from-electric-500/20 to-violet-500/20 text-electric-300 border-electric-500/30 hover:from-electric-500/30 hover:to-violet-500/30 transition-all duration-300 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > (isMobile ? 2 : 3) && (
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-violet-500/20 to-electric-500/20 text-violet-300 border-violet-500/30 text-xs"
                    >
                      +{project.technologies.length - (isMobile ? 2 : 3)} more
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

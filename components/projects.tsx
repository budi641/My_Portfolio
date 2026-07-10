"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye } from "lucide-react"
import { ProjectModal } from "./project-modal"
import { useMobile } from "@/hooks/use-mobile"
import { assetPath } from "@/lib/asset-path"

// Complete project data with all 12 projects
const projects = [
  {
    id: 1,
    title: "Vulkan Ray Tracing Engine with Monte Carlo Integration",
    shortDescription:
      "A physically based renderer built on Vulkan ray tracing extensions, using Monte Carlo integration and importance sampling for global illumination.",
    fullDescription: `This project implements a real-time physically based rendering engine using Vulkan ray tracing extensions, Monte Carlo integration, and cosine-weighted hemisphere sampling. It targets global illumination, soft shadows, reflections, and indirect light transport with RTX acceleration.

Core Technologies
- Vulkan 1.3 with VK_KHR_ray_tracing_pipeline and VK_KHR_acceleration_structure
- SPIR-V shaders in GLSL
- GLM for vector and matrix math
- Monte Carlo integration with cosine-weighted hemisphere sampling
- Tested on NVIDIA RTX hardware (3060 and above)

Objectives
- Approximate the rendering equation through numerical integration
- Capture indirect lighting, soft shadows, reflections, and caustics
- Compare CPU and GPU implementations
- Measure convergence and rendering error across sampling budgets

Implementation
- BVH-based BLAS and TLAS acceleration structures
- Ray generation, closest-hit, and miss shader stages
- Multi-bounce light transport with unbiased Monte Carlo estimation
- Variance reduction through importance sampling

Performance
- Real-time HD rendering on RTX hardware
- More than 1,000 samples per pixel in under one second, compared with roughly one sample per second in the Python reference implementation
- Higher sample density and cosine-weighted sampling reduce visible noise

Skills Demonstrated
- Physically based rendering and light transport
- Vulkan ray tracing pipeline development
- Monte Carlo integration and variance analysis
- Shader programming and GPU optimization`,
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
      "A C++20 abstraction layer over Vulkan with RAII resource management and a type-safe graphics API.",
    fullDescription: `A C++20 abstraction layer for Vulkan that provides a cleaner, type-safe interface for graphics programming while keeping performance and control close to the underlying API.

Core Features
- RAII-based resource management
- Type-safe API design with modern C++20 features
- Structured error handling and memory management
- Cross-platform support

Technical Implementation
- Smart pointers and template metaprogramming for resource safety
- Command buffer, pipeline, descriptor, and synchronization abstractions
- Memory pools for efficient allocation
- Pipeline state and descriptor set management

Goals
- Reduce Vulkan boilerplate without hiding important behavior
- Keep resource lifetimes explicit and safe
- Preserve performance characteristics of direct Vulkan usage`,
    image: "/images/vulkan-abstraction.png",
    links: [{ type: "GitHub", url: "https://github.com/budi641/VulkanAbstraction" }],
    technologies: ["C++", "Vulkan", "GLFW", "Modern C++", "Graphics Programming", "RAII", "System Programming"],
  },
  {
    id: 3,
    title: "Custom 3D Game Engine",
    shortDescription:
      "A custom C++20 OpenGL engine built for a third-person beat 'em up prototype with physics, animation, rendering, and audio systems.",
    fullDescription: `A custom 3D game engine developed in C++20 and OpenGL for a third-person beat 'em up prototype. The engine combines physics, skeletal animation, rendering, audio, and gameplay systems in a modular architecture.

Core Systems
Entity-Component System
- Modular entity and component architecture for scalable gameplay code

Physics
- ReactPhysics3D integration for rigid body simulation
- Dynamic, static, and kinematic bodies with multiple collider types
- Physics debug rendering in the main render path

Rendering
- Forward OpenGL renderer with cubemap skybox support
- Directional, point, and spot lights
- Transparency, post-processing, and material support for diffuse, specular, and normal maps

Animation and Content
- Assimp-based model loading for OBJ and DAE assets
- Skeletal animation with bone hierarchy and keyframe interpolation

Audio and Scene Management
- OpenAL for 3D positional audio
- JSON-based scene serialization and loading

Gameplay
- Playable character switching, enemy AI, combat, and collection mechanics
- Debug tooling for collider visualization and engine diagnostics

Technologies
- C++20, OpenGL, GLFW, ReactPhysics3D, Assimp, OpenAL, and JSON for Modern C++`,
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
      "A cooperative asymmetric multiplayer game set across three historical periods of Egypt, built in Unreal Engine 5.5 and released on Steam.",
    fullDescription: `Back to Back is a cooperative asymmetric multiplayer game developed in Unreal Engine 5.5 and released on Steam. Two players work through three historical periods of Egypt, each with distinct environments, roles, and challenges.

Game Overview
- Asymmetric co-op design with role-specific abilities
- Three historical settings with period-specific level design
- Steam integration for multiplayer matchmaking

Systems Work
Enemy AI
- State machines for ranged, melee, and special enemy types
- Pathfinding, combat decision-making, and squad coordination

Boss AI
- Multi-phase boss encounters with telegraphed attacks
- Difficulty scaling based on player performance

Traps and Weapons
- Modular trap system with detection and disarm mechanics
- Weapon framework with customization, upgrades, and combo support

Technical Notes
- Behavior Trees and EQS for AI authoring
- Custom trap and weapon gameplay systems
- Networking and Steam SDK integration for online play`,
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
      "A solo-developed multiplayer sci-fi third-person shooter in Unreal Engine with Epic Online Services integration.",
    fullDescription: `Project Ultra is a sci-fi third-person shooter developed solo in Unreal Engine and released in alpha on itch.io.

The project integrates Epic Online Services for matchmaking, authentication, and backend player data management.

Technical Scope
- Real-time multiplayer networking
- Third-person movement and combat systems
- Sci-fi weapon mechanics
- Multiplayer UI and session flow
- EOS-backed player and session handling

The project covers both gameplay implementation and online service integration in a single-developer pipeline.`,
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
      "A proof-of-concept side-scrolling platformer built in Unreal Engine 5.5 around time-manipulation mechanics.",
    fullDescription: `Time Bomb is a proof-of-concept 3D side-scrolling platformer built in Unreal Engine 5.5. The player escapes a lab using time-based mechanics across a single authored level.

Core Mechanics
- Pause time for precise platforming and hazard avoidance
- Rewind time to restore terrain or reposition against enemies
- Ability pickups that introduce mechanics such as double jump and extended rewind
- Environmental interactions, including redirecting projectiles and altering walkways

Production Notes
- Built in UE 5.5 with Blueprint-driven level scripting
- MetaHuman Creator used for the main menu presentation
- Mechanics, triggers, and progression implemented without separate tutorial screens

The project focuses on one core design idea—time control—and builds the level around teaching and testing that system through play.`,
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
    shortDescription: "A VR training platform for medical students to practice anatomy in an interactive 3D environment.",
    fullDescription: `Virtual Reality Training Simulation is a VR application for medical education built in Unreal Engine. It provides an interactive environment for studying human anatomy outside traditional lab constraints.

Features
- Detailed anatomical 3D models
- Structured learning modules
- Real-time feedback during interaction
- Progress tracking and assessment support
- Multi-user collaboration support

Use Case
The platform is designed to give students repeated, low-risk practice with complex anatomical structures and procedural tasks that are difficult to scale with physical models alone.`,
    image: "/images/virtual-reality-training.png",
    links: [{ type: "GitHub", url: "https://github.com/budi641/VrTrainingSimulation" }],
    technologies: ["Unreal Engine", "C++", "VR Development", "3D Modeling", "Medical Education"],
  },
  {
    id: 8,
    title: "Python 2D Physics Engine",
    shortDescription:
      "A custom 2D physics engine in Python, demonstrated through a full 8-ball pool simulation.",
    fullDescription: `A custom 2D physics engine implemented in Python and demonstrated through an 8-ball pool game built with Pygame. The engine uses position-based dynamics, Verlet integration, and iterative constraint solving.

Engine Features
Physics Core
- Rigid bodies with mass, inertia, and restitution
- Verlet integration for stable time-step behavior
- Position-based constraint solver for soft and rigid interactions

Collision and Constraints
- Circle-circle and circle-edge collision detection
- Impulse-based response with penetration correction
- Distance constraints for spring-like behavior
- Friction modeled through contact forces

Demo Game
- Configurable ball mass, friction, and restitution
- Cue control with angle and power input
- Pocket detection and table reset logic

Tech Stack
- Python 3.8+, Pygame, NumPy
- Modular layout separating physics core from game presentation`,
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
      "A Python pathfinding visualizer for grid environments with multiple search algorithms and real-time playback.",
    fullDescription: `PathFinder-AI is a Python pathfinding visualizer for grid-based environments. An agent navigates an n×n grid containing obstacles, collectibles, and a goal state while maximizing collected items.

Overview
- Grid states include position and collected item configuration
- Objective: reach the goal while collecting items efficiently
- Supports four-directional movement without diagonals

Algorithms Implemented
- Uninformed search: DFS, BFS, iterative deepening
- Informed search: greedy best-first and A*
- Cost-based search: uniform cost search
- Local search: hill climbing and simulated annealing

Engineering
- Object-oriented grid and state modeling
- Pygame visualization for agent movement
- NetworkX and Matplotlib for search tree inspection
- Test coverage for path validity, optimality, and edge cases

The project separates search logic from visualization so new algorithms and grid layouts can be added with minimal coupling.`,
    image: "/images/pathfinder-ai.png",
    links: [{ type: "GitHub", url: "https://github.com/budi641/PathFinder-AI" }],
    technologies: ["Python", "Pygame", "NetworkX", "Matplotlib", "AI", "Pathfinding", "OOP", "Data Structures"],
  },
  {
    id: 10,
    title: "SFML Pac-Man",
    shortDescription:
      "A C++ and SFML recreation of Pac-Man with a focus on accurate ghost behavior and classic arcade mechanics.",
    fullDescription: `A C++ implementation of Pac-Man using SFML, focused on reproducing the original game's movement rules and ghost AI behavior.

Implementation Highlights
- Ghost state and movement patterns based on the classic arcade design
- Collision detection and maze navigation
- Sprite rendering and audio playback through SFML
- Memory-conscious structure suitable for real-time arcade gameplay

The project was built to study classic game AI and low-level gameplay implementation in C++.`,
    image: "/images/sfml-pac-man.png",
    links: [{ type: "GitHub", url: "https://github.com/budi641/SFML_Pac_Man" }],
    technologies: ["C++", "SFML", "Game Development", "AI Programming"],
  },
  {
    id: 11,
    title: "Quizify",
    shortDescription:
      "An ASP.NET learning platform with social features, gamification, and Azure deployment.",
    fullDescription: `Quizify is a web-based learning platform built with ASP.NET Razor Pages and C#. It combines quiz authoring, social interaction, and progress tracking in a single application.

Technical Implementation
- ASP.NET Razor Pages backend in C#
- SQL database for content and user data
- Azure App Services deployment
- CI/CD through Azure DevOps
- Authentication and authorization for user accounts

Product Features
- Quiz creation and management
- Social learning workflows
- Progress tracking and analytics
- Gamified feedback loops

The project was developed with structured documentation, testing, and iterative delivery practices.`,
    image: "/images/quizify.png",
    links: [{ type: "GitHub", url: "https://github.com/budi641/Quizify" }],
    technologies: ["ASP.NET", "C#", "SQL", "Azure", "CI/CD", "Agile Development"],
  },
  {
    id: 12,
    title: "TASM-Space-Invaders",
    shortDescription:
      "A Space Invaders clone written in x86 assembly (TASM) with direct hardware interaction for graphics and timing.",
    fullDescription: `A Space Invaders implementation written in x86 assembly using TASM. The project handles rendering, timing, collision, and audio close to the hardware.

Technical Scope
- Direct video memory writes for sprite rendering
- Interrupt-driven timing for consistent frame pacing
- Collision detection and enemy movement logic in assembly
- PC speaker audio for game feedback

The project was built to practice low-level systems programming, memory layout, and performance-conscious game loops without high-level engine support.`,
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
            Selected work across game development, graphics programming, AI, and interactive systems.
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
                  src={project.image ? assetPath(project.image) : assetPath("/placeholder.svg")}
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

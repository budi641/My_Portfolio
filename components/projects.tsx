"use client"

import { useState } from "react"
import { ChevronDown, ExternalLink, Github, Play } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { assetPath } from "@/lib/asset-path"
import { useAtmosphere } from "@/lib/atmosphere"

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

type Project = (typeof projects)[number]
type Link = Project["links"][number]

function youtubeId(url: string) {
  try {
    const parsed = new URL(url)
    if (parsed.hostname.includes("youtu.be")) return parsed.pathname.slice(1).split("?")[0]
    return parsed.searchParams.get("v")
  } catch {
    return null
  }
}

function MediaFrame({
  src,
  alt,
  youtubeUrl,
}: {
  src: string
  alt: string
  youtubeUrl?: string
}) {
  const [playing, setPlaying] = useState(false)
  const id = youtubeUrl ? youtubeId(youtubeUrl) : null

  if (id && playing) {
    return (
      <div className="media-frame relative aspect-video bg-black">
        <iframe
          title={alt}
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => id && setPlaying(true)}
      className={`media-frame group relative aspect-video w-full text-left ${id ? "cursor-pointer" : "cursor-default"}`}
      aria-label={id ? `Play video for ${alt}` : alt}
    >
      <img
        src={assetPath(src)}
        alt={alt}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050b1e]/65 via-transparent to-transparent" />
      {id && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-electric-300/60 bg-[#050b1e]/75 text-electric-100 shadow-[0_0_30px_rgba(56,182,255,.4)] transition group-hover:scale-110">
            <Play className="ml-0.5 h-5 w-5 fill-current" />
          </span>
        </span>
      )}
    </button>
  )
}

function LinkButtons({ links }: { links: Link[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <motion.a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="btn-pill-ghost !min-h-10 !px-4 !text-xs"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {link.type === "GitHub" ? <Github className="h-3.5 w-3.5" /> : <ExternalLink className="h-3.5 w-3.5" />}
          {link.type === "YouTube" ? "Watch" : link.type}
        </motion.a>
      ))}
    </div>
  )
}

function ProjectRow({ project, flip }: { project: Project; flip: boolean }) {
  const [open, setOpen] = useState(false)
  const pulse = useAtmosphere((s) => s.pulse)
  const youtube = project.links.find((l) => l.type === "YouTube")?.url

  return (
    <motion.article
      className="grid gap-6 border-b border-white/[0.08] py-10 sm:gap-8 sm:py-12 md:py-16 lg:grid-cols-2 lg:items-center lg:gap-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", stiffness: 120, damping: 22 }}
    >
      <motion.div className={flip ? "lg:order-2" : ""} whileHover={{ scale: 1.015 }} transition={{ type: "spring", stiffness: 260, damping: 24 }}>
        <MediaFrame src={project.image} alt={project.title} youtubeUrl={youtube} />
      </motion.div>
      <div className={flip ? "lg:order-1" : ""}>
        <h3 className="text-xl font-semibold tracking-[-0.035em] text-white sm:text-2xl md:text-4xl">{project.title}</h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:mt-4 sm:text-base">{project.shortDescription}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <LinkButtons links={project.links} />
          <motion.button
            type="button"
            aria-expanded={open}
            onClick={() => {
              setOpen((v) => !v)
              pulse()
            }}
            className="btn-pill !min-h-10 !px-4 !text-xs"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {open ? "Hide details" : "Read full details"}
            <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
          </motion.button>
        </div>
        <AnimatePresence initial={false}>
          {open && (
            <motion.pre
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 28 }}
              className="mt-6 overflow-hidden whitespace-pre-wrap font-sans text-sm leading-relaxed text-slate-400"
            >
              {project.fullDescription}
            </motion.pre>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative border-t border-white/[0.06]">
      <div className="section-shell !pb-8">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 120, damping: 22 }}
        >
          Projects
        </motion.h2>
      </div>

      <div className="mx-auto max-w-[1500px] px-4 pb-20 sm:px-8 sm:pb-24 md:pb-32 lg:px-12">
        {projects.map((project, index) => (
          <ProjectRow key={project.id} project={project} flip={index % 2 === 1} />
        ))}
      </div>
    </section>
  )
}

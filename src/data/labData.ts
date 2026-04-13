export type ProjectItem = {
  title: string
  mission: string
  stack: string
}

export type TeamMember = {
  name: string
  role: string
  specialization: string
}

export type Milestone = {
  year: string
  event: string
  detail: string
}

export const projectItems: ProjectItem[] = [
  {
    title: 'GPS-Denied Navigation Platform',
    mission: 'Vision-aided indoor autonomy for contested and signal-dark flight zones.',
    stack: 'SLAM | Sensor Fusion | Reinforcement Learning',
  },
  {
    title: 'CanSat Drone Integration Program',
    mission: 'High-altitude deploy and recovery workflow with telemetry-safe descent.',
    stack: 'Embedded Systems | Payload Design | Flight Dynamics',
  },
  {
    title: 'Swarm Intelligence Operations',
    mission: 'Cooperative autonomous fleet behavior for mapping and reconnaissance.',
    stack: 'Distributed AI | Mesh Networking | Multi-Agent Planning',
  },
]

export const teamMembers: TeamMember[] = [
  {
    name: 'Aarav Prakash',
    role: 'Lab Lead',
    specialization: 'Autonomous Mission Architecture',
  },
  {
    name: 'Ira Nandini',
    role: 'Flight Systems Engineer',
    specialization: 'Control Laws and Aerodynamic Stability',
  },
  {
    name: 'Rithvik Gowda',
    role: 'AI Navigation Specialist',
    specialization: 'Computer Vision and Terrain Intelligence',
  },
  {
    name: 'Nivedita Rao',
    role: 'Payload and Mapping Engineer',
    specialization: 'Defense Survey and Precision Geospatial Pipelines',
  },
]

export const milestones: Milestone[] = [
  {
    year: '2024',
    event: 'Robo Aerospace Circuit Finals',
    detail: 'Top finalist in real-time mission simulation and precision autonomous docking.',
  },
  {
    year: '2025',
    event: 'ISRO Student Aerial Challenge',
    detail: 'Recognized for resilient navigation stack in low-visibility conditions.',
  },
  {
    year: '2026',
    event: 'National Defense Mapping Hackathon',
    detail: 'Winner for rapid terrain modeling drone pipeline with swarm support.',
  },
]

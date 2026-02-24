import { ProjectData } from '../types'

export const projectsData: ProjectData[] = [
  {
    id: 'lg-purecare',
    title: 'LG PureCare',
    description:
      'Class collaboration project with LG, to design, code, and deploy software for an air purifier that utilizes AI to make intelligent decisions.',
    tags: ['Docker', 'Heroku', 'Data Pipelines', 'Systems Design'],
    githubURL: 'https://github.com/1Bananas1/CSE4006-PuriCare-Air-Purifier',
    imageURL: 'img/PureCare.webp',
    date: 'Winter 2025',
  },
  {
    id: 'fl-studio-rp',
    title: 'FL Studio Rich Presence',
    description:
      'What sprawled from a small thought quickly turned into me powering a community of music makers to show off their talents. Powered by C++, FL Studio Rich Presence utilizes inter-process communication to show off their activity inside FL Studio.',
    tags: ['Windows API', 'C++', 'Parsing', 'Installers'],
    githubURL: 'https://github.com/1Bananas1/FL-Studio-RP',
    imageURL: 'img/FLRP.webp',
    date: 'Fall 2025',
  },
  {
    id: 'flavor-ai',
    title: 'FlavorAI',
    description:
      "Utilizing the help from LLMs, I created an app to help pick foods FOR you so that you don't have to spend another second thinking what you should have to eat.",
    tags: ['React.js', 'Expo', 'Vertex API', 'MongoDB'],
    githubURL: 'https://github.com/1Bananas1/FlavorAI',
    imageURL: 'img/flavorAI.webp',
    date: 'Spring 2025',
    hasAward: true,
    awardTitle: 'WashU Google DevFest Hackathon Finalist',
    awardURL:
      'https://gdg.community.dev/events/details/google-gdg-on-campus-washington-university-in-st-louis-st-louis-united-states-presents-devfest-washu-2025/',
  },
  {
    id: 'py-tracker',
    title: 'pyTracker',
    description:
      "When applying to internships, I found out my friend applied to over 300 internships. Out of all of those internships, the only one he got was Google. While I'm pretty sure he just had a bad resume, many students still have to submit many applications. I created pyTracker to help applicants to keep track of the status of each of their jobs automatically using NLP technology.",
    tags: ['Ollama', 'Rest APIs', 'Google APIs', 'NLP'],
    githubURL: 'https://github.com/1Bananas1/pyTracker',
    imageURL: 'img/pytracker.webp',
    date: 'Fall 2024',
  },
]

// Helper functions similar to classDict.jsx
export const getProjectById = (id: string): ProjectData | undefined => {
  return projectsData.find((project) => project.id === id)
}

export const getProjectsByTag = (tag: string): ProjectData[] => {
  return projectsData.filter((project) => project.tags.includes(tag))
}

export const getFeaturedProjects = (): ProjectData[] => {
  return projectsData.filter((project) => project.hasAward)
}

export const getAllTags = (): string[] => {
  const allTags = projectsData.flatMap((project) => project.tags)
  return [...new Set(allTags)]
}

export const getProjectsByDate = (date: string): ProjectData[] => {
  return projectsData.filter((project) => project.date === date)
}

// Helper to determine alignment based on index (left, right, left, right...)
export const getProjectAlignment = (index: number): 'left' | 'right' => {
  return index % 2 === 0 ? 'left' : 'right'
}

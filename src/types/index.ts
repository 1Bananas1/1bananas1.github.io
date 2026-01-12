export interface ClassData {
  id: string
  school: string
  classTakenName: string
  bgColor: string
  date: string
  description: string
  tags: string[]
  githubURL?: string
}

export interface ProjectData {
  id: string
  title: string
  description: string
  tags: string[] 
  githubURL: string
  imageURL: string 
  date: string 
  hasAward?: boolean
  awardTitle?: string
  awardURL?: string
  
}

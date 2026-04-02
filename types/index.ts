export interface Project {
  title: string
  description: string
  link: string
  linkText: string
  techs: string[]
  coverClass?: string
  logo?: string
}

export enum SkillCategory {
  LANGUAGE_PROGRAMMING = 'programming',
  BACKEND = 'backend',
  FRONTEND = 'frontend',
  MOBILE = 'mobile',
  TOOLS = 'tools',
  METHODOLOGIES = 'methodologies',
  SOFT_SKILLS = 'softSkills',
  DEVOPS = 'devops',
  DATABASE = 'database',
}

export interface Skill {
  icon: string
  title: string
  description: string
  categories: SkillCategory[]
  level: SkillLevel
}

export interface Talk {
  year: string
  title: string
  description?: string
  link?: string
  linkText?: string
}

export interface Education {
  period: string
  title: string
  institution: string
}

export interface Experience {
  period: string
  title: string
  company: string
  summary?: string
  details?: string[]
}

export interface TechStackGroup {
  category: string
  items: string[]
}

// CV-specific types
export enum SkillLevel {
  FREQUENT = 'frequent',
  OCCASIONAL = 'occasional',
  SOMETIMES = 'sometimes',
}

export interface SkillTag {
  name: string
  level: SkillLevel
}

export interface SkillRow {
  label: string
  tags: SkillTag[]
}

export interface CVRole {
  title: string
  period: string
}

export interface CVExperience {
  company: string
  tags: string[]
  roles: CVRole[]
}

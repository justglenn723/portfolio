export interface FunnelProject {
  id: string;
  title: string;
  type: string;
  platform: string;
  niche: string;
  features: string[];
  description: string;
  gradient: string;
  visualConcept: string;
}

export interface GraphicsProject {
  id: string;
  title: string;
  category: string;
  software: string[];
  description: string;
  details: string[];
  gradient: string;
  visualConcept: string;
  imageUrl?: string;
  driveLink?: string;
}

export interface VideoProject {
  id: string;
  title: string;
  duration: string;
  platform: string;
  style: string;
  software: string[];
  description: string;
  bullets: string[];
  gradient: string;
}

export interface AutomationProject {
  id: string;
  title: string;
  trigger: string;
  actions: string[];
  software: string[];
  description: string;
  businessImpact: string;
  logic: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  bullets?: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

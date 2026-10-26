export interface FunnelProject {
  id: string;
  title: string;
  type: string;
  platform: string;
  niche: string;
  description: string;
  // Case-study details. Fill these in only with confirmed facts; empty fields are hidden on the site.
  goal?: string;
  role?: string;
  delivered?: string[];
  result?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface GraphicsProject {
  id: string;
  title: string;
  category: string;
  software: string[];
  description: string;
  details: string[];
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
  driveLink?: string;
}

export interface AutomationProject {
  id: string;
  title: string;
  label: string;
  trigger: string;
  software: string[];
  description: string;
  logic: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  honors?: string;
}

export interface ServiceGroup {
  category: string;
  summary: string;
  items: string[];
}

export interface ProcessStep {
  title: string;
  text: string;
}

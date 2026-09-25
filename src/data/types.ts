export interface SocialLinks {
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
}

export interface NavItem {
  id: string;
  number?: string;
  label: string;
  href?: string;
  isArchiveTrigger?: boolean;
}

export interface NavContent {
  brand: {
    name: string;
    location: string;
  };
  timeZoneLabel: string;
  timeZone: string;
  items: NavItem[];
}

export interface TelemetryMetric {
  value: string;
  label: string;
}

export interface HeroContent {
  sectionNumber: string;
  sectionTitle: string;
  sectorTag: string;
  headline: {
    first: string;
    second: string;
  };
  bio: string;
  actions: {
    getInTouch: string;
    viewExperience: string;
    viewResume: string;
  };
  vitrine: {
    header: string;
    metrics: TelemetryMetric[];
    discipline: string;
    currentRole: string;
  };
}

export interface ExperienceItem {
  tier: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export interface ExperienceContent {
  sectionNumber: string;
  sectionTitle: string;
  sectorTag: string;
  milestonesTitle: string;
  items: ExperienceItem[];
}

export interface SkillItem {
  name: string;
  level: string;
}

export interface SkillModule {
  moduleCode: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface SkillsContent {
  sectionNumber: string;
  sectionTitle: string;
  sectorTag: string;
  modules: SkillModule[];
}

export interface FeaturedProject {
  code: string;
  title: string;
  stack: string[];
  category: string;
  description: string;
  specs: string[];
  githubUrl: string;
  demoUrl?: string;
  badge: string;
}

export interface ProjectsContent {
  sectionNumber: string;
  sectionTitle: string;
  sectorTag: string;
  cardLabels: {
    specsTitle: string;
    publicRepo: string;
    viewRepo: string;
  };
  items: FeaturedProject[];
  archiveBanner: {
    tag: string;
    headline: string;
    description: string;
    cta: string;
  };
}

export interface ContactChannel {
  platform: string;
  label: string;
  url: string;
}

export interface ContactPortalContent {
  tag: string;
  title: string;
  description: string;
  location: string;
  status: string;
  sendAction: string;
}

export interface ContactContent {
  sectionNumber: string;
  sectionTitle: string;
  sectorTag: string;
  headline: {
    first: string;
    second: string;
  };
  description: string;
  emailAction: {
    copyLabel: string;
    copiedLabel: string;
  };
  channels: ContactChannel[];
  portal: ContactPortalContent;
}

export interface FooterContent {
  tagline: string;
  location: string;
  edition: string;
}

export interface SiteContent {
  socials: SocialLinks;
  nav: NavContent;
  hero: HeroContent;
  experience: ExperienceContent;
  skills: SkillsContent;
  projects: ProjectsContent;
  contact: ContactContent;
  footer: FooterContent;
}

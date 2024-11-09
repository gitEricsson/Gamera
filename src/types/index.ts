export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface Player {
  name: string;
  points: number;
}

export interface FooterSection {
  title: string;
  links: string[];
}

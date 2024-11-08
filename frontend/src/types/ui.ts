export interface TypewriterOptions {
  strings: string[];
  autoStart: boolean;
  loop: boolean;
}

export interface IconBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  ariaLabel?: string;
}

export interface CartIconButtonProps {
  onClick: () => void;
}

export interface SocialLinksProps {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
} 
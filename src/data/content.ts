export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#showcase" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export type ServiceIconKey =
  | "design"
  | "code"
  | "cart"
  | "brand"
  | "seo"
  | "support";

export type Service = {
  icon: ServiceIconKey;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: "design",
    title: "Web Design",
    description:
      "Interfaces that balance bold visual identity with effortless usability, designed pixel by pixel for your brand.",
  },
  {
    icon: "code",
    title: "Web Development",
    description:
      "Fast, resilient, accessible builds on modern frameworks — engineered to scale from launch day onward.",
  },
  {
    icon: "cart",
    title: "E-Commerce Solutions",
    description:
      "Conversion-focused storefronts with seamless checkout, inventory, and payment integrations that sell.",
  },
  {
    icon: "brand",
    title: "Brand Identity",
    description:
      "Logo systems, typography and voice guidelines that give your product a distinct, memorable presence.",
  },
  {
    icon: "seo",
    title: "SEO & Growth",
    description:
      "Technical SEO, content strategy and performance tuning that turns organic traffic into real pipeline.",
  },
  {
    icon: "support",
    title: "Website Maintenance",
    description:
      "Ongoing monitoring, updates and support so your site stays fast, secure and always up to date.",
  },
];

export type FeaturedProject = {
  title: string;
  category: string;
  year: string;
  image: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Northline Retail",
    category: "E-Commerce Platform",
    year: "2025",
    image: "/images/showcase/project-1.svg",
  },
  {
    title: "Kaleido Studio",
    category: "Brand & Web Design",
    year: "2025",
    image: "/images/showcase/project-2.svg",
  },
  {
    title: "Brightline Finance",
    category: "Product Website",
    year: "2024",
    image: "/images/showcase/project-3.svg",
  },
];

export type Project = {
  title: string;
  category: string;
  image: string;
};

export const projects: Project[] = [
  { title: "Peak Logistics", category: "Web App", image: "/images/projects/project-4.svg" },
  { title: "Nova Health", category: "Website", image: "/images/projects/project-5.svg" },
  { title: "Loop Studio", category: "Portfolio", image: "/images/projects/project-6.svg" },
  { title: "Arden & Co", category: "E-Commerce", image: "/images/projects/project-7.svg" },
  { title: "Fielding Labs", category: "SaaS Website", image: "/images/projects/project-8.svg" },
  { title: "Marrow Coffee", category: "Brand Site", image: "/images/projects/project-9.svg" },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "We dig into your goals, audience and competitors to define a clear brief.",
  },
  {
    number: "02",
    title: "Design",
    description: "Wireframes and high-fidelity concepts iterate quickly with your feedback.",
  },
  {
    number: "03",
    title: "Build",
    description: "Clean, performant code brings the design to life across every device.",
  },
  {
    number: "04",
    title: "Launch & Grow",
    description: "We ship, measure, and keep optimizing so the site keeps performing.",
  },
];

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

export const stats: Stat[] = [
  { label: "Projects Delivered", value: 240, suffix: "+" },
  { label: "Happy Clients", value: 180, suffix: "+" },
  { label: "Years of Experience", value: 9, suffix: "+" },
  { label: "Cups of Coffee", value: 12400, suffix: "+" },
];

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Elena Marsh",
    role: "Founder",
    company: "Northline Retail",
    quote:
      "BSC rebuilt our storefront from the ground up and conversion jumped 38% in the first quarter. They obsess over detail without ever losing sight of the deadline.",
    avatar: "/images/testimonials/avatar-1.svg",
    rating: 5,
  },
  {
    name: "Daniel Osei",
    role: "Head of Product",
    company: "Brightline Finance",
    quote:
      "The team translated a genuinely complex product into a website that feels effortless. Communication was sharp and every milestone landed on time.",
    avatar: "/images/testimonials/avatar-2.svg",
    rating: 5,
  },
  {
    name: "Priya Chandran",
    role: "Creative Director",
    company: "Kaleido Studio",
    quote:
      "Working with BSC felt like adding a senior in-house team overnight. The animations and interactions they shipped are genuinely best-in-class.",
    avatar: "/images/testimonials/avatar-3.svg",
    rating: 5,
  },
  {
    name: "Marcus Webb",
    role: "COO",
    company: "Peak Logistics",
    quote:
      "Our new site loads in a blink and finally reflects how serious we are about the product. Support after launch has been fast and genuinely helpful.",
    avatar: "/images/testimonials/avatar-4.svg",
    rating: 4,
  },
];

export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export const team: TeamMember[] = [
  { name: "Alex Morgan", role: "Founder & CEO", image: "/images/team/member-1.svg" },
  { name: "Jordan Lee", role: "Creative Director", image: "/images/team/member-2.svg" },
  { name: "Sam Rivera", role: "Lead Developer", image: "/images/team/member-3.svg" },
  { name: "Taylor Chen", role: "UI/UX Designer", image: "/images/team/member-4.svg" },
  { name: "Morgan Blake", role: "Project Manager", image: "/images/team/member-5.svg" },
  { name: "Casey Nguyen", role: "SEO Strategist", image: "/images/team/member-6.svg" },
];

export const marqueeWords = [
  "Web Design",
  "Development",
  "E-Commerce",
  "Branding",
  "SEO",
  "Motion",
  "Strategy",
  "Support",
];

export const site = {
  name: "Vishwa Construction",
  shortName: "Vishwa",
  tagline:
    "Architecture, interiors, construction, valuation & estimates — rooted in Solapur.",
  description:
    "Vishwa Construction delivers architecture, interior design, construction, property valuation, and estimates across Maharashtra, Karnataka, and Telangana. Led by Er. Vishal Mhamane from Solapur.",
  location: "Solapur, Maharashtra",
  regions: ["Maharashtra", "Karnataka", "Telangana"],
  phone: "+91 77093 86771",
  email: "ar.vishal08@gmail.com",
  whatsapp: "917709386771",
  address: "Solapur, Maharashtra, India",
  disciplines: [
    "Architecture",
    "Interior Design",
    "Construction",
    "Valuation",
    "Estimate",
  ],
  md: {
    name: "Er. Vishal Mhamane",
    title: "Architect & Managing Director",
    education: "B.E. Civil — Government College of Engineering, Karad",
    experience: "10+ years in the construction field",
  },
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const services = [
  {
    id: "architecture",
    title: "Architecture",
    summary:
      "Concept-to-drawing architectural design for residences and commercial spaces — elevations, layouts, and buildable detailing.",
    detail:
      "From site study and planning to 3D visualisation and working drawings, we shape structures that balance aesthetics, function, and local regulations.",
    image: "/images/real/photo-05.jpg",
  },
  {
    id: "interior-design",
    title: "Interior Design",
    summary:
      "Thoughtful interiors for homes and workplaces — kitchens, bedrooms, living spaces, and custom furniture planning.",
    detail:
      "Material selection, modular layouts, lighting, and finishing coordination so every room feels intentional and practical for daily life.",
    image: "/images/real/photo-07.jpg",
  },
  {
    id: "construction",
    title: "Construction",
    summary:
      "On-ground execution for private homes, commercial buildings, redevelopment, renovation, and factory erection.",
    detail:
      "Disciplined site supervision, quality checks, and clear timelines across Maharashtra, Karnataka, and Telangana.",
    image: "/images/real/photo-03.jpg",
  },
  {
    id: "valuation",
    title: "Valuation",
    summary:
      "Professional property valuation support for banks, legal documentation, and informed investment decisions.",
    detail:
      "Site assessment and documentation aligned to market realities — useful for loans, registration, and project planning.",
    image: "/images/real/photo-04.jpg",
  },
  {
    id: "estimate",
    title: "Estimate",
    summary:
      "Transparent cost estimates and quantity planning before you break ground — so budgets stay realistic.",
    detail:
      "Itemised estimates covering materials, labour, and contingencies, helping you compare options and plan cash flow with clarity.",
    image: "/images/real/photo-02.jpg",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Listen & Survey",
    text: "Understand your brief, visit the site, and map constraints before a single drawing is locked.",
  },
  {
    step: "02",
    title: "Design & Estimate",
    text: "Align architecture, interiors, and budget into a clear plan with transparent milestones.",
  },
  {
    step: "03",
    title: "Build with Discipline",
    text: "On-site supervision, quality checks, and clear communication through every stage of construction.",
  },
  {
    step: "04",
    title: "Handover & Stand By",
    text: "Final inspection, documentation, and a partner who remains reachable after the keys are handed over.",
  },
];

export const projects = [
  {
    title: "Corner Residence Design",
    category: "Architecture",
    region: "Maharashtra",
    image: "/images/real/photo-06.jpg",
  },
  {
    title: "Contemporary Home Facade",
    category: "Architecture",
    region: "Maharashtra",
    image: "/images/real/photo-02.jpg",
  },
  {
    title: "Modular Kitchen Interior",
    category: "Interior Design",
    region: "Maharashtra",
    image: "/images/real/photo-07.jpg",
  },
  {
    title: "Bedroom Fit-Out",
    category: "Interior Design",
    region: "Maharashtra",
    image: "/images/real/photo-08.jpg",
  },
  {
    title: "Healthcare Interior Build",
    category: "Construction",
    region: "Maharashtra",
    image: "/images/real/photo-03.jpg",
  },
  {
    title: "Courtyard & Outdoor Works",
    category: "Construction",
    region: "Maharashtra",
    image: "/images/real/photo-01.jpg",
  },
];

export const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
];

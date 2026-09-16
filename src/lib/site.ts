export const site = {
  name: "Vishwa Associates",
  shortName: "Vishwa",
  tagline:
    "One-stop end-to-end construction — design to handover, with total peace of mind.",
  description:
    "Vishwa Associates is a one-stop end-to-end construction partner in Solapur covering architecture, interiors, government approvals, material procurement, technical expertise, and contractor & labour management across Maharashtra, Karnataka, and Telangana. Led by Er. Vishal Mhamane.",
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
      "On-ground execution for private homes, commercial buildings, redevelopment, renovation, and factory erection — with contractor and labour management included.",
    detail:
      "Disciplined site supervision, material procurement, contractor coordination, and labour management across Maharashtra, Karnataka, and Telangana — one accountable team through handover.",
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
    title: "Design & Approvals",
    text: "Architecture and interiors aligned to code — with drawings and documentation prepared for government sanctions.",
  },
  {
    step: "03",
    title: "Procure & Build",
    text: "Material procurement, contractor coordination, and labour management under one accountable site team.",
  },
  {
    step: "04",
    title: "Handover & Stand By",
    text: "Final inspection, documentation, and a partner who remains reachable after the keys are handed over.",
  },
];

export const endToEndPillars = [
  {
    title: "Design",
    text: "Architecture and interiors that are buildable — not just beautiful on paper. One brief, one design language through to site.",
  },
  {
    title: "Govt. approvals & sanctions",
    text: "Drawings, documentation, and liaison support for local building approvals so you are not chasing files office to office.",
  },
  {
    title: "Material procurement",
    text: "Sourcing and scheduling of materials aligned to the estimate and programme — quality checked before it reaches site.",
  },
  {
    title: "Technical expertise",
    text: "Civil engineering judgement on structure, detailing, and site decisions — so problems are solved before they become cost.",
  },
  {
    title: "Contractor management",
    text: "Coordinated specialty contractors under one plan and one quality standard — no finger-pointing between trades.",
  },
  {
    title: "Labour management",
    text: "On-ground workforce planning, supervision, and progress tracking so the site moves with discipline, not chaos.",
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
    region: "Karnataka",
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
    region: "Telangana",
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
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
];

export const testimonials = [
  {
    quote:
      "Clear drawings, honest estimates, and steady site supervision. Our home in Solapur finished the way we imagined.",
    name: "Rajesh Patil",
    detail: "Private residence · Solapur",
  },
  {
    quote:
      "Vishwa handled architecture and interiors together — one team, one timeline. Communication stayed simple throughout.",
    name: "Anita Deshmukh",
    detail: "Interior renovation · Maharashtra",
  },
  {
    quote:
      "The valuation report and estimate helped us take a confident bank decision. Professional and on time.",
    name: "Sandeep Kulkarni",
    detail: "Valuation & estimate · Maharashtra",
  },
];

export const faqs = [
  {
    q: "Is Vishwa a one-stop solution?",
    a: "Yes. We are built as an end-to-end partner — design, approvals support, material procurement, technical decisions, and contractor & labour management — so you do not have to run from pillar to post for every requirement.",
  },
  {
    q: "Which areas do you serve?",
    a: "We are based in Solapur and take up architecture, interiors, construction, valuation, and estimate work across Maharashtra, with select projects in Karnataka and Telangana.",
  },
  {
    q: "How are estimates prepared?",
    a: "After a site visit and brief, we prepare an itemised estimate covering materials, labour, and contingencies so you can plan budget and cash flow with clarity.",
  },
  {
    q: "What is a typical project timeline?",
    a: "Timelines depend on scope — a focused interior fit-out may take weeks, while a full home build spans months. We share a milestone plan before work begins.",
  },
  {
    q: "Do you handle approvals and sanctions?",
    a: "Yes. We prepare drawings and documentation needed for local government approvals and guide the sanction process. Statutory fees remain with the client unless agreed otherwise.",
  },
  {
    q: "Do you manage materials, contractors, and labour?",
    a: "Yes. Procurement, contractor coordination, and labour management sit under our site supervision — one accountable team instead of multiple vendors you have to chase yourself.",
  },
  {
    q: "How is payment structured?",
    a: "Engagements usually follow staged payments tied to design, estimate, and construction milestones — confirmed in writing before we start.",
  },
  {
    q: "How quickly do you respond?",
    a: "We typically respond to WhatsApp and email enquiries within one business day during working hours.",
  },
];

export const regionDetails = [
  {
    name: "Maharashtra",
    text: "Home base in Solapur — residences, interiors, commercial builds, and valuations across the state.",
  },
  {
    name: "Karnataka",
    text: "Select architecture and construction assignments with the same site discipline and design standard.",
  },
  {
    name: "Telangana",
    text: "Support for design, estimates, and build coordination where project scope and travel align.",
  },
];

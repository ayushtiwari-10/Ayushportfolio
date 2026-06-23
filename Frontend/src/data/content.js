export const profile = {
  name: "Ayush Tiwari",
  displayName: "Ayush",
  location: "Jabalpur, India",
  tagline: "I help small businesses and founders get a working web app, end to end.",
  email: "ayushtiwari2907@gmail.com",
  linkedin: "https://www.linkedin.com/in/ayush-tiwari-664a632b0/",
  github: "https://github.com/ayushtiwari-10",
  codingSince: 2023,
  // Deployed Render backend URL — update this if your Render service name changes
  contactApiUrl: "https://ayushportfolio-vkwn.onrender.com",
};

export const projects = [
  {
    id: "coffee-comfort",
    name: "The Coffee Comfort",
    status: "LIVE",
    tagline: "A full-stack platform for a healing & manifestation space",
    description:
      "Built end-to-end for The Coffee Comfort, founded by Kavya Tiwari — a healing and manifestation space dedicated to helping people transform their lives through repatterning, emotional healing, and self-growth. The platform supports her one-on-one sessions, courses, and free resources, letting clients enroll, pay securely, attend live or recorded sessions, and track their progress — while Kavya runs everything from a dedicated admin dashboard.",
    highlights: [
      "Secure checkout with Razorpay, backed by webhook verification so no payment ever gets lost",
      "Video lessons protected behind signed, short-lived access tokens",
      "Live class scheduling and hosting built on 100ms",
      "Admin dashboard with revenue analytics, student management, and order tracking",
    ],
    stack: ["React", "Vite", "Tailwind", "Node.js", "Express", "MongoDB", "Razorpay", "Cloudinary", "100ms", "JWT"],
    role: "Full Stack Developer (solo, end-to-end)",
    url: "https://thecoffeecomfort.vercel.app/",
    previewImage: "/coffee-comfort-preview.png",
    hero: true,
  },
  {
    id: "saksham",
    name: "Saksham",
    status: "LIVE",
    tagline: "A learning & earning marketplace for Indian homemakers",
    description:
      "A two-sided platform built solo as a college major project — connecting homemakers who want to learn new skills with the homemakers ready to teach them. Students discover courses and nearby in-person classes; teachers run their own courses, classes, and earnings, with AI assisting both sides along the way.",
    highlights: [
      "Geolocation-based discovery for nearby in-person classes, built on Leaflet.js",
      "AI-assisted learning paths and lesson planning powered by the Claude API",
      "Real-time enrollment, payment, and booking alerts via Socket.io",
      "Full payment lifecycle: orders, verification, teacher payouts, and refunds via Razorpay",
    ],
    stack: ["React", "Vite", "Tailwind", "Node.js", "Express", "MongoDB", "Socket.io", "Razorpay", "Leaflet.js", "Claude API"],
    role: "Full Stack Developer (solo)",
    url: "https://saksham731.vercel.app/",
    previewImage: "/saksham-preview.png",
    hero: false,
  },
];

export const otherWork = [
  {
    id: "kavya-landing",
    name: "Kavya Tiwari — Link Page",
    tagline: "A mobile-first landing page built to move Instagram traffic to YouTube",
    description:
      "A single-page static site designed specifically for Instagram bio clicks — built mobile-first since that's where nearly all of that traffic comes from, not as a general-purpose website.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://kavya111.netlify.app/",
  },
];

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Vite", "Tailwind CSS", "JavaScript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Python", "Django", "Flask"],
  },
  {
    category: "Database",
    items: ["MongoDB", "Mongoose"],
  },
  {
    category: "Auth & Security",
    items: ["JWT", "Google OAuth", "bcrypt", "HMAC Verification"],
  },
  {
    category: "Payments",
    items: ["Razorpay", "Webhooks", "Refund Flows"],
  },
  {
    category: "Real-time & AI",
    items: ["Socket.io", "Anthropic Claude API", "Agentic AI", "AI Chatbots", "Groq API"],
  },
  {
    category: "Infra & Tools",
    items: ["Cloudinary", "Leaflet.js", "Git", "Vercel", "Render"],
  },
];

export const services = [
  {
    title: "Full Stack Web App Development",
    description: "End-to-end builds — from database schema to deployed frontend, built to handle real users and real traffic.",
  },
  {
    title: "Frontend Development",
    description: "Fast, responsive interfaces in React — clean code that's easy to extend later.",
  },
  {
    title: "Backend & API Development",
    description: "Reliable APIs, authentication, and data layers built to scale with your product, not against it.",
  },
  {
    title: "Payment Gateway Integration",
    description: "Razorpay checkout, webhook handling, and refund flows — done right, with no lost transactions.",
  },
  {
    title: "Admin Dashboards & Internal Tools",
    description: "Custom dashboards so you can manage your own product without calling a developer every time.",
  },
  {
    title: "AI & Chatbot Integration",
    description: "Practical AI features — assistants, automated workflows, and smart recommendations — built into your existing product.",
  },
];

export const testimonials = [
  {
    quote:
      "Ayush has worked very dedicatedly & has met my expectations completely. I trusted him with everything, not knowing much about the technical stuff & he has managed to achieve those results for me within my budget & has been very open to make changes as well. I'm grateful for his support & hoping to keep expanding with me, as we move forward.",
    name: "Kavya Tiwari",
    role: "Founder, The Coffee Comfort",
    project: "The Coffee Comfort",
  },
  {
    quote:
      "A very good major project — the tech stack was well chosen and the implementation was clear and proper. Saksham demonstrated a strong understanding of full-stack development and real-world problem solving.",
    name: "Ashok Verma",
    role: "Head of CS Department , GGITS",
    project: "Saksham",
  },
];
export const PHONE = "+94 70 100 9029";
export const PHONE_HREF = "tel:+94701009029";

export const stats = [
  { value: 120, suffix: "+", label: "Projects delivered" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 8, suffix: "+", label: "Years of experience" },
  { value: 24, suffix: "/7", label: "Support available" },
];

export type ServiceIcon = "design" | "code" | "cart" | "speed" | "care" | "mobile";

export const services: {
  id: ServiceIcon;
  title: string;
  blurb: string;
  items: string[];
}[] = [
  {
    id: "design",
    title: "Web Design",
    blurb:
      "Stunning, conversion-focused interfaces that capture your brand essence and delight every visitor.",
    items: ["UI/UX Design", "Brand Identity", "Responsive Layouts"],
  },
  {
    id: "code",
    title: "Web Development",
    blurb:
      "Clean, performant code that scales. We build modern web apps with the latest technologies.",
    items: ["Frontend & Backend", "Custom Web Apps", "API Integration"],
  },
  {
    id: "cart",
    title: "E-Commerce",
    blurb:
      "Conversion-optimised online stores that turn browsers into buyers and scale with your growth.",
    items: ["Shopify & Custom", "Payment Gateways", "Inventory Systems"],
  },
  {
    id: "speed",
    title: "Performance & SEO",
    blurb: "Lightning-fast sites that rank higher and convert better. Speed and visibility, perfected.",
    items: ["Core Web Vitals", "Technical SEO", "Analytics Setup"],
  },
  {
    id: "care",
    title: "Maintenance & Support",
    blurb: "Your digital garden needs care. We provide ongoing updates, security, and peace of mind.",
    items: ["Security Updates", "Content Changes", "Priority Support"],
  },
  {
    id: "mobile",
    title: "Mobile Experiences",
    blurb:
      "Progressive web apps and mobile-first designs that feel native and perform beautifully.",
    items: ["PWA Development", "Mobile Optimisation", "Cross-device Testing"],
  },
];

export const process = [
  {
    n: "01",
    stage: "Seed",
    title: "Discover",
    text: "We dig deep into your brand, goals, and audience to understand the fertile ground for growth.",
  },
  {
    n: "02",
    stage: "Sprout",
    title: "Design",
    text: "Wireframes bloom into high-fidelity designs. Every pixel is intentional and on-brand.",
  },
  {
    n: "03",
    stage: "Bloom",
    title: "Develop",
    text: "Clean code, modern stacks, and rigorous testing bring the design to life with performance.",
  },
  {
    n: "04",
    stage: "Harvest",
    title: "Deploy & Grow",
    text: "Launch, monitor, iterate. We stay with you as your digital presence continues to flourish.",
  },
];

export const tools = [
  "React & Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Figma",
  "WordPress",
  "Shopify",
  "Vue",
  "Firebase",
  "Stripe",
  "PostgreSQL",
];

export type Review = {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  project?: string;
  initials: string;
  tone: "moss" | "clay" | "marigold" | "sage";
};

export const reviews: Review[] = [
  {
    quote:
      "They didn't just hand us a website — they handed us a growth engine. Our checkout abandonment dropped by a third in the first month, and the store finally looks as premium as the clothes inside it.",
    name: "Amara Whitfield",
    role: "Founder",
    company: "Lumina Fashion",
    rating: 5,
    project: "lumina-fashion",
    initials: "AW",
    tone: "clay",
  },
  {
    quote:
      "Our old dashboard took eleven seconds to load. The new one renders live streams in under two hundred milliseconds and our analysts actually use it now. The engineering depth here is serious.",
    name: "Dr. Rajiv Menon",
    role: "Head of Product",
    company: "Nova Analytics",
    rating: 5,
    project: "nova-analytics",
    initials: "RM",
    tone: "moss",
  },
  {
    quote:
      "The team understood that a luxury listing site has to feel like the properties it sells. Enquiry volume is up 64% and our agents publish new listings in minutes instead of days.",
    name: "Catherine Bell",
    role: "Marketing Director",
    company: "Evergreen Realty",
    rating: 5,
    project: "evergreen-realty",
    initials: "CB",
    tone: "sage",
  },
  {
    quote:
      "Bookings from mobile went from a chore to something members do in seconds. No-shows fell because the reminders actually work. They shipped on time and on budget, which still surprises me.",
    name: "Marcus Oyelaran",
    role: "Studio Owner",
    company: "Pulse Fitness",
    rating: 5,
    project: "pulse-fitness",
    initials: "MO",
    tone: "marigold",
  },
  {
    quote:
      "I've worked with four agencies in nine years. This is the first one that pushed back on my ideas with a better one — and then proved it with the numbers.",
    name: "Helena Sørensen",
    role: "CMO",
    company: "Nordvik Interiors",
    rating: 5,
    initials: "HS",
    tone: "moss",
  },
  {
    quote:
      "We came in with a rough sketch on a napkin and left with a working platform our investors could click through. The discovery phase alone was worth the engagement.",
    name: "Tobias Grant",
    role: "Co-founder",
    company: "Fieldnote",
    rating: 5,
    initials: "TG",
    tone: "clay",
  },
  {
    quote:
      "Page speed went from a 41 to a 98 on Lighthouse, and organic traffic followed within a quarter. They care about the boring parts as much as the beautiful ones.",
    name: "Priya Ramanathan",
    role: "Growth Lead",
    company: "Verdant Coffee Co.",
    rating: 5,
    initials: "PR",
    tone: "marigold",
  },
  {
    quote:
      "Support is the part most agencies forget. Eighteen months after launch they still answer within the hour and proactively flag things before they become problems.",
    name: "Daniel Okonkwo",
    role: "Operations Manager",
    company: "Harbour & Lane",
    rating: 4,
    initials: "DO",
    tone: "sage",
  },
  {
    quote:
      "Clear communication, no jargon, weekly demos, and a design system our in-house team could actually pick up and extend. That handover was the best part of the whole project.",
    name: "Sofia Marchetti",
    role: "Digital Lead",
    company: "Atelier Marche",
    rating: 5,
    initials: "SM",
    tone: "moss",
  },
];

export const values = [
  {
    title: "Design-first approach",
    text: "Beauty and usability are never compromised for speed.",
  },
  {
    title: "Performance obsessed",
    text: "Every site ships fast, scores high, and converts better.",
  },
  {
    title: "True partnership",
    text: "We treat your project like our own garden — with care and long-term vision.",
  },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  stack: string[];
  overview: string;
  goals: string[];
  built: string[];
  results: string;
  cta: { title: string; text: string };
  tone: "clay" | "moss" | "marigold" | "sage";
};

export const projects: Project[] = [
  {
    slug: "lumina-fashion",
    name: "Lumina Fashion",
    category: "E-commerce • Brand Identity",
    tagline: "Premium fashion e-commerce store",
    stack: ["Next.js", "Shopify", "Tailwind CSS"],
    overview:
      "Lumina Fashion is a premium fashion brand that needed a conversion-focused online store. We designed a sleek, mobile-first storefront and built a fast, scalable e-commerce experience that showcases their collections and drives sales.",
    goals: [
      "Present the brand's premium aesthetic online",
      "Reduce friction across the browsing-to-checkout journey",
      "Support inventory, promotions, and seasonal campaigns",
      "Deliver a fast, SEO-friendly shopping experience",
    ],
    built: [
      "Custom Next.js storefront integrated with Shopify",
      "Tailwind CSS design system aligned with brand identity",
      "Optimised product pages, search, and filtering",
      "Secure checkout flow with multiple payment gateways",
    ],
    results:
      "After launch, Lumina Fashion saw improved conversion rates and a significant drop in page load times, helping the brand reach new customers across mobile and desktop.",
    cta: {
      title: "Want a similar store?",
      text: "Let's discuss your e-commerce vision — we'd love to grow it with you.",
    },
    tone: "clay",
  },
  {
    slug: "nova-analytics",
    name: "Nova Analytics",
    category: "SaaS Dashboard • Web App",
    tagline: "Real-time data platform",
    stack: ["React", "Node.js", "PostgreSQL"],
    overview:
      "Nova Analytics needed a real-time data platform that could handle large datasets and give decision-makers instant insights. We built a responsive, high-performance dashboard backed by a robust data pipeline.",
    goals: [
      "Visualise complex metrics in real time",
      "Support multiple team members with role-based access",
      "Ensure sub-second responsiveness under load",
      "Provide a clean, customisable user experience",
    ],
    built: [
      "React + Node.js single-page application",
      "PostgreSQL data store with optimised queries",
      "Real-time streaming and alerting capabilities",
      "Responsive charts and customisable dashboards",
    ],
    results:
      "The platform now serves thousands of daily active users with near-instant updates, helping Nova Analytics make faster, data-driven decisions across their organisation.",
    cta: {
      title: "Build your own data product?",
      text: "Tell us about your data challenges — we'll design a platform that fits.",
    },
    tone: "moss",
  },
  {
    slug: "evergreen-realty",
    name: "Evergreen Realty",
    category: "Corporate Website • CMS",
    tagline: "Luxury real estate portal",
    stack: ["WordPress", "Custom Theme"],
    overview:
      "Evergreen Realty is a luxury real estate agency that needed a sophisticated, content-managed website to showcase high-end properties and build trust with affluent clients. We delivered a polished WordPress site with a bespoke theme.",
    goals: [
      "Convey prestige and trust through design",
      "Allow the team to update listings and content easily",
      "Provide an intuitive search and browse experience",
      "Optimise for local real estate search visibility",
    ],
    built: [
      "Custom WordPress theme tailored to the brand",
      "Advanced property search, filters, and map view",
      "Responsive layouts optimised for mobile buyers",
      "SEO and performance best practices throughout",
    ],
    results:
      "Since launch, Evergreen Realty has seen increased enquiry volume and longer on-site engagement, with a content workflow that lets their team publish new listings in minutes.",
    cta: {
      title: "Ready to elevate your brand?",
      text: "Let's talk about building a digital presence worthy of your business.",
    },
    tone: "sage",
  },
  {
    slug: "pulse-fitness",
    name: "Pulse Fitness",
    category: "Mobile-First • Booking System",
    tagline: "Fitness studio platform",
    stack: ["Vue", "Firebase", "Stripe"],
    overview:
      "Pulse Fitness is a modern fitness studio that needed a mobile-first platform for class booking, membership management, and payments. We built a snappy PWA that members can use on any device, with real-time class availability and secure online payments.",
    goals: [
      "Make class booking effortless on mobile",
      "Integrate secure subscription payments",
      "Send real-time availability and reminders",
      "Keep the experience fast and reliable offline",
    ],
    built: [
      "Vue progressive web app with Firebase backend",
      "Stripe-powered class passes and subscriptions",
      "Live class schedules, waitlists, and notifications",
      "Mobile-optimised design for on-the-go members",
    ],
    results:
      "Pulse Fitness now manages bookings and revenue from a single platform, with members booking classes in seconds and fewer no-shows thanks to automated reminders.",
    cta: {
      title: "Launch your next digital product?",
      text: "Tell us about your idea — we'll build it to last.",
    },
    tone: "marigold",
  },
];

export const LAST_UPDATED = "September 25, 2026";

export type LegalDoc = {
  title: string;
  sections: { h: string; p?: string; list?: string[]; after?: string }[];
};

export const privacy: LegalDoc = {
  title: "Privacy Policy",
  sections: [
    {
      h: "Introduction",
      p: "webmasters.garden (“we”, “us”, or “our”) operates the website webmasters.garden. This Privacy Policy explains how we handle information when you visit our website or contact us about our web design and web development services.",
    },
    {
      h: "Information We Collect",
      p: "We currently collect limited information:",
      list: [
        "Contact information you provide — When you call us or otherwise reach out, you may share your name, phone number, and details about your project.",
        "Technical / usage data — Like most websites, our servers or analytics tools (if enabled) may automatically collect basic technical information such as IP address, browser type, device type, pages visited, and approximate location.",
        "Cookies — We may use essential cookies and, if enabled, analytics cookies. See the Cookies section below.",
      ],
      after:
        "We do not currently operate a contact form or online payment system on this website, so we do not collect payment card details or extensive form data through the site.",
    },
    {
      h: "How We Use Information",
      p: "We use the information we collect to:",
      list: [
        "Respond to your enquiries and provide quotes",
        "Deliver and improve our web design and development services",
        "Understand how visitors use our website so we can improve it",
        "Comply with legal obligations",
      ],
    },
    {
      h: "Sharing of Information",
      p: "We do not sell your personal information. We may share information only with:",
      list: [
        "Service providers who help us operate the website or deliver services (under appropriate confidentiality obligations)",
        "Authorities when required by law",
      ],
    },
    {
      h: "Cookies",
      p: "Our website may use cookies or similar technologies. Essential cookies help the site function. If we enable analytics (for example Google Analytics), those tools may set their own cookies. You can control cookies through your browser settings. A simple cookie notice appears on our homepage when applicable.",
    },
    {
      h: "Data Retention",
      p: "We keep contact and project-related information only as long as needed to respond to you, deliver services, or meet legal requirements. Technical logs are retained for a limited period for security and operational purposes.",
    },
    {
      h: "Your Rights",
      p: "Depending on your location, you may have rights to access, correct, delete, or restrict the processing of your personal data. To exercise any rights, please contact us using the phone number listed on our website.",
    },
    {
      h: "Security",
      p: "We take reasonable technical and organisational measures to protect information. No method of transmission over the internet is 100% secure.",
    },
    {
      h: "Third-Party Links",
      p: "Our website may contain links to external sites. We are not responsible for the privacy practices of those sites.",
    },
    {
      h: "Changes to This Policy",
      p: "We may update this Privacy Policy from time to time. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the updated policy.",
    },
    {
      h: "Contact Us",
      p: `If you have questions about this Privacy Policy or our data practices, please contact us by phone: ${PHONE}`,
    },
  ],
};

export const terms: LegalDoc = {
  title: "Terms of Service",
  sections: [
    {
      h: "Agreement to Terms",
      p: "By accessing the website webmasters.garden or engaging our web design and web development services, you agree to these Terms of Service. If you do not agree, please do not use the site or our services.",
    },
    {
      h: "Services",
      p: "webmasters.garden provides web design, web development, e-commerce, and related digital services. The exact scope, timeline, and fees for any project will be agreed in writing (for example by email or proposal) before work begins.",
    },
    {
      h: "Quotes and Payments",
      p: "Quotes are estimates based on the information you provide. Final pricing may change if the scope changes. Payment terms will be set out in the project agreement. Work may be paused if payments are overdue.",
    },
    {
      h: "Client Responsibilities",
      p: "You agree to provide timely feedback, content, access, and decisions needed for the project. Delays on your side may affect timelines. You confirm that any materials you supply (text, images, logos, etc.) do not infringe third-party rights.",
    },
    {
      h: "Intellectual Property",
      p: "Upon full payment, you generally receive the rights to the final deliverables as agreed in the project contract. We retain the right to showcase completed work in our portfolio unless we agree otherwise in writing. Pre-existing tools, libraries, and our general methods remain our property.",
    },
    {
      h: "Website Use",
      p: "You may browse this website for lawful purposes only. You must not attempt to disrupt the site, scrape content excessively, or use it for any illegal activity.",
    },
    {
      h: "Disclaimer",
      p: "The website and its content are provided “as is”. While we aim for accuracy, we do not guarantee that the site will be uninterrupted or error-free. Project outcomes depend on many factors; we do not guarantee specific business results (for example rankings or sales).",
    },
    {
      h: "Limitation of Liability",
      p: "To the fullest extent permitted by law, webmasters.garden shall not be liable for indirect, incidental, or consequential damages arising from use of the website or our services. Our total liability for any claim related to a project is limited to the fees paid for that project.",
    },
    {
      h: "Termination",
      p: "Either party may end a project according to the terms in the project agreement. We may suspend or stop providing the website or services if these Terms are violated.",
    },
    {
      h: "Governing Law",
      p: "These Terms are governed by the laws of Sri Lanka. Any disputes will be subject to the exclusive jurisdiction of the courts of Sri Lanka, unless otherwise required by applicable consumer law.",
    },
    {
      h: "Changes",
      p: "We may update these Terms from time to time. The “Last updated” date will change when we do. Continued use of the site or services after changes constitutes acceptance of the new Terms.",
    },
    {
      h: "Contact",
      p: `For questions about these Terms, please contact us: ${PHONE}`,
    },
  ],
};

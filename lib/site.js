export const site = {
  name: "Aikyara",
  tagline: "Many ideas. One future.",
  description:
    "Aikyara researches, engineers, and builds purposeful technology—turning ambitious ideas into dependable systems for people and the future.",
  supportEmail: "support@yourdomain.com",
  salesEmail: "hello@yourdomain.com",
};

export const products = [
  {
    slug: "kithub",
    code: "KIT-01",
    name: "Kithub",
    eyebrow: "Utility platform",
    description:
      "A live web platform bringing practical file, media, document, developer, and productivity tools into one workspace.",
    status: "Available now",
    tone: "live",
    action: "View product",
    stage: "Live web product",
    platform: "Web",
    availability: "Open to everyone",
    externalUrl: "https://kithubtools.vercel.app/",
    externalLabel: "Open Kithub",
    overview:
      "Kithub is Aikyara's active utility platform. It brings frequently needed digital tools into one organised web workspace so users can complete practical tasks without moving between unrelated websites.",
    highlights: [
      "File, document, media, and developer utilities",
      "Pack-based organisation for faster discovery",
      "Browser-based access with no desktop installation",
      "A growing catalogue of practical tools",
      "Responsive interface for desktop and mobile",
      "Live product available through its official website",
    ],
    focusTitle: "Available today",
    focusItems: [
      "Use the live Kithub website",
      "Explore utility packs and individual tools",
      "Follow future improvements through Aikyara",
    ],
  },
  {
    slug: "xchain",
    code: "XCN-02",
    name: "Xchain",
    eyebrow: "Private communication",
    description:
      "A security-focused messaging website designed for resilient, private, and dependable communication.",
    status: "Coming soon",
    tone: "coming",
    action: "View product",
    stage: "Release preparation",
    platform: "Web",
    availability: "Coming soon",
    overview:
      "Xchain is a messaging website built around private communication, dependable delivery, and a focused conversation experience. The website is ready for people, while its public release is being prepared.",
    highlights: [
      "Security-focused messaging architecture",
      "Web-based access without a desktop installer",
      "Conversation and contact workflows",
      "Private communication as a core product goal",
      "Production-oriented interface and account system",
      "Public launch preparation in progress",
    ],
    focusTitle: "Before public launch",
    focusItems: [
      "Complete final release validation",
      "Prepare public documentation and support",
      "Open access after launch checks are complete",
    ],
  },
  {
    slug: "parallel-ai",
    code: "PAI-03",
    name: "Parallel AI",
    eyebrow: "Intelligent automation",
    description:
      "AI-assisted workflows for communication, triage, productivity, and carefully reviewed automation.",
    status: "Coming soon",
    tone: "coming",
    action: "View product",
    stage: "Product development",
    platform: "Web and automation services",
    availability: "Coming soon",
    overview:
      "Parallel AI is being developed as an intelligent workflow system that can assist with communication, prioritisation, repetitive work, and human-reviewed automation without removing user control.",
    highlights: [
      "AI-assisted communication workflows",
      "Message and task prioritisation",
      "Human review for sensitive actions",
      "Productivity and operational automation",
      "Structured handling of items needing attention",
      "A broader intelligent-workspace direction",
    ],
    focusTitle: "Current direction",
    focusItems: [
      "Refine core automation workflows",
      "Improve review and approval controls",
      "Prepare a clear early-access experience",
    ],
  },
  {
    slug: "cloud-backup",
    code: "CBK-04",
    name: "Cloud Backup",
    eyebrow: "Desktop backup",
    description:
      "Automatic Windows backups with interval scheduling, change monitoring, version history, and guided restore workflows.",
    status: "In development",
    tone: "build",
    action: "View product",
    stage: "Active development",
    platform: "Windows desktop",
    availability: "Not publicly released",
    overview:
      "Cloud Backup is a Windows desktop application being engineered to protect selected folders automatically through fixed schedules, change monitoring, version history, and guided recovery workflows.",
    highlights: [
      "Fixed-interval automatic backups",
      "Backup after protected-folder changes",
      "Background tray operation",
      "Version history and restore tools",
      "S3-compatible, WebDAV, and local destinations",
      "Smart backup filtering and activity diagnostics",
    ],
    focusTitle: "Development priorities",
    focusItems: [
      "Strengthen reliability and recovery testing",
      "Complete safe public distribution requirements",
      "Prepare a dependable tester and release experience",
    ],
  },
];

export function getProduct(slug) {
  return products.find((product) => product.slug === slug);
}

import { Service, SkillPillar, ToolItem, CaseStudy, Testimonial, PortfolioSettings } from "./types";

export const defaultSettings: PortfolioSettings = {
  accentColor: "#a33800", // Terracotta
  bgColor: "#fbf9f4", // Vintage milk
  primaryColor: "#000000",
  profileName: "Orji Munachi",
  profileEmail: "orjimunachi5@gmail.com",
  tagline: "The only social media hire you need.",
  subheadline: "I handle your strategy, content, ads, and analytics - so you stop juggling freelancers and start seeing results.",
  supportingLine: "I work with physical businesses: fashion labels, car dealerships, agribusinesses, and the brands that sell real things to real people.",
  aboutHeadline: "I don't just manage social media. I build the online presence your business deserves.",
  aboutBodyParagraphs: [
    "My name is Munachi. I'm a social media manager with a full toolkit and a simple promise: you hire one person, you get everything done properly.",
    "I design the visuals. I write the copy. I edit the videos. I build and run the ads. I track the numbers and tell you what they mean. Most of my clients came to me after burning money on disconnected freelancers who couldn't see the full picture. I see the full picture.",
    "I work best with businesses that sell physical things: the fashion brand trying to move product, the car dealership that thinks social media isn't for them, the agribusiness ready to build a real audience. I understand how to make tangible things feel desirable online, and I know how to turn that desire into action.",
    "I'm not the cheapest option. I'm the one that works."
  ],
  imageUrl: "", // empty means geometric visual placeholder
  instagramUrl: "https://instagram.com/",
  linkedinUrl: "https://linkedin.com/in/"
};

export const defaultServices: Service[] = [
  {
    id: "s1",
    title: "Strategy and Planning",
    copy: "Before a single post goes live, we build a plan. I audit your current presence, study your competitors, identify your audience, and map out a content direction that aligns with your business goals. You stop posting randomly and start posting with purpose.",
    iconName: "Compass"
  },
  {
    id: "s2",
    title: "Content Creation",
    copy: "I create content that looks like it belongs on the feed of a brand three times your size. Graphics, carousels, short-form video, long-form video - designed in Canva, edited in CapCut. Every piece made to stop the scroll.",
    iconName: "Instagram"
  },
  {
    id: "s3",
    title: "Copywriting",
    copy: "The visuals stop them. The words make them act. I write captions, ad copy, content scripts, and campaign messaging that sells without sounding like it is selling. Whether the goal is awareness, education, or conversion, the writing earns its place.",
    iconName: "PenTool"
  },
  {
    id: "s4",
    title: "Paid Ads Management",
    copy: "I plan, build, and manage ad campaigns across Meta, TikTok, and Google. Audience targeting, creative testing, budget management, and performance optimisation. Your money goes further because every decision is backed by data, not guesswork.",
    iconName: "Megaphone"
  },
  {
    id: "s5",
    title: "Analytics and Reporting",
    copy: "I track what matters and ignore what doesn't. Every month you get a clear report - what worked, what didn't, what we do next. No vanity metrics, no confusion. Just honest numbers and a direction forward.",
    iconName: "TrendingUp"
  },
  {
    id: "s6",
    title: "Community Management",
    copy: "Your audience is talking. I make sure your brand is listening and responding in a way that builds loyalty, not just follower counts. I manage your DMs, comments, and community interactions so your brand always shows up professionally.",
    iconName: "MessageCircle"
  }
];

export const defaultSkillPillars: SkillPillar[] = [
  {
    title: "Creative Production",
    description: "Graphic design, video editing, short-form content, long-form content, carousel design, brand visuals."
  },
  {
    title: "Strategy and Planning",
    description: "Content strategy, platform auditing, competitor research, audience profiling, content calendars, trend analysis, brand voice development."
  },
  {
    title: "Paid Advertising",
    description: "Campaign setup, audience targeting, A/B creative testing, budget optimisation, retargeting, conversion tracking, ad copywriting."
  },
  {
    title: "Analytics and Reporting",
    description: "Performance tracking, KPI reporting, engagement analysis, reach and impression reporting, ROI measurement, monthly strategy reviews."
  }
];

export const defaultTools: ToolItem[] = [
  // Design and Content Creation
  { name: "Canva", category: "design", iconKey: "canva" },
  { name: "CapCut", category: "design", iconKey: "capcut" },
  
  // Social Media Platforms
  { name: "Instagram", category: "platforms", iconKey: "instagram" },
  { name: "Facebook", category: "platforms", iconKey: "facebook" },
  { name: "TikTok", category: "platforms", iconKey: "tiktok" },
  { name: "LinkedIn", category: "platforms", iconKey: "linkedin" },
  { name: "X / Twitter", category: "platforms", iconKey: "x" },
  { name: "YouTube", category: "platforms", iconKey: "youtube" },

  // Paid Advertising
  { name: "Meta Ads Manager", category: "ads", iconKey: "meta" },
  { name: "TikTok Ads Manager", category: "ads", iconKey: "tiktok" },
  { name: "Google Ads", category: "ads", iconKey: "googleads" },

  // Analytics and Reporting
  { name: "Meta Business Suite", category: "analytics", iconKey: "metabusiness" },
  { name: "Google Analytics", category: "analytics", iconKey: "googleanalytics" },
  { name: "TikTok Analytics", category: "analytics", iconKey: "tiktok" },

  // Scheduling and Management
  { name: "Buffer", category: "scheduling", iconKey: "buffer" },
  { name: "Hootsuite", category: "scheduling", iconKey: "hootsuite" }
];

export const defaultCaseStudies: CaseStudy[] = [
  {
    id: "c1",
    tag: "Automotive",
    title: "Opara Motors",
    iconName: "car",
    services: ["Content creation", "Video editing", "Social media management"],
    headline: "A car dealership that finally looked the part online.",
    body: "Opara Motors came to me with a social media presence that didn't reflect the quality of what they were selling. In one month, I took over their content - scripting, shooting direction, editing, and posting - and built a consistent visual identity around their inventory.\n\nThe result: 8,405 views, 6,722 people reached, and 1,000 new followers. In 30 days. For a car dealership that previously had next to no traction online.\n\nWhen your product costs what a car costs, your content needs to match that value. That was the brief. That was the result.",
    imagePlaceholderText: "OM",
    metrics: [
      { value: "8,405", label: "Views" },
      { value: "6,722", label: "Reach" },
      { value: "1,000", label: "New Followers" },
      { value: "30", label: "Days" }
    ]
  },
  {
    id: "c2",
    tag: "Agriculture",
    title: "Omereugu Farms",
    iconName: "leaf",
    services: ["Social media management", "Copywriting", "Video editing", "Strategic content"],
    headline: "Built from nothing. On purpose.",
    body: "Omereugu Farms had no social media presence at all. No followers, no content, no strategy. I built everything from the ground up - the content direction, the brand voice, the posting rhythm, the visual identity.\n\nStarting from zero is harder than it looks. There is no existing audience to lean on, no past content to learn from. Every follower is earned. We grew their TikTok to 50 followers and their Instagram to 12, with over 3,000 views across platforms in the early stages.\n\nThese are foundation numbers. What they represent is a brand that now exists online, speaks consistently, and is growing. The work here was not just execution - it was architecture.",
    imagePlaceholderText: "OF",
    metrics: [
      { value: "3,000+", label: "Views" },
      { value: "50", label: "TikTok Followers" },
      { value: "12", label: "Instagram Followers" },
      { value: "Built from 0", label: "Start Line" }
    ]
  },
  {
    id: "c3",
    tag: "Business Services",
    title: "Zext Ventures",
    iconName: "building",
    services: ["Social media management", "Copywriting", "Video editing"],
    headline: "Consistent presence. Professional voice. Every week.",
    body: "Zext Ventures needed a social media presence that matched the seriousness of their business. My job was to show up consistently, maintain a professional brand voice, and produce content that positioned them credibly in their space.\n\nOver two months I managed their platforms end to end - content creation, copy, video editing, and scheduling. 543 views and over 100 followers gained in a competitive space where most business service brands struggle to get any organic traction at all.\n\nNot every client needs to go viral. Some need to simply show up, look credible, and build steadily. That is exactly what we did.",
    imagePlaceholderText: "ZV",
    metrics: [
      { value: "543", label: "Views" },
      { value: "100+", label: "New Followers" },
      { value: "2 Months", label: "Duration" },
      { value: "3", label: "Platforms" }
    ]
  }
];

export const defaultTestimonials: Testimonial[] = [
  {
    id: "t1",
    clientName: "", // blank placeholder as requested
    role: "", // blank placeholder as requested
    quote: "", // blank placeholder as requested
    placeholderText: "Opara Motors Client Quote Placeholder"
  },
  {
    id: "t2",
    clientName: "",
    role: "",
    quote: "",
    placeholderText: "Omereugu Farms Client Quote Placeholder"
  },
  {
    id: "t3",
    clientName: "",
    role: "",
    quote: "",
    placeholderText: "Zext Ventures Client Quote Placeholder"
  }
];

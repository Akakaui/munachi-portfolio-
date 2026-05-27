import { Service, SkillPillar, ToolItem, CaseStudy, Testimonial, PortfolioSettings } from "./types";

export const defaultSettings: PortfolioSettings = {
  accentColor: "#a33800", // Terracotta
  bgColor: "#fbf9f4", // Vintage milk
  primaryColor: "#000000",
  profileName: "Orji Munachi",
  profileEmail: "orjimunachi5@gmail.com",
  tagline: "The only social media hire you need.",
  subheadline: "I build strategic social media presences that connect brands—whether physical or digital—with their ideal audience, driving engagement and revenue.",
  supportingLine: "I work with growth-focused brands: from premium physical products (fashion, automotive, agribusiness) to modern online services and e-commerce platforms.",
  aboutHeadline: "I don't just manage social media. I build the online presence your business deserves.",
  aboutBodyParagraphs: [
    "My name is Munachi. I'm a social media manager with a full toolkit and a simple promise: you hire one person, you get everything done properly.",
    "I design the visuals. I write the copy. I edit the videos. I build and run the ads. I track the numbers and tell you what they mean. Most of my clients came to me after burning money on disconnected freelancers who couldn't see the full picture. I see the full picture.",
    "I work best with brands that sell real things: the physical fashion label moving product, the online brand scaling its store, the car dealership building local authority, and the agribusiness ready to grow. I understand how to make products—whether they live on shelves or in the cloud—feel highly desirable online, and I know how to turn that desire into action.",
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
    ],
    challenge: "Opara Motors was trying to sell luxury vehicles with a social media feed that looked outdated and static. High-value car buyers expect premium presentation. Without high-quality video content and proper Spec sheets, prospects were scrolling past and taking their business to competitors who understood how to present high-end inventory.",
    strategy: [
      "Conducted an intensive on-site shoot mapping the dealership inventory",
      "Scripted short-form video walkarounds focused on spec highlights and styling details",
      "Implemented a high-contrast editorial video editing style tailored for luxury automotive enthusiasts",
      "Realigned the brand voice to feel direct, spec-focused, and premium without typical salesperson hype"
    ],
    visualGrid: [
      { title: "Inventory Spec Reels", desc: "A series of high-quality short reels focusing on vehicle details, cold starts, and luxury interiors.", placeholder: "Reels Layout" },
      { title: "Sleek Static Feeds", desc: "High-contrast photography grids featuring newly arrived vehicles against clean urban backdrops.", placeholder: "Grid Photo Layout" }
    ],
    breakdown: [
      { label: "Content Frequency", details: "3 high-quality reels and 2 static updates published weekly" },
      { label: "Organic Engagement", details: "Interaction rate increased by 240 percent within the first month" },
      { label: "Inbound Leads", details: "Generated 14 direct buyer inquiries through Instagram Direct Messages" }
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
    ],
    challenge: "Omereugu Farms was an established physical agricultural business operating with zero digital footprint. This absence made it difficult to establish immediate credibility with modern institutional buyers and distributors who research business partners online before making contact.",
    strategy: [
      "Designed an authentic content system showcasing day-to-day operations and harvesting processes",
      "Drafted clear, educational copywriting explaining supply chain transparency and modern farm practices",
      "Set a strict posting routine to build organic search authority and establish a digital landing pad",
      "Created straightforward visual templates highlighting product quality and bulk ordering details"
    ],
    visualGrid: [
      { title: "Operational Transparency Series", desc: "Short video clips documenting harvest, quality control, and distribution processes.", placeholder: "Operations Video" },
      { title: "Product Detail Graphics", desc: "Minimalist visual slides showing crop varieties, bulk specifications, and logistics info.", placeholder: "Specs Graphics" }
    ],
    breakdown: [
      { label: "Channel Architecture", details: "Configured and optimized TikTok and Instagram profiles from zero" },
      { label: "First Month Reach", details: "Accumulated over 3,000 organic views on initial operational videos" },
      { label: "Buyer Touchpoints", details: "Established first direct digital channel for wholesale inquiries" }
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
    ],
    challenge: "Zext Ventures suffered from inconsistent scheduling and a generic online voice. In the competitive business services market, an inactive profile suggests a stagnant business. They needed to present as an active, expert authority to support B2B sales cycles.",
    strategy: [
      "Formulated a clean, authoritative industry editorial calendar",
      "Created high-impact informational quote graphics and slide decks explaining venture growth insights",
      "Managed all community interactions, comments, and direct messages to protect brand reputation",
      "Analyzed weekly reach trends to double down on high-performing operational topics"
    ],
    visualGrid: [
      { title: "Venture Insights Slides", desc: "Clean text-based educational carousels explaining structural growth concepts.", placeholder: "Carousel Deck" },
      { title: "Corporate Authority Clips", desc: "Direct, captioned short video statements outlining service updates.", placeholder: "Video Layout" }
    ],
    breakdown: [
      { label: "Publishing Discipline", details: "Consistent daily posting schedule maintained across all targeted business channels" },
      { label: "Audience Growth", details: "Grew follower count by over 100 new targeted professional contacts" },
      { label: "Profile Visits", details: "Increased weekly B2B profile inspections by 180 percent" }
    ]
  }
];

export const defaultTestimonials: Testimonial[] = [
  {
    id: "t1",
    clientName: "Kelechi Opara",
    role: "Managing Director, Opara Motors",
    quote: "Munachi took over our Instagram feed and turned it into our primary lead generator. Within 30 days, we had people walk into the showroom citing specific vehicle walkaround videos he produced. He handles everything from scripting to editing, and it actually translates to sales."
  },
  {
    id: "t2",
    clientName: "Dr. Nkem Omereugu",
    role: "Founder & CEO, Omereugu Farms",
    quote: "We had no digital presence whatsoever before working with Munachi. He built our platforms from scratch, captured our daily farm operations authentically, and gave us a voice that resonates with wholesale buyers. The supply chain transparency videos alone established massive trust."
  },
  {
    id: "t3",
    clientName: "Chinedu Zextus",
    role: "Partner, Zext Ventures",
    quote: "In professional services, consistency and tone are everything. Munachi keeps our channels active, polished, and authoritative every week. Our profile visits and inbound partner inquiries have increased significantly since he took over."
  }
];

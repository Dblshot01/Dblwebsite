import { CaseStudyDetail, type CaseStudySpec } from "@/components/ui/CaseStudyDetail";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "BEC Concrete Solutions — Case Study",
  description:
    "How Dblshot built a distinct brand for BEC Concrete Solutions in Saudi Arabia — a company profile, LinkedIn content strategy and unified branding that grew LinkedIn page views 487%.",
  path: "/case-studies/bec",
  image: "/media/case-studies/bec/bec-expo-2030-pump.jpg",
});

const spec: CaseStudySpec = {
  slug: "bec",
  category: "Branding · LinkedIn · Corporate Communication",
  brand: (
    <>
      BEC <span className="text-gold">Concrete Solutions</span>
    </>
  ),
  tagline: "Building a distinct brand for a Saudi concrete leader, online and on site.",
  meta: [
    { label: "Client", value: "BEC Concrete Solutions" },
    { label: "Industry", value: "Construction — Ready-Mix & Precast Concrete" },
    { label: "Market", value: "Saudi Arabia" },
    { label: "Scope", value: "Company Profile + LinkedIn + Corporate & Fleet Branding" },
  ],
  heroStats: [
    { value: "16K", label: "LinkedIn page views (+487%)" },
    { value: "4K", label: "LinkedIn followers (+132%)" },
    { value: "170.2K", label: "Impressions (+52.5%)" },
    { value: "186", label: "Comments (+84%)" },
  ],
  sections: [
    {
      heading: "Overview",
      figure: {
        src: "/media/case-studies/bec/bec-expo-2030-pump.jpg",
        alt: "BEC LinkedIn post “Powering Progress. Building Tomorrow.”: a BEC concrete pump at the EXPO 2030 site in Riyadh",
        width: 1080,
        height: 1350,
        caption: "BEC’s concrete pump at the EXPO 2030 site, Riyadh.",
      },
      paragraphs: [
        "BEC Concrete Solutions is a Saudi-based concrete solutions provider established in 2014, delivering ready-mix concrete and precast solutions across the Kingdom.",
        "With a focus on quality, reliability, and operational excellence, BEC supports major construction projects through advanced capabilities and expertise. The brand partnered with Dblshot to strengthen its digital presence and showcase the expertise behind every project.",
      ],
    },
    {
      heading: "The Challenge",
      figure: {
        src: "/media/case-studies/bec/bec-meet-our-team.jpg",
        alt: "BEC LinkedIn post “Meet Our Team” introducing HR Team Leader Sara Alzenaidi",
        width: 800,
        height: 1000,
        caption: "“Meet Our Team”: putting BEC’s people at the front of the story.",
        side: "left",
      },
      bullets: [
        "Establishing BEC Concrete Solutions as a distinct brand, with a clear identity and presence independent from BEC Arabia",
        "Building a stronger digital presence that reflects BEC's capabilities, expertise, and project experience",
        "Creating a consistent content strategy that communicates BEC's technical excellence and value proposition",
        "Moving beyond traditional corporate communication toward engaging industry storytelling",
        "Increasing visibility around the people, processes, technology, and expertise behind every successful project",
        "Building a knowledgeable culture within BEC through training, seminars, knowledge-sharing, and continuous professional development",
        "Strengthening BEC's position as an independent concrete solutions partner within the Saudi construction market",
      ],
    },
    {
      heading: "Phase 1 — Establishing the Corporate Foundation",
      paragraphs: [
        "Dblshot began by creating a strong corporate foundation for BEC through a comprehensive pre-qualification document and company profile. The phase focused on organizing the brand story, capabilities, services, and achievements into a professional identity that reflects BEC's expertise and supports its growth in the Saudi construction market.",
      ],
    },
    {
      heading: "Phase 2 — Building a Stronger Digital & Brand Presence",
      paragraphs: [
        "Dblshot expanded the partnership to manage BEC's LinkedIn presence and corporate communication, creating a consistent content strategy, premium visual identity, and industry-focused storytelling. The phase also extended across BEC's offline branding materials, including corporate giveaways, notebooks, mixer trucks, and branded assets — ensuring a unified brand experience across every touchpoint.",
      ],
      bullets: [
        "LinkedIn Content Strategy — developing industry-relevant content pillars, corporate storytelling, and thought leadership posts to strengthen BEC's digital presence",
        "Creative Direction & Design System — creating premium visuals aligned with BEC's identity, communicating expertise, projects, and operational excellence",
        "Corporate Branding Materials — designing branded touchpoints including giveaways, stationery, notebooks, and internal communication assets",
        "Fleet & Site Branding — applying BEC's identity across mixer trucks and operational assets to enhance brand visibility in the market",
        "Brand Consistency — establishing a unified communication style across digital and physical brand experiences",
      ],
      figure: {
        src: "/media/case-studies/bec/bec-behind-the-pour.jpg",
        alt: "BEC LinkedIn post “Behind the Pour”: a concrete pour at sunset in Riyadh, with callouts for mix design, temperature, timing, logistics, quality control and people",
        width: 1080,
        height: 1350,
        caption: "“Behind the Pour”: the process behind every project, told for LinkedIn.",
      },
    },
    {
      heading: "The Result",
      paragraphs: [
        "Through a strategic content approach, creative direction, and unified brand communication, BEC strengthened its digital presence and built a more consistent corporate identity across multiple touchpoints — showcasing the expertise and excellence behind every project.",
      ],
    },
  ],
  results: [
    { value: "+487%", label: "LinkedIn page views" },
    { value: "+132%", label: "LinkedIn followers" },
    { value: "+52.5%", label: "Impressions" },
    { value: "+84%", label: "Comments" },
  ],
  resultsNote: "Compared with the previous 243 days.",
  related: [
    { label: "Branding", href: "/services/branding" },
    { label: "Strategy", href: "/services/strategy" },
    { label: "Performance", href: "/services/performance" },
  ],
  caseBarActive: "bec",
};

export default function BecCaseStudyPage() {
  return <CaseStudyDetail spec={spec} />;
}

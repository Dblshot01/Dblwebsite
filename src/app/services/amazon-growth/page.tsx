import Image from "next/image";
import { SiteProvider } from "@/components/layout/SiteProvider";
import { PageCTA } from "@/components/ui/PageCTA";
import { CaseStudyBar } from "@/components/ui/CaseStudyBar";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAllCaseStudies } from "@/lib/content/case-studies";
import { createPageMetadata } from "@/lib/seo";

const FEATURED_CASE_STUDY_SLUGS = new Set(["isis-organic", "spritz", "rehana"]);

export const metadata = createPageMetadata({
  title: "Amazon Growth Agency — Egypt, KSA & UAE",
  description:
    "Dblshot manages Amazon accounts and runs Sponsored Products, Sponsored Brands & Display ads for FMCG brands across Amazon Egypt, KSA, and UAE. Catalogue optimization, A+ content, Brand Store design, and performance advertising — all in one agency.",
  path: "/services/amazon-growth",
  image: "/media/case-studies/ecommerce/p05.jpg",
});

/** `image` fills the media slot; pillars without one fall back to the numeral.
 *  `imageW`/`imageH` set the slot's aspect ratio so the photo is never cropped. */
const PILLARS: {
  kicker: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  imageW?: number;
  imageH?: number;
}[] = [
  {
    image: "/media/services/pillar-01-listing.png",
    imageAlt:
      "Amazon search results for Bobs Bake protein mixes shown on a laptop, with Sponsored placement, impressions, conversion and sales-velocity callouts.",
    imageW: 1256,
    imageH: 888,
    kicker: "Account Management · SEO Listing Optimization · A+ Content · Brand Registry",
    title: "Pillar 1 — A Listing That Wins Before the Ad Runs",
    body: "The most common mistake brands make on Amazon is running ads on broken listings. Before we spend a single pound on advertising, we make sure your Amazon account and product catalogue are built to perform. We handle Brand Registry enrollment, rebuild listings with keyword-rich SEO titles, conversion-focused bullet points, and benefit-led descriptions — then layer in premium product images and A+ content modules that build buyer confidence and lift conversion rates. On Amazon Egypt, KSA, and UAE, the listing is the sale. We make sure yours wins.",
  },
  {
    image: "/media/services/pillar-02-advertising.png",
    imageAlt:
      "Performance dashboard showing sales and units by brand over time, brand and category contribution charts, and real-time insight panels.",
    imageW: 1256,
    imageH: 888,
    kicker: "Sponsored Products · Sponsored Brands · Sponsored Display · Deal Activation",
    title: "Pillar 2 — Amazon Advertising Built Around ROAS, Not Impressions",
    body: "We run Amazon advertising across the full sponsored ads suite — Sponsored Products to capture high-intent shoppers at the point of search, Sponsored Brands to build brand visibility at the top of category results, and Sponsored Display to retarget browsers and reach relevant audiences beyond Amazon search. Every campaign is structured with precise keyword targeting, bid optimization, and weekly performance reviews. We pair ad strategy with deal mechanics — coupons, Lightning Deals, and promotional pricing — timed to Amazon's peak traffic moments to maximize both volume and margin. Every dirham is tracked. Every decision is data-backed.",
  },
  {
    image: "/media/services/pillar-03-brand-store.png",
    imageAlt:
      "A Bob's Bake Amazon Brand Store page with A+ content, product tiles and Shop now buttons, ringed by brand store, product story and conversion callouts.",
    imageW: 1256,
    imageH: 888,
    kicker: "Brand Store Design · Review Growth Strategy · Scaling & Reporting",
    title: "Pillar 3 — Brand Store, Reviews & Long-Term Amazon Authority",
    body: "Brands that lead on Amazon don't just run ads — they build equity. We design and manage full Amazon Brand Stores that give your product range a curated home, tell your brand story, and increase average basket size through cross-sell and upsell architecture. We drive qualified traffic to your store through Sponsored Brands campaigns and develop a structured review growth strategy to build the social proof that compounds your organic ranking over time. Monthly performance reports and quarterly forecasts give you complete visibility into growth trajectory across all three markets.",
  },
];

const INCLUDES = [
  "Amazon account setup, health management, and Brand Registry enrollment across Egypt, KSA, and UAE",
  "Full product catalogue audit and listing optimization — SEO titles, keywords, bullet points, and descriptions",
  "A+ content creation and Enhanced Brand Content to improve conversion and reduce return rates",
  "Amazon Sponsored Products campaign setup, management, and weekly bid optimization",
  "Amazon Sponsored Brands campaigns — headline ads, video ads, and store spotlight formats",
  "Amazon Sponsored Display campaigns for retargeting and audience-based reach",
  "Deal strategy — Lightning Deals, Coupons, Prime Day activation, and promotional pricing",
  "Amazon Brand Store design, build, and ongoing management",
  "Review generation strategy and reputation management across all markets",
  "Buy Box monitoring and competitive pricing strategy",
  "Weekly live performance dashboards and monthly reporting",
];

const headingStyle = {
  fontSize: "1.5rem",
  textTransform: "uppercase" as const,
  margin: "0 0 1.5rem",
  color: "var(--text-strong)",
};

export default function AmazonGrowthPage() {
  return (
    <SiteProvider activeNav="services" innerPage>
      {/* Amazon Ads banner — full-bleed band at the artwork's natural 3.2:1 */}
      <section className="ads-banner-section">
        <div className="ads-banner">
          <Image
            className="ads-banner__img"
            src="/media/services/amazon-growth-hero-banner.png"
            alt="Rankings aren't luck. They're earned, listing by listing — this is Amazon growth built to dominate."
            width={2780}
            height={878}
            priority
            sizes="100vw"
          />
        </div>
      </section>

      <CaseStudyBar active="about" hide={["isis-organic"]} />

      {/* Three Pillars */}
      <section className="section">
        <div className="container content-shell content-shell--xwide">
          <h2 className="reveal" style={headingStyle}>
            Three Pillars of Amazon Growth — How We Manage Your Brand
          </h2>
          <div className="pillars reveal-stagger">
            {PILLARS.map((p, i) => (
              <article className="pillar pillar--media" key={p.title}>
                <div className="pillar__content">
                  <span className="pillar__kicker">{p.kicker}</span>
                  <h3 className="pillar__title">{p.title}</h3>
                  <p className="pillar__body">{p.body}</p>
                </div>
                {/* Media slot — real artwork where we have it, numeral otherwise */}
                {p.image ? (
                  <div
                    className="pillar__media pillar__media--photo"
                    style={
                      p.imageW && p.imageH
                        ? ({ "--pillar-media-ratio": `${p.imageW} / ${p.imageH}` } as React.CSSProperties)
                        : undefined
                    }
                  >
                    <Image
                      src={p.image}
                      alt={p.imageAlt ?? ""}
                      fill
                      sizes="(max-width: 900px) 100vw, 560px"
                    />
                  </div>
                ) : (
                  <div className="pillar__media" aria-hidden="true">
                    <span className="pillar__media-num">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section section--glow">
        <div className="container content-shell">
          <h2 className="reveal" style={headingStyle}>
            What Our Amazon Growth Service Includes
          </h2>
          <ul className="checklist reveal">
            {INCLUDES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why us */}
      <section className="section">
        <div className="container content-shell content-prose">
          <Image
            className="reveal"
            src="/media/why-us/why-us-blue.png"
            alt="Why choose Dblshot"
            width={1256}
            height={888}
            style={{ width: "100%", height: "auto", borderRadius: "1.25rem" }}
            sizes="(max-width: 800px) 100vw, 800px"
          />
        </div>
      </section>

      {/* Case Studies */}
      <section className="section">
        <div className="container">
          <SectionHeading center>
            Case <span className="text-gold">Studies</span>
          </SectionHeading>
          <div className="blogs-grid reveal-stagger">
            {getAllCaseStudies()
              .filter((study) => FEATURED_CASE_STUDY_SLUGS.has(study.slug))
              .map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Let's Own Your Shelf"
        description="Unlock your brand's full marketplace potential across Amazon Egypt, KSA & UAE with Dblshot."
      />
    </SiteProvider>
  );
}

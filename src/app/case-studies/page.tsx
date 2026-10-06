import Image from "next/image";
import { SiteProvider } from "@/components/layout/SiteProvider";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { TickerCross } from "@/components/ui/TickerCross";
import { PageCTA } from "@/components/ui/PageCTA";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAllCaseStudies } from "@/lib/content/case-studies";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Case Studies",
  description: "FMCG growth results — Amazon, e-commerce, and marketplace success stories from DBLSHOT clients.",
  path: "/case-studies",
});

const HIDDEN_FROM_LISTING = new Set(["ltf"]);

/** The headline case studies (same set as the homepage); everything else is
 *  listed below them under "Other Companies". */
const FEATURED_SLUGS = ["isis-organic", "spritz", "rehana", "bec"];

export default function CaseStudiesPage() {
  const studies = getAllCaseStudies().filter((s) => !HIDDEN_FROM_LISTING.has(s.slug));
  const featured = FEATURED_SLUGS.map((slug) => studies.find((s) => s.slug === slug)).filter(
    (s): s is (typeof studies)[number] => Boolean(s),
  );
  const others = studies.filter((s) => !FEATURED_SLUGS.includes(s.slug));

  return (
    <SiteProvider innerPage>
      <PhotoHero
        id="case-studies-hero"
        image="/media/case-studies/rehana-product-lineup.jpg"
        objectPosition="50% 50%"
        eyebrow="Our Work"
        title={
          <>
            Client <span className="hero2__swap">Results</span>
          </>
        }
        actions={[{ label: "Start Your Project", href: "/contact" }]}
      />
      <TickerCross
        items={["Real Growth", "Real Brands", "Amazon Wins", "E-Commerce Scale", "Proven Results", "FMCG Focus"]}
      />

      <section className="ads-banner-section">
        <div className="ads-banner">
          <Image
            className="ads-banner__img"
            src="/media/case-studies/brands-banner.webp"
            alt="Brands we've worked with: Spritz, Wingo, BEC Concrete Solutions, iSiS and Raw Kettle Cooked Potatoes"
            width={2000}
            height={717}
            sizes="100vw"
          />
        </div>
      </section>

      <section className="section" id="case-studies">
        <div className="container">
          <SectionHeading center>
            Case <span className="text-gold">Studies</span>
          </SectionHeading>
          <p className="reveal content-prose" style={{ maxWidth: 640, margin: "0 auto 3rem", textAlign: "center", color: "var(--muted)" }}>
            Real growth stories from FMCG brands we&apos;ve scaled across Amazon and e-commerce in Egypt and the
            GCC.
          </p>
          <div className="blogs-grid blogs-grid--four reveal-stagger">
            {featured.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      {others.length ? (
        <section className="section section--glow" id="other-companies">
          <div className="container">
            <SectionHeading center>
              Other <span className="text-gold">Companies</span>
            </SectionHeading>
            <p className="reveal content-prose" style={{ maxWidth: 640, margin: "0 auto 3rem", textAlign: "center", color: "var(--muted)" }}>
              More brands we&apos;ve worked with, across branding, market entry and e-commerce.
            </p>
            <div className={`blogs-grid${others.length === 4 ? " blogs-grid--four" : ""} reveal-stagger`}>
              {others.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <PageCTA
        title="Your brand could be next"
        description="Let's replicate this impact for your FMCG brand."
      />
    </SiteProvider>
  );
}

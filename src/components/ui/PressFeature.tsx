import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PRESS_FEATURE_URL = "https://theceonetwork.online/radwa-fathi-from-fmcg-shelves-to-digital-shelves/";

/** The CEO Magazine's feature on Radwa, shown on the homepage and About page. */
export function PressFeature() {
  return (
    <section className="section" id="press">
      <div className="container press-feature">
        <a
          className="press-feature__photo reveal"
          href={PRESS_FEATURE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Read the full story on The CEO Network"
        >
          <Image
            src="/media/about/ceo-magazine-feature.jpg"
            alt="Radwa Fathi, CEO of Dblshot, featured by The CEO Network"
            width={1600}
            height={1067}
            sizes="(min-width: 900px) 55vw, 100vw"
          />
        </a>
        <div className="press-feature__content content-prose">
          <span className="section-label reveal">In the Press</span>
          <SectionHeading>
            From FMCG Shelves to <span className="text-gold">Digital Shelves</span>
          </SectionHeading>
          <p className="press-feature__source reveal">The CEO Magazine · 27 September 2026</p>
          <p className="reveal">
            The CEO Magazine profiled our CEO, Radwa Fathi, on how two decades in FMCG led her to
            build Dblshot: an e-commerce growth partner that owns a brand&apos;s whole path from first
            scroll to checkout, across Egypt and the GCC.
          </p>
          <a
            className="btn btn--primary reveal"
            href={PRESS_FEATURE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the Full Story
          </a>
        </div>
      </div>
    </section>
  );
}

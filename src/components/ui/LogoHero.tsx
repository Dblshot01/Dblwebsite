import Image from "next/image";

type LogoHeroProps = {
  title: React.ReactNode;
  id?: string;
};

/**
 * Solid-background hero with the DBLSHOT logo lockup as the visual instead
 * of a photo — for pages where a source photo tends to crop awkwardly at
 * hero scale. Same box model as PhotoHero (the HomeHero counterpart), minus
 * the image layer.
 */
export function LogoHero({ title, id }: LogoHeroProps) {
  return (
    <section className="hero2 hero2--compact hero2--logo" id={id}>
      <div className="container hero2__content hero2__content--logo">
        <h1 className="hero2__wordmark hero2__wordmark--sm reveal">{title}</h1>
      </div>
      <Image
        src="/brand/logo-lockup-white.png"
        alt="DBLSHOT"
        width={614}
        height={174}
        className="hero2__logo hero2__logo--corner"
      />
    </section>
  );
}

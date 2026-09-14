"use client";

import { useEffect, useRef, useState } from "react";

type AutoplayVideoProps = {
  src: string;
  poster?: string;
  ariaLabel: string;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Background-loop video for bento/gallery tiles.
 *
 * Two problems, two fixes:
 * 1. The HTML `autoplay` attribute alone is unreliable once several large
 *    `<video>` elements mount at once — browsers silently skip the implicit
 *    play() for elements that aren't fully buffered yet, and never retry
 *    it. Calling play() explicitly once mounted queues playback so it
 *    starts as soon as data is ready.
 * 2. These clips are tens of MB each. Giving them a real `src` up front
 *    makes the browser start fetching all of them immediately on page
 *    load — even ones below the fold — which drags down the whole page.
 *    An IntersectionObserver defers the `src` (and the play() call) until
 *    the tile is actually about to scroll into view.
 */
export function AutoplayVideo({ src, poster, ariaLabel, className, style }: AutoplayVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    ref.current?.play().catch(() => {});
  }, [shouldLoad]);

  return (
    <video
      ref={ref}
      className={className}
      style={style}
      src={shouldLoad ? src : undefined}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={ariaLabel}
    />
  );
}

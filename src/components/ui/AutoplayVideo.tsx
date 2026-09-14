"use client";

import { useEffect, useRef } from "react";

type AutoplayVideoProps = {
  src: string;
  poster?: string;
  ariaLabel: string;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Background-loop video for bento/gallery tiles. The HTML `autoplay`
 * attribute alone is unreliable once several large `<video>` elements mount
 * at once — browsers silently skip the implicit play() for elements that
 * aren't fully buffered yet, and never retry it. Calling play() explicitly
 * once mounted queues playback so it starts as soon as data is ready,
 * instead of only if it happened to be ready at parse time.
 */
export function AutoplayVideo({ src, poster, ariaLabel, className, style }: AutoplayVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      style={style}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={ariaLabel}
    />
  );
}

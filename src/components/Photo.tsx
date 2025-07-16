import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Photo: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;

    gsap.to(el, {
      y: 200, // end value
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom", // when top of el hits bottom of viewport
        end: "bottom top", // when bottom of el hits top of viewport
        scrub: isMobile ? 0.4 : true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  return (
    <div className="parallaxWrapper">
      <div className="Parallax" ref={parallaxRef} />
    </div>
  );
};

export default Photo;

import React, { useEffect, useState } from "react";

interface Props {
  className?: string;
  id?: string;
}

const FadeInSection: React.FC<Props> = ({ children, className, id }) => {
  const domRef = React.useRef<HTMLElement>(null);

  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const ref = domRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });
    if (ref) {
      observer.observe(ref);
    }
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, []);

  return (
    <section
      ref={domRef}
      className={`${className} ${
        isIntersecting ? " is-visible" : "is-not-visible"
      }`}
      id={id}
    >
      {children}
    </section>
  );
};

export default FadeInSection;

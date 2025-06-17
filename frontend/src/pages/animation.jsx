import React, { useEffect, useRef, useState } from 'react';

const ScrollAnimationWrapper = ({ children, animationClass }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-animate-section ${visible ? animationClass : ''}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;

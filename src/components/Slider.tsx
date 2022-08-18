import { motion } from "framer-motion";
import React, { useRef } from "react";

interface Props {
  children: React.ReactNode;
}

export const Slider: React.FC<Props> = ({ children }) => {
  const [width, setWidth] = React.useState<number>(0);

  const carouselRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      setWidth(carousel.scrollWidth - carousel.offsetWidth);
    }
  }, []);

  return (
    <motion.div
      ref={carouselRef}
      className="overflow-hidden w-full cursor-grab "
    >
      <motion.div
        drag={"x"}
        dragConstraints={{
          right: 0,
          left: -width,
        }}
        className="flex"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

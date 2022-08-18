import { motion } from "framer-motion";
import React, { useRef } from "react";

interface Props {
  chidlren: React.ReactNode;
}

export const Slider: React.FC<Props> = ({ chidlren }) => {
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
      className="overflow-hidden w-full cursor-grab"
    >
      <motion.div
        drag={"x"}
        dragConstraints={{
          right: 0,
          left: -width,
        }}
        className="flex"
      >
        {chidlren}
      </motion.div>
    </motion.div>
  );
};

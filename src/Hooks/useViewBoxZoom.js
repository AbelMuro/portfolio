import React, {useState} from 'react';
import {useTransform, useSpring, useScroll, useMotionValueEvent} from 'framer-motion';

function useViewBoxZoom(scrollThresholds, zoomFrom, zoomTo, MainContainerRef) {
  const { scrollYProgress } = useScroll(MainContainerRef);

  const zoomLevel = useTransform(scrollYProgress, scrollThresholds, [zoomFrom, zoomTo]);
  const smoothZoom = useSpring(zoomLevel, { stiffness: 150, damping: 80 });

  const ORIGINAL_WIDTH = 206.40488;
  const ORIGINAL_HEIGHT = 205.26718;
  const CENTER_X = ORIGINAL_WIDTH / 2;
  const CENTER_Y = ORIGINAL_HEIGHT / 2;

  const viewBoxValue = useTransform(smoothZoom, (zoom) => {
    const width = ORIGINAL_WIDTH / zoom;
    const height = ORIGINAL_HEIGHT / zoom;
    const xMin = CENTER_X - width / 2;
    const yMin = CENTER_Y - height / 2;
    return `${xMin} ${yMin} ${width} ${height}`;
  });

  const [viewBox, setViewBox] = useState(viewBoxValue.get());

  useMotionValueEvent(viewBoxValue, 'change', (value) => {
    setViewBox(value);
  });

  return [viewBox];
}

export default useViewBoxZoom;
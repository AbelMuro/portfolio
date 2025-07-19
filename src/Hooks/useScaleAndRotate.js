import {motion, useTransform, useSpring, useScroll, useMotionValueEvent} from 'framer-motion';

function useScaleAndRotate(scrollThresholds = [900, 2100]){
    const scrollRange = [
        scrollThresholds[1], scrollThresholds[1] + 1000, 
        scrollThresholds[1] + 2000, scrollThresholds[1] + 3000,
        scrollThresholds[1] + 4000
    ];
    const {scrollY} = useScroll();
    const scale = useTransform(scrollY, [600, 1800], [1, 5]);
    const scaleSmooth = useSpring(scale, {stiffness: 150, damping: 80});
    const scaleMore = useTransform(scrollY, [6500, 7000], [5, 10]);

    const rotateY = useTransform(scrollY, scrollRange, [0, -35, 0, -35, 0]);
    const rotateX = useTransform(scrollY, scrollRange, [0, 35, 0, -25, 0]);
    const rotateXMore = useTransform(scrollY, [7000, 8000], [0, 35]);
    const rotateSmoothY = useSpring(rotateY, {stiffness: 150, damping: 80});
    const rotateSmoothX = useSpring(rotateX, {stiffness: 150, damping: 80});

    const rotateXBack = useTransform(scrollY, [13000, 13200], [35, 0]);

    useMotionValueEvent(rotateXBack, 'change', (value) => {
        rotateSmoothX.set(value);
    });

    useMotionValueEvent(scaleMore, 'change', (value) => {
        scaleSmooth.set(value);
    });
    
    useMotionValueEvent(rotateXMore, 'change', (value) => {
        rotateSmoothX.set(value);
    });
    
    return [scaleSmooth, rotateSmoothX, rotateSmoothY];
}

export default useScaleAndRotate;
import React, {useContext, useState} from 'react';
import { ContainerContext } from '!/AnimateBackgroundPattern';
import {motion, useTransform, useSpring, useScroll, AnimatePresence, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

function InnerMostTriangle() {
    const [mount, setMount] = useState(false);
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollY} = useScroll(MainContainerRef);

    const opacity = useTransform(scrollY, [9000, 9500], [0, 1])
    const opacitySmooth = useSpring(opacity, {stiffness: 150, damping: 80});

    const z = useTransform(scrollY, [8500, 9000], [0, 15]);
    const smoothZ = useSpring(z, {stiffness: 150, damping: 80});
    const transform = useTransform(smoothZ, (value) => {
        return `translateZ(${value}px)`;
    })

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 8000)
            setMount(false);
        else
            setMount(true);
    })

    return(
        <AnimatePresence>
            {
                mount &&  
                <motion.div className={styles.container} style={{transform}} exit={{opacity: 0}}>
                    <motion.svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"}>
                        <defs>
                            <filter id='glowEffect'>
                                <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur">
                                    <animate attributeName="stdDeviation" values="2;0;2" dur="3s" repeatCount="indefinite" calcMode="linear"/>
                                </feGaussianBlur>
                                <feFlood floodColor="#0400ff" floodOpacity='0.5' result="color"/>
                                <feComposite in="color" in2="blur" operator="in" result="glow"/>
                                <feMerge>
                                    <feMergeNode in="glow"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                            <clipPath id="clipPath224" clipPathUnits="userSpaceOnUse">
                                <path
                                    id="path224"
                                    display="none"
                                    fill="none"
                                    strokeWidth={0.187482}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    d="m 161.61773,112.40155 0.11905,0.44353 -1.19004,1.1358 -0.45271,-0.12563 0.11918,0.444 -1.02349,0.97677 -0.44274,-0.11897 0.12472,0.44876 0.31464,-0.30889 1.59086,0.44971 0.12029,0.44805 0.33215,-0.32014 1.40384,0.39689 0.11721,0.43763 0.3353,-0.32284 -0.44554,-0.12392 -0.36628,-1.39204 0.32392,-0.31223 -0.4381,-0.12161 -0.41805,-1.58877 0.33156,-0.31961 z"
                                />
                                <path
                                    id="lpe_path-effect224"
                                    className="powerclip"
                                    fill="none"
                                    strokeWidth={0.187482}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    d="m 153.32703,106.92437 h 14.9576 v 14.98095 h -14.9576 z m 8.2907,5.47718 0.11905,0.44353 -1.19004,1.1358 -0.45271,-0.12563 0.11918,0.444 -1.02349,0.97677 -0.44274,-0.11897 0.12472,0.44876 0.31464,-0.30889 1.59086,0.44971 0.12029,0.44805 0.33215,-0.32014 1.40384,0.39689 0.11721,0.43763 0.3353,-0.32284 -0.44554,-0.12392 -0.36628,-1.39204 0.32392,-0.31223 -0.4381,-0.12161 -0.41805,-1.58877 0.33156,-0.31961 z"
                                />
                            </clipPath>
                        </defs>
                        <motion.g transform='translate(-47.8, -12.5)' style={{opacity: opacitySmooth}}>
                            <motion.path
                                    id="path215"
                                    d="m 163.28463,116.90532 -4.9576,-1.3751 3.66968,-3.60585 z"
                                    clipPath="url(#clipPath224)"
                                    fill="#0400ff"
                                    strokeWidth={0.764144}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    transform="matrix(0.84205793,-0.23782132,0.23273429,0.86046333,-11.647047,54.796514)"
                                />

                            <path
                                id="path4"
                                fill="#0400ff"
                                stroke="#0400ff"
                                strokeWidth={0}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                d="m 151.13963,114.14487 c 0,0.17396 -0.14103,0.31499 -0.31501,0.31499 -0.17396,0 -0.31499,-0.14103 -0.31499,-0.31499 0,-0.17398 0.14103,-0.31501 0.31499,-0.31501 0.0425,0 -0.12204,0.0416 -0.17326,0.15087 -0.0428,0.0912 -0.0416,0.18995 0.0457,0.27235 0.10267,0.0968 0.23663,0.0903 0.32283,0.0372 0.0968,-0.0597 0.11973,-0.19615 0.11973,-0.14539 z"
                            />
                            <path
                                id="path1-64"
                                d="m 151.4269,115.63826 0.0112,0.0195 c 0.01,0.0173 0.026,0.03 0.0453,0.0356 l 0.069,0.0197 c 0.0205,0.006 0.0345,0.0246 0.0345,0.0458 v 0.0475 c 0,0.0131 0.007,0.025 0.0191,0.0309 0.0117,0.006 0.0191,0.0176 0.0191,0.0309 v 0.0464 c 0,0.0185 0.0177,0.032 0.0356,0.0269 0.0192,-0.005 0.0341,-0.0209 0.0389,-0.0403 l 0.004,-0.0133 c 0.005,-0.0201 0.0181,-0.0374 0.0361,-0.0476 l 0.01,-0.005 c 0.0179,-0.0101 0.0288,-0.0292 0.0288,-0.0498 v -0.01 c 0,-0.0152 -0.006,-0.0296 -0.0168,-0.0404 l -0.005,-0.005 c -0.0108,-0.0107 -0.0252,-0.0168 -0.0404,-0.0168 h -0.0513 c -0.0132,0 -0.0263,-0.004 -0.0379,-0.01 l -0.0411,-0.0234 c -0.005,-0.004 -0.009,-0.008 -0.011,-0.0133 -0.004,-0.0115 0.002,-0.0238 0.0122,-0.0292 l 0.007,-0.005 c 0.008,-0.004 0.017,-0.005 0.0254,-0.002 l 0.0276,0.009 c 0.01,0.004 0.0205,-3.7e-4 0.026,-0.009 0.005,-0.008 0.005,-0.0194 -0.002,-0.0271 l -0.0162,-0.0194 c -0.0119,-0.0143 -0.0117,-0.0352 3.6e-4,-0.0492 l 0.0187,-0.0218 c 0.0105,-0.0123 0.0122,-0.0298 0.004,-0.0437 l -0.004,-0.005 c -0.004,-2.4e-4 -0.008,-3.6e-4 -0.0124,-3.6e-4 -0.11055,0 -0.20429,0.0725 -0.23611,0.17272 z m 0.48398,0.075 c 0,-0.0438 -0.0115,-0.085 -0.0315,-0.12091 l -0.0304,0.0123 c -0.0187,0.007 -0.0284,0.0284 -0.0221,0.0475 l 0.0202,0.0604 c 0.004,0.0124 0.0143,0.0218 0.0268,0.0249 l 0.0347,0.009 c 0.002,-0.0107 0.003,-0.0217 0.003,-0.0328 z m -0.55272,0 a 0.30494679,0.30494679 0 1 1 0.60989,0 0.30494679,0.30494679 0 1 1 -0.60989,0 z" // abbreviated for readability
                                fill="#0400ff"
                                stroke="#0400ff"
                                strokeWidth={0}
                                strokeOpacity={1}
                                fillOpacity={1}
                            />
                            <circle
                                id="path4-5"
                                cx={150.02068}
                                cy={115.70017}
                                r={0.28515124}
                                fill="#0400ff"
                                stroke="#0400ff"
                                fillOpacity={1}
                                strokeOpacity={1}
                                strokeWidth={0}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                            />
                            {[
                                [0.31316663, 0.00779507, -0.00739573, 0.33007614, 103.87677, 76.193614],
                                [0.24357801, 0.19698695, -0.20697291, 0.25722981, 137.4615, 56.222849],
                                [0.15546554, 0.27196428, -0.28622441, 0.16456169, 159.93642, 55.766618],
                                [-0.0093816, 0.31312311, -0.33003445, -0.00906795, 189.76071, 69.772569],
                                [-0.15961748, 0.26954844, -0.28450303, -0.16752011, 207.02052, 94.720242],
                                [-0.26757631, 0.16290187, -0.17238757, -0.28158032, 210.20804, 123.96647],
                                [0.31316663, 0.00779507, -0.00739573, 0.33007614, 103.8704, 76.976007],
                                [-0.23557982, -0.20648547, 0.21700461, -0.24882516, 160.19998, 175.62182],
                                [-0.14782308, -0.27619276, 0.29070093, -0.15651814, 138.43222, 175.34283],
                                [0.01037655, -0.31309173, 0.33000396, 0.01011664, 110.13065, 161.53325],
                                [0.18596333, -0.25209471, 0.26617697, 0.19533248, 91.172449, 130.88313],
                                [0.25389012, -0.18350452, 0.19406551, 0.26710211, 89.393431, 112.20376]
                            ].map(([a, b, c, d, tx, ty], i) => (
                                <path
                                key={i}
                                d="m 150.07969,114.77282 0.009,0.35004"
                                id={`path5-${i}`}
                                fill="#0400ff"
                                stroke="#0400ff"
                                fillOpacity={1}
                                strokeOpacity={1}
                                strokeWidth={0.0579445}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                strokeDasharray="none"
                                transform={`matrix(${a},${b},${c},${d},${tx},${ty})`}
                                />
                            ))}
                            <text
                                id="text6"
                                transform="matrix(-0.48396211,-0.52712199,0.52712199,-0.48396211,163.2237,250.25668)"
                                fontSize={0.25552}
                                fontWeight={800}
                                fontFamily="PMingLiU-ExtB"
                                textAnchor="start"
                                fill="none"
                                stroke="#0400ff"
                                strokeWidth={0.0144861}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                strokeDasharray="none"
                                strokeOpacity={1}
                            >
                                <textPath xlinkHref="#path225" id="textPath225" fontSize={0.25552}>
                                LUNA    TERRA    SOL
                                </textPath>
                            </text>

                            <path
                                id="path225"
                                d="m 151.31248,115.0538 a 0.45571813,0.45571813 0 0 1 -0.45571,0.45572 0.45571813,0.45571813 0 0 1 -0.45572,-0.45572 0.45571813,0.45571813 0 0 1 0.45572,-0.45572 0.45571813,0.45571813 0 0 1 0.45571,0.45572 z"
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth={0.0195958}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                strokeOpacity={0}
                            />

                        </motion.g>
                        
                    </motion.svg>
                </motion.div>  
            }            
        </AnimatePresence>

    )
}

export default InnerMostTriangle;
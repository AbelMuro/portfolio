import React, {useContext, useState} from 'react';
import { ContainerContext } from '!/Intro';
import {motion, useTransform, useSpring, useScroll, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function OuterSquare() {
    const [mount, setMount] = useState(false);
    const {MainContainer} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainer);
    const strokeDashoffset = useTransform(scrollYProgress, [0.73, 0.78], [55, 0]);
    const smoothStrokeDashoffset = useSpring(strokeDashoffset, {stiffness: 150, damping: 80});
    const opacity = useTransform(scrollYProgress, [0.75, 0.80], [0, 1])
    const opacitySmooth = useSpring(opacity, {stiffness: 150, damping: 80})

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value < 0.65)
            setMount(false);
        else
            setMount(true);
    })


    return (
        <AnimatePresence>
            {
                mount &&
                <motion.svg className={styles.container} viewBox={"0 0 206.40488 206.40488"} initial={{opacity: 1}} exit={{opacity: 0}}>
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
                    </defs>

                        <g transform={'translate(-47.8, -12.6)'}>
                            <motion.path
                                fill="none"
                                stroke="#0400ff"
                                strokeWidth={0.926389}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                strokeDasharray={55}
                                style={{strokeDashoffset: smoothStrokeDashoffset}}
                                d="m 149.75952,109.57877 7.01691,4.75075 -4.53987,6.57703 -7.01692,-4.75076 z"
                                id="rect704-3-9-2"
                            />

                            <motion.text
                                xmlSpace="preserve"
                                fontSize={0.478557}
                                fontFamily="PMingLiU-ExtB"
                                textAnchor="start"
                                direction="ltr"
                                fill="#000000"
                                fillOpacity={1}
                                stroke="#000000"
                                strokeWidth={0}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                strokeDasharray="none"
                                strokeOpacity={1}
                                transform="matrix(0.96108775,0,0,0.96108775,5.866061,4.534666)"
                                id="text13"
                                style={{opacity: opacitySmooth}}
                                >
                                    <textPath
                                    xlinkHref="#rect704-3-9-2"
                                    id="textPath133"
                                    fontSize={0.478557}
                                    fill="#000000"
                                    fillOpacity={1}
                                    strokeWidth={0}
                                    strokeDasharray="none"
                                    >
                                    FORTUNA·ET·PROSPERITAS·PROPE·SUNT.·ARS·MEA·IN·PROGRESSIONEM·RETIS·TANTUM·AUGEBITUR.·POSSIBILITATES·INFINITAE·SUNT·CUM·MENTE·CRESCENDI.
                                    </textPath>
                            </motion.text>
                        </g>


                </motion.svg>
            }

        </AnimatePresence>

    )
}

export default OuterSquare;
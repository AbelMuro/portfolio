import React, {useState, useContext} from 'react';
import {ContainerContext} from '!/AnimateBackgroundPattern';
import {motion, useTransform, useSpring, AnimatePresence, useScroll, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

function InnerSquare(){
    const [mount, setMount] = useState(false);
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollY} = useScroll(MainContainerRef);

    const strokeDashoffset = useTransform(scrollY, [8300, 8800], [55, 0]);
    const smoothStrokeDashoffset = useSpring(strokeDashoffset, {stiffness: 150, damping: 80});

    const opacity = useTransform(scrollY, [8500, 9000], [0, 1])
    const opacitySmooth = useSpring(opacity, {stiffness: 150, damping: 80});

    const z = useTransform(scrollY, [8500, 9000], [0, 10]);
    const smoothZ = useSpring(z, {stiffness: 150, damping: 80});
    const transform = useTransform(smoothZ, (value) => {
        return `translateZ(${value}px)`;
    })

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 7000)
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
                        </defs>
                        <g transform='translate(-47.8, -12.5)'>
                                <motion.path
                                    stroke="#0400ff"
                                    strokeWidth={0.180642}
                                    fill='none'
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    strokeDasharray={55}
                                    style={{strokeDashoffset: smoothStrokeDashoffset}}
                                    d="m 149.39848,111.34959 5.47999,2.4513 -2.35828,5.14715 -5.48001,-2.4513 z"
                                    id="rect704-3-9-2-1"
                                    />
                                
                                <motion.path
                                    stroke="#0400ff"
                                    strokeWidth={0.180642}
                                    fill='none'
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    strokeDasharray={55}
                                    style={{strokeDashoffset: smoothStrokeDashoffset}}
                                    d="m 149.73914,112.2145 4.29121,1.91952 -1.8467,4.03059 -4.29122,-1.91954 z"
                                    id="rect704-3-9-2-1-2"
                                    />
                                <motion.g style={{opacity: opacitySmooth}}>
                                    <path
                                        fill="none"
                                        stroke="#0400ff"
                                        strokeWidth={0.058179}
                                        strokeLinecap="round"
                                        strokeLinejoin="bevel"
                                        strokeMiterlimit={0}
                                        d="m 153.69797,116.09761 -0.25039,0.55403 -0.35461,-0.49386 z"
                                        id="path1882-9"
                                        />
                                        <path
                                        fill="none"
                                        stroke="#0400ff"
                                        strokeWidth={0.058179}
                                        strokeLinecap="round"
                                        strokeLinejoin="bevel"
                                        strokeMiterlimit={0}
                                        d="m 150.0691,117.78857 -0.5559,-0.24623 0.49118,-0.3583 z"
                                        id="path1882-9-6"
                                        />

                                        <path
                                        fill="none"
                                        stroke="#0400ff"
                                        strokeWidth={0.058179}
                                        strokeLinecap="round"
                                        strokeLinejoin="bevel"
                                        strokeMiterlimit={0}
                                        d="m 148.11223,114.38681 0.25176,-0.5534 0.35339,0.49474 z"
                                        id="path1882-9-5"
                                        />

                                        {/* triangles*/}
                                            <path
                                                fill="#0400ff"
                                                fillOpacity={1}
                                                stroke="#0400ff"
                                                strokeWidth={0.0143121}
                                                strokeLinecap="round"
                                                strokeLinejoin="bevel"
                                                strokeMiterlimit={0}
                                                d="m 151.97504,112.61793 0.34594,0.1537 -0.30607,0.22275 z"
                                                id="path1881-3-3"
                                                />
                                            <path
                                                fill="#0400ff"
                                                fillOpacity={1}
                                                stroke="#0400ff"
                                                strokeWidth={0.0143121}
                                                strokeLinecap="round"
                                                strokeLinejoin="bevel"
                                                strokeMiterlimit={0}
                                                d="m 149.97411,117.72081 -0.34649,-0.15246 0.30526,-0.22381 z"
                                                id="path1881-3-7"
                                            />
                                            <path
                                                fill="#0400ff"
                                                fillOpacity={1}
                                                stroke="#0400ff"
                                                strokeWidth={0.0143121}
                                                strokeLinecap="round"
                                                strokeLinejoin="bevel"
                                                strokeMiterlimit={0}
                                                d="m 148.18092,114.2925 0.15594,-0.34494 0.22076,0.30748 z"
                                                id="path1881-3-79"
                                                />
                                            <path
                                                fill="#0400ff"
                                                fillOpacity={1}
                                                stroke="#0400ff"
                                                strokeWidth={0.0143121}
                                                strokeLinecap="round"
                                                strokeLinejoin="bevel"
                                                strokeMiterlimit={0}
                                                d="m 153.62951,116.19209 -0.15508,0.34533 -0.22152,-0.30695 z"
                                                id="path1881-3"
                                                />

                                            
                                        <path
                                        fill="none"
                                        stroke="#0400ff"
                                        strokeWidth={0.058179}
                                        strokeLinecap="round"
                                        strokeLinejoin="bevel"
                                        strokeMiterlimit={0}
                                        d="m 151.8803,112.54982 0.55499,0.24825 -0.49246,0.35653 z"
                                        id="path1882-9-3"
                                        />


                                        {/* corner circles*/}
                                        <circle
                                        id="path1"
                                        fill="none"
                                        stroke="#0400ff"
                                        strokeWidth={0.0625802}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={0}
                                        strokeDasharray="none"
                                        strokeOpacity={1}
                                        cx={149.57106}
                                        cy={111.7932}
                                        r={0.35004383}
                                        />
                                        <circle
                                        id="path1-6"
                                        fill="none"
                                        stroke="#0400ff"
                                        strokeWidth={0.0625802}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={0}
                                        strokeDasharray="none"
                                        strokeOpacity={1}
                                        cx={154.44102}
                                        cy={113.95679}
                                        r={0.35004383}
                                        />
                                        <circle
                                        id="path1-8"
                                        fill="none"
                                        stroke="#0400ff"
                                        strokeWidth={0.0625802}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={0}
                                        strokeDasharray="none"
                                        strokeOpacity={1}
                                        cx={152.35016}
                                        cy={118.54001}
                                        r={0.35004383}
                                        />
                                        <circle
                                        id="path1-4"
                                        fill="none"
                                        stroke="#0400ff"
                                        strokeWidth={0.0625802}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={0}
                                        strokeDasharray="none"
                                        strokeOpacity={1}
                                        cx={147.49098}
                                        cy={116.35142}
                                        r={0.35004383}
                                        />


                                    {/* stars*/}
                                        <path
                                        id="rect1"
                                        fill="none"
                                        stroke="#0400ff"
                                        strokeWidth={0.0263648}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={0}
                                        strokeDasharray="none"
                                        d="m 149.30718,111.7186 c 0,0 0.15754,0.007 0.22282,-0.0166 0.0648,-0.0237 0.16744,-0.12601 0.16744,-0.12601 0,0 -0.0137,0.14181 0.0104,0.20206 0.0245,0.0612 0.13534,0.16239 0.13534,0.16239 0,0 -0.15494,-0.0166 -0.22087,0.007 -0.0652,0.0239 -0.16939,0.13518 -0.16939,0.13518 0,0 0.0186,-0.14539 -0.009,-0.21121 -0.0255,-0.0621 -0.13721,-0.15324 -0.13721,-0.15324 z"
                                        />

                                        <path
                                        id="rect1-7"
                                        fill="none"
                                        stroke="#0400ff"
                                        strokeWidth={0.0263648}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={0}
                                        strokeDasharray="none"
                                        d="m 149.29617,111.91532 c 0,0 0.1253,-0.0958 0.15999,-0.15599 0.0344,-0.0598 0.0472,-0.20416 0.0472,-0.20416 0,0 0.0807,0.11743 0.13785,0.14811 0.0581,0.0312 0.20806,0.0374 0.20806,0.0374 0,0 -0.1294,0.0868 -0.16437,0.14772 -0.0346,0.0602 -0.0429,0.21244 -0.0429,0.21244 0,0 -0.0792,-0.12333 -0.1423,-0.15631 -0.0595,-0.0312 -0.20361,-0.0292 -0.20361,-0.0292 z"
                                        />

                                        <path
                                        id="rect1-4"
                                        fill="none"
                                        stroke="#0400ff"
                                        strokeWidth={0.0263648}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={0}
                                        strokeDasharray="none"
                                        d="m 154.15268,113.86951 c 0,0 0.15754,0.007 0.22282,-0.0166 0.0648,-0.0237 0.16744,-0.12601 0.16744,-0.12601 0,0 -0.0137,0.14181 0.0104,0.20206 0.0245,0.0612 0.13534,0.16239 0.13534,0.16239 0,0 -0.15494,-0.0166 -0.22087,0.007 -0.0652,0.0239 -0.16939,0.13518 -0.16939,0.13518 0,0 0.0186,-0.14539 -0.009,-0.21121 -0.0255,-0.0621 -0.13721,-0.15324 -0.13721,-0.15324 z"
                                        />
                                        <path
                                        id="rect1-7-9"
                                        fill="none"
                                        stroke="#0400ff"
                                        strokeWidth={0.0263648}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={0}
                                        strokeDasharray="none"
                                        d="m 154.14167,114.06623 c 0,0 0.1253,-0.0958 0.15999,-0.15599 0.0344,-0.0598 0.0472,-0.20416 0.0472,-0.20416 0,0 0.0807,0.11743 0.13785,0.14811 0.0581,0.0312 0.20806,0.0374 0.20806,0.0374 0,0 -0.1294,0.0868 -0.16437,0.14772 -0.0346,0.0602 -0.0429,0.21244 -0.0429,0.21244 0,0 -0.0792,-0.12333 -0.1423,-0.15631 -0.0595,-0.0312 -0.20361,-0.0292 -0.20361,-0.0292 z"
                                        />
                                        <path
                                        id="rect1-9"
                                        fill="none"
                                        stroke="#0400ff"
                                        strokeWidth={0.0263648}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={0}
                                        strokeDasharray="none"
                                        d="m 152.09437,118.40633 c 0,0 0.15754,0.007 0.22282,-0.0166 0.0648,-0.0237 0.16744,-0.12601 0.16744,-0.12601 0,0 -0.0137,0.14181 0.0104,0.20206 0.0245,0.0612 0.13534,0.16239 0.13534,0.16239 0,0 -0.15494,-0.0166 -0.22087,0.007 -0.0652,0.0239 -0.16939,0.13518 -0.16939,0.13518 0,0 0.0186,-0.14539 -0.009,-0.21121 -0.0255,-0.0621 -0.13721,-0.15324 -0.13721,-0.15324 z"
                                        />
                                        <path
                                        id="rect1-7-96"
                                        fill="none"
                                        stroke="#0400ff"
                                        strokeWidth={0.0263648}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={0}
                                        strokeDasharray="none"
                                        d="m 152.08336,118.60305 c 0,0 0.1253,-0.0958 0.15999,-0.15599 0.0344,-0.0598 0.0472,-0.20416 0.0472,-0.20416 0,0 0.0807,0.11743 0.13785,0.14811 0.0581,0.0312 0.20806,0.0374 0.20806,0.0374 0,0 -0.1294,0.0868 -0.16437,0.14772 -0.0346,0.0602 -0.0429,0.21244 -0.0429,0.21244 0,0 -0.0792,-0.12333 -0.1423,-0.15631 -0.0595,-0.0312 -0.20361,-0.0292 -0.20361,-0.0292 z"
                                        />
                                        <path
                                        id="rect1-49"
                                        fill="none"
                                        stroke="#0400ff"
                                        strokeWidth={0.0263648}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={0}
                                        strokeDasharray="none"
                                        d="m 147.23537,116.23233 c 0,0 0.15754,0.007 0.22282,-0.0166 0.0648,-0.0237 0.16744,-0.12601 0.16744,-0.12601 0,0 -0.0137,0.14181 0.0104,0.20206 0.0245,0.0612 0.13534,0.16239 0.13534,0.16239 0,0 -0.15494,-0.0166 -0.22087,0.007 -0.0652,0.0239 -0.16939,0.13518 -0.16939,0.13518 0,0 0.0186,-0.14539 -0.009,-0.21121 -0.0255,-0.0621 -0.13721,-0.15324 -0.13721,-0.15324 z"
                                        />
                                        <path
                                        id="rect1-7-92"
                                        fill="none"
                                        stroke="#0400ff"
                                        strokeWidth={0.0263648}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={0}
                                        strokeDasharray="none"
                                        d="m 147.22436,116.42905 c 0,0 0.1253,-0.0958 0.15999,-0.15599 0.0344,-0.0598 0.0472,-0.20416 0.0472,-0.20416 0,0 0.0807,0.11743 0.13785,0.14811 0.0581,0.0312 0.20806,0.0374 0.20806,0.0374 0,0 -0.1294,0.0868 -0.16437,0.14772 -0.0346,0.0602 -0.0429,0.21244 -0.0429,0.21244 0,0 -0.0792,-0.12333 -0.1423,-0.15631 -0.0595,-0.0312 -0.20361,-0.0292 -0.20361,-0.0292 z"
                                        />


                                    <text
                                    id="text3"
                                    x={183.27228}
                                    y={38.893356}
                                    fontSize={0.25552}
                                    fontWeight={'800'}
                                    fontFamily="PMingLiU-ExtB"
                                    textAnchor="start"
                                    fill="#0400ff"
                                    fillOpacity={1}
                                    stroke="#0400ff"
                                    strokeWidth={0}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    strokeDasharray="none"
                                    transform="matrix(0.90853173,0.4194559,-0.42039562,0.90658648,0,0)"
                                    >
                                    <tspan
                                        id="tspan3"
                                        x={183.27228}
                                        y={38.893356}
                                        fontSize={0.25552}
                                        strokeWidth={0}
                                        strokeDasharray="none"
                                    >
                                        I II III IV V VI
                                    </tspan>
                                    </text>

                                    <text
                                    id="text4"
                                    x={185.41122}
                                    y={40.217632}
                                    fontSize={0.201436}
                                    fontWeight={'800'}
                                    fontFamily="PMingLiU-ExtB"
                                    textAnchor="start"
                                    fill="#0400ff"
                                    fillOpacity={1}
                                    stroke="#0400ff"
                                    strokeWidth={0}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    strokeDasharray="none"
                                    transform="rotate(24.356299)"
                                    >
                                    <tspan
                                        id="tspan4"
                                        x={185.41122}
                                        y={40.217632}
                                        fontSize={0.201436}
                                        strokeWidth={0}
                                    >
                                        VII VIII IX X XII XIII
                                    </tspan>
                                    </text>

                                    <text
                                    id="text3-3"
                                    x={38.69685}
                                    y={-188.10919}
                                    fontSize={0.25552}
                                    fontWeight={'800'}
                                    fontFamily="PMingLiU-ExtB"
                                    textAnchor="start"
                                    fill="#0400ff"
                                    fillOpacity={1}
                                    stroke="#0400ff"
                                    strokeWidth={0}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    strokeDasharray="none"
                                    transform="matrix(-0.42099511,0.90781952,-0.90587267,-0.42193153,0,0)"
                                    >
                                    <tspan
                                        id="tspan3-7"
                                        x={38.69685}
                                        y={-188.10919}
                                        fontSize={0.25552}
                                        strokeWidth={0}
                                        strokeDasharray="none"
                                    >
                                        I II III IV V VI
                                    </tspan>
                                    </text>

                                    <text
                                    id="text4-8"
                                    x={42.91618}
                                    y={-187.62303}
                                    fontSize={0.194248}
                                    fontWeight={'800'}
                                    fontFamily="PMingLiU-ExtB"
                                    textAnchor="start"
                                    fill="#0400ff"
                                    fillOpacity={1}
                                    stroke="#0400ff"
                                    strokeWidth={0}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    strokeDasharray="none"
                                    transform="rotate(114.38011)"
                                    >
                                    <tspan
                                        id="tspan4-8"
                                        x={42.91618}
                                        y={-187.62303}
                                        fontSize={0.194248}
                                        strokeWidth={0}
                                    >
                                        VII VIII IX X XII XIII
                                    </tspan>
                                    </text>

                                    <text
                                    id="text3-3-9"
                                    x={-187.76593}
                                    y={-41.592644}
                                    fontSize={0.25552}
                                    fontWeight={'800'}
                                    fontFamily="PMingLiU-ExtB"
                                    textAnchor="start"
                                    fill="#0400ff"
                                    fillOpacity={1}
                                    stroke="#0400ff"
                                    strokeWidth={0}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    strokeDasharray="none"
                                    transform="matrix(-0.90364269,-0.42988724,0.43080451,-0.90168675,0,0)"
                                    >
                                    <tspan
                                        id="tspan3-7-8"
                                        x={-187.76593}
                                        y={-41.592644}
                                        fontSize={0.25552}
                                        strokeWidth={0}
                                        strokeDasharray="none"
                                    >
                                        I II III IV V VI
                                    </tspan>
                                    </text>

                                    <text
                                    id="text4-82"
                                    x={-184.81764}
                                    y={-44.533222}
                                    fontSize={0.213453}
                                    fontWeight={'800'}
                                    fontFamily="PMingLiU-ExtB"
                                    textAnchor="start"
                                    fill="#0400ff"
                                    fillOpacity={1}
                                    stroke="#0400ff"
                                    strokeWidth={0}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    strokeDasharray="none"
                                    transform="rotate(-155.457)"
                                    >
                                    <tspan
                                        id="tspan4-89"
                                        x={-184.81764}
                                        y={-44.533222}
                                        fontSize={0.213453}
                                        strokeWidth={0}
                                    >
                                        VII VIII IX X XII XIII
                                    </tspan>
                                    </text>

                                    <text
                                    id="text3-5"
                                    x={-40.64827}
                                    y={183.40645}
                                    fontSize={0.25552}
                                    fontWeight={'800'}
                                    fontFamily="PMingLiU-ExtB"
                                    textAnchor="start"
                                    fill="#0400ff"
                                    fillOpacity={1}
                                    stroke="#0400ff"
                                    strokeWidth={0}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    strokeDasharray="none"
                                    transform="matrix(0.43104718,-0.90308996,0.90113285,0.43196193,0,0)"
                                    >
                                    <tspan
                                        id="tspan3-8"
                                        x={-40.64827}
                                        y={183.40645}
                                        fontSize={0.25552}
                                        strokeWidth={0}
                                        strokeDasharray="none"
                                    >
                                        I II III IV V VI
                                    </tspan>
                                    </text>

                                    <text
                                    id="text4-8-2"
                                    x={-42.301525}
                                    y={182.47665}
                                    fontSize={0.211456}
                                    fontWeight={'800'}
                                    fontFamily="PMingLiU-ExtB"
                                    textAnchor="start"
                                    fill="#0400ff"
                                    fillOpacity={1}
                                    stroke="#0400ff"
                                    strokeWidth={0}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    strokeDasharray="none"
                                    transform="rotate(-65.5852)"
                                    >
                                    <tspan
                                        id="tspan4-8-5"
                                        x={-42.301525}
                                        y={182.47665}
                                        fontSize={0.211456}
                                        strokeWidth={0}
                                    >
                                        VII VIII IX X XII XIII
                                    </tspan>
                                    </text>



                                </motion.g>
                        </g>
                    </motion.svg>
                </motion.div>  
            }

        </AnimatePresence>

    )
}

export default InnerSquare;
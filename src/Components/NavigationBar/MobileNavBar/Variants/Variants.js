export const menuVariant = {
    hide: {
        clipPath: 'circle(20px at center center)',
    },
    show: {
        clipPath: 'circle(100% at center center)',
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
            when: 'beforeChildren'
        }
    },
    exit: {
        clipPath: 'circle(20px at 255px 60px)',
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
            when: 'afterChildren'
        }
    }
}

export const menuItemVariant = {
    hide: {
        y: -50,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
    },
    exit: {
        y: -50,
        opacity: 0,
    }
}
const transitions = {};

transitions.copyTextboxVariant = {
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [.38, .25, 0, 1],
            duration: 1
        }
    },
    initial: {
        opacity: 0,
        y: 50
    }
}

transitions.ctaUnderlineVariant = {
    animate: {
        scaleX: 1,
        transition: {
            duration: .5,
            delay: .5
        }
    },
    initial: {
        scaleX: 0
    }
}

transitions.stagger = {
    animate: {
        transition: {
            staggerChildren: .1
        }
    }
}

export default transitions;
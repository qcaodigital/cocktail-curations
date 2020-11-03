const transitions = {};

transitions.headerVariant = {
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

transitions.headerVariantDelayed = {
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [.38, .25, 0, 1],
            duration: 1,
            delay: .5
        }
    },
    initial: {
        opacity: 0,
        y: 50
    }
}

transitions.stagger = {
    animate: {
        transition: {
            staggerChildren: .2
        }
    }
}

transitions.blockQuoteText = {
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.5,
            ease: [.38, .25, 0, 1],
        }
    },
    initial: {
        opacity: 0,
        x: 100
    }
}

export default transitions;
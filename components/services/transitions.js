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

transitions.blockQuoteText_bars = {
    animate: {
        opacity: 1,
        x: 0,
        y: '-50%',
        transition: {
            duration: 1.5,
            ease: [.38, .25, 0, 1],
        }
    },
    initial: {
        opacity: 0,
        y: '-50%',
        x: 100
    }
}

transitions.mainServiceImgScale = {
    animate: {
        scale: 1,
        transition: {
            duration: 3,
            ease: [.35, .25, 0, 1]
        }
    },
    initial: {
        scale: 1.15,
        transition: {
            duration: 1.5
        }
    }
}

transitions.spacerButtonBorderX = {
    animate: {
        scaleX: 1,
        y: 0,
        transition: {
            // ease: [.38, .25, 0, 1],
            duration: 1,
            delay: .75
        }
    },
    initial: {
        scaleX: 0,
        y: 1,
        transition: {
            duration: 0
        }
    }
}

transitions.spacerButtonBorderY = {
    animate: {
        scaleY: 1,
        transition: {
            ease: [.38, .25, 0, 1],
            duration: .75
        }
    },
    initial: {
        scaleY: 0,
        transition: {
            duration: 0
        }
    }
}

export default transitions;
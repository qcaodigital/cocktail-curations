const transitions = {};

transitions.mobileTransition = {
    initial: {
        opacity: 0,
        x: 0,
        y: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

transitions.panFromRight = {
    initial: {
        opacity: 0,
        x: 0,
        y: 0
    },
    animate: {
        opacity: 1,
        x: -15,
        y: 15,
        transition: {
            duration: 1,
            opacity: {
                duration: 1.5
            }
        }
    }
}

transitions.panFromLeft = {
    initial: {
        opacity: 0,
        x: 0,
        y: 0
    },
    animate: {
        opacity: 1,
        x: 15,
        y: -15,
        transition: {
            duration: 1,
            opacity: {
                duration: 1.5
            }
        },
    }
}

transitions.scale = {
    initial: {
        scale: 1
    },
    animate: {
        scale: 1.05,
        transition: {
            duration: 1,
            delay: .75
        }
    }
}

export default transitions;
const transitions = {};

transitions.mobileTransition = {
    initial: {
        opacity: 0
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

export default transitions;
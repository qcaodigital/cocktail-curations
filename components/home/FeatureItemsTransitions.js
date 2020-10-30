const transitions = {};

transitions.scaleUp = {
    close: {
        scale: 0,
        transition: {
            duration: .25
        }
    },
    open: {
        scale: 1
    }
}

transitions.infoButton = {
    close: {
        scale: 1
    },
    open: {
        scale: 0,
        transition: {
            duration: .25,
            ease: [.56, -.01, .16, 1]
        }
    }
}

transitions.fadeIn = {
    close: {
        display: 'none',
        transition: {
            duration: 0
        }
    },
    open: {
        display: 'inline',
        transition: {
            duration: .2
        }
    }
}

transitions.stagger = {
    close: {
        transition: {
            staggerChildren: 0
        }
    },
    open: {
        transition: {
            staggerChildren: .005
        }
    }
}

export default transitions;
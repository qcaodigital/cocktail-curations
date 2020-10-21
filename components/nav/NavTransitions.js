const transitions = {};
const ease = [.6, -.01, .16, 1];

transitions.navFadeIn = {
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

transitions.navFadeInAndUp = {
    initial: {
        opacity: 0,
        y: '-25%'
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
            ease: ease
        }
    }
}

transitions.navStagger = {
    initial: {
        transition: {
            staggerChildren: .05
        }
    },
    animate: {
        transition: {
            staggerChildren: .1
        }
    }
}

export default transitions;
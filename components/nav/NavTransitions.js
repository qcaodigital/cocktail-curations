const transitions = {};
const ease = [.6, -.01, .16, 1];

transitions.nav = {
    show: {
        opacity: 1,
        transition: {
            duration: 1.25
        }
    },
    hide: {
        opacity: 0,
        transition: {
            duration: .5,
            delay: 0,
        }
    }
}

transitions.navList = {
    hide: {
        opacity: 0,
        y: '-50%',
        transition: {
            duration: .6,
            staggerChildren: .1,
            ease: ease
        }
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            staggerChildren: .1,
            ease: ease
        }
    }
}

export default transitions;
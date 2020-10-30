const transitions = {};
const ease = [.6, -.01, .16, 1];

transitions.mainFade = {
    hide: {
        opacity: 0,
    },
    showWithDelay: {
        opacity: 1,
        transition: {
            duration: .75,
            delay: 1
        }
    },
    show: {
        opacity: 1,
        transition: {
            duration: .75
        }
    },
    exit: {
        opacity: 0
    }
}

export default transitions;
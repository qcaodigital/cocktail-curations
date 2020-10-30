const transitions = {};

transitions.fadeUp = {
    initial: {
        y: '4.5px',
        opacity: 0
    },
    animate: {
        y: '0px',
        opacity: 1,
        transition: {
            duration: .45
        }
    }
}

transitions.headingContainer = {
    animate: {
        transition: {
            delayChildren: 1.5,
            staggerChildren: .2
        }
    }
}

export default transitions;
export const galleryTransitions = {
    imgStagger: {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: .3,
                duration: 1
            }
        }
    },
    imgs: {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    }
}

export const modalTransitions = {
    img: {
        exit: {
            opacity: .3,
            transition: {
                duration: .35
            }
        },
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                duration: .7
            }
        }
    }
}
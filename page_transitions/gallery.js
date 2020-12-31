export const galleryTransitions = {
    imgStagger: {
        animate: {
            transition: {
                delayChildren: .45,
                staggerChildren: .3
            }
        }
    },
    imgs: {
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
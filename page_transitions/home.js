const transitions = {};

export const landingTransitions = {
    background: {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: .8,
            transition: {
                duration: 1
            }
        }
    },
    headingContainer: {
        animate: {
            transition: {
                delayChildren: 1.5,
                staggerChildren: .1
            }
        }
    },
    textFadeUp: {
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
    },
    CTAContainer: {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 2,
                duration: .75
            }
        }
    }
}

export const headerTransitions = {
    container: {
        inView: {
            transition: {
                staggerChildren: .15,
            }
        }
    },
    text: {
        outOfView: {
            opacity: 0
        },
        inView: {
            opacity: 1,
            transition: {
                ease: [.3, 0, .5, 1],
                duration: 1
            }
        }
    }
}

export const galleryTransitions = {
    mobileTransition: {
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
    },
    panFromRight: {
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
    },
    panFromLeft: {
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
    },
    scale: {
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
}

export const featureTransitions = {
    scaleUp: {
        close: {
            scale: 0,
            transition: {
                duration: .25
            }
        },
        open: {
            scale: 1
        }
    },
    infoButton: {
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
}


export default transitions;
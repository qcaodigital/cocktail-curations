export const landingTransitions = {
    serviceBox: {
        animate: {
            opacity: 1,
            transition: {
                duration: .35,
                delay: .5
            }
        },
        initial: {
            opacity: 0
        }
    },
    serviceBoxChildren: {
        animate: {
            opacity: 1,
            transition: {
                duration: 1.5,
                delay: 1
            }
        },
        initial: {
            opacity: 0
        }
    }
}

export const copyTransitions = {
    textboxVariant: {
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                ease: [.38, .25, 0, 1],
                duration: 1
            }
        },
        initial: {
            opacity: 0,
            y: 50
        }
    },
    ctaUnderlineVariant: {
        animate: {
            scaleX: 1,
            transition: {
                duration: .5,
                delay: .5
            }
        },
        initial: {
            scaleX: 0
        }
    },
    stagger: {
        animate: {
            transition: {
                staggerChildren: .1
            }
        }
    }
}

export const sectionTransitions = {
    headerVariant: {
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                ease: [.38, .25, 0, 1],
                duration: 1
            }
        },
        initial: {
            opacity: 0,
            y: 50
        }
    },
    headerVariantDelayed: {
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                ease: [.38, .25, 0, 1],
                duration: 1,
                delay: .5
            }
        },
        initial: {
            opacity: 0,
            y: 50
        }
    },
    stagger: {
        animate: {
            transition: {
                staggerChildren: .2
            }
        }
    },
    blockQuoteText: {
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.5,
                ease: [.38, .25, 0, 1],
            }
        },
        initial: {
            opacity: 0,
            x: 100
        }
    },
    blockQuoteText_bars: {
        animate: {
            opacity: 1,
            x: 0,
            y: '-50%',
            zIndex: 1,
            transition: {
                duration: 1.5,
                ease: [.38, .25, 0, 1]
            }
        },
        initial: {
            opacity: 0,
            y: '-50%',
            x: 100
        }
    },
    mainImgScale: {
        animate: {
            scale: 1,
            transition: {
                duration: 3,
                ease: [.35, .25, 0, 1]
            }
        },
        initial: {
            scale: 1.15,
            transition: {
                duration: .5
            }
        }
    },
    opacity: {
        animate: {
            opacity: 1,
            transition: {
                ease: [.38, .25, 0, 1],
                duration: 1,
                delay: 1
            }
        },
        initial: {
            opacity: 0
        }
    }
}

export const spacerTransitions = {
    headerScale: {
        animate: {
            scale: 1,
            transition: {
                easing: [.38, .25, 0, 1],
                delay: .2,
                duration: .15
            }
        },
        initial: {
            scale: 1.1
        }
    }
}
// BOX ANIMATION VALUES //
import Sustainability from './../components/team/Sustainability';
const topInitDelay = .5;
const topInitDuration = .5;

const sideDelay = topInitDelay + topInitDuration;
const sideDuration = .75;

const bottomDelay = sideDelay + sideDuration;
const bottomDuration = 2;
// -------------------  //

export const landingTransitions = {
    headerUnderline: {
        animate: {
            scaleX: 1,
            transition: {
                duration: 1.25
            }
        },
        initial: {
            scaleX: 0
        }
    },
    box: {
        top: {
            animate: {
                scaleX: 1,
                transition: {
                    duration: topInitDuration,
                    delay: topInitDelay
                }
            },
            initial: {
                scaleX: 0
            }
        },
        side: {
            animate: {
                scaleY: 1,
                transition: {
                    duration: sideDuration,
                    delay: sideDelay
                }
            },
            initial: {
                scaleY: 0
            }
        },
        bottom: {
            animate: {
                scaleX: 1,
                transition: {
                    duration: bottomDuration,
                    delay: bottomDelay
                }
            },
            initial: {
                scaleX: 0
            }
        }
    },
    gallery: {
        mainImg: {
            animate: {
                y: 0,
                opacity: 1,
                transition: {
                    delay: 1,
                    duration: 1
                }
            },
            initial: {
                y: 10,
                opacity: 0
            }
        },
        sideImg: {
            animate: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: 2
                }
            },
            initial: {
                opacity: 0,
                y: 5
            }
        }
    },
    
}

export const storyTransitions = {
    blockContainer: {
        animate: {
            transition: {
                staggerChildren: .5
            }
        }
    },
    textContainer: {
        animate: {
            transition: {
                staggerChildren: .15
            }
        }
    },
    text: {
        animate: {
            opacity: .7,
            y: 0,
            transition: {
                duration: 1
            }
        },
        initial: {
            opacity: 0,
            y: 30
        }
    }
}

export const infoTransitions = {
    contentContainer: {
        img: {
            animate: {
                scale: 1,
                transition: {
                    duration: 2
                }
            },
            initial: {
                scale: 1.15
            }
        },
        text: {
            animate: {
                opacity: 1,
                transition: {
                    duration: 1
                }
            },
            initial: {
                opacity: 0
            }
        },
        link: {
            animate: {
                scaleX: 1,
                transition: {
                    duration: 1
                }
            },
            initial: {
                scaleX: 0
            }
        }
    }
}

export const personnelTransitions = {
    nameContainer: {
        animate: {
            transition: {
                staggerChildren: .2
            }
        }
    },
    name: {
        animate: {
            y: 0,
            transition: {
                duration: .75
            }
        },
        initial: {
            y: '100%'
        }
    }
}

export const sustainabilityTransitions = {
    subHeader: {
        animate: {
            opacity: 1,
            transition: {
                duration: 1
            }
        },
        initial: {
            opacity: 0
        }
    },
    text: {
        animate: {
            opacity: 1,
            transition: {
                duration: 1
            }
        },
        initial: {
            opacity: 0
        }
    }
}
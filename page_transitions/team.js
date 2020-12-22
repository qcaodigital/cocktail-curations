// |// BOX ANIMATION VALUES //
// const topInitDelay = .5;
// const topInitDuration = .5;

// const sideDelay = topInitDelay + topInitDuration;
// const sideDuration = .75;

// const bottomDelay = sideDelay + sideDuration;
// const bottomDuration = 2;
// // -------------------  //

// export const landingTransitions = {
//     headerUnderline: {
//         animate: {
//             scaleX: 1,
//             transition: {
//                 duration: 1.25
//             }
//         },
//         initial: {
//             scaleX: 0
//         }
//     },
//     box: {
//         top: {
//             animate: {
//                 scaleX: 1,
//                 transition: {
//                     duration: topInitDuration,
//                     delay: topInitDelay
//                 }
//             },
//             initial: {
//                 scaleX: 0
//             }
//         },
//         side: {
//             animate: {
//                 scaleY: 1,
//                 transition: {
//                     duration: sideDuration,
//                     delay: sideDelay
//                 }
//             },
//             initial: {
//                 scaleY: 0
//             }
//         },
//         bottom: {
//             animate: {
//                 scaleX: 1,
//                 transition: {
//                     duration: bottomDuration,
//                     delay: bottomDelay
//                 }
//             },
//             initial: {
//                 scaleX: 0
//             }
//         }
//     },
//     gallery: {
//         mainImg: {
//             animate: {
//                 y: 0,
//                 opacity: 1,
//                 transition: {
//                     delay: 1,
//                     duration: 1
//                 }
//             },
//             initial: {
//                 y: 10,
//                 opacity: 0
//             }
//         },
//         sideImg: {
//             animate: {
//                 opacity: 1,
//                 y: 0,
//                 transition: {
//                     duration: 1,
//                     delay: 2
//                 }
//             },
//             initial: {
//                 opacity: 0,
//                 y: 5
//             }
//         }
//     },
// }

export const landingTransitions = {
    landingContainer: {
        animate: {
            transition: {
                staggerChildren: .25
            }
        }
    },
    header: {
        animate: {
            transition: {
                staggerChildren: .15
            }
        },
        children: {
            animate: {
                opacity: 1,
                transition: {
                    duration: .8
                }
            },
            initial: {
                opacity: 0,
            }
        }
    },
    carousel: {
        animate: {
            opacity: 1,
            transition: {
                duration: 1
            }
        },
        initial: {
            opacity: 0,
        },
        mobile: {
            inc: {
                mainImg: {
                    initial: {
                        opacity: 0,
                        x: '-100%',
                        y: '-50%',
                        scale: .8,
                        transition: {
                            duration: .5
                        }
                    },
                    exit: {
                        opacity: 0,
                        x: '-0%',
                        y: '-50%',
                        scale: .8,
                        transition: {
                            duration: .5
                        }
                    },
                    animate: {
                        opacity: 1,
                        x: '-50%',
                        y: '-50%',
                        scale: 1,
                        transition: {
                            duration: .5
                        }
                    }
                },
                rightImg: {
                    initial: {
                        x: '-50%',
                        y: '-50%',
                        scale: 1,
                        opacity: 1
                    },
                    animate: {
                        x: '0%',
                        y: '-50%',
                        scale: .8,
                        opacity: .5,
                        transition: {
                            duration: .5
                        }
                    },
                    exit: {
                        x: '50%',
                        y: '-50%',
                        opacity: 0,
                        transition: {
                            duration: .5
                        }
                    }
                },
                leftImg: {
                    initial: {
                        x: '-50%',
                        y: '-50%',
                        scale: .8,
                        opacity: 0
                    },
                    animate: {
                        x: '0%',
                        y: '-50%',
                        scale: .8,
                        opacity: .5,
                        transition: {
                            duration: .5
                        }
                    },
                    exit: {
                        x: '50%',
                        y: '-50%',
                        scale: 1,
                        transition: {
                            duration: .5
                        }
                    }
                }
            },
            dec: {
                mainImg: {
                    initial: {
                        opacity: 0,
                        x: '0%',
                        y: '-50%',
                        scale: .8,
                        transition: {
                            duration: .5
                        }
                    },
                    exit: {
                        opacity: 0,
                        x: '-100%',
                        y: '-50%',
                        scale: .8,
                        transition: {
                            duration: .5
                        }
                    },
                    animate: {
                        opacity: 1,
                        x: '-50%',
                        y: '-50%',
                        scale: 1,
                        transition: {
                            duration: .5,
                        }
                    },
                },
                rightImg: {
                    initial: {
                        x: '50%',
                        y: '-50%',
                        scale: .8,
                        opacity: 0
                    },
                    animate: {
                        x: '0%',
                        y: '-50%',
                        scale: .8,
                        opacity: .5,
                        transition: {
                            duration: .5
                        }
                    },
                    exit: {
                        x: '-50%',
                        y: '-50%',
                        opacity: .5,
                        scale: 1,
                        transition: {
                            duration: .5
                        }
                    }
                },
                leftImg: {
                    initial: {
                        x: '50%',
                        y: '-50%',
                        scale: 1,
                        opacity: 1
                    },
                    animate: {
                        x: '0%',
                        y: '-50%',
                        scale: .8,
                        opacity: .5,
                        transition: {
                            duration: .5
                        }
                    },
                    exit: {
                        x: '-50%',
                        y: '-50%',
                        scale: .8,
                        opacity: 0,
                        transition: {
                            duration: .5
                        }
                    }
                }
            }
        },
        desktop: {
            inc: {
                mainImg: {
                    initial: {
                        opacity: 0,
                        x: '0%',
                        y: '-85%',
                        scale: .8,
                        transition: {
                            duration: .5
                        }
                    },
                    exit: {
                        opacity: 0,
                        x: '-0%',
                        y: '-15%',
                        scale: .8,
                        transition: {
                            duration: .5
                        }
                    },
                    animate: {
                        opacity: 1,
                        x: '0%',
                        y: '-50%',
                        scale: 1,
                        transition: {
                            duration: .5
                        }
                    }
                },
                rightImg: {
                    initial: {
                        x: '-0%',
                        y: '-50%',
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: .5
                        }
                    },
                    animate: {
                        x: '0%',
                        y: '-15%',
                        scale: .8,
                        opacity: .5,
                        transition: {
                            duration: .5
                        }
                    },
                    exit: {
                        x: '0%',
                        y: '0%',
                        scale: .7,
                        opacity: 0,
                        transition: {
                            duration: .5
                        }
                    }
                },
                leftImg: {
                    initial: {
                        x: '0%',
                        y: '-100%',
                        scale: .5,
                        opacity: 0,
                        transition: {
                            duration: .5
                        }
                    },
                    animate: {
                        x: '0%',
                        y: '-85%',
                        scale: .8,
                        opacity: .5,
                        transition: {
                            duration: .5
                        }
                    },
                    exit: {
                        x: '0%',
                        y: '-50%',
                        scale: 1,
                        transition: {
                            duration: .5
                        }
                    }
                }
            },
            dec: {
                mainImg: {
                    exit: {
                        opacity: 0,
                        x: '0%',
                        y: '-85%',
                        scale: .8,
                        transition: {
                            duration: .5
                        }
                    },
                    initial: {
                        opacity: 0,
                        x: '-0%',
                        y: '-15%',
                        scale: .8,
                        transition: {
                            duration: .5
                        }
                    },
                    animate: {
                        opacity: 1,
                        x: '0%',
                        y: '-50%',
                        scale: 1,
                        transition: {
                            duration: .5
                        }
                    }
                },
                rightImg: {
                    exit: {
                        x: '-0%',
                        y: '-50%',
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: .5
                        }
                    },
                    animate: {
                        x: '0%',
                        y: '-15%',
                        scale: .8,
                        opacity: .5,
                        transition: {
                            duration: .5
                        }
                    },
                    initial: {
                        x: '0%',
                        y: '0%',
                        scale: .5,
                        opacity: 0,
                        transition: {
                            duration: .5
                        }
                    }
                },
                leftImg: {
                    exit: {
                        x: '0%',
                        y: '-100%',
                        scale: .7,
                        opacity: 0,
                        transition: {
                            duration: .5
                        }
                    },
                    animate: {
                        x: '0%',
                        y: '-85%',
                        scale: .8,
                        opacity: .5,
                        transition: {
                            duration: .5
                        }
                    },
                    initial: {
                        x: '0%',
                        y: '-50%',
                        scale: 1,
                        transition: {
                            duration: .5
                        }
                    }
                }
            }
        }
    }
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
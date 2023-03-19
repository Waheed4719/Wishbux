const shadesAnim = {
    initial: {
        opacity: 0,
        x: -30
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: 0.5
        }
    }
};

const shoeAnim = {
    initial: {
        opacity: 0,
        x: 60
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: 0.5
        }
    }
};

const jewelryAnim = {
    initial: {
        opacity: 0,
        x: 20
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: 0.5
        }
    }
};

const macbookAnim = {
    initial: {
        opacity: 0,
        x: -20
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: 0.5
        }
    }
};

const heelAnim = {
    initial: {
        opacity: 0,
        x: -20
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: 0.5
        }
    }
};

const circleAnim = {
    initial: {
        opacity: 0,
        scale: 0,
        x: '-50%',
        y: '-50%'
    },
    animate: {
        opacity: 1,
        scale: 1,
        x: '-50%',
        y: '-50%',
        transition: {
            duration: 0.2
        }
    }
};

const sentenceAnim = (delay = 0.5) => ({
    hidden: {
        y: 100
    },
    visible: {
        y: 0,
        transition: {
            duration: 1,
            delay
        }
    }
});

const paraAnim = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.5
        }
    }
};

const listAnim = {
    initial: {
        opacity: 0,
        y: 40
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.5,
            staggerChildren: 1
        }
    }
};

const howItWorksListVariants = {
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delayChildren: 0.5,
            staggerChildren: 0.1
        }
    },
    hidden: {
        opacity: 0
    }
};

const howItWorksListItemVariants = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    },
    hidden: {
        opacity: 0,
        y: 40
    }
};

const shoeAnim2 = {
    initial: {
        opacity: 0,
        x: -60,
        y: 20,
        scale: 0.4
    },
    animate: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: 0.9
        }
    }
};

const phoneAnim = {
    initial: {
        opacity: 0,
        x: 60,
        y: -20,
        scale: 0.4
    },
    animate: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: 1
        }
    }
};

const guyAnim = {
    initial: {
        opacity: 0,
        scale: 0.6
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: 0.6
        }
    }
};

const girlAnim = {
    initial: {
        opacity: 0,
        scale: 0.6
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: 0.8
        }
    }
};

const logoAnim = {
    initial: {
        scale: 0.5,
        opacity: 0
    },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.1,
            duration: 0.5
        }
    }
};

const benefitContainerAnim = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};
const benefitItemAnim = {
    hidden: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const textContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.2,
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};
const wordVariant = {
    hidden: { y: 50 },
    visible: { y: 0, transition: { duration: 0.5 } }
};

export {
    shadesAnim,
    shoeAnim,
    shoeAnim2,
    phoneAnim,
    guyAnim,
    girlAnim,
    logoAnim,
    jewelryAnim,
    macbookAnim,
    heelAnim,
    circleAnim,
    sentenceAnim,
    paraAnim,
    listAnim,
    howItWorksListVariants,
    howItWorksListItemVariants,
    benefitContainerAnim,
    benefitItemAnim,
    textContainerVariant,
    wordVariant
};

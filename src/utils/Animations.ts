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
    initial: {
        y: 100
    },
    animate: {
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

export {
    shadesAnim,
    shoeAnim,
    jewelryAnim,
    macbookAnim,
    heelAnim,
    circleAnim,
    sentenceAnim,
    paraAnim,
    listAnim,
    howItWorksListVariants,
    howItWorksListItemVariants
};

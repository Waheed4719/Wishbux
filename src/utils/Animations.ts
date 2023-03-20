const shadesAnim = {
    hidden: {
        opacity: 0,
        x: -30
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: 0.5
        }
    }
};

const shoeAnim = {
    hidden: {
        opacity: 0,
        x: 60
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: 0.5
        }
    }
};

const jewelryAnim = {
    hidden: {
        opacity: 0,
        x: 20
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: 0.5
        }
    }
};

const macbookAnim = {
    hidden: {
        opacity: 0,
        x: -20
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: 0.5
        }
    }
};

const heelAnim = {
    hidden: {
        opacity: 0,
        x: -20
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: 0.5
        }
    }
};

const circleAnim = {
    hidden: {
        opacity: 0,
        scale: 0,
        x: '-50%',
        y: '-50%'
    },
    visible: {
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
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.5
        }
    }
};

const listAnim = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
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
    hidden: {
        opacity: 0,
        x: -60,
        y: 20,
        scale: 0.4
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: 1.1
        }
    }
};

const phoneAnim = {
    hidden: {
        opacity: 0,
        x: 60,
        y: -20,
        scale: 0.4
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: 1.2
        }
    }
};

const guyAnim = {
    hidden: {
        opacity: 0,
        scale: 0.6
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: 0.6
        }
    }
};

const topArrowAnim = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.7
        }
    }
};

const bottomArrowAnim = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.9
        }
    }
};

const girlAnim = {
    hidden: {
        opacity: 0,
        scale: 0.6
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: 1.0
        }
    }
};

const logoAnim = {
    hidden: {
        scale: 0.5,
        opacity: 0
    },
    visible: {
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
            staggerChildren: 0.05,
            delayChildren: 0.3
        }
    }
};
const wordVariant = {
    hidden: { y: 80 },
    visible: { y: 0, transition: { duration: 1 } }
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
    wordVariant,
    topArrowAnim,
    bottomArrowAnim
};

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

export { shadesAnim, shoeAnim, jewelryAnim, macbookAnim, heelAnim, circleAnim };

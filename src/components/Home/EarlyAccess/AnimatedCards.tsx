import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Card from './Card';

import bagImage from '../../../assets/images/bag.png';
import shoeImage from '../../../assets/images/shoe2.png';
import macbookImage from '../../../assets/images/macbook2.png';
import jewelryImage from '../../../assets/images/jewelry.png';
import shadesImage from '../../../assets/images/shades2.png';

const images = [bagImage, shadesImage, macbookImage, shoeImage, jewelryImage];

const AnimatedCards = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const [domEntered, setDomEntered] = useState<boolean>(false);

    useEffect(() => {
        if (isInView) {
            setDomEntered(true);
        }
    }, [isInView]);
    return (
        <motion.div className='w-full flex relative' ref={ref}>
            {images.map((image, i) => (
                <Card image={image} index={i} domEntered={domEntered} />
            ))}
        </motion.div>
    );
};
export default AnimatedCards;

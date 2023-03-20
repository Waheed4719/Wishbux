import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import bag from '../../../assets/images/bag.png';
import jewelry from '../../../assets/images/jewelry.png';
import shades from '../../../assets/images/shades.png';
import macbook from '../../../assets/images/macbook.png';
import heels from '../../../assets/images/heels.png';
import shoe from '../../../assets/images/shoe.png';
import {
    shoeAnim,
    heelAnim,
    shadesAnim,
    macbookAnim,
    jewelryAnim,
    circleAnim,
    wordVariant
} from '../../../utils/Animations';

const Hero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const [domEntered, setDomEntered] = useState<boolean>(false);

    useEffect(() => {
        if (isInView) {
            setDomEntered(true);
        }
    }, [isInView]);

    return (
        <section className='section-1'>
            <div className='main-block'>
                <h1>
                    Turn your wishes <br />
                    <motion.span
                        variants={wordVariant}
                        initial='hidden'
                        animate='visible'
                        className='coloured transition-all leading-[1.1] text-[5.2rem] md:text-[7.2rem] tracking-[-2.5px] font-[900]'
                    >
                        into cash
                    </motion.span>
                </h1>
                <div className='main-block__text'>
                    Receive cash gifts privately, securely and without any fees
                </div>
                <button type='submit' className='round-btn'>
                    Join the waiting list
                </button>

                <div className='main-block__images-wrap'>
                    <div className='main-block__images'>
                        <motion.div className='h-[198px]' ref={ref}>
                            <img className='w-full' src={bag} alt='bag' loading='eager' />
                        </motion.div>
                        <div className='px-[35px]'>
                            <h3 className='text-[18px] font-bold leading-[1.3]'>
                                Louis Vuitton Monogram Bag
                            </h3>
                            <p className='text-[14px] mt-2 font-regular'>$1830.00</p>
                            <button
                                type='submit'
                                className='w-full rounded-full bg-[#27b0e6] text-[1.4rem] font-semibold text-white px-6 py-4 mt-6'
                            >
                                Add to wish list
                            </button>
                        </div>
                    </div>
                    <motion.div
                        initial='hidden'
                        animate={domEntered ? 'visible' : ''}
                        variants={shoeAnim}
                        className='absolute top-[-30px] z-[3] left-[-230px]'
                    >
                        <img className='h-[130px]' src={shoe} alt='shoe' />
                    </motion.div>
                    <motion.div
                        initial='hidden'
                        animate={domEntered ? 'visible' : ''}
                        variants={shadesAnim}
                        className='absolute top-[-40px] z-10 right-[-80px]'
                    >
                        <img className='h-[130px]' src={shades} alt='shades' />
                    </motion.div>
                    <motion.div
                        initial='hidden'
                        animate={domEntered ? 'visible' : ''}
                        variants={heelAnim}
                        className='absolute top-[120px] z-10 right-[-120px]'
                    >
                        <img className='h-[110px]' src={heels} alt='heels' />
                    </motion.div>
                    <motion.div
                        initial='hidden'
                        animate={domEntered ? 'visible' : ''}
                        variants={macbookAnim}
                        className='absolute bottom-[-50px] z-3 right-[-120px]'
                    >
                        <img className='h-[160px]' src={macbook} alt='macbook' />
                    </motion.div>
                    <motion.div
                        initial='hidden'
                        animate={domEntered ? 'visible' : ''}
                        variants={jewelryAnim}
                        className='absolute top-[170px] z-10 left-[-110px]'
                    >
                        <img className='h-[180px]' src={jewelry} alt='jewelry' />
                    </motion.div>
                    <motion.div
                        className='circleWrapper'
                        variants={circleAnim}
                        initial='hidden'
                        animate={domEntered ? 'visible' : ''}
                    >
                        <motion.div className='circle' />
                    </motion.div>
                </div>
            </div>

            <div className='section-1-decoration' />
        </section>
    );
};

export default Hero;

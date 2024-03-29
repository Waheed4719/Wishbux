import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import bag from '../../../assets/images/bag.png';
import jewelry from '../../../assets/images/jewelry.png';
import shades from '../../../assets/images/shades.png';
import macbook from '../../../assets/images/macbook.png';
import heels from '../../../assets/images/heels.png';
import shoe from '../../../assets/images/shoe.png';
import dollarBlueIcon from '../../../assets/images/dollar-blue.svg';
import bellIcon from '../../../assets/images/bell.svg';
import {
    shoeAnim,
    heelAnim,
    shadesAnim,
    macbookAnim,
    jewelryAnim,
    circleAnim,
    wordVariant,
    alertVariantLeft,
    alertVariantRight
} from '../../../utils/Animations';

import Alert from '../../common/Alert';

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
            <div className='h-[800px] md:h-[1000px] text-[100%] max-w-full w-[1000px] relative z-[3] mx-auto mt-[6rem]'>
                <h1 className='text-[4.6rem] transition-all md:text-[7.2rem]'>
                    Turn your wishes <br />
                    <motion.span
                        variants={wordVariant}
                        initial='hidden'
                        animate='visible'
                        className='coloured transition-all leading-[1.1]  tracking-[-2.5px] font-[900]'
                    >
                        into cash
                    </motion.span>
                </h1>
                <div className='mt-[3.1rem] leading-[100%] text-[#272744] px-[2.5rem] text-[1.4rem] md:text-[2.1rem] '>
                    Receive cash gifts privately, securely and without any fees
                </div>
                <button type='submit' className='round-btn mt-[3.7rem]'>
                    Join the waiting list
                </button>

                <div className='scale-[0.7] md:scale-100 w-[32.2rem] mt-[10.5rem] mx-auto mb-[8rem] relative text-left'>
                    <div className='main-block__images relative z-[4]'>
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
                                className='w-full transition duration-[0.4s] rounded-full bg-[#27b0e6] text-[1.4rem] font-semibold text-white px-6 py-4 mt-6'
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

                    <Alert
                        className='absolute top-[25%] left-[-20%]'
                        icon={dollarBlueIcon}
                        iconBg='#ebf0f7'
                        title='Account Balance'
                        description='$1340'
                        variants={alertVariantLeft}
                    />

                    <Alert
                        className='absolute bottom-[25%] right-[-20%]'
                        icon={bellIcon}
                        iconBg='#f3faf1'
                        title='New Alert'
                        description='Payment Received'
                        variants={alertVariantRight}
                    />
                </div>
            </div>

            <div className='section-1-decoration' />
        </section>
    );
};

export default Hero;

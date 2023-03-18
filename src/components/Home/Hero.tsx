import { motion } from 'framer-motion';
import bag from '../../assets/images/bag.png';
import jewelry from '../../assets/images/jewelry.png';
import shades from '../../assets/images/shades.png';
import macbook from '../../assets/images/macbook.png';
import heels from '../../assets/images/heels.png';
import shoe from '../../assets/images/shoe.png';
import {
    shoeAnim,
    heelAnim,
    shadesAnim,
    macbookAnim,
    jewelryAnim,
    circleAnim
} from '../../utils/Animations';

const Hero = () => (
    <section className='section-1'>
        <div className='main-block'>
            <h1>
                Turn your wishes <br />
                <span className='coloured leading-[1.3]'>into cash</span>
            </h1>
            <div className='main-block__text'>
                Receive cash gifts privately, securely and without any fees
            </div>
            <button type='submit' className='round-btn'>
                Join the waiting list
            </button>

            <div className='main-block__images-wrap'>
                <div className='main-block__images'>
                    <motion.div>
                        <img className='w-full' src={bag} alt='bag' />
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
                    initial='initial'
                    animate='animate'
                    variants={shoeAnim}
                    className='absolute top-[-30px] z-[3] left-[-230px]'
                >
                    <img className='h-[130px]' src={shoe} alt='shoe' />
                </motion.div>
                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={shadesAnim}
                    className='absolute top-[-40px] z-10 right-[-80px]'
                >
                    <img className='h-[130px]' src={shades} alt='shades' />
                </motion.div>
                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={heelAnim}
                    className='absolute top-[120px] z-10 right-[-120px]'
                >
                    <img className='h-[110px]' src={heels} alt='heels' />
                </motion.div>
                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={macbookAnim}
                    className='absolute bottom-[-50px] z-3 right-[-120px]'
                >
                    <img className='h-[160px]' src={macbook} alt='macbook' />
                </motion.div>
                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={jewelryAnim}
                    className='absolute top-[170px] z-10 left-[-110px]'
                >
                    <img className='h-[180px]' src={jewelry} alt='jewelry' />
                </motion.div>
                <motion.div
                    className='circleWrapper'
                    variants={circleAnim}
                    initial='initial'
                    animate='animate'
                >
                    <motion.div className='circle' />
                </motion.div>
            </div>
        </div>

        <div className='section-1-decoration' />
    </section>
);

export default Hero;

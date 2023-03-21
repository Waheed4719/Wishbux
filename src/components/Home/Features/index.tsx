import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    shoeAnim2,
    textContainerVariant,
    wordVariant,
    howItWorksListVariants,
    howItWorksListItemVariants,
    guyAnim,
    girlAnim,
    phoneAnim,
    logoAnim,
    topArrowAnim,
    bottomArrowAnim,
    alertVariantLeft,
    alertVariantRight
} from '../../../utils/Animations';
import { features } from '../../../utils/Constants';
import MiniLogo from '../../../assets/images/mini-logo.png';
import ShoeImage from '../../../assets/images/shoe.png';
import GirlImage from '../../../assets/images/girl.png';
import GuyImage from '../../../assets/images/man.png';
import IphoneImage from '../../../assets/images/phone.png';
import giftIcon from '../../../assets/images/gift.svg';
import bellIcon from '../../../assets/images/bell.svg';
import Circle from './Circle';
import AnimatedText from '../../common/AnimatedText';
import Alert from '../../common/Alert';
import ListItem from './ListItem';

const words = ['A', 'free', 'and', 'simple', 'way', 'to', 'share', 'your', 'wishlists'];

const Features = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const [domEntered, setDomEntered] = useState<boolean>(false);

    useEffect(() => {
        if (isInView) {
            setDomEntered(true);
        }
    }, [isInView]);

    return (
        <section className='section-2 bg-[var(--bg-primary)] py-[100px] relative w-full'>
            <div className='max-w-full w-[1310px] px-[3rem] lg:px-[5rem] mx-auto'>
                <div className='mx-auto flex flex-col-reverse lg:flex-row gap-[4rem] lg:gap-0'>
                    <div className='w-full'>
                        <div className='text-start mx-auto mb-[1rem]' ref={ref}>
                            <h3 className='text-center lg:text-left text-[1.1rem] font-[500] text-[#c1aeb8] tracking-[2px]'>
                                FEATURES
                            </h3>
                        </div>
                        <h2 className='text-center lg:text-left text-[#2f415b] text-[5.2rem] md:text-[7.2rem] font-black leading-[1.1]'>
                            <AnimatedText words={words.slice(0, 4)} domEntered={domEntered} />
                            <AnimatedText words={words.slice(4, 7)} domEntered={domEntered} />
                            <span className='overflow-hidden block'>
                                <motion.span
                                    variants={wordVariant}
                                    initial='hidden'
                                    animate={domEntered ? 'visible' : ''}
                                    className='inline-flex coloured leading-[1.1] text-[5.2rem] md:text-[7.2rem] tracking-[-2.5px] font-[900]'
                                >{`${words[7]} ${words[8]}`}</motion.span>
                            </span>
                        </h2>
                        <motion.ul
                            variants={howItWorksListVariants}
                            initial='hidden'
                            animate={domEntered ? 'visible' : ''}
                        >
                            {features.map((feature) => (
                                <ListItem
                                    title={feature.title}
                                    description={feature.description}
                                    icon={feature.icon}
                                />
                            ))}
                        </motion.ul>
                    </div>

                    <div className='relative w-full before:pt-[100%] before:content-[""] mx-auto before:block max-w-[55rem]'>
                        <Circle />
                        <div className='absolute flex items-center justify-center top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[30%]'>
                            <motion.svg
                                variants={topArrowAnim}
                                initial='hidden'
                                animate={domEntered ? 'visible' : ''}
                                className='w-[66%] absolute top-[-65%] left-[-10%] '
                                viewBox='0 0 128 124'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M116.685 123.021C117.187 123.523 118.001 123.523 118.503 123.021L126.682 114.841C127.184 114.339 127.184 113.525 126.682 113.023C126.18 112.521 125.367 112.521 124.865 113.023L117.594 120.294L110.323 113.023C109.821 112.521 109.007 112.521 108.505 113.023C108.003 113.525 108.003 114.339 108.505 114.841L116.685 123.021ZM1.2313 8.86321C0.729347 9.36517 0.729347 10.179 1.2313 10.6809L9.41108 18.8607C9.91303 19.3627 10.7269 19.3627 11.2288 18.8607C11.7308 18.3588 11.7308 17.5449 11.2288 17.043L3.95789 9.77208L11.2288 2.50116C11.7308 1.99921 11.7308 1.18539 11.2288 0.683434C10.7269 0.18148 9.91303 0.18148 9.41108 0.683434L1.2313 8.86321ZM118.879 122.112V22.6254H116.308V122.112H118.879ZM104.74 8.48675H2.14017V11.0574H104.74V8.48675ZM118.879 22.6254C118.879 14.8168 112.549 8.48675 104.74 8.48675V11.0574C111.129 11.0574 116.308 16.2365 116.308 22.6254H118.879Z'
                                    fill='#5EB8F4'
                                />
                            </motion.svg>

                            <motion.svg
                                variants={bottomArrowAnim}
                                initial='hidden'
                                animate={domEntered ? 'visible' : ''}
                                className='w-[66%] absolute bottom-[-60%] right-[-15%]'
                                viewBox='0 0 102 127'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M100.797 117.693C101.299 117.191 101.299 116.378 100.797 115.876L92.6175 107.696C92.1155 107.194 91.3017 107.194 90.7997 107.696C90.2978 108.198 90.2978 109.012 90.7997 109.514L98.0706 116.785L90.7997 124.055C90.2978 124.557 90.2978 125.371 90.7997 125.873C91.3017 126.375 92.1155 126.375 92.6175 125.873L100.797 117.693ZM0.308422 0.773193V103.931H2.87908V0.773193H0.308422ZM14.447 118.07H99.8884V115.499H14.447V118.07ZM0.308422 103.931C0.308422 111.74 6.63849 118.07 14.447 118.07V115.499C8.05823 115.499 2.87908 110.32 2.87908 103.931H0.308422Z'
                                    fill='#5EB8F4'
                                />
                            </motion.svg>
                            <div className='w-full relative before:pt-[100%] before:content-[""] before:block'>
                                <motion.img
                                    variants={logoAnim}
                                    initial='hidden'
                                    animate={domEntered ? 'visible' : ''}
                                    src={MiniLogo}
                                    alt='mini-logo'
                                    className='w-full absolute left-0 top-0'
                                />
                            </div>
                        </div>
                        <motion.div
                            initial='hidden'
                            animate={domEntered ? 'visible' : ''}
                            variants={guyAnim}
                            className='absolute w-[32%] rounded-full top-[12%] z-[3] left-[2%]  shadow-2xl'
                        >
                            <img className='w-full' src={GuyImage} alt='man' />
                        </motion.div>

                        <motion.div
                            initial='hidden'
                            animate={domEntered ? 'visible' : ''}
                            variants={girlAnim}
                            className='absolute w-[32%] rounded-full bottom-[17%] z-[3] right-[-3%] shadow-2xl'
                        >
                            <img className='w-full' src={GirlImage} alt='girl' />
                        </motion.div>
                        <motion.div
                            initial='hidden'
                            animate={domEntered ? 'visible' : ''}
                            variants={shoeAnim2}
                            className='absolute w-[43%] rounded-full top-[22%] z-[3] right-[2%]'
                        >
                            <img className='w-full' src={ShoeImage} alt='Shoe' />
                        </motion.div>
                        <motion.div
                            initial='hidden'
                            animate={domEntered ? 'visible' : ''}
                            variants={phoneAnim}
                            className='absolute w-[40%] top-[50%] z-[3] left-[5%]'
                        >
                            <img className='w-full' src={IphoneImage} alt='Iphone' />
                        </motion.div>
                        <Alert
                            className='absolute top-[25%] left-[20%]'
                            icon={giftIcon}
                            iconBg='#ebf0f7'
                            title='Your follower'
                            description='Sent a gift'
                            variants={alertVariantLeft}
                        />
                        <Alert
                            className='absolute bottom-[27%] right-[18%]'
                            icon={bellIcon}
                            iconBg='#ebf0f7'
                            title='You have a new payment'
                            description='Payment Received'
                            variants={alertVariantRight}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;

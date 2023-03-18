import { motion } from 'framer-motion';
import {
    sentenceAnim,
    howItWorksListVariants,
    howItWorksListItemVariants
} from '../../utils/Animations';
import MiniLogo from '../../assets/images/mini-logo.png';
import Heart from '../../assets/images/heart.svg';
import Money from '../../assets/images/money.svg';
import Microphone from '../../assets/images/microphone.svg';
import PeopleLock from '../../assets/images/people-lock.svg';

const words = ['A', 'free', 'and', 'simple', 'way', 'to', 'share', 'your', 'wishlists'];

type FeatureItemType = {
    title: string;
    description: string;
    icon: string;
};

const features: FeatureItemType[] = [
    {
        title: '100% Payout',
        description: 'No fees or hidden charges',
        icon: Money
    },
    {
        title: 'Send thank-you messages',
        description: 'Thank your followers and send a photo',
        icon: Heart
    },
    {
        title: 'Livestream gift notifications',
        description: 'Get notified in real-time',
        icon: Microphone
    },
    {
        title: 'Two way anonymity',
        description: 'Your privacy is our privacy',
        icon: PeopleLock
    }
];

const Features = () => (
    <section className='section-2 bg-[var(--bg-primary)] py-[100px] relative w-full'>
        <div className='max-w-full w-[1310px] p-[20px] mx-auto'>
            <div className='mx-auto flex flex-col-reverse lg:flex-row gap-[4rem] lg:gap-0'>
                <div className='w-full'>
                    <div className='text-start mx-auto mb-[1rem]'>
                        <h3 className='text-center lg:text-left text-[1.1rem] font-[500] text-[#c1aeb8] tracking-[2px]'>
                            FEATURES
                        </h3>
                    </div>
                    <h2 className='text-center lg:text-left lg:w-[80%] text-[#2f415b] text-[5.2rem] md:text-[7.2rem] font-black leading-[1.1]'>
                        {words.slice(0, 7).map((word, index) => (
                            <span key={word} className='overflow-hidden relative'>
                                <motion.span
                                    variants={sentenceAnim(index * 0.5)}
                                    initial='initial'
                                    animate='animate'
                                    className=' text-[#2f415b] tracking-[-2.5px] font-[900] transition-all'
                                >
                                    {word} {index !== words.length && ` `}
                                </motion.span>
                                {index === 4 && ``}
                            </span>
                        ))}
                        <br />
                        <span className='coloured  transition-all leading-[1.1] text-[5.2rem] md:text-[7.2rem] tracking-[-2.5px] font-[900]'>{`${words[7]} ${words[8]}`}</span>
                    </h2>
                    <motion.ul variants={howItWorksListVariants} initial='hidden' animate='visible'>
                        {features.map((feature) => (
                            <motion.li
                                key={feature.title}
                                variants={howItWorksListItemVariants}
                                className='flex items-center gap-[20px] my-[4rem]'
                            >
                                <div className='rounded-lg bg-[#e0e4ed] w-[50px] h-[50px] flex items-center justify-center'>
                                    <motion.img
                                        src={feature.icon}
                                        alt={feature.title}
                                        className='w-[25px] h-[25px]'
                                    />
                                </div>

                                <div className='flex flex-col items-start'>
                                    <motion.h3 className='text-[#2f415b] text-[1.6rem] font-[900] leading-[1.1] text-start'>
                                        {feature.title}
                                    </motion.h3>
                                    <motion.p className='text-[#2f415b] text-[1.5rem] font-[500] leading-[1.1] mt-3'>
                                        {feature.description}
                                    </motion.p>
                                </div>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>

                <div className='relative w-full lg:w-[50%] before:pt-[100%] before:content-[""] mx-auto before:block max-w-[55rem]'>
                    <div className='absolute top-0 left-0 h-full w-full z-0'>
                        <motion.svg
                            className='mx-auto w-full h-full'
                            width='533'
                            height='533'
                            viewBox='0 0 533 533'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <motion.circle
                                animate={{
                                    rotate: 360,
                                    transition: { duration: 30, delay: 0.2, repeat: Infinity }
                                }}
                                cx='266.805'
                                cy='266.678'
                                r='265.42'
                                stroke='#23344D'
                                strokeWidth='1.28533'
                                strokeDasharray='2.57 12.85'
                            />
                            <motion.circle
                                animate={{
                                    rotate: 360,
                                    transition: { duration: 39, delay: 0.2, repeat: Infinity }
                                }}
                                opacity='0.54'
                                cx='266.806'
                                cy='266.678'
                                r='199.226'
                                stroke='#23344D'
                                strokeWidth='1.28533'
                                strokeDasharray='2.57 12.85'
                            />
                            <motion.circle
                                animate={{
                                    rotate: 360,
                                    transition: { duration: 47, delay: 0.2, repeat: Infinity }
                                }}
                                opacity='0.2'
                                cx='266.808'
                                cy='266.678'
                                r='140.743'
                                stroke='#23344D'
                                strokeWidth='1.28533'
                                strokeDasharray='2.57 12.85'
                            />
                        </motion.svg>
                    </div>
                    <div className='absolute flex items-center justify-center top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[20%]'>
                        <svg
                            className='w-[80%] absolute top-[-38%] left-[18%] transform -translate-x-1/2 -translate-y-1/2'
                            viewBox='0 0 128 124'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M116.685 123.021C117.187 123.523 118.001 123.523 118.503 123.021L126.682 114.841C127.184 114.339 127.184 113.525 126.682 113.023C126.18 112.521 125.367 112.521 124.865 113.023L117.594 120.294L110.323 113.023C109.821 112.521 109.007 112.521 108.505 113.023C108.003 113.525 108.003 114.339 108.505 114.841L116.685 123.021ZM1.2313 8.86321C0.729347 9.36517 0.729347 10.179 1.2313 10.6809L9.41108 18.8607C9.91303 19.3627 10.7269 19.3627 11.2288 18.8607C11.7308 18.3588 11.7308 17.5449 11.2288 17.043L3.95789 9.77208L11.2288 2.50116C11.7308 1.99921 11.7308 1.18539 11.2288 0.683434C10.7269 0.18148 9.91303 0.18148 9.41108 0.683434L1.2313 8.86321ZM118.879 122.112V22.6254H116.308V122.112H118.879ZM104.74 8.48675H2.14017V11.0574H104.74V8.48675ZM118.879 22.6254C118.879 14.8168 112.549 8.48675 104.74 8.48675V11.0574C111.129 11.0574 116.308 16.2365 116.308 22.6254H118.879Z'
                                fill='#5EB8F4'
                            />
                        </svg>

                        <svg
                            className='w-[80%] absolute bottom-[-110%] right-[-68%] transform -translate-x-1/2 -translate-y-1/2'
                            viewBox='0 0 102 127'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M100.797 117.693C101.299 117.191 101.299 116.378 100.797 115.876L92.6175 107.696C92.1155 107.194 91.3017 107.194 90.7997 107.696C90.2978 108.198 90.2978 109.012 90.7997 109.514L98.0706 116.785L90.7997 124.055C90.2978 124.557 90.2978 125.371 90.7997 125.873C91.3017 126.375 92.1155 126.375 92.6175 125.873L100.797 117.693ZM0.308422 0.773193V103.931H2.87908V0.773193H0.308422ZM14.447 118.07H99.8884V115.499H14.447V118.07ZM0.308422 103.931C0.308422 111.74 6.63849 118.07 14.447 118.07V115.499C8.05823 115.499 2.87908 110.32 2.87908 103.931H0.308422Z'
                                fill='#5EB8F4'
                            />
                        </svg>
                        <img src={MiniLogo} alt='mini-logo' className='w-full relative' />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Features;

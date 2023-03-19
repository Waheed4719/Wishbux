import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    textContainerVariant,
    wordVariant,
    paraAnim,
    howItWorksListVariants,
    yourWishlistTextVariant
} from '../../../utils/Animations';
import Card from './Card';
import { howItWorks } from '../../../assets/dummyData';

const words = ['A', 'free', 'and', 'simple', 'way', 'to', 'share', 'your', 'wishlists'];

const HowItWorks = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const [domEntered, setDomEntered] = useState<boolean>(false);

    useEffect(() => {
        if (isInView) {
            setDomEntered(true);
        }
    }, [isInView]);

    return (
        <section className='section-2 bg-white relative w-full pb-[8rem]'>
            <div className='w-[1310px] max-w-full px-[5rem] mx-auto'>
                <div className='text-start mx-auto mb-[1rem]' ref={ref}>
                    <h3 className=' text-center lg:text-left  text-[1.1rem] font-[500] text-[#c1aeb8] tracking-[2px]'>
                        HOW IT WORKS
                    </h3>
                </div>
                <div className='mx-auto flex flex-col lg:flex-row gap-[4rem] lg:gap-0'>
                    <div className='w-full max-w-full'>
                        <h2 className='text-center lg:text-left text-[#2f415b] text-[5.2rem] md:text-[7.2rem] font-black leading-[1.1]'>
                            <motion.span
                                variants={textContainerVariant}
                                initial='hidden'
                                animate={domEntered ? 'visible' : ''}
                                className='block overflow-hidden opacity-0'
                            >
                                {words.slice(0, 4).map((word) => (
                                    <motion.span
                                        key={word}
                                        variants={wordVariant}
                                        className=' text-[#2f415b] tracking-[-2.5px] font-[900] mr-[1.25rem] inline-flex'
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </motion.span>
                            <motion.span
                                variants={textContainerVariant}
                                initial='hidden'
                                animate={domEntered ? 'visible' : ''}
                                className='block overflow-hidden opacity-0'
                            >
                                {words.slice(4, 7).map((word) => (
                                    <motion.span
                                        key={word}
                                        variants={wordVariant}
                                        className=' text-[#2f415b] tracking-[-2.5px] font-[900] mr-[1.25rem] inline-flex'
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </motion.span>
                            <motion.span
                                variants={yourWishlistTextVariant}
                                initial='hidden'
                                animate={domEntered ? 'visible' : ''}
                                className='coloured transition-all leading-[1.1] text-[5.2rem] md:text-[7.2rem] tracking-[-2.5px] font-[900]'
                            >{`${words[7]} ${words[8]}`}</motion.span>
                        </h2>
                        <motion.p
                            variants={paraAnim}
                            initial='hidden'
                            animate={domEntered ? 'visible' : ''}
                            className='text-center lg:text-left text-[1.6rem] mt-[4rem] text-[#afafb9]'
                        >
                            Lorem ipsum dolor sit amet consectetur. Etiam non <br />
                            nunc praesent iaculis suspendisse malesuada pretium.
                            <br />
                            Nullam turpis pretium velit elementum ipsum
                            <br /> pellentesque consectetur aliquet. Nullam euismod <br /> euismod
                            aliquam s arcu justo pellentesque.
                        </motion.p>
                    </div>

                    <div className='flex w-full max-w-full justify-start lg:pl-[9%] lg:pr-[2rem]'>
                        <motion.ul
                            variants={howItWorksListVariants}
                            initial='hidden'
                            animate={domEntered ? 'visible' : ''}
                            className='flex flex-col items-center lg:items-start gap-[4rem] w-full will-change-transform'
                        >
                            {howItWorks.map((item) => (
                                <Card
                                    key={item.title}
                                    title={item.title}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            ))}
                        </motion.ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HowItWorks;

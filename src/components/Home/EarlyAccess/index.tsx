import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedCards from './AnimatedCards';
import AnimatedText from '../../common/AnimatedText';
import { howItWorksListVariants } from '../../../utils/Animations';
import { earlyAccess } from '../../../utils/Constants';
import ListItem from '../../common/ListItem';

const EarlyAccess = () => {
    const words = ['Join', 'Wishbux', 'and', 'claim', 'your', 'username'];
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
            <div className='max-w-full w-[1310px] px-[1.3rem] md:px-[3rem] lg:px-[5rem] mx-auto'>
                <div className='mx-auto flex flex-col-reverse lg:flex-row gap-[4rem] lg:gap-0'>
                    <div className='w-full bg-white px-[2rem] md:px-[4rem] pb-[7.2rem] rounded-[1.7rem]'>
                        {' '}
                        <AnimatedCards />
                        <div className='mx-auto flex flex-col lg:flex-row gap-[4rem]  lg:gap-0'>
                            <div className='w-full'>
                                <div className='text-start mx-auto mb-[1rem]' ref={ref}>
                                    <h3 className='text-center lg:text-left text-[1.1rem] font-[500] text-[#c1aeb8] tracking-[2px]'>
                                        GET EARLY ACCESS
                                    </h3>
                                </div>
                                <h2 className='text-center lg:text-left text-[#2f415b] text-[3.2rem] md:text-[4.7rem] font-black leading-[1.1]'>
                                    <AnimatedText
                                        words={words.slice(0, 3)}
                                        domEntered={domEntered}
                                    />
                                    <AnimatedText
                                        words={words.slice(3, 7)}
                                        domEntered={domEntered}
                                    />
                                </h2>
                            </div>

                            <div className='relative w-full mx-auto before:block max-w-[55rem] md:pl-[6rem]'>
                                <motion.ul
                                    variants={howItWorksListVariants}
                                    initial='hidden'
                                    animate={domEntered ? 'visible' : ''}
                                >
                                    {earlyAccess.map((item) => (
                                        <ListItem
                                            key={item.title}
                                            title={item.title}
                                            description={item.description}
                                            icon={item.icon}
                                            listItemClassName='max-w-[34rem]'
                                            descriptionClassName='text-[rgba(39,39,68,0.7)] leading-[1.8rem] mt-[1.2rem]'
                                        />
                                    ))}
                                </motion.ul>
                            </div>
                        </div>
                    </div>
                </div>{' '}
            </div>{' '}
        </section>
    );
};
export default EarlyAccess;

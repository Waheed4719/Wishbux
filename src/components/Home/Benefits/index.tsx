import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Card from './Card';
import {
    textContainerVariant,
    wordVariant,
    paraAnim,
    yourWishlistTextVariant,
    benefitContainerAnim
} from '../../../utils/Animations';
import { benefitItems } from '../../../assets/dummyData';

const words = ["What's", 'in', 'it', 'for', 'me'];
const Benefits = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const [domEntered, setDomEntered] = useState<boolean>(false);

    useEffect(() => {
        if (isInView) {
            setDomEntered(true);
        }
    }, [isInView]);
    return (
        <section className='section-2 bg-white py-[100px] relative w-full'>
            <div className='max-w-full w-[1310px] px-[5rem] mx-auto'>
                <div className='mx-auto flex flex-col gap-[4rem] mb-[4rem]'>
                    <div className='w-full'>
                        <div className='text-start mx-auto mb-[1rem]' ref={ref}>
                            <h3 className='text-center text-[1.1rem] font-[500] text-[#c1aeb8] tracking-[2px]'>
                                BENEFITS
                            </h3>
                        </div>
                        <h2 className='text-center text-[#2f415b] text-[5.2rem] md:text-[7.2rem] font-black leading-[1.1]'>
                            <motion.span
                                variants={textContainerVariant}
                                initial='hidden'
                                animate={domEntered ? 'visible' : ''}
                                style={{ overflow: 'hidden', display: 'block' }}
                                className='block overflow-hidden opacity-0'
                            >
                                {words.slice(0, 3).map((word) => (
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
                            >{`${words[3]} ${words[4]}`}</motion.span>
                        </h2>
                        <motion.p
                            variants={paraAnim}
                            initial='hidden'
                            animate={domEntered ? 'visible' : ''}
                            className='text-center text-[1.6rem] mt-[2rem] text-[#afafb9]'
                        >
                            Lorem ipsum dolor sit amet consectetur. Etiam non nunc praesent
                        </motion.p>
                    </div>

                    <motion.div
                        variants={benefitContainerAnim}
                        initial='hidden'
                        animate={domEntered ? 'visible' : ''}
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '
                    >
                        {benefitItems.map((item) => (
                            <Card
                                key={item.title}
                                title={item.title}
                                description={item.description}
                                icon={item.icon}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;

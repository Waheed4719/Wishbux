import { motion } from 'framer-motion';
import {
    sentenceAnim,
    listAnim,
    paraAnim,
    howItWorksListVariants,
    howItWorksListItemVariants
} from '../../utils/Animations';
import HeartPlus from '../../assets/images/heart-plus.svg';
import People from '../../assets/images/people.svg';
import Dollar from '../../assets/images/dollar.svg';

const words = ['A', 'free', 'and', 'simple', 'way', 'to', 'share', 'your', 'wishlists'];
const wordVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const HowItWorks = () => (
    <section className='section-2 bg-white relative w-full pb-[40px]'>
        <div className='w-[1310px] max-w-full p-[20px] mx-auto'>
            <div className='text-start mx-auto mb-[1rem]'>
                <h3 className='text-[1.1rem] font-[500] text-[#c1aeb8] tracking-[2px]'>
                    HOW IT WORKS
                </h3>
            </div>
            <div className='mx-auto flex flex-col lg:flex-row gap-[40px] lg:gap-0'>
                <div className='w-full max-w-full'>
                    <h2 className='text-left text-[#2f415b] text-[5.2rem] md:text-[7.2rem] font-black leading-[1.1]'>
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
                                {(index === 3 || index === 6) && <br />}
                                {index === 4 && ``}
                            </span>
                        ))}
                        <span className='coloured  transition-all leading-[1.1] text-[5.2rem] md:text-[7.2rem] tracking-[-2.5px] font-[900]'>{`${words[7]} ${words[8]}`}</span>
                    </h2>
                    <motion.p
                        variants={paraAnim}
                        initial='initial'
                        animate='animate'
                        className='text-[1.6rem] text-left mt-[40px] text-[#afafb9]'
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
                        animate='visible'
                        className='flex flex-col gap-[5.2rem] w-full will-change-transform'
                    >
                        <motion.li
                            variants={howItWorksListItemVariants}
                            className='flex flex-col gap-6'
                        >
                            <div className='bg-[#f3faf1] w-[7rem] h-[7rem] rounded-lg flex items-center justify-center'>
                                <img src={HeartPlus} alt='wishlist' />
                            </div>
                            <h3 className='text-[2.4rem] font-black text-left text-[#23344D]'>
                                Create a free wishlist
                            </h3>
                            <div className='max-w-[32rem]'>
                                <p className='text-[1.5rem] font-normal leading-[139.5%] text-[#afafb9] text-left'>
                                    {`Create a free wishlist and add anything you'd like your fans to fund. Some
                ideas include...`}
                                </p>
                            </div>
                        </motion.li>

                        <motion.li
                            variants={howItWorksListItemVariants}
                            className='flex flex-col gap-4'
                        >
                            <div className='bg-[#f3faf1]  w-[7rem] h-[7rem] rounded-lg flex items-center justify-center'>
                                <img src={People} alt='people' />
                            </div>
                            <h3 className='text-[2.4rem] font-black text-left text-[#23344D]'>
                                Share to your followers
                            </h3>
                            <div className='max-w-[32rem]'>
                                <p className='text-[1.5rem] font-normal leading-[139.5%] text-[#afafb9] text-left'>
                                    Share your wishlist on your social media profile
                                </p>
                            </div>
                        </motion.li>

                        <motion.li
                            variants={howItWorksListItemVariants}
                            className='flex flex-col gap-4'
                        >
                            <div className='bg-[#f3faf1]  w-[7rem] h-[7rem] rounded-lg flex items-center justify-center'>
                                <img src={Dollar} alt='dollar' />
                            </div>
                            <h3 className='text-[2.4rem] font-black text-left text-[#23344D]'>
                                Get paid in cash
                            </h3>
                            <div className='max-w-[32rem]'>
                                <p className='text-[1.5rem] font-normal leading-[139.5%] text-[#afafb9] text-left'>
                                    When someone buys a wish list item, you get paid the cash
                                    equivalent
                                </p>
                            </div>
                        </motion.li>
                    </motion.ul>
                </div>
            </div>
        </div>
    </section>
);

export default HowItWorks;

import { motion } from 'framer-motion';
import {
    textContainerVariant,
    wordVariant,
    paraAnim,
    howItWorksListVariants,
    howItWorksListItemVariants
} from '../../utils/Animations';
import HeartPlus from '../../assets/images/heart-plus.svg';
import People from '../../assets/images/people.svg';
import Dollar from '../../assets/images/dollar.svg';

const words = ['A', 'free', 'and', 'simple', 'way', 'to', 'share', 'your', 'wishlists'];

type HowItWorksItemType = {
    title: string;
    description: string;
    icon: string;
};
const howItWorks: HowItWorksItemType[] = [
    {
        title: 'Create a free wishlist',
        description:
            "Create a free wishlist and add anything you'd like your fans to fund. Some ideas include...",
        icon: HeartPlus
    },
    {
        title: 'Share to your followers',
        description: 'Share your wishlist on your social media profile',
        icon: People
    },
    {
        title: 'Get paid in cash',
        description: 'When someone buys a wish list item, you get paid the cash equivalent',
        icon: Dollar
    }
];

const HowItWorks = () => (
    <section className='section-2 bg-white relative w-full pb-[8rem]'>
        <div className='w-[1310px] max-w-full px-[5rem] mx-auto'>
            <div className='text-start mx-auto mb-[1rem]'>
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
                            animate='visible'
                            style={{ overflow: 'hidden', display: 'block' }}
                        >
                            {words.slice(0, 4).map((word) => (
                                <motion.span
                                    key={word}
                                    variants={wordVariant}
                                    className=' text-[#2f415b] tracking-[-2.5px] font-[900] transition-all mr-[1.25rem] inline-flex'
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </motion.span>
                        <motion.span
                            variants={textContainerVariant}
                            initial='hidden'
                            animate='visible'
                            style={{ overflow: 'hidden', display: 'block' }}
                        >
                            {words.slice(4, 7).map((word) => (
                                <motion.span
                                    key={word}
                                    variants={wordVariant}
                                    className=' text-[#2f415b] tracking-[-2.5px] font-[900] transition-all mr-[1.25rem] inline-flex'
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </motion.span>

                        <span className='coloured transition-all leading-[1.1] text-[5.2rem] md:text-[7.2rem] tracking-[-2.5px] font-[900]'>{`${words[7]} ${words[8]}`}</span>
                    </h2>
                    <motion.p
                        variants={paraAnim}
                        initial='initial'
                        animate='animate'
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
                        animate='visible'
                        className='flex flex-col items-center lg:items-start gap-[4rem] w-full will-change-transform'
                    >
                        {howItWorks.map((item) => (
                            <motion.li
                                key={item.title}
                                variants={howItWorksListItemVariants}
                                className='flex flex-col gap-6 items-center lg:items-start '
                            >
                                <div className='bg-[#f3faf1] w-[7rem] h-[7rem] rounded-lg flex items-center justify-center'>
                                    <img src={item.icon} alt={item.title} />
                                </div>
                                <h3 className='text-[2.4rem] font-black text-left text-[#23344D]'>
                                    {item.title}
                                </h3>
                                <div className='max-w-[32rem]'>
                                    <p className='text-center lg:text-left text-[1.5rem] font-normal leading-[139.5%] text-[#afafb9]'>
                                        {item.description}
                                    </p>
                                </div>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </div>
    </section>
);

export default HowItWorks;

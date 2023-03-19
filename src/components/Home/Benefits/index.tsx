import { motion } from 'framer-motion';
import {
    sentenceAnim,
    paraAnim,
    benefitContainerAnim,
    benefitItemAnim
} from '../../../utils/Animations';
import InfinityIcon from '../../../assets/images/infinity.svg';
import ChargeBackIcon from '../../../assets/images/chargeback.svg';
import CogsIcon from '../../../assets/images/cogs.svg';
import PeopleIcon from '../../../assets/images/people.svg';
import IdeaIcon from '../../../assets/images/idea.svg';
import HiddenIcon from '../../../assets/images/hidden.svg';
import Card from './Card';

type BenefitItemType = {
    title: string;
    description: string;
    icon: string;
};

const benefitItems: BenefitItemType[] = [
    {
        title: 'Real Human Support',
        description:
            'Pick from any online store or create custom cash funds for college, travel, and more.',
        icon: PeopleIcon
    },
    {
        title: 'No Hidden Charges or Fees',
        description: 'Against Patreon, Twitch, Amazon or Paypal',
        icon: HiddenIcon
    },
    {
        title: 'Control your orders',
        description: 'Decide when your orders get placed, add to orders, or keep the cash.',
        icon: CogsIcon
    },
    {
        title: 'Unlimited Selection',
        description:
            'Pick from any online store or create custom cash funds for college, travel, and more.',
        icon: InfinityIcon
    },
    {
        title: 'Chargeback Protection',
        description:
            'Pick from any online store or create custom cash funds for college, travel, and more.',
        icon: ChargeBackIcon
    },
    {
        title: 'Gift Suggestions',
        description:
            'Pick from any online store or create custom cash funds for college, travel, and more.',
        icon: IdeaIcon
    }
];

const words = ["What's", 'in', 'it', 'for', 'me'];
const Benefits = () => (
    <section className='section-2 bg-white py-[100px] relative w-full'>
        <div className='max-w-full w-[1310px] px-[5rem] mx-auto'>
            <div className='mx-auto flex flex-col gap-[4rem] mb-[4rem]'>
                <div className='w-full'>
                    <div className='text-start mx-auto mb-[1rem]'>
                        <h3 className='text-center text-[1.1rem] font-[500] text-[#c1aeb8] tracking-[2px]'>
                            BENEFITS
                        </h3>
                    </div>
                    <h2 className='text-center text-[#2f415b] text-[5.2rem] md:text-[7.2rem] font-black leading-[1.1]'>
                        {words.slice(0, 3).map((word, index) => (
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
                        <span className='coloured  transition-all leading-[1.1] text-[5.2rem] md:text-[7.2rem] tracking-[-2.5px] font-[900]'>{`${words[3]} ${words[4]}`}</span>
                    </h2>
                    <motion.p
                        variants={paraAnim}
                        initial='initial'
                        animate='animate'
                        className='text-center text-[1.6rem] mt-[2rem] text-[#afafb9]'
                    >
                        Lorem ipsum dolor sit amet consectetur. Etiam non nunc praesent
                    </motion.p>
                </div>

                <motion.div
                    variants={benefitContainerAnim}
                    initial='hidden'
                    animate='visible'
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '
                >
                    {benefitItems.map((item) => (
                        <Card title={item.title} description={item.description} icon={item.icon} />
                    ))}
                </motion.div>
            </div>
        </div>
    </section>
);

export default Benefits;

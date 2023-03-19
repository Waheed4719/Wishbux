import { motion } from 'framer-motion';
import { howItWorksListItemVariants } from '../../../utils/Animations';

type CardProps = {
    title: string;
    description: string;
    icon: string;
};

const Card = ({ title, description, icon }: CardProps) => (
    <motion.li
        key={title}
        variants={howItWorksListItemVariants}
        className='flex flex-col gap-6 items-center lg:items-start '
    >
        <div className='bg-[#f3faf1] w-[7rem] h-[7rem] rounded-lg flex items-center justify-center'>
            <img src={icon} alt={title} />
        </div>
        <h3 className='text-[2.4rem] font-black text-left text-[#23344D]'>{title}</h3>
        <div className='max-w-[32rem]'>
            <p className='text-center lg:text-left text-[1.5rem] font-normal leading-[139.5%] text-[#afafb9]'>
                {description}
            </p>
        </div>
    </motion.li>
);

export default Card;

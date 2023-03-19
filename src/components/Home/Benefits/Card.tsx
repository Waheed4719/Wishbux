import { motion } from 'framer-motion';
import { benefitItemAnim } from '../../../utils/Animations';

type CardProps = {
    title: string;
    description: string;
    icon: string;
};

const Card = ({ title, icon, description }: CardProps) => (
    <motion.div
        variants={benefitItemAnim}
        key={title}
        className='m-[1rem] flex flex-col items-start gap-[2rem] pb-[4.4rem] px-[3.7rem] pt-[3.7rem] w-[calc(33.333% - 2rem)])] bg-[rgba(237,240,246,0.56)] rounded-lg'
    >
        <div className='w-[50px] h-[50px] bg-[#eceff4] rounded-lg flex items-center justify-center'>
            <img src={icon} alt={title} className='h-[35px] w-[35px]' />
        </div>
        <div className='flex flex-col items-start'>
            <h3 className='text-[#2f415b] text-left text-[2.3rem] font-bold'>{title}</h3>
            <p className='text-[#afafb9] text-left text-[1.5rem] mt-[0.5rem]'>{description}</p>
        </div>
    </motion.div>
);

export default Card;

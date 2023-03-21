import { motion } from 'framer-motion';
import { howItWorksListItemVariants } from '../../../utils/Animations';

type ListItemProps = {
    title: string;
    description: string;
    icon: string;
};

const ListItem = ({ title, description, icon }: ListItemProps) => (
    <motion.li
        key={title}
        variants={howItWorksListItemVariants}
        className='flex items-center gap-[20px] my-[4rem]'
    >
        <div className='rounded-lg bg-[#e0e4ed] w-[50px] h-[50px] flex items-center justify-center'>
            <motion.img src={icon} alt={title} className='w-[25px] h-[25px]' />
        </div>

        <div className='flex flex-col items-start'>
            <motion.h3 className='text-[#2f415b] text-[1.9rem] font-[900] leading-[1.1] text-start'>
                {title}
            </motion.h3>
            <motion.p className='text-[#2f415b] text-[1.5rem] font-[500] leading-[1.1] mt-3'>
                {description}
            </motion.p>
        </div>
    </motion.li>
);

export default ListItem;

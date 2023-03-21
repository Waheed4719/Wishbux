import { motion } from 'framer-motion';
import { howItWorksListItemVariants } from '../../../utils/Animations';

type ListItemProps = {
    title: string;
    description: string;
    icon: string;
    listItemClassName?: string;
    descriptionClassName?: string;
};

const ListItem = ({
    title,
    description,
    icon,
    listItemClassName,
    descriptionClassName
}: ListItemProps) => (
    <motion.li
        key={title}
        variants={howItWorksListItemVariants}
        className={`flex items-start gap-[20px] my-[4rem] ${listItemClassName}`}
    >
        <div className='rounded-lg bg-[#e0e4ed] w-[5rem] h-[5rem] flex items-center justify-center min-w-[5rem] min-h-[5rem]'>
            <motion.img src={icon} alt={title} className='w-[25px] h-[25px]' />
        </div>

        <div className='flex flex-col items-start'>
            <motion.h3 className='text-[#2f415b] text-left text-[1.9rem] font-[900] leading-[1.1] '>
                {title}
            </motion.h3>
            <motion.p className={`text-left text-[1.5rem] font-[500] mt-3 ${descriptionClassName}`}>
                {description}
            </motion.p>
        </div>
    </motion.li>
);

export default ListItem;

import { motion } from 'framer-motion';
import { headerItems } from '../../../utils/Constants';

const Drawer = () => (
    <motion.div className='bg-white shadow-xl w-[calc(100vw-4rem)] fixed top-0 bottom-0 z-10 left-[100%] translate-x-[100%]'>
        <nav className='text-[1.4rem] px-[5.4rem] pt-[9.7rem] pb-[5vh]'>
            <ul>
                {headerItems.map((item, index) => (
                    <li
                        key={item.title}
                        className={`text-[2.6rem] mb-[2.4rem] text-left ${
                            index === 0 && 'text-[#27B0E6]'
                        }`}
                    >
                        <a href={item.href}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </motion.div>
);

export default Drawer;

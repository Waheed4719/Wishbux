import { motion } from 'framer-motion';
import { textContainerVariant, wordVariant } from '../../utils/Animations';

type AnimatedTextProps = {
    words: string[];
    domEntered: boolean;
};

const AnimatedText = ({ words, domEntered }: AnimatedTextProps) => (
    <motion.span
        variants={textContainerVariant}
        initial='hidden'
        animate={domEntered ? 'visible' : ''}
        className='block overflow-hidden opacity-0'
    >
        {words.map((word) => (
            <motion.span
                key={word}
                variants={wordVariant}
                className=' text-[#2f415b] tracking-[-2.5px] font-[900] mr-[1.25rem] inline-flex'
            >
                {word}
            </motion.span>
        ))}
    </motion.span>
);

export default AnimatedText;

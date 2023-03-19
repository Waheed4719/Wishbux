import { motion } from 'framer-motion';

const Circle = () => (
    <div className='absolute top-0 left-0 h-full w-full z-0'>
        <motion.svg
            className='mx-auto w-full h-full'
            width='533'
            height='533'
            viewBox='0 0 533 533'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <motion.circle
                animate={{
                    rotate: 360,
                    transition: { duration: 30, delay: 0.2, repeat: Infinity }
                }}
                cx='266.805'
                cy='266.678'
                r='265.42'
                stroke='#23344D'
                strokeWidth='1.28533'
                strokeDasharray='2.57 12.85'
            />
            <motion.circle
                animate={{
                    rotate: 360,
                    transition: { duration: 39, delay: 0.2, repeat: Infinity }
                }}
                opacity='0.54'
                cx='266.806'
                cy='266.678'
                r='199.226'
                stroke='#23344D'
                strokeWidth='1.28533'
                strokeDasharray='2.57 12.85'
            />
            <motion.circle
                animate={{
                    rotate: 360,
                    transition: { duration: 47, delay: 0.2, repeat: Infinity }
                }}
                opacity='0.2'
                cx='266.808'
                cy='266.678'
                r='140.743'
                stroke='#23344D'
                strokeWidth='1.28533'
                strokeDasharray='2.57 12.85'
            />
        </motion.svg>
    </div>
);

export default Circle;

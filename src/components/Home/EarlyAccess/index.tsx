import { motion } from 'framer-motion';
import AnimatedCards from './AnimatedCards';

const EarlyAccess = () => (
    <section className='section-2 bg-[var(--bg-primary)] py-[100px] relative w-full'>
        <div className='max-w-full w-[1310px] px-[3rem] lg:px-[5rem] mx-auto'>
            <div className='mx-auto flex flex-col-reverse lg:flex-row gap-[4rem] lg:gap-0'>
                <div className='w-full'>
                    {' '}
                    <AnimatedCards />
                </div>
            </div>{' '}
        </div>{' '}
    </section>
);

export default EarlyAccess;

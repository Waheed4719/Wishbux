import { motion, Variants } from 'framer-motion';

type AlertProps = {
    icon: string;
    iconBg: string;
    title: string;
    description: string;
    className?: string;
    variants?: Variants;
};

const Alert = ({ icon, iconBg, title, description, variants, className }: AlertProps) => (
    <motion.div
        variants={variants ?? {}}
        initial='hidden'
        animate='visible'
        style={{ boxShadow: `0px 9.96105px 19.9221px rgba(69, 82, 101, 0.3)` }}
        className={`rounded-full shadow-2xl flex items-center gap-[0.5rem] bg-white p-[6px] w-fit z-10 ${className}  opacity-0`}
    >
        <div
            style={{
                backgroundColor: iconBg
            }}
            className={`rounded-full bg-[${iconBg}] flex items-center justify-center w-[3.4rem] h-[3.4rem]`}
        >
            {' '}
            <img className='h-6 w-6' src={icon} alt='alert-icon' />
        </div>
        <div className='pr-4'>
            <p className='font-light text-left text-[1rem]'>{title}</p>
            <p className='font-bold text-left text-[1.2rem]'>{description}</p>
        </div>
    </motion.div>
);

export default Alert;

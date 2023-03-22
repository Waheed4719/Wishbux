import { motion } from 'framer-motion';
import Alert from '../../common/Alert';
import dollarBlueIcon from '../../../assets/images/dollar-blue.svg';
import bellIcon from '../../../assets/images/bell.svg';
import { alertVariantLeft, alertVariantRight } from '../../../utils/Animations';

type Props = {
    image: string;
    index: number;
    domEntered: boolean;
};

const getCardClass = (index: number) => {
    if (index === 0) {
        return 'transform scale-[0.52] translate-x-[-160%] -translate-y-1/2 absolute top-[50%] left-[50%]';
    }
    if (index === 1) {
        return 'transform scale-[0.68]  translate-x-[-110%] -translate-y-1/2 absolute top-[50%] left-[50%] z-1';
    }
    if (index === 2) {
        return 'z-[4] relative';
    }
    if (index === 3) {
        return 'transform scale-[0.68]  translate-x-[15%] -translate-y-1/2 absolute top-[50%] left-[50%] z-0';
    }
    if (index === 4) {
        return 'transform scale-[0.52] translate-x-[66%] -translate-y-1/2 absolute top-[50%] left-[50%] z-[-1]';
    }
    return '';
};

const returnCardVariant = (index: number) => {
    if (index === 0) {
        return {
            hidden: {
                scale: 0.5,
                x: '-50%',
                y: '-50%'
            },
            visible: {
                scale: 0.52,
                x: '-160%',
                y: '-50%',
                transition: {
                    duration: 1
                }
            }
        };
    }
    if (index === 1) {
        return {
            hidden: {
                scale: 0.5,
                x: '-50%',
                y: '-50%'
            },
            visible: {
                scale: 0.68,
                x: '-110%',
                y: '-50%',
                transition: {
                    duration: 1
                }
            }
        };
    }
    if (index === 2) {
        return {
            hidden: {},
            visible: {
                transition: {
                    duration: 1
                }
            }
        };
    }
    if (index === 3) {
        return {
            hidden: {
                scale: 0.5,
                x: '-50%',
                y: '-50%'
            },
            visible: {
                scale: 0.68,
                x: '15%',
                y: '-50%',
                transition: {
                    duration: 1
                }
            }
        };
    }
    if (index === 4) {
        return {
            hidden: {
                scale: 0.5,
                x: '-50%',
                y: '-50%'
            },
            visible: {
                scale: 0.52,
                x: '66%',
                y: '-50%',
                transition: {
                    duration: 1
                }
            }
        };
    }
};

const Card = ({ image, index, domEntered }: Props) => (
    <motion.div
        initial='hidden'
        animate={domEntered ? 'visible' : ''}
        variants={returnCardVariant(index)}
        className={`main-block__images_new w-[38%] rounded-[8.149px]  md:rounded-[17.149px] md:w-[300px] max-w-[33.3rem] md:py-[3.7rem] ${getCardClass(
            index
        )}`}
    >
        <div className='h-[6.2rem] md:h-[14.8rem]  w-full flex items-center mb-[1rem]  md:mb-[2.4rem] justify-center'>
            <img
                className='max-w-[77%] max-h-full md:max-w-full object-contain'
                src={image}
                alt='bag'
                loading='eager'
            />
        </div>
        <div className='px-[16px] md:px-[24px]'>
            <h3 className='text-[0.8rem] md:text-[18px] text-left font-bold leading-[1.3]'>
                Louis Vuitton Monogram Bag
            </h3>
            <p className='text-[0.8rem] md:text-[18px] text-left mt-2 font-regular'>$1830.00</p>
            <button
                type='submit'
                className='w-full transition duration-[0.4s] h-[1.8rem] leading-[1.8rem] md:h-[unset] rounded-full bg-[#27b0e6] text-[0.6rem] md:text-[1.4rem] font-semibold text-white md:px-6 md:py-4 mt-2 md:mt-6 flex items-center justify-center'
            >
                Add to wish list
            </button>
        </div>
        {/* {index === 2 && (
            <>
                <Alert
                    className='absolute top-[25%] left-[-20%] scale-50'
                    icon={dollarBlueIcon}
                    iconBg='#ebf0f7'
                    title='Account Balance'
                    description='$1340'
                    variants={alertVariantLeft}
                />

                <Alert
                    className='absolute bottom-[25%] right-[-20%] scale-50'
                    icon={bellIcon}
                    iconBg='#f3faf1'
                    title='New Alert'
                    description='Payment Received'
                    variants={alertVariantRight}
                />
            </>
        )} */}
    </motion.div>
);

export default Card;

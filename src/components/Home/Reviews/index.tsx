import Slider, { Settings } from 'react-slick';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { textContainerVariant, wordVariant } from '../../../utils/Animations';
import ReviewCard from './Card';
import AnimatedText from '../../common/AnimatedText';

interface CustomDotsProps extends Settings {
    activeIndex: number;
    onClick: (index: number) => void;
}

const slides = [
    { id: 1, label: 'Slide 1' },
    { id: 2, label: 'Slide 2' },
    { id: 3, label: 'Slide 3' },
    { id: 4, label: 'Slide 4' },
    { id: 5, label: 'Slide 5' }
];
const words = ['What', 'our', 'creators', 'say'];
const CustomDots = ({ activeIndex, onClick }: CustomDotsProps) => (
    <ul className='flex justify-center items-center gap-4 py-[2rem] w-full'>
        {slides.map((slide, index) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <li
                // eslint-disable-next-line react/no-array-index-key
                key={slide.id}
                className={`rounded-full h-4 w-4 duration-[0.5s] ease-out ${
                    index === activeIndex ? 'bg-[#27b0e6]' : 'bg-[#c4c9ce]'
                }`}
                onClick={() => onClick(index)}
            />
        ))}
    </ul>
);
const Reviews = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const [domEntered, setDomEntered] = useState<boolean>(false);
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        swipeToSlide: true,
        // eslint-disable-next-line react/no-unstable-nested-components
        appendDots: (dots: JSX.Element) => (
            <CustomDots {...dots.props} activeIndex={currentSlide} />
        ),
        responsive: [
            {
                breakpoint: 824,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            }
        ],
        beforeChange: (prev: number, next: number) => {
            setCurrentSlide(next);
        }
    };

    useEffect(() => {
        if (isInView) {
            setDomEntered(true);
        }
    }, [isInView]);

    return (
        <section className='section-2 bg-[var(--bg-primary)] py-[100px] relative w-full'>
            <div className='max-w-full w-[1310px] p-[3rem] mx-auto'>
                <div className='mx-auto flex flex-col-reverse lg:flex-row gap-[4rem] lg:gap-0'>
                    <div className='w-full'>
                        <div className='text-start mx-auto mb-[1rem]'>
                            <h3 className='text-center text-[1.1rem] font-[500] text-[#c1aeb8] tracking-[2px]'>
                                CUSTOMER REVIEWS
                            </h3>
                        </div>
                        <h2
                            className='text-center text-[#2f415b] text-[5.2rem] md:text-[7.2rem] font-black leading-[1.1] mb-[2rem]'
                            ref={ref}
                        >
                            <AnimatedText words={words} domEntered={domEntered} />
                        </h2>
                        <Slider {...settings}>
                            {slides.map((slide) => (
                                <ReviewCard key={slide.id} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;

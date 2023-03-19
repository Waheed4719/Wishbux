import Girl from '../../../assets/images/girl.png';

const stars = [1, 2, 3, 4, 5];

const ReviewCard = () => (
    <div
        style={{ boxShadow: '0px 1.4rem 1.4rem rgba(0, 0, 0, 0.08)' }}
        className='p-[4rem] bg-white rounded-[2.5rem] mx-[10px]'
    >
        <div className='flex flex-col'>
            <div className='flex gap-1 mb-[2.5rem]'>
                {stars.map((item) => (
                    <svg
                        key={item}
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='#F1DA07'
                        className='w-4 h-4'
                    >
                        <path
                            fillRule='evenodd'
                            d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                            clipRule='evenodd'
                        />
                    </svg>
                ))}
            </div>
            <div className='w-full'>
                <p className='text-justify font-medium text-[1.4rem]'>
                    {`"This has been the best wishlist site that I have ever used. Even
                                when problems come up with items or shipping, I've always been able
                                to reach out and get the issue resolved very quickly. Highly
                                recommend especially for the security aspect."`}
                </p>
            </div>
        </div>
        <div className='flex gap-6 items-center mt-[3rem]'>
            <div className='rounded-full h-[4rem] w-[4rem]'>
                <img src={Girl} alt='Erica' className='w-full h-full object-contain' />
            </div>
            <div className='flex flex-col items-start text-black font-bold'>
                <div>Erica</div>— Content Creator
            </div>
        </div>
    </div>
);

export default ReviewCard;

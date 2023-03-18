import Logo from '../../../assets/images/logo.png';

const Header = () => (
    <header className='justify-between sticky top-0 w-full flex items-center z-10 pt-[35px] pb-[15px]'>
        <div className='px-[5.3rem] flex items-center justify-between w-full max-w-[1530px] mx-auto'>
            <nav className='text-[1.4rem] flex flex-1 justify-start gap-8'>
                <ul className='flex'>
                    <li className='mr-[3.2rem]'>
                        <a href='#howitworks'>How It Works</a>
                    </li>
                    <li className='mr-[3.2rem]'>
                        <a href='#benefits'>Benefits</a>
                    </li>
                    <li className='mr-[3.2rem]'>
                        <a href='#features'>Features</a>
                    </li>
                    <li className='mr-[3.2rem]'>
                        <a href='#reviews'>Reviews</a>
                    </li>
                </ul>
            </nav>
            <a href='/' className='flex flex-1 justify-center'>
                <img src={Logo} alt='logo' />
            </a>
            <div className='flex flex-1 justify-end items-center'>
                <button
                    type='submit'
                    className='rounded-full bg-[#27b0e6] text-[1.1rem] font-semibold text-white px-10 py-4'
                >
                    Join the waiting list
                </button>
            </div>
        </div>
    </header>
);

export default Header;

import { useWindowScroll } from '../../../hooks';
import Logo from '../../../assets/images/logo.png';
import { headerItems } from '../../../utils/Constants';

const Header = () => {
    const scrollY = useWindowScroll();

    return (
        <header
            className={`justify-between sticky top-0 w-full hidden md:flex items-center z-[100]  transition-[background] duration-200 ${
                scrollY !== 0 ? 'bg-white py-[2.5rem]' : 'bg-transparent pt-[3.5rem] pb-[1.5rem]'
            }`}
        >
            <div className='px-[5.3rem] hidden xl:flex items-center justify-between w-full max-w-[1530px] mx-auto'>
                <nav className='text-[1.4rem] flex flex-1 justify-start gap-8'>
                    <ul className='flex'>
                        {headerItems.map((item) => (
                            <li key={item.title} className='mr-[3.2rem]'>
                                <a href={item.href}>{item.title}</a>
                            </li>
                        ))}
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
};

export default Header;

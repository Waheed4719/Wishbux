import Logo from '../../../assets/images/logo.png';

const Footer = () => (
    <footer className='py-[40px] flex flex-col items-center'>
        <a href='/'>
            <img src={Logo} alt='' />
        </a>
        <p className='tracking-[2px] font-semibold mt-2'>© WISHBUX 2023</p>
    </footer>
);

export default Footer;

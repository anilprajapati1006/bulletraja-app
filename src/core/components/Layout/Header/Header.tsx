import { FC, useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';
import { Flayout } from '../../Cart/Flayout';



const Header: FC = () => {
    const [open, setOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [hasAnimation, setHasAnimation] = useState(false);
    
    const navLinks = [
        { name: 'Home', url: '/' },
        { name: 'Shop', url: '/shop', isDropdown: true },
        { name: 'Brand', url: '/shop', isDropdown: true },
        { name: 'Our Story', url: '/about' },
        { name: 'Contact', url: '/contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 0) {
            setHasAnimation(true);
        } else {
            setHasAnimation(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <header className={`sticky top-0 z-50  ${hasAnimation ? 'bg-app-orange/80' : 'bg-transparent'} transition-all duration-300 scroll-smooth w-full`}>
            <div className={`border-b ${hasAnimation ? 'bg-app-orange/10 border-app-black/10' : 'bg-primary border-primary'} py-2 relative flex justify-center items-center gap-[22px] transition-all duration-300`}>
                <div className='flex justify-center items-center gap-2 md:mx-auto'>
                    <img src="/images/ticket-percent.svg" alt="" className='h-4 md:h-6 w-4 md:w-6' />
                    <p className='text-app-slate-gray text-center font-inter text-xs md:text-sm font-semibold leading-[22px]'>
                        30% off storewide — Limited time!
                    </p>
                    <a className='hidden md:flex gap-1 justify-center items-center cursor-pointer'>
                        <p className='text-app-blue font-inter text-sm font-medium leading-[24px]'>Shop Now</p>
                        <img src="/images/arrow-right.svg" alt="arrow right" className='h-[18px] w-[18px]'  />
                    </a>
                </div>
                {/* <button className='md:absolute right-4 top-2'>
                    <img src="/images/close.svg" alt=""  />
                </button> */}
            </div>
            <div className='hidden md:flex justify-around items-center mx-auto px-4 md:px-7 lg:px-14 py-4'>
                <a href="/" className=" flex items-center gap-x-3.5">
                    <div className="relative">
                        <img src="/logo.png" alt="Logo" className='relative h-16 w-auto z-10' />
                        <div className="bg-white h-[38px] w-[38px] rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 rotate-45" />
                    </div>
                    <div className="text-2xl font-semibold tracking-wide">
                        Bullet Raja
                    </div>
                </a>

                <nav className='flex-grow text-center'>
                    <ul className='flex justify-center items-center space-x-10'>
                        {navLinks.map((link, index) => (
                            <li key={index} className="flex items-center gap-x-2.5 group">
                                <a href={link.url} className={`flex items gap-x-1.5 text-app-black ${hasAnimation ? 'group-hover:text-white' : 'group-hover:text-app-orange'} font-inter text-sm font-semibold transition-colors duration-300`}>
                                    {link.name}
                                    {link.isDropdown && (
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-180 transition-all duration-300">
                                            <g id="Icon/chevron-down">
                                                <path id="Vector" d="M5.22656 7.5L10.2266 12.5L15.2266 7.5" className={`${hasAnimation ? 'group-hover:stroke-white' : 'group-hover:stroke-app-orange'}`} stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                        </svg>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='flex items-center gap-4'>
                    <a href='/profile?currentTab=wishlist' className="relative flex items-center gap-1.5">
                        <img src="/images/wishlist.svg" alt="wishlist icon" className='h-6 w-6' />
                        <div className={`${hasAnimation ? 'bg-app-black' : 'bg-app-orange'} absolute -top-3 -right-3 h-5 w-5 rounded-full flex justify-center items-center transition-all duration-300`}>
                            <p className='text-white text-center font-inter text-xs font-bold leading-[10px]'>
                                2
                            </p>
                        </div>
                    </a>

                    <a href='/profile'>
                        <img src="/images/user-circle.svg" alt="Search Icon" className='h-6 w-6' />
                    </a>
                    <button onClick={() => setCartOpen(!cartOpen)} className='relative flex items-center gap-1.5'>
                        <img src="/images/shopping bag.svg" alt="Search Icon" className='h-6 w-6' />
                        <div className={`${hasAnimation ? 'bg-app-black' : 'bg-app-orange'} absolute -top-3 -right-3 h-5 w-5 rounded-full flex justify-center items-center transition-all duration-300`}>
                            <p className='text-white text-center font-inter text-xs font-bold leading-[10px]'>
                                3
                            </p>
                        </div>
                    </button>
                </div>
            </div>
            <div className='flex justify-between items-center md:hidden py-4 px-8'>
                <div className='flex items-center gap-1'>
                    <button onClick={()=>setOpen(!open)}>
                        <img src="/images/menu.svg" alt="" />
                    </button>
                    <img src="/logo.png" alt="Logo" className='h-6 w-auto' />
                </div>
                <div className='px-[1px] py-0.5'>
                    <button onClick={()=> setCartOpen(true)} className='flex items-center gap-1.5'>
                        <img src="/images/shopping bag.svg" alt="Search Icon" className='h-6 w-6' />
                        <div className={`${hasAnimation ? 'bg-app-black' : 'bg-app-orange'} h-5 w-5 rounded-full flex justify-center items-center`}>
                            <p className='text-white text-center font-inter text-xs font-bold leading-[10px]'>
                                3
                            </p>
                        </div>
                    </button>
                </div>
            </div>
            {
                open && 
                <MobileMenu setOpen={setOpen} />
            }
            <div className={`cart-transition ${cartOpen ? 'cart-open absolute top-0 right-0 z-50' : ''}`}>
                {cartOpen && <Flayout setOpen={setCartOpen} />}
            </div>
     </header>
    )
}

export default Header;

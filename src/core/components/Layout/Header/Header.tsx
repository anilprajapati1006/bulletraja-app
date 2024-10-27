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
        <header
            className={`sticky top-0 z-50  ${hasAnimation ? 'bg-app-orange' : 'bg-[rgba(246,183,31,0.1)]'
                } transition-all duration-300 scroll-smooth w-full 2xl:container mx-auto`}
        >
            <div
                className={`border-b relative ${hasAnimation
                        ? 'bg-app-orange/10 border-app-black/10'
                        : 'bg-app-orange border-app-orange'
                    } py-2 relative flex justify-center items-center gap-[22px] transition-all duration-300`}
            >
                <div className='flex justify-center items-center gap-2 md:mx-auto'>
                    <img
                        src='/images/ticket-percent.svg'
                        alt=''
                        className='h-4 md:h-6 w-4 md:w-6'
                    />
                    <p className='text-app-slate-gray text-center font-inter text-xs md:text-sm font-semibold leading-[22px]'>
                        30% off storewide — Limited time!
                    </p>
                    <a className='hidden md:flex gap-1 justify-center items-center cursor-pointer'>
                        <p className='text-app-blue font-inter text-sm font-medium leading-[24px]'>
                            Shop Now
                        </p>
                        <img
                            src='/images/arrow-right.svg'
                            alt='arrow right'
                            className='h-[18px] w-[18px]'
                        />
                    </a>
                </div>
                <div className='hidden md:flex gap-4 absolute right-4 md:right-7 lg:right-14'>
                    <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4 md:h-6 md:w-6'
                    >
                        <g id='social/outline/instagram'>
                            <rect
                                id='Vector'
                                x='2'
                                y='2'
                                width='20'
                                height='20'
                                rx='4'
                                stroke='#000000'
                                stroke-width='1.5'
                            />
                            <circle id='Vector_2' cx='18' cy='6' r='1' fill='#000000' />
                            <circle
                                id='Vector_3'
                                cx='12'
                                cy='12'
                                r='5'
                                stroke='#000000'
                                stroke-width='1.5'
                            />
                        </g>
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="social/outline/facebook">
                            <path id="Vector 2998" d="M18 3H15C12.2386 3 10 5.23858 10 8V10H6V14H10V21H14V14H18V10H14V8C14 7.44772 14.4477 7 15 7H18V3Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="social/outline/youtube">
                            <rect id="Rectangle 1083" x="2" y="3" width="20" height="18" rx="4" stroke="#141718" stroke-width="1.5" />
                            <path id="Vector 2900" d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z" stroke="#141718" stroke-width="1.5" stroke-linecap="round" />
                        </g>
                    </svg>
                </div>
                {/* <button className='md:absolute right-4 top-2'>
                    <img src="/images/close.svg" alt=""  />
                </button> */}
            </div>
            <div className='hidden md:flex justify-around items-center mx-auto px-4 md:px-7 lg:px-14 py-4'>
                <a href='/' className=' flex items-center gap-x-3.5'>
                    <div className='relative'>
                        <img
                            src='/logo.png'
                            alt='Logo'
                            className='relative h-10 w-auto z-10'
                        />
                        <div className='bg-white h-[22px] w-[22px] rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 rotate-45' />
                    </div>
                    <div className='text-2xl text-white font-semibold tracking-wide'>
                        Bullet Raja
                    </div>
                </a>

                <nav className='flex-grow text-center'>
                    <ul className='flex justify-center items-center space-x-10'>
                        {navLinks.map((link, index) => (
                            <li key={index} className='flex items-center gap-x-2.5 group'>
                                <a
                                    href={link.url}
                                    className={`flex items gap-x-1.5 ${hasAnimation
                                            ? 'text-black group-hover:text-white'
                                            : 'group-hover:text-app-orange text-white'
                                        } font-inter text-sm font-semibold transition-colors duration-300`}
                                >
                                    {link.name}
                                    {link.isDropdown && (
                                        <svg
                                            width='20'
                                            height='20'
                                            viewBox='0 0 20 20'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='group-hover:rotate-180 transition-all duration-300'
                                        >
                                            <g id='Icon/chevron-down'>
                                                <path
                                                    id='Vector'
                                                    d='M5.22656 7.5L10.2266 12.5L15.2266 7.5'
                                                    className={`${hasAnimation
                                                            ? 'group-hover:stroke-white'
                                                            : 'group-hover:stroke-app-orange stroke-white'
                                                        }`}
                                                    stroke='#121212'
                                                    stroke-width='1.5'
                                                    stroke-linecap='round'
                                                    stroke-linejoin='round'
                                                />
                                            </g>
                                        </svg>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='flex items-center gap-4'>
                    <a
                        href='/profile?currentTab=wishlist'
                        className='relative flex items-center gap-1.5'
                    >
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="icons/Heart/Line">
                                <path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M13.1924 6.91706C12.8055 7.28838 12.1945 7.28838 11.8076 6.91706L11.1152 6.2526C10.3048 5.47487 9.20994 5 8 5C5.51472 5 3.5 7.01472 3.5 9.5C3.5 11.8826 4.78979 13.8501 6.65176 15.4666C8.51532 17.0844 10.7434 18.1574 12.0746 18.7051C12.353 18.8196 12.647 18.8196 12.9254 18.7051C14.2566 18.1574 16.4847 17.0844 18.3482 15.4666C20.2102 13.85 21.5 11.8826 21.5 9.5C21.5 7.01472 19.4853 5 17 5C15.7901 5 14.6952 5.47487 13.8848 6.2526L13.1924 6.91706ZM12.5 4.80957C11.3321 3.6888 9.74649 3 8 3C4.41015 3 1.5 5.91015 1.5 9.5C1.5 15.8683 8.47034 19.385 11.3138 20.5547C12.0796 20.8697 12.9204 20.8697 13.6862 20.5547C16.5297 19.385 23.5 15.8682 23.5 9.5C23.5 5.91015 20.5899 3 17 3C15.2535 3 13.6679 3.6888 12.5 4.80957Z" className={`${hasAnimation ? 'fill-black': 'fill-white'}`} />
                            </g>
                        </svg>

                        <div
                            className={`${hasAnimation ? 'bg-app-black' : 'bg-app-orange'
                                } absolute -top-3 -right-3 h-5 w-5 rounded-full flex justify-center items-center transition-all duration-300`}
                        >
                            <p className='text-white text-center font-inter text-xs font-bold leading-[10px]'>
                                2
                            </p>
                        </div>
                    </a>

                    <a href='/profile'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5588 19.5488C17.5654 16.8918 15.0036 15 12 15C8.99638 15 6.4346 16.8918 5.44117 19.5488M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33285 17.7154 5.44117 19.5488M18.5588 19.5488C16.8031 21.0756 14.5095 22 12 22C9.49052 22 7.19694 21.0756 5.44117 19.5488M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z" className={`${hasAnimation ? 'stroke-black' : 'stroke-white'}`} stroke-width="1.5" stroke-linejoin="round" />
                        </svg>
                    </a>
                    <button
                        onClick={() => setCartOpen(!cartOpen)}
                        className='relative flex items-center gap-1.5'
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6" className={`${hasAnimation ? 'stroke-black' : 'stroke-white'}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.6113 3H8.38836C6.433 3 4.76424 4.41365 4.44278 6.3424L2.77612 16.3424C2.36976 18.7805 4.24994 21 6.72169 21H17.278C19.7498 21 21.6299 18.7805 21.2236 16.3424L19.5569 6.3424C19.2355 4.41365 17.5667 3 15.6113 3Z" className={`${hasAnimation ? 'stroke-black' : 'stroke-white'}`} stroke-width="1.5" stroke-linejoin="round" />
                        </svg>
                        <div
                            className={`${hasAnimation ? 'bg-app-black' : 'bg-app-orange'
                                } absolute -top-3 -right-3 h-5 w-5 rounded-full flex justify-center items-center transition-all duration-300`}
                        >
                            <p className='text-white text-center font-inter text-xs font-bold leading-[10px]'>
                                3
                            </p>
                        </div>
                    </button>
                </div>
            </div>
            <div className='flex justify-between items-center md:hidden py-4 px-8'>
                <div className='flex items-center gap-1'>
                    <button onClick={() => setOpen(!open)}>
                        <img src='/images/menu.svg' alt='' />
                    </button>
                    <img src='/logo.png' alt='Logo' className='h-6 w-auto' />
                </div>
                <div className='px-[1px] py-0.5'>
                    <button
                        onClick={() => setCartOpen(true)}
                        className='flex items-center gap-1.5'
                    >
                        <img
                            src='/images/shopping bag.svg'
                            alt='Search Icon'
                            className='h-6 w-6'
                        />
                        <div
                            className={`${hasAnimation ? 'bg-app-black' : 'bg-app-orange'
                                } h-5 w-5 rounded-full flex justify-center items-center`}
                        >
                            <p className='text-white text-center font-inter text-xs font-bold leading-[10px]'>
                                3
                            </p>
                        </div>
                    </button>
                </div>
            </div>
            {open && <MobileMenu setOpen={setOpen} />}
            <div
                className={`cart-transition ${cartOpen ? 'cart-open absolute top-0 right-0 z-50' : ''
                    }`}
            >
                {cartOpen && <Flayout setOpen={setCartOpen} />}
            </div>
        </header>
    );
}

export default Header;

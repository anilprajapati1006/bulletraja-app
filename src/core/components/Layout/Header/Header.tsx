import { FC, useState } from 'react';
import MobileMenu from './MobileMenu';
import { Flayout } from '../../Cart/Flayout';



const Header: FC = () => {
    const [open, setOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    console.log(cartOpen);
    
    return (
        <header className='relative'>
            <div className='bg-primary py-2 relative flex justify-center items-center gap-[22px]'>
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
                <button className='md:absolute right-4 top-2'>
                    <img src="/images/close.svg" alt=""  />
                </button>
            </div>
            <div className='hidden md:flex justify-between items-center mx-auto px-4 md:px-7 lg:px-14 py-4'>
                <div className='flex items-center'>
                    <img src="/images/logo.svg" alt="Logo" className='h-6 w-auto' />
                </div>
                <nav className='flex-grow text-center'>
                    <ul className='flex justify-center items-center space-x-10'>
                        <li>
                            <a href="#" className='text-app-black font-inter text-sm font-semibold'>Home</a>
                        </li>
                        <li>
                            <a href="#" className='text-app-black font-inter text-sm font-semibold'>Shop</a>
                        </li>
                        <li>
                            <a href="#" className='text-app-black font-inter text-sm font-semibold'>Product</a>
                        </li>
                        <li>
                            <a href="#" className='text-app-black font-inter text-sm font-semibold'>Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className='flex items-center gap-4'>
                    <img src="/images/search.svg" alt="Search Icon" className='h-6 w-6' />
                    <img src="/images/user-circle.svg" alt="Search Icon" className='h-6 w-6' />
                    <button onClick={() => setCartOpen(!cartOpen)} className='flex items-center gap-1.5'>
                        <img src="/images/shopping bag.svg" alt="Search Icon" className='h-6 w-6' />
                        <div className='bg-app-black h-5 w-5 rounded-full flex justify-center items-center'>
                            <p className='text-white text-center font-inter text-xs font-bold leading-[10px]'>
                                2
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
                    <img src="/images/logo.svg" alt="Logo" className='h-6 w-auto' />
                </div>
                <div className='px-[1px] py-0.5'>
                    <button onClick={()=> setCartOpen(true)} className='flex items-center gap-1.5'>
                        <img src="/images/shopping bag.svg" alt="Search Icon" className='h-6 w-6' />
                        <div className='bg-app-black h-5 w-5 rounded-full flex justify-center items-center'>
                            <p className='text-white text-center font-inter text-xs font-bold leading-[10px]'>
                                2 
                            </p>
                        </div>
                    </button>
                </div>
            </div>
            {
                open && 
                <MobileMenu setOpen={setOpen} />
            }
            {
                cartOpen &&
                <Flayout setOpen={setCartOpen} />
            }
     </header>
    )
}

export default Header;
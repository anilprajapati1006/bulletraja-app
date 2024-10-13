import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

const Home: FC = () => {

  const services = [
    {
      image: '/images/shipping.svg',
      title: 'Free Shipping',
      paragraph: 'Order above $200'
    },
    {
      image: '/images/finance.svg',
      title: 'Money-back',
      paragraph: '30 days guarantee'
    },
    {
      image: '/images/lock.svg',
      title: 'Secure Payments',
      paragraph: 'Secured by Stripe'
    },
    {
      image: '/images/call.svg',
      title: '24/7 Support',
      paragraph: 'Phone and Email support'
    }
  ];

  return (
    <>
    <section className='px-8 lg:px-14'>
      <Swiper
        slidesPerView={1}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (_, className) {
            return '<span class="' + className + '">' + '</span>';
          },
        }}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled"
        }}
        modules={[Pagination, Navigation]}
        autoHeight={true}
        className='relative'
      >
        <SwiperSlide>
          <img src="/images/hero.png" className='max-h-[536px] w-full' alt="hero" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/hero.png" className='max-h-[536px] w-full' alt="hero" />
        </SwiperSlide>
        <div className='swiper-pagination'></div>
          <div className='hidden md:block'>
            <div className="swiper-button image-swiper-button-next">
              <img style={{
                height: '32px',
                width: '32px'
              }} src={'/images/arrow-right-carousel.svg'} alt="arrow right" />
            </div>
          </div>
          <div className='hidden md:block'>
            <div className="swiper-button image-swiper-button-prev">
              <img style={{
                height: '32px',
                width: '32px'
              }} src={'/images/arrow-left-carousel.svg'} alt="arrow right" />
            </div>
          </div>
      </Swiper>
      <div className='pt-8 pb-10 grid md:grid-cols-2 gap-6'>
        <div>
          <h2 className='text-app-black font-poppins text-[40px]/[44px] md:text-7xl/[76px] tracking-[-0.4px] md:tracking-[-2px] font-medium'>
            Simply Unique <span className='text-app-gray'>/</span> Simply Better.
          </h2>
        </div>
        <div className='flex justify-center items-center'>
            <p className='text-app-gray font-inter text-sm/[22px] md:text-base/[26px] font-normal max-w-[424px]'>
            <span className='text-app-slate-gray font-inter text-base/[26px] font-semibold'>3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
          </p>
        </div>
      </div>
      <div className='grid md:grid-cols-2 gap-6'>
        <div style={{
          backgroundImage: 'url(/images/category-one.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }} className='h-[377px] md:max-h-[664px] md:h-[664px] w-full bg-primary'>
          <div className='p-8 md:p-12'>
            <h2 className='text-app-black font-poppins text-[28px]/[34px] md:text-[34px]/[28px] font-medium tracking-[-0.6px] md:tracking-[-0.6px]'>
              Living Room
            </h2>
            <a className='flex gap-1 items-center cursor-pointer mt-3 border-b border-app-black w-fit'>
              <p className='text-app-black font-inter text-sm font-medium leading-[24px]'>Shop Now</p>
              <img src="/images/arrow-right-carousel.svg" alt="arrow right" className='h-[18px] w-[18px]' />
            </a>
          </div>
        </div>
        <div className='grid md:grid-rows-2 gap-4'>
          <div className='w-full bg-primary grid grid-cols-2'>
            <div className='py-[42px] pl-8 flex flex-col justify-end'>
              <h2 className='text-app-black font-poppins text-[28px]/[34px] md:text-[34px]/[28px] font-medium tracking-[-0.6px] md:tracking-[-0.6px]'>
                Living Room
              </h2>
              <a className='flex gap-1 items-center cursor-pointer mt-3 border-b border-app-black w-fit'>
                <p className='text-app-black font-inter text-sm font-medium leading-[24px]'>Shop Now</p>
                <img src="/images/arrow-right-carousel.svg" alt="arrow right" className='h-[18px] w-[18px]' />
              </a>
            </div>

            <img src="/images/category-one.png" alt="" className='object-cover w-full h-full md:max-h-[319px]' />
          </div>

          <div className='w-full bg-primary grid grid-cols-2'>
            <div className='py-[42px] pl-8 flex flex-col justify-end'>
              <h2 className='text-app-black font-poppins text-[34px]/[28px] font-medium tracking-[-0.6px]'>
                Living Room
              </h2>
              <a className='flex gap-1 items-center cursor-pointer mt-3 border-b border-app-black w-fit'>
                <p className='text-app-black font-inter text-sm font-medium leading-[24px]'>Shop Now</p>
                <img src="/images/arrow-right-carousel.svg" alt="arrow right" className='h-[18px] w-[18px]' />
              </a>
            </div>

            <img src="/images/category-one.png" alt="" className='object-cover w-full h-full md:max-h-[319px]' />
          </div>
        </div>
      </div>
      <div className='pt-12'>
        <div className='flex items-center justify-between'>
          <h3 className='text-black font-poppins text-[40px]/[44px] font-medium tracking-[-0.4px]'>
            New <br /> Arrivals
          </h3>
          <a className='hidden md:flex gap-1 items-center cursor-pointer mt-3'>
              <p className='text-app-black font-inter text-base/[28px] font-medium'>More Products</p>
            <img src="/images/arrow-right-carousel.svg" alt="arrow right" className='h-[20px] w-[20px]' />
          </a>
        </div>
        <div className='py-12 flex gap-6 overflow-x-scroll custom-scrollbar'>
          {
            Array.from({ length: 10 }, (_, idx) => 
              <div key={idx}>
                <div
                  style={{
                    background: 'url(/images/product-one.png)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                  className='bg-primary w-[262px] h-[308px] md:h-[349px] p-4 flex flex-col justify-between'
                >
                  <div className='flex justify-between items-center '>
                    <div>
                      <div className='px-3 py-1 bg-white rounded'>
                        <p className='text-app-black font-inter text-base font-bold uppercase'>New</p>
                      </div>
                      <div className='px-3 py-1 bg-app-green rounded mt-2'>
                        <p className='text-white font-inter text-base font-bold uppercase'>-50%</p>
                      </div>
                    </div>
                    <div className='bg-white p-1.5 rounded-3xl h-8 w-8 shadow-wishlist-icon'>
                      <img src="/images/wishlist.svg" alt="whishlist" className='h-5 w-5' />
                    </div>
                  </div>
                  <button className='text-white text-center font-inter text-base font-medium leading-[28px] tracking-[-0.4px] bg-app-black rounded-lg w-full px-10 py-[10px]'>
                    Add to cart
                  </button>
                </div>
                <div className='mt-3'>
                  <div className='flex gap-0.5 mb-2'>
                    {
                      Array.from({ length: 5 }, (_, idx) => (
                        <img key={idx} src="/images/star-icon.svg" alt="star icon" />
                      ))
                    }
                  </div>
                  <h3 className='mb-2 text-app-black font-inter text-base/[26px] font-medium'>
                    Loveseat Sofa
                  </h3>
                  <div className='flex gap-3.5 items-center'>
                    <p className='text-app-black font-inter text-sm/[22px] font-semibold'>
                      $199.00
                    </p>
                    <p className='text-app-gray font-inter text-sm/[22px] font-semibold'>
                      $400.00
                    </p>
                  </div>
                </div>
              </div>
            )
        }
          </div>
          <a className='flex gap-1 items-center cursor-pointer mt-3'>
            <p className='text-app-black font-inter text-base/[28px] font-medium'>More Products</p>
            <img src="/images/arrow-right-carousel.svg" alt="arrow right" className='h-[20px] w-[20px]' />
          </a>
      </div>
      <div className='py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {
          services.map((item, idx) =>
            <div key={idx} className='py-12 px-8 bg-primary'>
              <img src={item.image} alt={item.title} className='w-12 h-12 object-contain' />
              <h3 className='text-app-black font-poppins text-xl font-medium mt-4 text-nowrap'>
                {item.title}
              </h3>
              <p className='text-app-gray font-poppins text-sm/6 mt-3'>
                {item.paragraph}
              </p>
          </div>
          )
        }
      </div>
    </section>
    <section className='grid md:grid-cols-2'>
        <img src="/images/banner.png" alt="banner iamge" className='w-full h-full object-cover max-h-[532px]' />
        <div className='pr-4 pl-8 md:pr-7 lg:pl-10 lg:pr-14 bg-primary flex flex-col justify-center gap-4 py-12'>
          <p className='text-app-blue font-inter text-base/4 uppercase'>SALE UP TO 35% OFF</p>
          <h2 className='max-w-[452px] text-app-black font-poppins text-[40px]/[44px] font-medium tracking-[-0.4px]'>
            HUNDREDS of
            New lower prices!
          </h2>
          <p className='text-app-black font-inter text-xl/8 max-w-[452px]'>
            It’s more affordable than ever to give every room in your home a stylish makeover
          </p>
          <a className='flex gap-1 items-center cursor-pointer mt-2 border-b border-app-black w-fit'>
            <p className='text-app-black font-inter text-base font-medium leading-[24px]'>Shop Now</p>
            <img src="/images/arrow-right-carousel.svg" alt="arrow right" className='h-[18px] w-[18px]' />
          </a>
        </div>
      </section>
    </>
  )
}

export default Home;

import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import ProductCard from '@/core/components/ProductCard';

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

  const categories = [
    {
      name: 'Tables',
      image: '/table.png'
    },
    {
      name: 'Bags',
      image: '/bag.png'
    },
    {
      name: 'Water Container',
      image: '/water-container.png'
    }
  ]

  const products = [
    {
      name: 'Loveseat Sofa',
      price: '$199.00',
      oldPrice: '$400.00',
      image: '/pro-1.png',
      isNew: true,
      discount: '-50%',
      rating: 5,
    },
    {
      name: 'Armchair',
      price: '$150.00',
      oldPrice: '$300.00',
      image: '/pro-2.png',
      isNew: true,
      discount: '-50%',
      rating: 4,
    },
    {
      name: 'Coffee Table',
      price: '$99.00',
      oldPrice: '$200.00',
      image: '/pro-3.png',
      isNew: true,
      discount: '-30%',
      rating: 3,
    },
    {
      name: 'Dining Table',
      price: '$499.00',
      oldPrice: '$700.00',
      image: '/pro-4.png',
      isNew: false,
      discount: '-20%',
      rating: 4,
    },
    {
      name: 'Loveseat Sofa',
      price: '$199.00',
      oldPrice: '$400.00',
      image: '/pro-1.png',
      isNew: true,
      discount: '-50%',
      rating: 5,
    },
    {
      name: 'Armchair',
      price: '$150.00',
      oldPrice: '$300.00',
      image: '/pro-2.png',
      isNew: true,
      discount: '-50%',
      rating: 4,
    },
    {
      name: 'Coffee Table',
      price: '$99.00',
      oldPrice: '$200.00',
      image: '/pro-3.png',
      isNew: true,
      discount: '-30%',
      rating: 3,
    },
    {
      name: 'Dining Table',
      price: '$499.00',
      oldPrice: '$700.00',
      image: '/pro-4.png',
      isNew: false,
      discount: '-20%',
      rating: 4,
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
            <span className='text-app-slate-gray font-inter text-base/[26px] font-semibold'>Bullet Raja</span> is an accessories & riding gear store based in Ne. City Gold, Ashram Rd, Ahmedabad, Gujarat 380009. Established in 2019.
          </p>
        </div>
      </div>
        <div className='grid md:grid-cols-2 gap-6'>
          <div
            style={{
              backgroundImage: `url(${categories[0].image})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            className='h-[377px] md:max-h-[664px] md:h-[664px] w-full bg-primary'
          >
            <div className='p-8 md:p-12'>
              <h2 className='text-app-black font-poppins text-[28px]/[34px] md:text-[34px]/[28px] font-medium tracking-[-0.6px] md:tracking-[-0.6px]'>
                {categories[0].name}
              </h2>
              <a className='flex gap-1 items-center cursor-pointer mt-3 border-b border-app-black w-fit'>
                <p className='text-app-black font-inter text-sm font-medium leading-[24px]'>Shop Now</p>
                <img src="/images/arrow-right-carousel.svg" alt="arrow right" className='h-[18px] w-[18px]' />
              </a>
            </div>
          </div>
          <div className='grid md:grid-rows-2 gap-4'>
            {categories.slice(1).map((category, index) => (
              <div key={index} className='w-full bg-primary grid grid-cols-2'>
                <div className='py-[42px] pl-8 flex flex-col justify-end'>
                  <h2 className='text-app-black font-poppins text-[28px]/[34px] md:text-[34px]/[28px] font-medium tracking-[-0.6px] md:tracking-[-0.6px]'>
                    {category.name}
                  </h2>
                  <a className='flex gap-1 items-center cursor-pointer mt-3 border-b border-app-black w-fit'>
                    <p className='text-app-black font-inter text-sm font-medium leading-[24px]'>Shop Now</p>
                    <img src="/images/arrow-right-carousel.svg" alt="arrow right" className='h-[18px] w-[18px]' />
                  </a>
                </div>
                <img src={category.image} alt={category.name} className='object-cover w-full h-full md:max-h-[319px]' />
              </div>
            ))}
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
            {products.map((product, idx) => (
              <ProductCard product={product} key={idx} />
            ))}
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
    {/* <section className='grid md:grid-cols-2'>
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
      </section> */}
      <section className='px-8 lg:px-14 py-10 md:py-20'>
        <h3 className='text-black font-poppins text-[40px]/[44px] font-medium tracking-[-0.4px]'>
          Best Seller
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 py-6 md:py-12'>
          {products.map((product, idx) => (
            <ProductCard product={product} key={idx} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home;

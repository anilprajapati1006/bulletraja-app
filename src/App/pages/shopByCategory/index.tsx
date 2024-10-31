import Button from "@/core/components/Button/Button";
import ProductCard from "@/core/components/ProductCard";

export default function ShopByCategory() {
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

  return (
    <>
    <section className='px-8 lg:px-14 shop-by-category-page-banner-bg py-[178px]'>
      <div className="max-w-[498px]">
        <h1 className="font-poppins text-white text-7xl/[80px] font-medium tracking-[-2px] mb-2">
          More than
          just a game.
          It’s a lifestyle.
        </h1>
        <p className="font-inter text-xl/8 font-normal text-white mb-7">
          Whether you’re just starting out, have played your whole life or you're a Tour pro, your swing is like a fingerprint.
        </p>
        <Button text="Shopping Now" className="max-w-fit mx-auto" />
      </div>
      </section>
      <section className='px-8 lg:px-14'>
        <div className='pt-6'>
          <div className='flex items-center justify-between'>
            <h3 className='text-black font-poppins text-[40px]/[44px] font-medium tracking-[-0.4px]'>
              Featured
            </h3>
            <a className='hidden md:flex gap-1 items-center cursor-pointer mt-3'>
              <p className='text-app-black font-inter text-base/[28px] font-medium'>
                More Products
              </p>
              <img
                src='/images/arrow-right-carousel.svg'
                alt='arrow right'
                className='h-[20px] w-[20px]'
              />
            </a>
          </div>
          <div className='py-12 flex gap-6 overflow-x-scroll custom-scrollbar'>
            {products.map((product, idx) => (
              <ProductCard product={product} key={idx} />
            ))}
          </div>
        </div>
      </section>
      <section className='px-8 lg:px-14 py-20'>
        <h3 className='text-black font-poppins text-center text-[40px]/[44px] font-medium tracking-[-0.4px]'>
          Shop by Categories
        </h3>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {
            products.map((product, idx) => (
              <a key={idx} href="">
              <div className='bg-primary relative min-w-[262px] h-[308px] md:h-[309px] p-4 flex flex-col justify-between'>
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-full object-cover max-h-[254px] my-auto'
                />
                
                </div>
                <p className="text-center font-poppins text-xl/7 font-medium text-app-black py-4">
                  Golf Clubs
                </p>
              </a>
            ))
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
      <section className="px-8 lg:px-14">
        <h3 className='text-black font-poppins text-[40px]/[44px] font-medium tracking-[-0.4px] py-12'>
          Shop Collection
        </h3>
        <div className='grid md:grid-cols-2 gap-6'>
          <div
            style={{
              backgroundImage: `url(${categories[0].image})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            className='h-[377px] md:max-h-[664px] md:h-[664px] w-full bg-primary'
          >
            <div className='p-8 md:p-12'>
              <h2 className='text-app-black font-poppins text-[28px]/[34px] md:text-[34px]/[28px] font-medium tracking-[-0.6px] md:tracking-[-0.6px]'>
                {categories[0].name}
              </h2>
              <a className='flex gap-1 items-center cursor-pointer mt-3 border-b border-app-black w-fit'>
                <p className='text-app-black font-inter text-sm font-medium leading-[24px]'>
                  Shop Now
                </p>
                <img
                  src='/images/arrow-right-carousel.svg'
                  alt='arrow right'
                  className='h-[18px] w-[18px]'
                />
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
                    <p className='text-app-black font-inter text-sm font-medium leading-[24px]'>
                      Shop Now
                    </p>
                    <img
                      src='/images/arrow-right-carousel.svg'
                      alt='arrow right'
                      className='h-[18px] w-[18px]'
                    />
                  </a>
                </div>
                <img
                  src={category.image}
                  alt={category.name}
                  className='object-cover w-full h-full md:max-h-[319px]'
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

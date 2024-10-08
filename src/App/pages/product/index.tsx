
export default function ProductPage() {
  return (
      <section className="px-8 lg:px-14 border-t border-app-light-gray">
          <div className="w-fit flex gap-3 md:gap-4 py-4">
              <div className="flex items-center gap-1">
                  <p className="text-grayish-brown font-inter text-xs/5 md:text-sm/6 font-medium">Home</p>
                  <img src="/images/right-icon.svg" alt="right icon" className="w-3 h-3 object-contain" />
              </div>
              <p className="text-app-black font-inter text-sm/[25px] font-medium">
                  Shop
              </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
              <div className='space-y-5'>
                  <div className='relative h-[311px] md:h-[729px] w-full bg-primary'>
                      <div className="absolute top-8 left-8">
                          <div className='px-3 py-1 bg-white rounded'>
                              <p className='text-app-black font-inter text-base font-bold uppercase'>New</p>
                          </div>
                          <div className='px-3 py-1 bg-app-green rounded mt-2'>
                              <p className='text-white font-inter text-base font-bold uppercase'>-50%</p>
                          </div>
                      </div>
                      <img
                          src={'/images/product-one.png'}
                          alt={'Product Img'}
                          className='object-contain object-center h-auto max-h-full w-full'
                      />
                      <button
                          className='absolute left-8 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full'
                      >
                          <img style={{
                              height: '32px',
                              width: '32px'
                          }} src={'/images/arrow-left-carousel.svg'} alt="arrow right" className="h-6 w-6 object-contain" />
                      </button>
                      <button
                          className='absolute right-8 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full'
                      >
                          <img style={{
                              height: '32px',
                              width: '32px'
                          }} src={'/images/arrow-right-carousel.svg'} alt="arrow right" className="h-6 w-6 object-contain" />
                      </button>
                  </div>
                  <div className='hidden md:grid grid-cols-3 gap-6'>
                      {
                          Array.from({ length: 3 }, (_, idx) => (
                              <div key={idx} className={`h-[167px] w-full max-w-full`}>
                                  <img
                                      src={'/images/product-one.png'}
                                      alt={'Product Img'}
                                      className='object-cover object-center h-full w-full'
                                  />
                              </div>
                          ))
                      }
                  </div>
              </div>
              <div>
                  <div className="space-y-4 pb-6 border-b border-app-light-gray">
                      <div className="flex gap-[10px] items-center">
                          <div className='flex gap-0.5'>
                              {
                                  Array.from({ length: 5 }, (_, idx) => (
                                      <img key={idx} src="/images/star-icon.svg" alt="star icon" className="h-4 w-4" />
                                  ))
                              }
                          </div>
                      </div>
                      <h1 className="text-app-black font-poppins text-[40px]/[44px] font-medium tracking-[-0.4px]">
                          Tray Table
                      </h1>
                      <p className="text-app-gray text-base/[26px] font-inter">
                          Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.
                      </p>
                      <div className='flex gap-3 items-center'>
                          <p className='text-app-black font-poppins text-[28px]/[34px] font-semibold tracking-[-0.6px]'>
                              $199.00
                          </p>
                          <p className='text-app-gray font-poppins text-[28px]/[34px] font-semibold tracking-[-0.6px]'>
                              $400.00
                          </p>
                      </div>
                  </div>
              </div>
          </div>
    </section>
  )
}

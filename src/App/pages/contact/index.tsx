import Button from "@/core/components/Button/Button"

export default function ContactPage() {
    const items = [
        {
            icon: '/images/store.svg',
            title: 'Address',
            paragraph: 'Ne. City Gold, Ashram Rd, Ahmedabad, Gujarat 380009.'
        },
        {
            icon: '/images/call.svg',
            title: 'Contact Us',
            paragraph: '+91 077770 01347'
        },
        {
            icon: '/images/mail.svg',
            title: 'Email',
            paragraph: 'hello@bulletraja.com'
        }
    ];

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
            <section className="px-8 lg:px-14 py-20 space-y-12">
                <div className="max-w-[834px]">
                    <p className="text-app-black font-poppins text-3xl/[34px] md:text-[54px]/[58px]  font-medium mb-6">
                        We believe in sustainable riding gear. We’re passionate about the journey on the road.
                    </p>
                    <p className="text-app-black font-inter text-base/[26px] font-normal">
                        Our collection features timeless riding gear and accessories, with durable materials, sleek designs, and a focus on both style and safety. Each piece is crafted to endure the rigors of the road, blending classic craftsmanship with modern innovations, built to last for generations.
                    </p>
                </div>
                <div className='grid md:grid-cols-2'>
                    <img src="/images/banner.png" alt="banner iamge" className='w-full h-full object-cover max-h-[532px]' />
                    <div className='pr-4 pl-8 md:pr-7 lg:pl-10 lg:pr-14 bg-primary flex flex-col justify-center gap-4 py-12'>
                        <p className="text-app-black font-poppins text-xl/7 md:text-[40px]/[44px] font-medium tracking-[-0.4px]">
                            About Us
                        </p>
                        <p className="text-app-black font-inter text-sm/[22px] md:text-base/[26px] font-normal">
                            Bullet Raja is an accessories & riding gear store based in Ne. City Gold, Ashram Rd, Ahmedabad, Gujarat 380009.
                            Established in 2019, our customer service is always ready to support you 24/7.
                        </p>
                        <a className='flex gap-1 items-center cursor-pointer mt-2 border-b border-app-black w-fit'>
                            <p className='text-app-black font-inter text-base font-medium leading-[24px]'>Shop Now</p>
                            <img src="/images/arrow-right-carousel.svg" alt="arrow right" className='h-[18px] w-[18px]' />
                        </a>
                    </div>
                </div>
                <div className="space-y-10">
                    <p className="text-app-black font-poppins text-xl/7 md:text-[40px]/[44px] font-medium tracking-[-0.4px] text-center">
                        Contact Us
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {
                            items.map((item, idx) => (
                                <div key={idx} className="bg-primary pt-4 pb-12 px-8">
                                    <div className="flex justify-center mb-4">
                                        <img src={item.icon} alt={item.title} className="w-8 h-8 object-contain object-center" />
                                    </div>
                                    <p className="text-app-gray font-inter text-base/4 font-bold uppercase text-center mb-2">
                                        {item.title}
                                    </p>
                                    <p className="text-app-black font-inter text-base/[26px] font-semibold text-center max-w-[293px] mx-auto">
                                        {item.paragraph}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-7">
                    <form className="space-y-6 w-full">
                        <div className="space-y-3 w-full">
                            <label htmlFor="fullname" className="text-app-gray font-inter text-sm/3 font-bold uppercase">Full Name</label>
                            <input placeholder="Full Name" type="text" name="fullname" id="fullname" className="border border-muted-gray outline-none ring-0 focus:ring-0 w-full rounded-md" />
                        </div>
                        <div className="space-y-3 w-full">
                            <label htmlFor="email" className="text-app-gray font-inter text-sm/3 font-bold uppercase">Email Address</label>
                            <input placeholder="Your email" type="email" name="email" id="email" className="border border-muted-gray outline-none ring-0 focus:ring-0 w-full rounded-md" />
                        </div>
                        <div className="space-y-3 w-full">
                            <label htmlFor="message" className="text-app-gray font-inter text-sm/3 font-bold uppercase">Message</label>
                            <textarea placeholder="Your message" rows={6} name="message" id="message" className="border border-muted-gray outline-none ring-0 focus:ring-0 w-full rounded-md" />
                        </div>
                        <Button text="Send Message" className="max-w-fit" />
                    </form>

                    <div className="h-full">
                        <a href="https://maps.app.goo.gl/9PoCW6L9VbkTiUaG9" target="_blank" rel="noopener noreferrer">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d6592.9700753129155!2d72.5655811934224!3d23.031977720160594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x395e850459711a31%3A0xaa2cd669fcfebc64!2sNe.%20City%20Gold%2C%20Ashram%20Rd%2C%20Ahmedabad%2C%20Gujarat%20380009!3m2!1d23.032309899999998!2d72.570005!5e0!3m2!1sen!2sin!4v1729392408352!5m2!1sen!2sin"
                                width="650" height="450" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                            />
                        </a>
                    </div>
                    {/* <div className="h-full">
                        <img src="/images/map.png" alt="Location" className="w-full h-full object-contain object-center" />
                    </div> */}
                </div>
            </section>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 mb-20'>
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
        </>
    )
}

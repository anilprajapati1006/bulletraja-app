const ProductCard = ({ product }: {product: any}) => {
    return (
        <a className="block" href="/product/1">
            <div className='bg-primary relative min-w-[262px] h-[308px] md:h-[349px] p-4 flex flex-col justify-between'>
                {/* Product Image */}
                <img
                    src={product.image}
                    alt={product.name}
                    className='w-full object-cover max-h-[254px] my-auto'
                />

                {/* Product Badges */}
                <div className='flex justify-between items-center absolute top-0 left-0 p-4 w-full'>
                    <div>
                        {product.isNew && (
                            <div className='px-3 py-1 bg-white rounded'>
                                <p className='text-app-black font-inter text-base font-bold uppercase'>New</p>
                            </div>
                        )}
                        {product.discount && (
                            <div className='px-3 py-1 bg-app-green rounded mt-2'>
                                <p className='text-white font-inter text-base font-bold uppercase'>
                                    {product.discount}
                                </p>
                            </div>
                        )}
                    </div>
                    <div className='bg-white p-1.5 rounded-3xl h-8 w-8 shadow-wishlist-icon'>
                        <img src="/images/wishlist.svg" alt="wishlist" className='h-5 w-5' />
                    </div>
                </div>

                {/* Add to Cart Button */}
                <button className='text-white text-center font-inter text-base font-medium leading-[28px] tracking-[-0.4px] bg-app-black rounded-lg w-full px-10 py-[10px]'>
                    Add to cart
                </button>
            </div>

            {/* Product Info */}
            <div className='mt-3'>
                <div className='flex gap-0.5 mb-2'>
                    {Array.from({ length: product.rating }, (_, idx) => (
                        <img key={idx} src="/images/star-icon.svg" alt="star icon" />
                    ))}
                </div>

                <h3 className='mb-2 text-app-black font-inter text-base/[26px] font-medium'>
                    {product.name}
                </h3>

                <div className='flex gap-3.5 items-center'>
                    <p className='text-app-black font-inter text-sm/[22px] font-semibold'>
                        {product.price}
                    </p>
                    <p className='text-app-gray font-inter text-sm/[22px] font-semibold line-through'>
                        {product.oldPrice}
                    </p>
                </div>
            </div>
        </a>
    );
};

export default ProductCard;


export default function About() {
    return (
        <section className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <img src="/about-img.png" alt="banner iamge" className='w-full h-full object-cover max-h-[532px]' />
                <div className='pr-4 pl-8 md:pr-7 lg:pl-10 lg:pr-14 bg-primary flex flex-col justify-center gap-4 py-12'>
                    <h2 className='max-w-[452px] text-app-black font-poppins text-[40px]/[44px] font-semibold tracking-[-0.4px]'>
                        Our Story
                    </h2>
                    <p className='text-app-black font-inter text-base/[26px] max-w-[452px]'>
                        Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
                    </p>
                </div>
            </div>
            <div className="px-8 lg:px-14 py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                    <div className="py-10 px-10 rounded-[4px] border bg-white hover:bg-app-green group transition-all duration-300 border-app-light-gray flex flex-col items-center gap-6 cursor-pointer">
                        <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM11.4071 40C11.4071 56.0675 24.4325 69.0929 40.5 69.0929C56.5675 69.0929 69.5929 56.0675 69.5929 40C69.5929 23.9325 56.5675 10.9071 40.5 10.9071C24.4325 10.9071 11.4071 23.9325 11.4071 40Z" fill="#2F2E30" />
                            <circle cx="40.5" cy="40" r="29" fill="black" />
                            <path d="M54.6417 25H47.9883L48.8217 33.3333C48.8217 33.3333 50.4883 35 52.9883 35C54.3007 35.0017 55.5685 34.524 56.5533 33.6567C56.6574 33.5594 56.735 33.4372 56.7788 33.3016C56.8225 33.166 56.831 33.0214 56.8033 32.8817L55.6267 25.8333C55.5873 25.6005 55.4668 25.3891 55.2865 25.2366C55.1063 25.084 54.8778 25.0002 54.6417 25V25Z" stroke="white" stroke-width="2" />
                            <path d="M47.9883 25L48.8217 33.3333C48.8217 33.3333 47.155 35 44.655 35C42.155 35 40.4883 33.3333 40.4883 33.3333V25H47.9883Z" stroke="#FAFAFA" stroke-width="2" />
                            <path d="M40.4883 25V33.3333C40.4883 33.3333 38.8217 35 36.3217 35C33.8217 35 32.155 33.3333 32.155 33.3333L32.9883 25H40.4883Z" stroke="#FAFAFA" stroke-width="2" />
                            <path d="M32.9883 25H26.3367C26.1 24.9999 25.871 25.0838 25.6903 25.2367C25.5096 25.3896 25.389 25.6016 25.35 25.835L24.175 32.8833C24.1475 33.0231 24.1561 33.1676 24.1998 33.3032C24.2435 33.4387 24.321 33.5609 24.425 33.6583C24.9717 34.1417 26.1933 35.0017 27.9883 35.0017C30.4883 35.0017 32.155 33.335 32.155 33.335L32.9883 25.0017V25Z" stroke="#FAFAFA" stroke-width="2" />
                            <path d="M25.5 35V51.6667C25.5 52.5507 25.8512 53.3986 26.4763 54.0237C27.1014 54.6488 27.9493 55 28.8333 55H52.1667C53.0507 55 53.8986 54.6488 54.5237 54.0237C55.1488 53.3986 55.5 52.5507 55.5 51.6667V35" stroke="#FAFAFA" stroke-width="2" />
                            <path d="M45.2217 55V45C45.2217 44.1159 44.8705 43.2681 44.2454 42.6429C43.6202 42.0178 42.7724 41.6666 41.8883 41.6666H38.555C37.671 41.6666 36.8231 42.0178 36.198 42.6429C35.5729 43.2681 35.2217 44.1159 35.2217 45V55" stroke="#FAFAFA" stroke-width="2" stroke-miterlimit="16" />
                        </svg>
                        <div className="">
                            <p className="text-app-black group-hover:text-white  text-center font-inter text-[32px]/[30px] font-bold mb-2">10.5k </p>
                            <p className="text-app-black group-hover:text-white text-center font-poppins text-8/[30px] mb-2">Sallers active our site </p>
                        </div>
                    </div>
                    <div className="py-10 px-10 rounded-[4px] border bg-white hover:bg-app-green group transition-all duration-300 border-app-light-gray flex flex-col items-center gap-6 cursor-pointer">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z" fill="#2F2E30" />
                            <circle cx="40" cy="40" r="29" fill="black" />
                            <path d="M40 57.2728C49.5395 57.2728 57.2728 49.5395 57.2728 40C57.2728 30.4606 49.5395 22.7273 40 22.7273C30.4606 22.7273 22.7273 30.4606 22.7273 40C22.7273 49.5395 30.4606 57.2728 40 57.2728Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M45.0909 34.547C44.7616 33.9758 44.283 33.505 43.7065 33.1848C43.13 32.8646 42.4773 32.7072 41.8182 32.7294H38.1818C37.2174 32.7294 36.2925 33.1124 35.6105 33.7941C34.9286 34.4759 34.5455 35.4005 34.5455 36.3647C34.5455 37.3288 34.9286 38.2535 35.6105 38.9353C36.2925 39.617 37.2174 40 38.1818 40H41.8182C42.7826 40 43.7075 40.383 44.3895 41.0648C45.0714 41.7465 45.4546 42.6712 45.4546 43.6354C45.4546 44.5995 45.0714 45.5242 44.3895 46.2059C43.7075 46.8877 42.7826 47.2707 41.8182 47.2707H38.1818C37.5227 47.2929 36.87 47.1354 36.2935 46.8153C35.717 46.4951 35.2385 46.0242 34.9091 45.453" stroke="white" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M40 28.1818V32.1212M40 47.8787V51.8181" stroke="white" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className="">
                            <p className="text-app-black group-hover:text-white  text-center font-inter text-[32px]/[30px] font-bold mb-2">33k</p>
                            <p className="text-app-black group-hover:text-white text-center font-poppins text-8/[30px] mb-2">Mopnthly Produduct Sale</p>
                        </div>
                    </div>
                    <div className="py-10 px-10 rounded-[4px] border bg-white hover:bg-app-green group transition-all duration-300 border-app-light-gray flex flex-col items-center gap-6 cursor-pointer">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z" fill="#2F2E30" />
                            <circle cx="40" cy="40" r="29" fill="black" />
                            <path d="M31.6666 31.6667V28.3334C31.6666 27.3682 31.946 26.4236 32.4711 25.6137C32.9961 24.8038 33.7443 24.1632 34.6254 23.7691C35.5065 23.3751 36.4829 23.2445 37.4366 23.3931C38.3903 23.5418 39.2805 23.9633 40 24.6067C40.7194 23.9633 41.6097 23.5418 42.5634 23.3931C43.517 23.2445 44.4934 23.3751 45.3745 23.7691C46.2556 24.1632 47.0038 24.8038 47.5289 25.6137C48.0539 26.4236 48.3333 27.3682 48.3333 28.3334V31.6667H50.8333C51.4963 31.6667 52.1322 31.9301 52.6011 32.399C53.0699 32.8678 53.3333 33.5037 53.3333 34.1667V50.8417C53.3333 52.3866 52.7196 53.8682 51.6272 54.9606C50.5348 56.053 49.0532 56.6667 47.5083 56.6667H33.3333C31.5652 56.6667 29.8695 55.9643 28.6192 54.7141C27.369 53.4639 26.6666 51.7682 26.6666 50.0001V34.1667C26.6666 33.5037 26.93 32.8678 27.3989 32.399C27.8677 31.9301 28.5036 31.6667 29.1666 31.6667H31.6666ZM42.725 54.1667C42.0451 53.1914 41.6814 52.0306 41.6833 50.8417V34.1667H29.1666V50.0001C29.1666 50.5472 29.2744 51.089 29.4838 51.5946C29.6932 52.1001 30.0001 52.5594 30.387 52.9463C30.7739 53.3332 31.2333 53.6402 31.7388 53.8496C32.2443 54.0589 32.7861 54.1667 33.3333 54.1667H42.725ZM39.1666 31.6667V28.3334C39.1666 27.6703 38.9032 27.0345 38.4344 26.5656C37.9656 26.0968 37.3297 25.8334 36.6666 25.8334C36.0036 25.8334 35.3677 26.0968 34.8989 26.5656C34.43 27.0345 34.1666 27.6703 34.1666 28.3334V31.6667H39.1666ZM41.6666 31.6667H45.8333V28.3334C45.8333 27.8188 45.6746 27.3167 45.3787 26.8957C45.0828 26.4746 44.6642 26.1552 44.18 25.9809C43.6958 25.8066 43.1696 25.786 42.6732 25.9219C42.1769 26.0577 41.7346 26.3435 41.4066 26.7401C41.575 27.2401 41.6666 27.7767 41.6666 28.3334V31.6667ZM44.1833 50.8417C44.1833 51.7236 44.5336 52.5693 45.1572 53.1929C45.7807 53.8164 46.6264 54.1667 47.5083 54.1667C48.3901 54.1667 49.2359 53.8164 49.8594 53.1929C50.483 52.5693 50.8333 51.7236 50.8333 50.8417V34.1667H44.1833V50.8417Z" fill="white" />
                        </svg>
                        <div className="">
                            <p className="text-app-black group-hover:text-white  text-center font-inter text-[32px]/[30px] font-bold mb-2">45.5k</p>
                            <p className="text-app-black group-hover:text-white text-center font-poppins text-8/[30px] mb-2">Customer active in our site</p>
                        </div>
                    </div>
                    <div className="py-10 px-10 rounded-[4px] border bg-white hover:bg-app-green group transition-all duration-300 border-app-light-gray flex flex-col items-center gap-6 cursor-pointer">
                        <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM11.4071 40C11.4071 56.0675 24.4325 69.0929 40.5 69.0929C56.5675 69.0929 69.5929 56.0675 69.5929 40C69.5929 23.9325 56.5675 10.9071 40.5 10.9071C24.4325 10.9071 11.4071 23.9325 11.4071 40Z" fill="#2F2E30" />
                            <circle cx="40.5" cy="40" r="29" fill="black" />
                            <path d="M40.9275 38.1456V38.6456L41.4275 38.6456C42.0912 38.6457 42.7386 38.8514 43.2806 39.2346C43.8226 39.6178 44.2324 40.1596 44.4537 40.7854C44.4723 40.8382 44.4804 40.8942 44.4774 40.9502C44.4744 41.0062 44.4604 41.0611 44.4362 41.1117C44.412 41.1624 44.3781 41.2077 44.3363 41.2452C44.2946 41.2828 44.2459 41.3117 44.193 41.3304C44.1401 41.3491 44.084 41.3571 44.0279 41.3542C43.9719 41.3512 43.917 41.3372 43.8664 41.313C43.7641 41.2641 43.6855 41.1766 43.6477 41.0697L43.6477 41.0695C43.4853 40.6104 43.1845 40.213 42.7869 39.9319C42.3893 39.6509 41.9143 39.5 41.4273 39.5002L40.9275 39.5003V40.0002V43.7092V44.2092H41.4275C42.2786 44.2092 43.0948 44.5473 43.6966 45.1491C44.2984 45.7509 44.6365 46.5672 44.6365 47.4183C44.6365 48.2694 44.2984 49.0856 43.6966 49.6874C43.0948 50.2892 42.2786 50.6273 41.4275 50.6273H40.9275V51.1273V51.5546H40.0729V51.1273V50.6273L39.5729 50.6273C38.9092 50.6273 38.2618 50.4215 37.7198 50.0383C37.1779 49.6551 36.768 49.1134 36.5467 48.4876L36.5469 48.4875L36.5418 48.4744C36.5213 48.4211 36.5116 48.3642 36.5134 48.3071C36.5153 48.25 36.5285 48.1939 36.5524 48.142C36.5763 48.0901 36.6104 48.0435 36.6526 48.005C36.6948 47.9665 36.7443 47.9369 36.7982 47.9179C36.852 47.8988 36.9092 47.8908 36.9662 47.8942C37.0232 47.8977 37.079 47.9125 37.1302 47.9379C37.1814 47.9632 37.2269 47.9986 37.2642 48.0419C37.3015 48.0852 37.3297 48.1355 37.3472 48.1899L37.3495 48.1969L37.352 48.2039C37.6765 49.1186 38.548 49.7728 39.5729 49.7728H40.0729V49.2728V45.5637V45.0637H39.5729C38.7218 45.0637 37.9056 44.7256 37.3038 44.1238C36.702 43.522 36.3639 42.7058 36.3639 41.8547C36.3639 41.0036 36.702 40.1874 37.3038 39.5856C37.9056 38.9837 38.7218 38.6456 39.5729 38.6456H40.0729V38.1456V37.7184H40.9275V38.1456ZM40.0729 40.0002V39.5002H39.5729C38.9485 39.5002 38.3496 39.7482 37.908 40.1898C37.4665 40.6314 37.2184 41.2302 37.2184 41.8547C37.2184 42.4792 37.4665 43.078 37.908 43.5196C38.3496 43.9612 38.9485 44.2092 39.5729 44.2092H40.0729V43.7092V40.0002ZM40.9275 49.2728V49.7728H41.4275C42.0519 49.7728 42.6508 49.5247 43.0924 49.0832C43.5339 48.6416 43.782 48.0427 43.782 47.4183C43.782 46.7938 43.5339 46.1949 43.0924 45.7534C42.6508 45.3118 42.0519 45.0637 41.4275 45.0637H40.9275V45.5637V49.2728Z" fill="#FAFAFA" stroke="#FAFAFA" />
                            <path d="M47.7695 32.5772L48.0001 32.8203C49.8981 34.8211 51.4858 37.0948 52.7105 39.5658L52.7115 39.5677C53.9873 42.1703 54.7037 44.8133 54.5867 47.1301L54.5867 47.1301C54.4723 49.3912 53.5716 51.3572 51.5218 52.806L51.5218 52.806C49.4129 54.296 45.9467 55.3336 40.5354 55.3336C35.1198 55.3336 31.6397 54.3141 29.5132 52.8421L29.5129 52.842C27.4494 51.412 26.5376 49.472 26.4101 47.2374L47.7695 32.5772ZM47.7695 32.5772L47.457 32.698M47.7695 32.5772L47.457 32.698M47.457 32.698C43.1083 34.3797 37.8707 34.3798 33.5219 32.6998L33.3417 33.1662L32.9752 32.8262C31.1573 34.7856 29.4657 37.1897 28.251 39.6929L28.2509 39.6929M47.457 32.698L28.2509 39.6929M28.2509 39.6929C26.9804 42.3123 26.2784 44.9432 26.4101 47.2372L28.2509 39.6929ZM50.3428 26.1814C50.7832 26.3992 51.1642 26.6076 51.4775 26.7943L48.3457 31.3725L48.114 31.7111L48.4009 32.0044C50.3394 33.9861 52.1697 36.5164 53.4805 39.1919C54.7935 41.8721 55.5679 44.6624 55.441 47.1735C55.3151 49.6637 54.3054 51.8863 52.0163 53.5035C49.7051 55.1363 46.0382 56.1881 40.5364 56.1881C35.0332 56.1881 31.3544 55.1551 29.028 53.5441C26.7245 51.9489 25.6991 49.7543 25.558 47.2856C25.4157 44.7951 26.1758 42.0153 27.4835 39.3201C28.7889 36.6299 30.6229 34.0598 32.5812 31.9993L32.8589 31.7071L32.6323 31.3738L29.5225 26.7979C29.6798 26.7052 29.8536 26.6075 30.043 26.5066L30.043 26.5066L30.0447 26.5056C30.2353 26.4032 30.4408 26.2977 30.6614 26.1901L30.8573 26.0946C33.1034 25.024 36.6645 23.8094 40.5364 23.8094C44.4385 23.8094 47.9975 25.0428 50.2165 26.1201L50.3412 26.1806C50.3417 26.1808 50.3423 26.1811 50.3428 26.1814ZM49.7117 27.8618L50.2968 27.0064L49.2631 27.0808C46.6696 27.2675 43.6003 27.8748 40.6554 28.7274C38.6714 29.3006 36.4387 29.2193 34.3339 28.8311C33.8046 28.7329 33.279 28.6161 32.758 28.4809L31.4726 28.1471L32.2188 29.2457L33.9991 31.8671L34.091 32.0024L34.245 32.0572C38.1692 33.4543 42.7996 33.4542 46.7245 32.0592L46.5571 31.588L46.9698 31.8703L49.7117 27.8618ZM34.4877 27.9905L34.4881 27.9905C36.523 28.3653 38.6079 28.4298 40.4168 27.9058L40.4175 27.9056C42.3859 27.3322 44.388 26.8812 46.4122 26.5552L46.4768 25.5828C44.7353 25.0585 42.6905 24.664 40.5354 24.664C37.2536 24.664 34.2063 25.5779 32.08 26.4803L32.2754 26.9406L32.1328 27.4198C32.8897 27.645 33.6821 27.8413 34.4877 27.9905Z" fill="#FAFAFA" stroke="#FAFAFA" />
                        </svg>
                        <div className="">
                            <p className="text-app-black group-hover:text-white  text-center font-inter text-[32px]/[30px] font-bold mb-2">25k</p>
                            <p className="text-app-black group-hover:text-white text-center font-poppins text-8/[30px] mb-2">Anual gross sale in our site</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
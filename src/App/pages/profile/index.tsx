import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import AccountDetails from "@/core/components/Account/Account";
import Security from "@/core/components/Account/Security";
import Address from "@/core/components/Account/Address";
import Orders from "@/core/components/Account/Orders";
import Wishlist from "@/core/components/Account/Wishlist";



export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState('account');
    const location = useLocation();
    const navigate = useNavigate();

    const searchParams = new URLSearchParams(location.search);
    const currentTab = searchParams.get('currentTab');

    const tabs = [
        {
            label: 'Account',
            value: 'account',
        },
        {
            label: 'Security',
            value: 'security',
        },
        {
            label: 'Address',
            value: 'address',
        },
        {
            label: 'Orders',
            value: 'orders',
        },
        {
            label: 'Wishlist',
            value: 'wishlist',
        },
        {
            label: 'Log Out',
            value: 'logout',
        },
    ];

    useEffect(() => {
        if (currentTab) {
            setActiveTab(currentTab);
        }
    }, [currentTab]);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        searchParams.set('currentTab', tab);
        navigate(`?${searchParams.toString()}`);
    }

    return (
        <section className="px-8 lg:px-14 pb-20">
            <h1 className="py-10 md:py-20 font-poppins text-[40px]/[44px] md:text-[54px]/[58px] text-center font-medium">
                My Account
            </h1>
            <div className="flex flex-col md:flex-row">
                <div className="py-10 px-4 w-full md:w-fit bg-app-light-gray rounded-lg space-y-10 h-fit">
                    <div className="flex flex-col items-center gap-[6px]">
                        <div className="w-[82px] h-[82px] relative">
                            <img src="/images/avatar_placeholder.png" alt="Avatar" className="w-full h-full object-contain object-center" />
                            <div className="absolute bottom-0 right-0 p-[7px] rounded-full border-[1.5px] border-white bg-app-orange">
                                <img src="/images/camera.svg" alt="Camera" className="w-4 h-4 object-contain object-center" />
                            </div>
                        </div>
                        <p className="text-app-black font-inter text-xl/8 font-semibold">
                            Sofia Havertz
                        </p>
                    </div>
                    <ul className="space-y-2 min-w-[230px] hidden md:block">
                        {tabs.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => handleTabChange(item.value)} 
                                className={`py-2 font-inter text-base font-semibold leading-[26px] cursor-pointer ${activeTab === item.value ? 'text-app-black border-b border-app-black' : 'text-app-gray'
                                    }`}>
                                {item.label}
                            </li>
                        ))}
                    </ul>
                    <div className="min-w-[230px] block md:hidden">
                        <select
                            className="w-full py-2 font-inter text-base font-semibold leading-[26px] cursor-pointer border border-app-gray rounded-md"
                            value={activeTab}
                            onChange={(e) => setActiveTab(e.target.value)}
                        >
                            {tabs.map((item, index) => (
                                <option
                                    key={index}
                                    value={item.value}
                                    className={`font-inter text-base font-semibold leading-[26px] ${activeTab == item.value ? 'text-app-black' : 'text-app-gray'
                                        }`}
                                >
                                    {item.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {
                    activeTab == 'account' &&
                    <AccountDetails />
                }
                {
                    activeTab == 'security' &&
                    <Security />
                }
                {
                    activeTab == 'address' &&
                    <Address />
                }
                {
                    activeTab == 'orders' &&
                    <Orders />
                }
                {
                    activeTab == 'wishlist' &&
                    <Wishlist />
                }
            </div>
        </section>
    );
};

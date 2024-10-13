export default function Orders() {
    return (
        <div className="w-full space-y-10 py-10 md:py-0 md:px-[72px]">
            <div className="space-y-5">
                <p className="text-app-black font-poppins text-xl/7 font-semibold">
                    Orders History
                </p>
            </div>
            <div className="overflow-x-auto hidden md:block">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="pb-6 text-left text-app-gray font-inter text-base/[26px] border-b border-app-light-gray font-normal">
                                Number ID
                            </th>
                            <th className="pb-6 text-left text-app-gray font-inter text-base/[26px] border-b border-app-light-gray font-normal">
                                Dates
                            </th>
                            <th className="pb-6 text-left text-app-gray font-inter text-base/[26px] border-b border-app-light-gray font-normal">
                                Status
                            </th>
                            <th className="pb-6 text-left text-app-gray font-inter text-base/[26px] border-b border-app-light-gray font-normal">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-6 border-b border-app-light-gray text-app-black font-inter text-sm/[22px]">
                                #3456_768
                            </td>
                            <td className="py-6 border-b border-app-light-gray text-app-black font-inter text-sm/[22px]">
                                October 17, 2023
                            </td>
                            <td className="py-6 border-b border-app-light-gray text-app-black font-inter text-sm/[22px]">
                                Delivered
                            </td>
                            <td className="py-6 border-b border-app-light-gray text-app-black font-inter text-sm/[22px]">
                                $1234.00
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div className="block md:hidden">
                <table className="w-full">
                    <tbody className="border-b border-app-light-gray">
                        <tr className="">
                            <th className="py-4 text-left text-app-gray font-inter text-sm">Number ID:</th>
                            <td className="py-4 text-left text-app-black font-inter text-sm">#3456_768</td>
                        </tr>
                        <tr className="">
                            <th className="py-4 text-left text-app-gray font-inter text-sm">Dates:</th>
                            <td className="py-4 text-left text-app-black font-inter text-sm">October 17, 2023</td>
                        </tr>
                        <tr className="">
                            <th className="py-4 text-left text-app-gray font-inter text-sm">Status:</th>
                            <td className="py-4 text-left text-app-black font-inter text-sm">Delivered</td>
                        </tr>
                        <tr className="">
                            <th className="py-4 text-left text-app-gray font-inter text-sm">Price:</th>
                            <td className="py-4 text-left text-app-black font-inter text-sm">$1234.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

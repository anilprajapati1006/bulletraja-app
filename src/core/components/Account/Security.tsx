import Button from "../Button/Button";

export default function Security() {
    return (
        <form className="space-y-10 w-full py-10 md:py-0 md:px-[72px]">
            <div className="space-y-5">
                <p className="text-app-black font-poppins text-xl/7 font-semibold">
                    Password
                </p>
                <div className="space-y-3 w-full">
                    <label htmlFor="oldPassword" className="text-app-gray font-inter text-sm/3 font-bold uppercase">Old password</label>
                    <input placeholder="Old password" type="text" name="oldPassword" id="oldPassword" className="border border-muted-gray outline-none ring-0 focus:ring-0 w-full rounded-md" />
                </div>
                <div className="space-y-3 w-full">
                    <label htmlFor="newPassword" className="text-app-gray font-inter text-sm/3 font-bold uppercase">new password</label>
                    <input placeholder="new password" type="text" name="newpassword" id="newPassword" className="border border-muted-gray outline-none ring-0 focus:ring-0 w-full rounded-md" />
                </div>
                <div className="space-y-3 w-full">
                    <label htmlFor="repeatNewPassword" className="text-app-gray font-inter text-sm/3 font-bold uppercase">Repeat New Password</label>
                    <input placeholder="Repeat New Password" type="text" name="repeatNewPassword" id="repeatNewPassword" className="border border-muted-gray outline-none ring-0 focus:ring-0 w-full rounded-md" />
                </div>
            </div>

            <Button text="Save changes" className="max-w-fit" />
        </form>
    )
}

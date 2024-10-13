import Button from "../Button/Button";
import { FC, useEffect, useState } from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsAnimating(true);
        } else {
            const timer = setTimeout(() => setIsAnimating(false), 300); // Match this with the CSS transition duration
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isAnimating && !isOpen) return null;

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`bg-white rounded-lg shadow-lg px-5 pt-8 pb-5 max-w-sm w-full mx-auto transform transition-transform duration-300 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
                <div className="flex justify-center items-center mb-5">
                    <img
                        src="/images/success-icon.svg"
                        alt="Success Icon"
                        className="h-[108px] w-[108px] object-contain object-center"
                    />
                </div>
                <p className="text-app-black font-inter text-2xl font-bold text-center mb-2.5">
                    Password Changed Successfully
                </p>
                <p className="text-app-black font-inter text-base text-center mb-4">
                    Your password has been updated successfully.
                </p>
                <Button text="Back to Login" onClick={onClose} />
            </div>
        </div>
    );
};

export default Modal;

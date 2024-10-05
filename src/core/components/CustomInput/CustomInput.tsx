import React from 'react';

interface CustomInputProps {
    id: string;
    type: string;
    placeholder: string;
    required?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({ id, type, placeholder, required }) => {
    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            required={required}
            className="border-b-2 border-app-light-gray bg-transparent focus:border-none focus:outline-none py-2 w-full border-t-0 border-l-0 border-r-0 mb-8 placeholder-inter" // Set other borders to none
        />
    );
};

export default CustomInput;

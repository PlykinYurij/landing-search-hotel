import React from 'react';
import styles from './CustomInput.module.scss'

type inputType = 'text' | 'date' | 'number' | 'password'

interface ICustomInputProps {
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    type?: inputType,
    label?: string,
    max?: string,
    min?: string,
    placeholder: string
}

const CustomInput = ({value, placeholder, type = 'text', onChange, min, max}: ICustomInputProps) => {
    return (
        <input
            placeholder={placeholder}
            value={value}
            type={type}
            min={min}
            max={max}
            onChange={(event => onChange(event))}
        />
    );
};

export default CustomInput;
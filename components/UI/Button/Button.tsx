'use client'
import React, {ReactNode} from 'react'
import styles from './Button.module.scss'

interface IButtonSearch {
    children: ReactNode,
    onClick?: () => void,
}

const Button = ({children, onClick}: IButtonSearch) => {
    return (
        <button onClick={onClick} className={styles.button}>
            {children}
        </button>
    )
}

export default Button
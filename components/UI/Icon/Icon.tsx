'use client'
import styles from './Icon.module.scss'


interface IIconProps {
    link: string,
    alt: string,
    href?: string
}

const Icon = ({link, alt, href}: IIconProps) => {
    function openHref() {
        window.open(href ? href : '', '_blank')
    }

    return <div onClick={openHref}>
        <img src={link} alt={alt} className={styles.icon}/>
    </div>
}

export {Icon}
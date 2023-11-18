import styles from './Footer.module.scss'
import Image from "next/image";
import label from '@/assets/DRIVERAVE.svg'
import whatsApp from '@/assets/Whatsapp.svg'
import telegram from '@/assets/Instagram.svg'
import vk from '@/assets/vk.svg'
import email from '@/assets/Email.svg'
import {Icon} from "@/components/UI/Icon/Icon";

const Footer = () => {
    return (
        <footer className={styles.containerFooter}>
            <div className={styles.containerIconWithDescription}>
                <div className={styles.containerLabel}>
                    <Image
                        src={label}
                        alt={'label'}
                        fill
                        style={{
                            objectFit: 'contain'
                        }}
                    />
                </div>
                <div className={styles.containerDescription}>
                    Аренда жилья и автомобилей от владельцев
                </div>
            </div>
            <div className={styles.containerIconWithDescription}>
                <div className={styles.containerIcons}>
                    <Icon link={whatsApp.src}
                          alt={'whatsApp'}
                          href={'https://www.whatsapp.com/'}
                    />
                    <Icon link={telegram.src}
                          alt={'telegram'}
                          href={'https://t.me/telegram'}
                    />
                    <Icon link={vk.src}
                          alt={'vk'}
                          href={'https://vk.com'}
                    />
                    <Icon link={email.src}
                          alt={'email'}
                          href={'https://mail.ru/'}
                    />
                </div>
                <div className={styles.containerDescription}>
                    Политика конфеденциальности
                </div>
            </div>
        </footer>
    )
}

export {Footer}
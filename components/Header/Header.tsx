import Image from "next/image";
import label from '@/assets/DRIVERAVE.svg'
import styles from './Header.module.scss'
import {ButtonAction} from "@/components/UI/ButtonAction/ButtonAction";

const Header = () => {
    return (
        <header>
            <div className={styles.containerHeader}>
                <div className={styles.containerImg}>
                    <Image
                        src={label}
                        alt={'label'}
                        fill
                        style={{
                            objectFit: 'contain',
                        }}
                    />
                </div>
                <div>
                    <ButtonAction/>
                </div>
            </div>

        </header>
    );
};

export {Header};
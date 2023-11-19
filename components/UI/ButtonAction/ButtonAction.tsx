'use client'
import styles from './ButtonAction.module.scss'
import Image from "next/image";
import bars from '@/assets/bars.svg'
import user from '@/assets/user.svg'
import {useAppContext} from "@/hooks/useAppContext";
import FormLogin from "@/components/FormLogin/FormLogin";

const ButtonAction = () => {
    const {openRightModal} = useAppContext()
    return <div className={styles.containerButton} onClick={() => openRightModal(FormLogin)}>
        <div className={styles.containerIcon}>
            <Image
                src={bars}
                alt={'bars'}
                fill
            />
        </div>
        <div className={styles.containerIcon}>
            <Image
                src={user}
                alt={'user'}
                fill
            />
        </div>
    </div>
}

export {ButtonAction}
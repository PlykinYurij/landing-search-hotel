import styles from './ButtonAction.module.scss'
import Image from "next/image";
import bars from '@/assets/bars.svg'
import user from '@/assets/user.svg'

const ButtonAction = () => {
    return <div className={styles.containerButton}>
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
import styles from './BlockDescription.module.scss';
const BlockDescription = () => {
    return (
        <div className={styles.containerDescription}>
            <div className={styles.title}>
                Ut enim ad minim veniam
            </div>
            <div className={styles.main}>
                Duis aute irure dolor in reprehenderit
            </div>
            <div className={styles.footer}>
                Duis aute irure dolor in reprehenderit
            </div>
        </div>
    )
}

export {BlockDescription}

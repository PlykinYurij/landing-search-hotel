'use client'

import React, {useEffect} from 'react'
import styles from './RightModal.module.scss'
import {useAppContext} from '@/hooks/useAppContext'

const RightModal = ({Component}: any) => {
    const {closeRightModal} = useAppContext()

    return (
        <div id='rightModal' className={styles.modalDialog} onClick={closeRightModal}>
            <div className={styles.contentRightModal} onClick={(e) => e.stopPropagation()}>
                <Component/>
            </div>
        </div>
    )
}

export default RightModal
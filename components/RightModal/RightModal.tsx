'use client'

import React from 'react'
import styles from './RightModal.module.scss'
import {useAppContext} from '@/hooks/useAppContext'

interface IRightModalProps {
    Component: React.FC
}

const RightModal = ({Component}: IRightModalProps) => {
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
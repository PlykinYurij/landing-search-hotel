'use client'
import React, {createContext, useState} from 'react'
import styles from './App.module.scss'
import RightModal from '@/components/RightModal/RightModal'
import {Header} from '@/components/Header/Header'
import {BlockDescription} from '@/components/BlockDescription/BlockDescription'
import {FormSearch} from '@/components/FormSearch/FormSearch'
import {Footer} from '@/components/Footer/Footer'

export const AppContext = createContext<any>(null)

interface IDataRightModal {
    isOpen: boolean,
    Component: React.FC
}

const App = () => {
    const [dataRightModal, setDataRightModal] = useState<IDataRightModal>({
        isOpen: false,
        Component: () => <></>
    })

    function openRightModal(component: React.FC) {
        setDataRightModal({
            isOpen: true,
            Component: component
        })
    }

    function closeRightModal() {
        setDataRightModal({
            isOpen: false,
            Component: () => <></>
        })
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
            <AppContext.Provider value={{openRightModal, closeRightModal}}>
                {dataRightModal.isOpen && <RightModal Component={dataRightModal.Component}/>}
                <header>
                    <Header/>
                </header>
                <main id={'main'} className={styles.main}>
                    <div style={{width: '100%'}}>
                        <BlockDescription/>
                        <FormSearch/>
                    </div>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </AppContext.Provider>
        </div>
    )
}

export default App
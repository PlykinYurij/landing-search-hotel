'use client'
import styles from './page.module.css'
import {Header} from "@/components/Header/Header";
import {Footer} from "@/components/Footer/Footer";
import {BlockDescription} from "@/components/BlockDescription/BlockDescription";
import {FormSearch} from "@/components/FormSearch/FormSearch";
import React, {createContext, useRef, useState} from "react";
import RightModal from "@/components/RightModal/RightModal";
import {CSSTransition} from 'react-transition-group';

export const AppContext = createContext<any>(null)

interface IDataRightModal {
    isOpen: boolean,
    Component: React.FC
}

export default function Home() {
    const [dataRightModal, setDataRightModal] = useState<IDataRightModal>({
        isOpen: false,
        Component: () => <></>
    })
    const refRightModal = useRef(null)

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
                <CSSTransition
                    in={dataRightModal.isOpen}
                    nodeRef={refRightModal}
                    timeout={900}
                    classNames="alert"
                    unmountOnExit
                >
                    <RightModal Component={dataRightModal.Component}/>
                </CSSTransition>
                <header>
                    <Header/>
                </header>
                <main className={styles.main}>
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

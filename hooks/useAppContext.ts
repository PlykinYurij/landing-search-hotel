import {useContext} from 'react'
import {AppContext} from "@/app/page";

export function useAppContext() {
    const {openRightModal, closeRightModal} = useContext(AppContext)
    return {openRightModal, closeRightModal}
}
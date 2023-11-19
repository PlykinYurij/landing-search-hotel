import {useContext} from 'react'
import {AppContext} from "@/components/App/App";

export function useAppContext() {
    const {openRightModal, closeRightModal} = useContext(AppContext)
    return {openRightModal, closeRightModal}
}
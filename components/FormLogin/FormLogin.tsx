'use client'
import React, {useState} from 'react';
import {useAppContext} from "@/hooks/useAppContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import styles from './FormLogin.module.scss'
import CustomInput from "@/components/UI/CustomInput/CustomInput";
import Button from "@/components/UI/Button/Button";

interface IDataLogin {
    email: string,
    password: string,
    isRemember: boolean
}

const FormLogin = () => {
    const {closeRightModal} = useAppContext()
    const [dataLogin, setDataLogin] = useState<IDataLogin>({
        email: '',
        password: '',
        isRemember: false
    })

    function onChangeDataLogin(value: string | boolean, property: keyof IDataLogin) {
        setDataLogin(prevState => {
            return {
                ...prevState,
                [`${property}`]: value
            }
        })
    }

    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        login()
    }

    function login() {
        console.log(dataLogin)
    }

    return (
        <div className={styles.containerModalLogin}>
            <div className={styles.containerIcon} onClick={closeRightModal}>
                <FontAwesomeIcon icon={faXmark} size={'xl'}/>
            </div>
            <div className={styles.containerForm}>
                <form
                    className={styles.form}
                    onSubmit={onSubmit}
                >
                    <div className={styles.title}>Вход</div>
                    <CustomInput
                        value={dataLogin.email}
                        onChange={(event => onChangeDataLogin(event.target.value, 'email'))}
                        placeholder={'Введите e-mail или телефон'}
                    />
                    <CustomInput
                        value={dataLogin.password}
                        onChange={(event => onChangeDataLogin(event.target.value, 'password'))}
                        placeholder={'Введите пароль'}
                        type={'password'}
                    />
                    <div className={styles.containerOptions}>
                        <label className={styles.label}>
                            <input
                                type={'checkbox'}
                                checked={dataLogin.isRemember}
                                onChange={() => onChangeDataLogin(!dataLogin.isRemember, 'isRemember')}
                            />
                            <span>Запомнить меня</span>
                        </label>
                        <div className={styles.link}>
                            Забыли пароль?
                        </div>
                    </div>
                    <Button>
                        Войти
                    </Button>
                    <div className={styles.containerFooter}>
                        <span>
                             Нет аккаунта?
                        </span>
                        <span className={styles.link}>
                            Регистрация
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormLogin;
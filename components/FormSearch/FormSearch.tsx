'use client'
import CustomInput from "@/components/UI/CustomInput/CustomInput";
import {useState} from "react";
import styles from './FormSearch.module.scss'
import Button from "@/components/UI/Button/Button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css'
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

interface IDataSearch {
    city: string,
    dataStart: string,
    dataEnd: string,
    guest: string
}

const FormSearch = () => {
    const [dataSearch, setDataSearch] = useState<IDataSearch>({
        city: '',
        dataStart: '',
        dataEnd: '',
        guest: ''
    })

    function onChangeData(value: string, property: keyof IDataSearch) {
        setDataSearch(prevState => {
            return {
                ...prevState,
                [`${property}`]: value
            }
        })
    }

    function search() {
        console.log(dataSearch)
    }

    return (
        <form className={styles.containerForm} onSubmit={event => event.preventDefault()}>
            <div className={styles.containerLabelWithInput}>
                <div className={styles.label}>
                    Город или адрес
                </div>
                <div className={styles.containerInput}>
                    <input
                        value={dataSearch.city}
                        onChange={(event) => onChangeData(event.target.value, 'city')}
                        placeholder={'Куда едем'}
                    />
                </div>
            </div>
            <div className={styles.containerLabelWithInput}>
                <div className={styles.label}>
                    Дата заезда
                </div>
                <div className={styles.containerInput}>
                    <input
                        value={dataSearch.dataStart}
                        onChange={(event) => onChangeData(event.target.value, 'dataStart')}
                        placeholder={'Когда'}
                        type={'date'}
                    />
                </div>
            </div>
            <div className={styles.containerLabelWithInput}>
                <div className={styles.label}>
                    Дата выезда
                </div>
                <div className={styles.containerInput}>
                    <input
                        value={dataSearch.dataStart}
                        onChange={(event) => onChangeData(event.target.value, 'dataEnd')}
                        placeholder={'Когда'}
                        type={'date'}
                    />
                </div>
            </div>
            <div className={styles.containerLabelWithInput}>
                <div className={styles.label}>
                    Количество гостей
                </div>
                <div className={styles.containerInput}>
                    <input
                        value={dataSearch.guest}
                        onChange={(event) => onChangeData(event.target.value, 'guest')}
                        placeholder={'Гости'}
                        type={'number'}
                        min={'1'}
                    />
                </div>

            </div>
            <div className={styles.containerButton}>
                <Button onClick={search}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    <span className={styles.labelButton}>
                        Поиск
                    </span>
                </Button>
            </div>

        </form>
    )
}

export {FormSearch}
import styles from './page.module.css'
import {Header} from "@/components/Header/Header";
import {Footer} from "@/components/Footer/Footer";
import {BlockDescription} from "@/components/BlockDescription/BlockDescription";
import {FormSearch} from "@/components/FormSearch/FormSearch";

export default function Home() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
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
        </div>

    )
}

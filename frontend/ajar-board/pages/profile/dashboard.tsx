import Head from "next/head"
import Navbar from "../../components/Navbar"
import styles from "../../styles/Profile.module.css"

export default function dashboard() {
    return (
        <div>
            <Head>
            <title>Ajar Board - Profile</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
                <p>Dashboard</p>
            </main>
           
        </div>
    )
}
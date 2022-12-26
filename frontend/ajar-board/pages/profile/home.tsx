import { GetServerSideProps } from "next"
import Head from "next/head"
import DashCard from "../../components/DashCard"
import CreateDash from "../../components/CreateDash"
import Navbar from "../../components/Navbar"
import styles from "../../styles/Profile.module.css"
export default function Home ({dashboards}:any) {
    return (
        <div>
            <Head>
            <title>Ajar Board - Profile</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
                <div>
                    <p>Existing Dashboards</p>
                    <CreateDash className={styles.createButton}/>
                </div>
                {dashboards.map(
                    (dashboard:any) => {
                        return <DashCard key = {dashboard.id} name={dashboard.name} type={dashboard.dash_type} last_edited={dashboard.last_edited}/>                       
                    }
                )}  
            </main>
           
        </div>
    )
}

export const getServerSideProps : GetServerSideProps = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/dashboard/")
    const data = await res.json()
    return {
        props : {
            dashboards: data,
        },
    }
}
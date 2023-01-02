import { GetServerSideProps } from "next"
import Head from "next/head"

import DashCard from "../../components/DashCard"
import CreateDash from "../../components/CreateDash"
import CreateDashModal from "../../components/CreateDashModal"
import Navbar from "../../components/Navbar"

import styles from "../../styles/Profile.module.css"
import { useState } from "react"

const header = "http://127.0.0.1:8000/"

export default function Home ({dashboards}:any) {
    const [visible, setVisible] = useState('none');
    return (
        <div>
            <Head>
            <title>Ajar Board - Profile</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
                <div>
                    <p>Existing Dashboards</p>
                    <CreateDash className={styles.createButton} setVisibilityStatus = {setVisible}/>
                </div>
                <CreateDashModal setVisibilityStatus = {setVisible} visibilityStatus = {visible}/>
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
    
    const full_url = header + "api/dashboard/"
    const res = await fetch(full_url)
    const data = await res.json()
    return {
        props : {
            dashboards: data,
        },
    }
}
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ajar Board - HomePage</title>
        <meta name="description" content="Landing page for a data analytics tool call Ajar Board" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <h4>Somethign is here</h4>

      
    </div>
  )
}

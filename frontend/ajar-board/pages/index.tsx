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

      <div className={styles.main}>
          <h1><span>Ajar</span>Board</h1>
          <p>AjarBoard is a minimal data exploration and visualization platform.
          It is beginner friendly and easy to get started with least amount of labour.
          </p>
      </div>

      
    </div>
  )
}

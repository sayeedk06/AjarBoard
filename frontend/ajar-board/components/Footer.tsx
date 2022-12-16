import styles from '../styles/Footer.module.css'


const date:Date = new Date();

export default function Footer () {
    
    return (
        <div className={styles.footer}>
            <p>Ajarboard</p>
            <a>Copyrights © {date.getFullYear()} by Evrydaywannabe</a>
        </div>
    )
}
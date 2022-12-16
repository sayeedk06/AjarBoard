import Styles from '../styles/Header.module.css'
import Link from 'next/link'

export default function Header () {
    return (
        <div>
            <ul className={Styles.HeaderList}>
                <li>
                    <Link href='/'>AjarBoard Logo</Link>
                </li>
                <li>
                    <Link href='/profile'>Login</Link>
                </li>
            </ul>
        </div>
    )
}
import Link from "next/link";
import styles from "../styles/Nav.module.css"
const Navbar = () =>{
    return (
        <nav>
        <ul className={styles.nav}>
            <li><Link href='/'>Home / </Link></li>
            <li><Link href='/'>Create Dashboard / </Link></li>
            <li><Link href='/'>Import / </Link></li>
        </ul>
        </nav>
    )
}


export default Navbar;
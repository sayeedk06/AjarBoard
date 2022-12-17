import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.css"



const Navbar = () =>{
    const [clientWindowHeight, setClientWindowHeight] = useState<number | string>(0);
    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
      };

      useEffect(() => {
        window.addEventListener("scroll", handleScroll); 
        console.log(clientWindowHeight)
        return () => window.removeEventListener("scroll", handleScroll);
      });

    if (clientWindowHeight > 65) {
        return (
            <nav>
            <ul className={styles.stickyNav}>
                <li><Link href='profile/home/'>Home / </Link></li>
                <li><Link href='profile/dashboard'>Dashboard / </Link></li>
                <li><Link href='profile/import'>Import / </Link></li>
            </ul>
            </nav>
        )
    }else {
        return (
            <nav>
            <ul className={styles.nav}>
                <li><Link href='home/'>Home / </Link></li>
                <li><Link href='dashboard/'>Dashboard / </Link></li>
                <li><Link href='import/'>Import / </Link></li>
            </ul>
            </nav>
        )
    }
    
}


export default Navbar;
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({children}: any) => {
    return (
        <main>
            <Header/>
            {children}
            <Footer/>
        </main>
    )
}


export default Layout;
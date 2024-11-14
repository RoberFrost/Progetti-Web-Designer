import Navbar from "../organisms/NavBar"
import Footer from "../organisms/Footer"

export default function MainLayout({header, children}){

    return(
        
        <>
        <Navbar></Navbar>

            {header}
            {children}
            
        <Footer></Footer>

        
        </>
    )



}
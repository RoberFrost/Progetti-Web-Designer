import Link from "../atoms/Links";
import NavLogo from "../atoms/NavLogo";

export default function Navbar(){

    
    return(
        
        <nav className="fixed top-0 h-20 w-full bg-white flex justify-between shadow shadow-indigo-200 rounded-b[20px]">

        <div className="flex items-center pl-3 md:pl-10">
            <NavLogo></NavLogo>
        </div>
  
        
        <ul className="w-full md:w-1/2 flex items-center justify-evenly italic font-semibold">
  
          <Link>Home</Link>
          <Link>Dipartimenti</Link>
          <Link>Dottori</Link>
          <Link>Contatti</Link>     
  
        </ul>
  
  
      </nav>
        
        
        
    )



}
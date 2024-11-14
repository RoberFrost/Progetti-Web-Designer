import { Link } from 'react-router-dom'

export default function Button({children, to = '#' , type = "accent"}){

    const styles = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        white: 'bg-white',       
    }

    return(
        
        <button className="w-48">
        <Link to={to} className={"w-full bg-primary shadow-xl flex justify-center items-center py-3 rounded-3xl text-white-light text-2xl font-bold uppercase" + styles[type]}>
        {children}
        </Link>
      </button>        
        
    )




}
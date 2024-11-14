import { Link } from "react-router-dom";

export default function IconButton({text , to = "#" }) {

    return (

        <Link to={to} className="w-32 block text-center">
            <button className="bg-primary text-white font-semibold shadow-xl w-full rounded-3xl py-3 flex items-center justify-center">{text}</button>
        </Link>



    )



}
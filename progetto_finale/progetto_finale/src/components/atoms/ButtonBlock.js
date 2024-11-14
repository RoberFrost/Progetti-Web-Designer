import { Link } from "react-router-dom";
import TextLg from '@atoms/TextLg';
import ArrowRight from "@icons/ArrowRight";

export default function ButtonBlock({children , to = '#'}) {


    return (

        <Link to={to} className="h-16 text-white flex justify-between items-center px-4 rounded-3xl bg-primary">
            <TextLg>
                {children}
            </TextLg>
            <ArrowRight />
        </Link>


    )



}
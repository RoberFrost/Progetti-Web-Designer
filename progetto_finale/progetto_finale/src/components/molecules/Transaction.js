import ArrowDown from "@icons/ArrowDown";
import ArrowUp from "@icons/ArrowUp";
import TextLg from "@atoms/TextLg";
import TextSm from "@atoms/TextSm";

export default function Transaction({type , date , amount , conversion }) {

    return (

        <div className="flex justify-between items-center">

            <div className="flex justify-flex items-center my-2">

                {type == 'Ricevuti' ? <ArrowUp fill="fill-green-500" /> : <ArrowDown fill="fill-red-500"/>}

                <div className="ml-2">
                    <TextLg className="text-primary font-bold">{type}</TextLg>
                    <TextSm className="text-secondary">{date}</TextSm>
                </div>

            </div>

            <div className="text-right">
                <TextLg className="text-primary font-bold capitalize">{type == 'inviati' ? '-' : '+'} {amount} USD</TextLg>
                <TextSm className="text-secondary">{conversion} BTC</TextSm>

            </div>

        </div>

    )



}
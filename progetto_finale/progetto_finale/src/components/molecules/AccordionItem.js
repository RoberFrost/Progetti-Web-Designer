import AccordionHeader from "@atoms/AccordionHeader"
import AccordionBody from "@atoms/AccordionBody"

export default function AccordionItem({title , body , active = false , first = false , last = false}) {

    return (

        <div>
            {/* accordion header */}
            <AccordionHeader active={active} first={first} last={last}>
                {title}
            </AccordionHeader>

            {/* accordion body */}
            <AccordionBody active={active} last={last}>
                {body}
            </AccordionBody>

        </div>



    )



}
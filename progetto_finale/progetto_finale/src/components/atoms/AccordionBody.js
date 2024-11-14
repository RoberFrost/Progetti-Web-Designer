export default function AccordionBody({children , active , last}) {

    let isActive = active ? " " : " hidden ";
    let isLast = last ? " rounded-b-xl " : " border-b-0 "

    let additionClasses = isActive + isLast;
    return (

        <div className={"p-5 border border-secondary border-b-0 " + additionClasses}>
            <p className="text-secondary">{children}</p>
        </div>



    )





}
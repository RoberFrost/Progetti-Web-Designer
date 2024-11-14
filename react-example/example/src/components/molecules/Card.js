import CardIcon from "../atoms/CardIcon";
import CardTitle from "../atoms/CardTitle";
import CardParagraph from "../atoms/CardParagraph";
import Button from "../atoms/Button";


export default function Card({code, title, paragraph, btnText, btnClasses}){

    return(
        
        <div className="h-[300px] w-[250px] border-1 rounded-[20px] shadow shadow-indigo-200 flex flex-col items-center justify-evenly my-10">

    <CardIcon code={code}></CardIcon>

    <CardTitle>{title}</CardTitle>

    <CardParagraph>{paragraph}</CardParagraph>

    <Button className={btnClasses}>{btnText}</Button>

</div>
        
        
    )



}
import Label from "@atoms/Label";
import Textarea from "@atoms/Textarea";

export default function FormTextarea({id , text , placeholder , required = false}){

    return(
        
        <div className="flex flex-col text-left w-full">
                    <Label required={required}>{text}</Label>
                    <Textarea id={id} placeholder={placeholder} />
        </div>    
        
    )



}
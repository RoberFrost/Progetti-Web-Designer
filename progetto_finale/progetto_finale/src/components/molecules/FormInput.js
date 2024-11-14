import Label from "../../components/atoms/Label";
import Input from "../../components/atoms/Input";

export default function FormInput({id , text , placeholder , type="text" , required = false , value = ""}){

    return(
        
        <div className="flex flex-col text-left w-full">
                    <Label required={required}>{text}</Label>
                    <Input value={value} id={id} placeholder={placeholder} type={type}/>
        </div>    
        
    )



}
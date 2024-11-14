import Label from "../../components/atoms/Label";
import Select from "@atoms/Select";

export default function FormSelect({id , text , placeholder , required = false , options}){

    return(
        
        <div className="flex flex-col text-left w-full">
                    <Label required={required}>{text}</Label>
                    <Select options={options} id={id} placeholder={placeholder} />
        </div>    
        
    )



}
import Label from "./Label"

export default function InputForm({text, htmlFor, type = "text"}){

    return(
        
        <div className="mb-6">
        <Label>htmlFor={htmlFor} text={text}</Label>
        <input className="bg-gray-50 border border-gray-300 w-full p-3 rounded-lg mt-2" id={htmlFor} type={type} />
      </div>      
        
        
    )
        
        
        
    
    



}
import Label from "./Label"

export default function Formtextarea({text, htmlFor}){

    return(
        
      <div className="mb-6">
        <Label>htmlFor={htmlFor} text={text}</Label>
        <textarea className="bg-gray-50 border-gray-300 w-full p-3 rounded-lg mt-5 min-h-[200px]" ></textarea>
      </div>

    
        
        
    )




}
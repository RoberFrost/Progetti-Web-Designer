export default function Label({text, htmlFor}){

    return(
        
        <label className="text-sm font-medium text-gray-900 block" htmlFor={htmlFor}>{text}</label>
        
    )



}
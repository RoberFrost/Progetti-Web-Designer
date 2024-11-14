export default function LabelHeader({htmlFor, children}){

    return(
        
        <label 
            className="text-2xl" htmlFor="HtmlFor">
            {children}
        </label>
        
    
    )


}
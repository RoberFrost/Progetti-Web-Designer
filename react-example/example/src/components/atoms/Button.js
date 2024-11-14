export default function Button({children, className}){

    return(
        
        <button className={`${className} rounded border-2 border-gray-700/20`}>
            {children}
        </button>
        
    )

}
export default function GuestHeader({title}){
    function renderTitle(){
        if (title){
            return (
                <h1 className="text-[2.75rem] font-bold mt-5">
                <span className="text-primary">{title[0]}</span>{title.slice(1)}
            </h1>    
            )
        }
    
    }

    return(

        <header className="text-center">
            <img className="w-full max-w-[150px] mx-auto" src="/media/LogoPrincipale.png" alt=""/>
            <h1 className="text-[2.75rem] font-bold mt-5">
            {renderTitle()}    
            </h1>
        </header>
    
    )



}
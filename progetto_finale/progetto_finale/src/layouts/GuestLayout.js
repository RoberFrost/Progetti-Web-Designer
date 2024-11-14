import GuestHeader from "@organisms/GuestHeader"

export default function GuestLayout({children , title}) {

    return (

    // Header    
        
        <div className="h-screen bg-white flex flex-col justify-between p-8">
            
        <GuestHeader title={title}/>   

    {/* Sezione Form da compilare*/}

        {children}

            
        </div>

    )


}
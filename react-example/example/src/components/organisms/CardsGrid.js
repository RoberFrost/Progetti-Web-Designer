import Card from "../molecules/Card";
import Button from "../atoms/Button";

export default function CardsGrid(){

    let paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nesciunt saepe, quibusdam qui odio";
    
    let btnText = "Maggiori info...";

    let btnClasses= "p-2 bg-Primary hover:bg-bgCustomPurple";

    const services = [
    
    {id: 1, code: "fa-syringe" , title: "Anestesia", paragraph, btnText, btnClasses},
    {id: 2, code: "fa-stethoscope" , title: "Cardiologia" , paragraph, btnText, btnClasses},
    {id: 3, code: "fa-hospital", title: "Neurologia" , paragraph, btnText, btnClasses},
    {id: 4, code: "fa-user-nurse", title: "Ostetricia", paragraph, btnText, btnClasses},
    {id: 5, code: "fa-briefcase-medical", title: "Pediatria", paragraph, btnText, btnClasses},
    {id: 6, code: "fa-user-doctor", title: "Chirurgia", paragraph, btnText, btnClasses},
    
    ]
    
    return(
        
        <>

            <h2 className="text-center text-4xl md:text-5xl mt-28 md:mt-25 my-10">
                Esplora i nostri reparti e servizi
            </h2>

            <div className="flex justify-evenly flex-wrap md:flex-nowrap">

                {
                    services.map((service)=>{


                        return(
                            
                        <Card
                            key={service.id}
                            code={service.code}
                            title={service.title}
                            paragraph={service.paragraph}
                            btnText={service.btnText}
                            btnClasses={service.btnClasses}
                        
                        />  
                            
                        )
                
                })

            }    

                </div>

                <div>

                    <Button className="px-14 py-6 bg-bgCustomYellow hover:bg-bgPrimary font-bold block mx-auto my-10 text-2xl">
                        Altri servizi
                    </Button>

                </div>
        </>

        
        
    )

}
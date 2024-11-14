import FormInput from "@molecules/FormInput"
import Button from "@atoms/Button"

export default function FormSend(){

    return(

        <form className="flex flex-1 flex-col justify-between gap-5 mt-6">
            <div className="flex flex-col items-center justify-center gap-5 mt-6">

               <FormInput id="withdrawalAddress" text="Email Destinatario" placeholder="" type="email" required={true} />
            </div>

            <FormInput id="withdrawalAmount" text="Quanto vuoi inviare" placeholder="" type="number" required={true} />
            

            <div className="text-center flex flex-col items-center mt-16 mb-11">
                <Button to='/wallet'>Conferma</Button>

            </div>
        </form>


    )

}
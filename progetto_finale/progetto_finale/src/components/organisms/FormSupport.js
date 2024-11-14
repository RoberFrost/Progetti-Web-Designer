import FormTextarea from "@molecules/FormTextarea"
import Button from "@atoms/Button"
import FormSelect from "@molecules/FormSelect"

export default function FormSupport(){

    return(

        <form className="flex flex-1 flex-col justify-between gap-5 mt-6">
            <div className="flex flex-col items-center justify-center gap-5 mt-6">

               <FormSelect id="problema" text="Problema" placeholder="Scegli un opzione" required={true} options={['Problemi con app' , 'Problemi con il sito' , 'Problemi con i pagamenti' , 'Altro']} />

               <FormTextarea id="description" text="Descrizione problema" placeholder="Descrivi il tuo problema" required={true} />

            </div>

            <div className="text-center flex flex-col items-center my-6">
                <Button to='/profile'>Conferma</Button>
            </div>
        </form>


    )

}
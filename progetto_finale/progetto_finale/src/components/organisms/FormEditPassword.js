import FormInput from "@molecules/FormInput"
import Button from "@atoms/Button"

export default function FormAccessData(){

    return(

        <form className="flex flex-1 flex-col justify-between gap-5 mt-6">
            <div className="flex flex-col items-center justify-center gap-5 mt-6">

               <FormInput id="CurrentPassword" text="Password Corrente" placeholder="Inserisci la tua password corrente" type="password" required={true} />

               <FormInput id="NewPassword" text="Nuova Password" placeholder="Inserisci la nuova password" type="password" required={true} />

               <FormInput id="ConfirmPassword" text="Conferma Password" placeholder="Conferma password" type="password" required={true} />

            </div>

            <div className="text-center flex flex-col items-center my-6">
                <Button to='/profile'>Conferma</Button>
            </div>
        </form>


    )

}
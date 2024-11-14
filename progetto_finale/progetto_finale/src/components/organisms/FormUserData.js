import FormInput from "@molecules/FormInput"
import Button from "@atoms/Button"

export default function FormUserData(){

    return(

    <form className="flex flex-1 flex-col justify-between gap-5 mt-6">
        <div className="flex flex-col items-center justify-center gap-5 mt-6">

            <FormInput id="name" text="Nome" placeholder="Il tuo nome" required={true} />

            <FormInput id="surname" text="Cognome" placeholder="Il tuo cognome" required={true} />

            <FormInput id="birthday" text="Compleanno" placeholder="La tua data di nascita" type="date" required={true} />

            <FormInput id="address" text="Indirizzo" placeholder="Il tuo indirizzo" required={true} />

        <div className="grid grid-cols-2 gap-4"> 

            <FormInput id="city" text="Città" placeholder="La tua città" required={true} />

            <FormInput id="postalCode" text="Codice Postale" placeholder="Il codice postale della tua città" required={true} />

        </div>


        </div>

        <div className="text-center flex flex-col items-center mt-3">
            <Button to="/register/upload-documents">Avanti</Button>

        </div>
    </form>


    )

}
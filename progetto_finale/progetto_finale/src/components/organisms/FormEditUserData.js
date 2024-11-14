import FormInput from "@molecules/FormInput"
import Button from "@atoms/Button"

export default function FormEditUserData(){

    return(

    <form className="flex flex-1 flex-col justify-between gap-5">
        <div className="flex flex-col items-center justify-center gap-5 ">

            <FormInput id="name" text="Nome" placeholder="Il tuo nome" required={true} value="Roberto" />

            <FormInput id="surname" text="Cognome" placeholder="Il tuo cognome" required={true} value="Di Spena"/>

            <FormInput id="birthday" text="Data di nascita" placeholder="La tua data di nascita" type="date" required={true} value="2000-01-01" />

            <FormInput id="address" text="Indirizzo" placeholder="Il tuo indirizzo" required={true} value="Piazza Italia"/>

        <div className="grid grid-cols-2 gap-4"> 

            <FormInput id="city" text="Città" placeholder="La tua città" required={true} value="Lamezia Terme"/>

            <FormInput id="postalCode" text="Codice Postale" placeholder="Il codice postale della tua città" required={true} value="88046"/>

        </div>


        </div>

        <div className="text-center flex flex-col items-center mt-3">
            <Button to="/profile">Conferma</Button>

        </div>
    </form>


    )

}
import Button from "@atoms/Button";
import InputOTP from "@atoms/InputOTP";

export default function FormOTP(){

    return(

        <form className="flex flex-1 flex-col justify-between gap-5 mt-6">

            <div>
                <p className="text-secondary text-lg">Abbiamo inviato un codice OTP sul tuo indirizzo email. Inserisci il codice per verificare
                 il tuo indirizzo.</p>

                <div className="flex justify-between mt-10">
                    <InputOTP/>
                    <InputOTP/>
                    <InputOTP/>
                    <InputOTP/>
                    <InputOTP/>
                    <InputOTP/>

                </div>
                <p className="text-secondary text-center text-lg mt-5">
                    <span className="font-bold">Invia nuovo codice tra: </span> 00:25 </p>

            </div>


            <div className="text-center flex flex-col items-center mt-16 mb-11">
                <Button to='/wallet'>Avanti</Button>
            </div>
        </form>


    )

}
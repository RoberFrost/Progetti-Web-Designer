import FormInput from "@molecules/FormInput"
import Button from "@atoms/Button"

export default function FormReceive(){

    return(

        <form className="flex flex-1 flex-col justify-between gap-5 mt-5">
            <img className="h-[300px] w-96" src="/media/QrCode.svg" alt="qr code" />
            <div className="flex flex-col items-center justify-center gap-5">

               <FormInput id="walletAddress" text="Indirizzo Wallet Destinatario" placeholder="f874bfb344f4n" type="text" required={true} />
            </div>
            

            <div className="text-center flex flex-col items-center mt-2 mb-11">
                <Button to='/wallet'>Copia Link</Button>

            </div>
        </form>


    )

}
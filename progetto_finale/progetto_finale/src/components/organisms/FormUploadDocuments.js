import Button from "@atoms/Button";
import InputUploadFile from "@molecules/InputUploadFile";

export default function FormUploadDocuments(){

    return(

    <form className="flex flex-1 flex-col justify-between gap-5 mt-6">
        <div className="flex flex-col items-center justify-center gap-5 mt-6">

        <InputUploadFile id="userID" text="Carica il tuo documento" />

        <InputUploadFile id="userPhoto" text="Carica la tua foto" /> 

        </div>

        <div className="text-center flex flex-col items-center mt-16">
            <Button to="/wallet">Avanti</Button>

        </div>
    </form>


    )

}
import FormInput from "@molecules/FormInput"
import Button from "@atoms/Button"

export default function FormSell(){

    return(

        <form className="flex flex-1 flex-col justify-between gap-5 mt-6">
            <div className="flex flex-col items-center justify-center gap-5 mt-6">

               <FormInput id="amount" text="Quanto vuoi vendere" placeholder="" type="number" required={true} />
            </div>

            <FormInput id="conversion" text="USD Acquistati" placeholder="" type="number" required={true} />
            

            <div className="text-center flex flex-col items-center mt-16 mb-11">
                <Button to='/market'>Vendi</Button>

            </div>
        </form>


    )

}
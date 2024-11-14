import InputHeader from "../atoms/InputHeader";
import LabelHeader from "../atoms/LabelHeader";

export default function FormHeader(){

    return(
        
    <form className="mt-4 flex items-end">

    <div>

          <LabelHeader htmlFor="visita">
            Cerca visita.. .
          </LabelHeader>

          <InputHeader 
            id="visita"
            name="visita"
            type="text"

          className="rounded-[5px] flex flex-col shadow-indigo-200 px-8 py-2 text-2xl"
          />

    </div>

            <InputHeader 
            type="submit"
            value="Invia"
            className="rounded-[5px] mt-2 flex flex-col shadow shadow-indigo-200 px-4 py-2 text-2xl ml-4"
            />

    </form>
        
        
        
    )



}
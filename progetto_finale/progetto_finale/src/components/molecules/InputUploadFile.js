export default function InputUploadFile({text , id }){

    return(
        
    <div className="flex items-center justify-center w-full ">
        <label htmlFor={id} className="flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg 
    cursor-pointer border-secondary bg-primary">
    <div className="flex flex-col items-center justify-centerpt-5 pb-5">
        <p className="mb-2 text-sm text-white-light font-bold mt-4">{text}</p>
        <p className="text-xs text-white-light mt-4">Clicca o trascina per caricare</p>
    </div>
    <input id={id} type="file" className="hidden" />

    </label>
        
    </div>    
    )


}
export default function Label({ htmlFor , children, required = false}){

    return (

        <label className="font-semibold" htmlFor="">
            {children} {required && <span className="text-red-500">*</span>}
        </label>

    )


}
import MainLayout from "@layouts/MainLayouts"
import ActionHeader from '@organisms/ActionHeader'
import FormEditUserData from "@organisms/FormEditUserData"

export default function EditUserData(){

    return(
        <MainLayout
            header={<ActionHeader title="Modifica Dati"/>} >
            
            <FormEditUserData></FormEditUserData>
        </MainLayout>
        
        
        
        
    )



} 
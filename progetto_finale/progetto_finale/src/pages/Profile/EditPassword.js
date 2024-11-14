import MainLayout from "@layouts/MainLayouts"
import ActionHeader from '@organisms/ActionHeader'
import FormEditPassword from '@organisms/FormEditPassword'


export default function EditPassword(){

    return(
        <MainLayout
            header={<ActionHeader title="Modifica Password"/>} >
            
            <FormEditPassword/>
        </MainLayout>
        
        
        
        
    )



} 
import MainLayout from "@layouts/MainLayouts"
import ActionHeader from '@organisms/ActionHeader'
import FormSupport from "@organisms/FormSupport"


export default function Support(){

    return(
        <MainLayout
            header={<ActionHeader title="Supporto"/>} >
            
            <FormSupport/>    
        </MainLayout>
        
        
        
        
    )



} 
import MainLayout from "@layouts/MainLayouts"
import ActionHeader from '@organisms/ActionHeader'
import FormSend from '@organisms/FormSend'

export default function Send(){

    return(
        <MainLayout
            header={<ActionHeader title="Invia"/>} >
            
            <FormSend/>
        </MainLayout>
        
        
        
        
    )



} 
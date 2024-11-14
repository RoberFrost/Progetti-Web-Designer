import MainLayout from "@layouts/MainLayouts"
import ActionHeader from '@organisms/ActionHeader'
import FormReceive from "@organisms/FormReceive"

export default function Receive(){

    return(
        <MainLayout
            header={<ActionHeader title="Ricevi"/>} >
            
            <FormReceive/>
        </MainLayout>
        
        
        
        
    )



} 
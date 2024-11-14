import MainLayout from "@layouts/MainLayouts"
import ActionHeader from '@organisms/ActionHeader'
import FormSell from "@organisms/FormSell"

export default function Sell(){

    return(
        <MainLayout
            header={<ActionHeader title="Vendi BTC"/>} >
            
        <FormSell/>    
        </MainLayout>
        
        
        
        
    )



} 
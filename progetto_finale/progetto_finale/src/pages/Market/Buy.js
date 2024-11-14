import MainLayout from "@layouts/MainLayouts"
import ActionHeader from '@organisms/ActionHeader'
import FormBuy from '@organisms/FormBuy'

export default function Buy(){

    return(
        <MainLayout
            header={<ActionHeader title="Compra BTC"/>} >
            
            <FormBuy/>
        </MainLayout>
        
        
        
        
    )



} 
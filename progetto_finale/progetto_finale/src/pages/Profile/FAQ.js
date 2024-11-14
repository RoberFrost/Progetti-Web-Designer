import MainLayout from "@layouts/MainLayouts"
import ActionHeader from '@organisms/ActionHeader'
import Accordion from "@organisms/Accordion"

export default function FAQ() {

    const accordionItems = [

        { title: "Cosa sono i Bitcoin?", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit Quis hic facere distinctio praesentium quos dolorem!" },
        { title: "Quali sono i rischi?", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit Quis hic facere distinctio praesentium quos dolorem!" },
        { title: "Come posso comprare Bitcoin?", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit Quis hic facere distinctio praesentium quos dolorem!" },

    ]

    return (
        <MainLayout
            header={<ActionHeader title="FAQ" />} >

            <div className="mt-6">

                <Accordion items={accordionItems} />

            </div>

        </MainLayout>




    )



} 
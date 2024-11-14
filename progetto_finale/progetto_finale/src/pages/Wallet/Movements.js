import MainLayout from "@layouts/MainLayouts";
import ActionHeader from '@organisms/ActionHeader';
import Transaction from "@molecules/Transaction";

export default function Movements() {

    const transaction = [
        { type: 'Inviati', date: '01/01/2023', amount: 1.234, conversion: 0.0000123 },
        { type: 'Ricevuti', date: '01/01/2023', amount: 1.234, conversion: 0.0000123 },
        { type: 'Inviati', date: '01/01/2023', amount: 1.234, conversion: 0.0000123 },
        { type: 'Inviati', date: '01/01/2023', amount: 1.234, conversion: 0.0000123 },
        { type: 'Ricevuti', date: '01/01/2023', amount: 1.234, conversion: 0.0000123 },
        { type: 'Inviati', date: '01/01/2023', amount: 1.234, conversion: 0.0000123 },

    ];

    return (
        <MainLayout
            header={<ActionHeader title="Ultimi Movimenti" />} >


            <div className="h-full flex-col justify-center">
                <div className="flex mb-5">

                    <h2 className="text-2xl font-bold">Filtra :</h2>

                    <button className="bg-primary rounded-3xl mx-2 text-white font-bold grow">
                        Inviati
                    </button>

                    <button className="bg-primary rounded-3xl mx-2 text-white font-bold grow">
                        Ricevuti
                    </button>

                </div>
                <div className="overflow-y-scroll max-h-max">
                {
                    transaction.map((transaction, index) => {
                        return <Transaction key={index} type={transaction.type} date={transaction.date} amount={transaction.amount} conversion={transaction.conversion}></Transaction>
                    })
                }
                </div>
            </div>
            
        </MainLayout>
            





    )



} 
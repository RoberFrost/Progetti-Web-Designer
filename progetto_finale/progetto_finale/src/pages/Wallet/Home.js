import DashboardCard from "@atoms/DashboardCard";
import { Link } from "react-router-dom";
import TextLg from "@atoms/TextLg";
import Transaction from "@molecules/Transaction";
import IconButton from "@atoms/IconButton";
import MainLayout from "@layouts/MainLayouts";
import MainHeader from "@organisms/MainHeader";


export default function Home() {


    const transaction = [
        { type: 'Inviati', date: '01/01/2023', amount: 1.234, conversion: 0.0000123 },
        { type: 'Ricevuti', date: '01/01/2023', amount: 1.234, conversion: 0.0000123 },
        { type: 'Inviati', date: '01/01/2023', amount: 1.234, conversion: 0.0000123 },

    ];

    return (
        <MainLayout 
        header={<MainHeader title="Wallet" subtitle={<span>Benvenuto <span className="font-bold">Roberto</span></span>} />}
        >

            <DashboardCard title="1.234 USD" subtitle="0.0000123 BTC" />

            <div className="mt-12">

                <div className="flex justify-between">
                    <TextLg className="text-primary font-bold">Ultime Transazioni</TextLg>
                    <Link to="/wallet/movements" className="text-lg font-bold hover:underline">Visualizza tutto</Link>
                </div>

                {
                    transaction.map((transaction, index) => {
                        return <Transaction key={index} type={transaction.type} date={transaction.date} amount={transaction.amount} conversion={transaction.conversion}></Transaction>
                    })
                }

                {/* Sezione Invia e Ricevi */}

                <div className="mt-12 flex justify-center gap-10">
                    <IconButton to="/wallet/send" text='Invia'></IconButton>
                    <IconButton to="/wallet/receive" text='Ricevi'></IconButton>
                </div>


            </div>

            </MainLayout>

            )


}
import DashboardCard from "@atoms/DashboardCard";
import IconButton from "@atoms/IconButton";
import MainLayout from "@layouts/MainLayouts";
import MainHeader from "@organisms/MainHeader";
import TextSm from '@atoms/TextSm';


export default function Home() {

    return (
        <MainLayout 
        header={<MainHeader title="Market" subtitle={<span>Benvenuto <span className="font-bold">Roberto</span></span>} />}
        >

            <DashboardCard title="+ 1.234 USD" subtitle="0.0000130 BTC" />

            <div>
                <img className="w-full h-[230px] max-w-sm" src="/media/stonks.jpg" alt="market" />
                <div className="flex justify-between">
                    <TextSm>1G</TextSm>
                    <TextSm>1S</TextSm>
                    <TextSm>1M</TextSm>
                    <TextSm>6M</TextSm>
                    <TextSm>1Y</TextSm>
                    <TextSm className="font-bold">Tutti</TextSm>
                </div>
            </div>

            <div className="mt-12">

                {/* Sezione Invia e Ricevi */}

                <div className="mt-12 flex justify-center gap-10">
                    <IconButton to="/market/buy" text='Compra'></IconButton>
                    <IconButton to="/market/sell" text='Vendi'></IconButton>
                </div>


            </div>

            </MainLayout>

            )


}
import MainLayout from "@layouts/MainLayouts";
import MainHeader from "@organisms/MainHeader";
import ButtonBlock from "@atoms/ButtonBlock";


export default function Home() {

    return (
        <MainLayout
            header={<MainHeader title="Profilo" subtitle={<span>Benvenuto <span className="font-bold">Roberto</span></span>} />}
        >

            <div className="flex flex-col gap-3">
                <ButtonBlock to="/profile/edit-user-data">Modifica Dati Utente</ButtonBlock>
                <ButtonBlock to="/profile/edit-password">Modifica Password</ButtonBlock>
                <ButtonBlock to='/profile/support'>Supporto</ButtonBlock>
                <ButtonBlock to='/profile/faq'>F.A.Q.</ButtonBlock>
                <ButtonBlock to="/" >Logout</ButtonBlock>

            </div>
        </MainLayout>


    )


}
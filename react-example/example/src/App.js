
import FormHeader from "./components/molecules/FormHeader";
import MainHeader from "./components/organisms/MainHeader";
import CardsGrid from "./components/organisms/CardsGrid";
import DoctorGrid from "./components/organisms/DoctorGrid";
import MainLayout from "./components/layouts/MainLayout";

function App() {
  return (

  <>

    <MainLayout>
      header={<MainHeader/>}

      <CardsGrid></CardsGrid>
      <DoctorGrid></DoctorGrid>   


    </MainLayout>

  </>
  );
}

export default App;

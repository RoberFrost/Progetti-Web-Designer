import Navbarlink from "./components/Navbarlink";
import Navbar from "./components/Navbar";
import FormInput from "./components/FormInput";
import Formtextarea from "./components/FormTextarea";

function App() {
  return (

<div>
  {/* Inizio Navbar*/}  
  <Navbar></Navbar>
  {/* Fine Navbar*/}

  {/* Inizio Sezione Form */}
  <div className="container max-w-2xl mx-auto mt-20">

  <h1 className="text-5xl font-bold text-center">Benvenuti!</h1>

    <form className="mt-10 px-3">
    <FormInput
      text="Nome"
      htmlFor="name"
      />

    <FormInput
      text="Email"
      htmlFor="Email"
      type="email"
      />
    
    <Formtextarea text="Testo" htmlFor="message"/>


      <div className="text-center">
        <button className="text-white bg-red-700 px-5 py-3 rounded-lg border-0 font-medium">Invia</button>
      </div>  
        


    
        
    
    </form>  
  </div>

{/* Fine Sezione Form */}  

</div>
  );
}

export default App;

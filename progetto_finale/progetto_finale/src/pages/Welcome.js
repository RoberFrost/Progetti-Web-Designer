import Button from "@atoms/Button";
import { Link } from "react-router-dom"

function Welcome() {
  return (
    // Logo
    <div className="h-screen bg-white-light flex flex-col justify-center">
      <header className="text-center">
        <img className="w-full max-w-xs mx-auto" src="/media/LogoPrincipale.png" alt="Logo" />
        <h1 className="text-5xl font-bold mt-5">
          Crypto
          <span className="text-primary">B</span>lue
        </h1>
      </header>

      {/* Inizio Bottoni */}
      <div className="mt-20 flex flex-col items-center justify-center gap-4">

        <Button to="/login">Login</Button>

        <Link to="/register" href="" className="font-bold text-xl mt-1">Crea un nuovo account</Link>
      </div>

      {/* Fine bottoni */}

    </div>


  );
}

export default Welcome;

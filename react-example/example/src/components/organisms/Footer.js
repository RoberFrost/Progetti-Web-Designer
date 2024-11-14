import Link from "../atoms/Links";
import FooterIcon from "../atoms/FooterIcon";

export default function Footer(){

    return(
        
        <footer className="min-h-[100px] border-2 border-indigo-200/50 rounded-t-[20px] flex flex-wrap justify-evenly">

{/* Perchè Dr. Now */}

<div className="w-full md:w-1/8 mt-5 text-center">

  <h3 className="text-5xl text-primary">Perchè Dr. Now</h3>

  <p className="my-5 px-10 md:px-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate maxime enim, voluptates, 
    repellendus necessitatibus magnam numquam tenetur, adipisci voluptatum quae odio.
    Veritatis magni quisquam suscipit facere ab nesciunt beatae!</p>

</div>

{/* Quick Links */}

<div className="w-full md:w-1/5 mt-5 text-center md:text-start">

    <h3 className="text-2xl text-primary">Quick Links</h3>

    <ul className="my-5 list-disc">
      <Link>Cerca la visita</Link>
      <Link>Servizi</Link>
      <Link>Professionisti</Link>

    </ul>

</div>

{/* Contatti */}

<div className="mt-5 w-1/2 md:w-1/6 flex flex-col">

    <h3 className="text-2xl text-center text-primary">Contatti</h3>

<div className="flex justify-between items-center h-20 text-2xl text-white rounded-full p-4 bg-bgCustomGreen my-5">

    <FooterIcon
    code="fa-facebook"
    />

    <FooterIcon
    code="fa-twitter"
    />

    <FooterIcon
    code="fa-linkedin"
    />

</div>

</div>

</footer>
        
    )


}
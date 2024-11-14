import FormHeader from "../molecules/FormHeader";

export default function MainHeader(){

    return(
        
        <header className="mt-20 w-full min-h-[800px] md:min-h-[700px] bg-bgHeader bg-cover flex justify-center items-center flex-wrap flex-col-reverse md:flex-row">

    {/* Contenitore titolo e form */}

    <div className="w-full md:w-1/3 p-7 md:p-0">

      <h1 className="text-8xl font-bold">Dr. Now</h1>

      <h2 className="text-3xl italic underline text-primary">Il tuo dottore a portata di click</h2>

      <p className="text-xl mt-12 md:mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Asperiores repellat numquam molestiae fugiat molestias corporis ullam aliquid odit corrupti laudantium? 
      Ducimus natus quis sint animi nemo minus deserunt, perferendis accusantium?</p>
    
      <FormHeader></FormHeader>

    </div>


    {/* Contenitore immagine */}

    <div className="w-full md:w-1/3">
    
    <img className="mx-auto w-1/3 md:w-2/5 " src="./media/Dott 3.jpg" alt="" />

    </div>

    </header>
        
    )


}


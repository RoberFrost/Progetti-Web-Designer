import DoctorCard from "../molecules/DoctorCard";

export default function DoctorGrid(){

    const doctor =[
    
        {id: 1, DoctorImage:"/media/Dottore 1.jpg", doctorName:"Dr. Jones", altDoctor:"Jones"},
        {id: 2, DoctorImage:"/media/Dott 2.jpg", doctorName:"Dr. America", altDoctor:"America"},
        {id: 3, DoctorImage:"/media/Dott 4.jpg", doctorName:"Dr. Marvel", altDoctor:"Marvel"},
    
    ]
    
    return(
        
    <div className="min-h-[500px] bg-bgCustomGreen md:mx-20 md:rounded-[50px] my-20">

        <h2 className="text-center text-5xl pt-20 underline">I nostri professionisti</h2>
  
        <div className="flex flex-col md:flex-row mb-20 justify-around">

            {
                doctor.map((doctor)=>{
                
                return(
                    
                    <DoctorCard
                       key={doctor.id}
                       DoctorImage={doctor.doctorImage} 
                       doctorName={doctor.doctorName}
                       altDoctor={doctor.altDoctor}
                    />
                    
                )
                
                
                })
            

            }  
  
        </div>
  
    </div>
        
    )



}
import HeartIcon from "../atoms/HeartIcon";

export default function DoctorCard({DoctorImage, altDoctor, doctorName}){

    return(
        
        <div className="w-1/7 md:w-1/5 flex flex-col items-center mb-10 m-6 md:m-0">

            <img className="rounded-[30px] w-[250px] shadow relative top-40" src={DoctorImage} alt={altDoctor} />

        <div className="w-full rounded-[30px] h-[200px] bg-indigo-300 text-end shadow">

            <h4 className="px-10 text-center pt-44 text-3xl font-bold underline">{doctorName}</h4>

            <HeartIcon></HeartIcon>

        </div>


      </div>
        
    )



}
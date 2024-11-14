export default function DashboardCard({title, subtitle}) {

    return (
        
        <div className="relative bg-secondary rounded-[50px] h-52 mb-12">
            <img className="absolute top-11 right-0 w-32 h-32" src="/media/Bitcoin.png" alt="" />
            <div className="p-6 min-h-[130px] relative">
                <h2 className="text-white text-4xl font-bold">{title}</h2>
                <h3 className="text-white text-xl mt-4">{subtitle}</h3>
            </div>
        </div>

    )



}
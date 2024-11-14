import NavBar from "@organisms/NavBar";

export default function MainLayout({children, header}) {

    return (

        <div className="h-screen bg-white flex flex-col justify-between p-6">
                {header}

            <div className="grow pt-6">

                {children}

            </div>

            <NavBar />

        </div>
    )

}






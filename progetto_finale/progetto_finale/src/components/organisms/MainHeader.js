import ProfileIcon from '@icons/ProfileIcon'

export default function MainHeader({title, subtitle}) {

    return (
        <header className="flex items-center justify-between">
            <div>
                <h1 className="text-4xl font-bold">{title}</h1>
                <p className="text-secondary mt-1">{subtitle}</p>
            </div>
            <ProfileIcon/>
        </header>


    )



}
import ProfileIcon from '@icons/ProfileIcon';
import BackButton from '@atoms/BackButton';

export default function MainHeader({ title }) {

    function renderTitle() {
        if (title) {
            return (
                <h1 className="text-[2.75rem] font-bold mt-5">
                    <span className="text-primary">{title[0]}</span>{title.slice(1)}
                </h1>
            )
        }

    }

    return (
        <header>
            <div className='flex items-center justify-between'>

                <BackButton />
                <ProfileIcon />

            </div>
            <div className='text-center'>

                {renderTitle()}

            </div>
        </header>


    )

}
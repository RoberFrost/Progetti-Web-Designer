import NavLink from "@molecules/NavLink";
import Wallet from '@icons/Wallet';
import Market from '@icons/Market';
import Profile from '@icons/Profile';

export default function NavBar() {

    return (

        <nav className="bg-primary text-white h-20 rounded-[30px] flex items-center justify-center gap-12 mt-10">

            <NavLink text="Wallet" icon={<Wallet />} to="/wallet" />

            <NavLink text="Market" icon={<Market />} to="/market" />

            <NavLink text="Profile" icon={<Profile />} to="/profile" />

        </nav>

    )



}
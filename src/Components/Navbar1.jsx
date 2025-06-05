import { NavLink } from 'react-router';
import { FaCircleUser } from "react-icons/fa6";

const Navbar1 = () => {
    return (
        <div className='flex justify-between mt-6'>
            <div></div>
            <div className='flex justify-center items-center gap-6 text-accent'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <FaCircleUser size={38} />
                <button className='btn btn-primary px-10'>Login</button>
            </div>
        </div>
    );
};

export default Navbar1;
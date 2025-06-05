

import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Navbar = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-8 gap-4'>
            <img src={logo} className='' alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-accent'>{format(new Date(),"EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Navbar;
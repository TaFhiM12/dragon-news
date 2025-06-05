
import SocialLogin from './SocialLogin';
import FIndUsOne from './FIndUsOne';
import QZone from './QZone';

import bg from '../assets/bg.png'

const RightAside = () => {
    return (
        <div className='px-1'>
            <SocialLogin/>
            <FIndUsOne/>
            <QZone/>
            <img  className='mt-6 w-full' src={bg} alt="" />
        </div>
    );
};

export default RightAside;
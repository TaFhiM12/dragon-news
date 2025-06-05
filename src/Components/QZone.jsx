
import swimming from '../assets/swimming.png'
import class1 from '../assets/class.png'
import playground from '../assets/playground.png'

const QZone = () => {
    return (
        <div className='mt-6 grid grid-cols-1 gap-6 bg-base-200 py-6 px'>
            <h1 className='font-semibold px-2'>
                Q-Zone
            </h1>
            <div className='px-6'>
                <img src={swimming} alt="" />
                <img src={class1} alt="" />
                <img src={playground} alt="" />
            </div>
        </div>
    );
};

export default QZone;
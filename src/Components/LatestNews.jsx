
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex justify-center items-center gap-5 bg-base-200 p-3 rounded mt-5'>
            <button className='btn btn-secondary'>
                latest
            </button>
            <Marquee className='flex gap-5' pauseOnHover={true} speed={60}>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, vero?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            </p>
            </Marquee>
        </div>
    );
};

export default LatestNews;
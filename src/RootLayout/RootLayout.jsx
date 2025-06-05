
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import LatestNews from '../Components/LatestNews';
import Navbar1 from '../Components/Navbar1';
import LeftAside from '../Components/leftAside';
import RightAside from '../Components/RightAside';

const RootLayout = () => {
    return (
        <div className='w-11/12 mx-auto  h-full'>
            <header>
                <Navbar/>
                <LatestNews/>
                <Navbar1/>
            </header>
            <main className='flex flex-1 mt-5'>
                <aside className='w-3/12 sticky top-0 h-fit'>
                    <LeftAside/>
                </aside>
                <main className='w-6/12'>
                    <Outlet/>
                </main>
                <section className='w-3/12 sticky top-0 h-fit'>
                    <RightAside/>
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default RootLayout;
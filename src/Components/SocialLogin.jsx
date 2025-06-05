
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-semibold mb-5'>Login With</h1>
            <div className='space-y-2'>
                <button className='btn btn-outline w-full btn-secondary'>
                    login with Google</button>

                <button className='btn btn-outline w-full'>
                    <FaGithub />
                    Login with Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
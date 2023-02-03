import { BsFacebook, BsFillShieldLockFill, BsGithub, BsGoogle } from 'react-icons/bs';
import { BiLogIn } from 'react-icons/bi';
import Button from '../elements/Button';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const login = () => {
        navigate("/dashboard");
    }

    return (<div className="flex h-screen items-center">
        <div className="bg-white flex flex-col px-8 py-6 gap-5 w-screen sm:w-[500px]">
            <div className="flex items-center gap-2">
                <div className="bg-indigo-500 rounded-full p-2 shadow-lg">
                    <BiLogIn className="text-xl text-white" />
                </div>
                <span className="font-bold text-2xl">Login</span>
            </div>
            <span className="text-gray-700">Welcome to JimUI</span>
            <div className="flex items-center rounded bg-indigo-50 py-2 px-4 gap-4">
                <BsFillShieldLockFill className="text-3xl text-white" />
                <span className="text-sm">
                    Username: <b>Admin</b><br />Password: <b>password</b>
                </span>                
            </div>
            <input className="shadow border rounded w-full py-2 px-3 text-gray-700" type="text" placeholder="Username" />
            <input className="shadow border rounded w-full py-2 px-3 text-gray-700" type="password" placeholder="Password" />
            <Button onClick={() => login() } type="primary">LOGIN</Button>
            <a className="font-bold text-sm text-indigo-500 hover:text-indigo-800" href="/">Forgot Password?</a>
            <span className="text-gray-700">or login with</span>
            <div className="flex gap-2">
                <BsFacebook className="text-2xl text-blue-500 cursor-pointer" />
                <BsGoogle className="text-2xl text-red-500 cursor-pointer" />
                <BsGithub className="text-2xl cursor-pointer" />
            </div>
        </div>
        <div className="bg-slate-50 h-screen w-full items-center justify-center hidden sm:flex">
            <img alt="undraw" src="./images/undraw_stars_re_6je7.svg"  />  
        </div>
    </div>)
}

export default Login;
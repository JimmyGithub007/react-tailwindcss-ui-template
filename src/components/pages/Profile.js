import { BiEdit } from "react-icons/bi";
import { RiContactsBook2Fill, RiUserLocationFill } from 'react-icons/ri';
import { BsFacebook, BsGithub, BsGoogle } from 'react-icons/bs';
import Shell from "../shared/Shell";
import DemoRadar from "../charts/DemoRadar";

const Profile = () => {
    return (<Shell>
        <div className="flex flex-col relative">
            <div className="bg-indigo-500 flex h-[150px] items-center relative rounded-2xl w-full p-4 gap-4">
                <img alt="undraw" className="bg-white rounded-full h-28 self-center shadow-lg z-10 top-[90px]" src={`https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png`} />
                <div className="flex flex-col text-white z-10">
                    <span className="text-2xl font-bold">Jimmy Hoe (29)</span>
                    <span className="text-xl">Web Developer</span>
                </div>
                <button className="absolute flex items-center font-bold right-4 top-4 rounded-full bg-white shadow-lg py-1 px-4 text-indigo-500">Edit Profile <BiEdit className="text-xl" /></button>
            </div>
            <div className="flex justify-between w-full">
                <div className="flex items-center">
                    <span className="font-bold border-b-4 border-gray-700">Personal</span>
                    <span className="border-b-4 text-gray-500 pl-3">Family</span>
                    <span className="border-b-4 text-gray-500 pl-3">Company</span>
                </div>
                <div className="flex gap-2 p-4">
                    <BsFacebook className="text-2xl text-blue-500 cursor-pointer rounded-full shadow-lg" />
                    <BsGoogle className="text-2xl text-red-500 cursor-pointer rounded-full shadow-lg" />
                    <BsGithub className="text-2xl cursor-pointer rounded-full shadow-lg" />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 flex flex-col gap-5">
                    <div className="bg-white rounded-2xl shadow-lg flex flex-col gap-2 p-4">
                        <span className="border-l-4 pl-4 font-bold text-xl">Personal Info</span>
                        <span>First Name: <b>Jimmy</b> |  Last Name: <b>Hoe</b></span>
                        <span>Date of Birth: <b>1994-09-18</b></span>
                        <span>Gender: <b>Male</b></span>
                        <span>Race: <b>Chinese</b></span>
                        <span>Religion: <b>Buddhist</b></span>
                        <span>Marital Status: <b>Married</b></span>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg flex flex-col gap-2 p-4">
                        <span className="border-l-4 flex items-center pl-2 text-lg text-gray-700"><RiUserLocationFill className="mr-2" /> Address</span>
                        <span>Country: <b>Malaysia</b></span>
                        <span>State: <b>Johor</b></span>
                        <span>City: <b>Johor Bahru</b></span>
                        <span>Postcode: <b>83000</b></span>
                        <span>Address: <b>60 Jalan Bukit Flora 33</b></span>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg flex flex-col gap-2 p-4"> 
                        <span className="border-l-4 flex items-center pl-2 text-lg text-gray-700"><RiContactsBook2Fill className="mr-2" /> Contact</span>
                        <span>Home: <b>-</b></span>
                        <span>Phone: <b>(+60)12-3456780</b></span>
                        <span>Email: <b>jimmyhoe@hotmail.com</b></span>
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-4">
                    <DemoRadar />
                    <span className="border-l-4 pl-4 font-bold text-xl">About Me</span>
                    <span className="text-gray-700">
                        An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.
                    </span>
                </div>
            </div>
        </div>
    </Shell>)
}

export default Profile;
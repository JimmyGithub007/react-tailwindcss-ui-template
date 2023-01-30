import { MdNotifications } from "react-icons/md";
import { BsArrowLeftCircleFill, BsSearch } from "react-icons/bs";
import { useLocation } from "react-router-dom";

const Header = (props) => {
    const location = useLocation();

    return (<div className={`bg-slate-50 duration-150 fixed flex flex-col px-4 pt-4 right-0 ${props.collapse ? "lg:w-[calc(100%-220px)]" : "lg:w-[calc(100%-55px)]"} w-full z-20`}>
        <div className="bg-indigo-500 flex items-center justify-between h-12 rounded-full shadow-lg px-4">
            <BsArrowLeftCircleFill className={`cursor-pointer duration-300 text-3xl text-white ${!props.collapse && "rotate-180"}`} onClick={() => props.setCollapse(!props.collapse) } />
            <div className="flex gap-2">
                <div className="relative shadow-lg">
                    <BsSearch className="absolute left-2 text-indigo-400 top-2" />
                    <input className="duration-150 focus:w-[200px] py-1 px-8 rounded-full w-[150px]" placeholder="Search" type="text" />
                </div>
                <div className="bg-white cursor-pointer p-2 rounded-full shadow-lg">
                    <MdNotifications className="text-indigo-500" />
                </div>
                <img alt="undraw" className="bg-white rounded-full h-8 shadow-lg w-8" src={`https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png`} />            
            </div>
        </div>
        <div className="px-8 py-2 text-lg">
            <span className="text-gray-400">pages / </span>
            <span className="text-gray-900">{location.pathname.substring(1)}</span>
        </div>
    </div>)
}

export default Header;
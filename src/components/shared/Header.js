import { MdNotifications } from "react-icons/md";
import { BsArrowLeftCircleFill, BsSearch } from "react-icons/bs";

const Header = (props) => {
    return (<div className="bg-indigo-500 flex items-center justify-between m-4 h-12 rounded-full shadow-lg px-4">
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
    </div>)
}

export default Header;
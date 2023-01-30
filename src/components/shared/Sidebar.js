import { Link, useLocation } from "react-router-dom";
import { TbError404, TbLayoutDashboard } from 'react-icons/tb';
import { BsPersonFill, BsTable } from "react-icons/bs";
import { useEffect, useRef } from "react";
import { RiReactjsFill } from "react-icons/ri";
import { MdHelpCenter } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";

const menus = [
    { name: "Dashboard", url: "/dashboard", icon: <TbLayoutDashboard className="min-w-fit" /> },
    { name: "Profile", url: "/profile", icon: <BsPersonFill className="min-w-fit" /> },
    { name: "Table", url: "/table", icon: <BsTable className="min-w-fit" /> },
    { name: "Help Center", url: "/helpcenter", icon: <MdHelpCenter className="min-w-fit" /> },
    { name: "Pricing", url: "/pricing", icon: <ImPriceTags className="min-w-fit" /> },
    { name: "404 Error", url: "/404", icon: <TbError404 className="min-w-fit" /> }
];

const Sidebar = (props) => {
    const location = useLocation();
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target) && window.innerWidth < 1024) {
                props.setCollapse(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [props, sidebarRef])

    return (<div className={`bg-white duration-300 flex flex-col fixed h-full overflow-x-hidden top-0 left-0 z-30 ${props.collapse ? "w-[220px]" : "w-0 lg:w-[55px]"}`} ref={sidebarRef}>
        <div className="flex items-center gap-2 pl-2 my-3">
            <div className="bg-red-300 rounded-xl p-2 shadow-lg">
                <RiReactjsFill className="text-2xl text-white" />
            </div>
            <span className="font-bold text-xl text-red-500 whitespace-nowrap">ReactJS JimUI</span>
        </div>
        {
            menus.map((menu, key) => (
                <Link className="duration-150 flex font-bold group items-center py-2 px-3 text-gray-700 hover:bg-gray-100" key={key} to={menu.url}>
                    <span className={`${location.pathname.substring(1) === menu.name.toLowerCase() ? "bg-indigo-500 text-white" : "bg-indigo-100"} duration-150 rounded-full group-hover:bg-indigo-500 p-2 group-hover:text-white`}>{menu.icon}</span>
                    <span className="pl-[16px] whitespace-nowrap">{menu.name}</span>
                </Link>
            ))
        }
    </div>)
}

export default Sidebar;
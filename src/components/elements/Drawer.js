import { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Drawer = (props) => {
    const drawerRef = useRef();
    const [ customClass, setCustomClass ] = useState("");

    useEffect(() => {
        if(props.placement) {
            switch(props.placement) {
                case "left":
                    setCustomClass(` ${props.width ? ( props.open ? "left-0 " : "left-["+props.width+"px] ") :  ( props.open ? "left-0 " : "-left-80 " ) }top-0 ${props.height ? "w-["+props.width+"px]" : "w-80"} h-screen`)
                    break;
                case "right":
                    setCustomClass(` ${props.width ? ( props.open ? "right-0 " : "right-["+props.width+"px] ") :  ( props.open ? "right-0 " : "-right-80 " ) }top-0 ${props.height ? "w-["+props.width+"px]" : "w-80"} h-screen`)
                    break;
                case "top":
                    setCustomClass(` ${props.height ? ( props.open ? "top-0 " : "top-["+props.height+"px] ") :  ( props.open ? "top-0 " : "-top-80 " ) }left-0 ${props.height ? "h-["+props.height+"px]" : "h-80"} w-screen`)
                    break;
                default:
                    setCustomClass(` ${props.height ? ( props.open ? "top-0 " : "bottom-["+props.height+"px] ") :  ( props.open ? "bottom-0 " : "-bottom-80 " ) }left-0 ${props.height ? "h-["+props.height+"px]" : "h-80"} w-screen`)
            }
        }
    }, [props])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (props.open && drawerRef.current && !drawerRef.current.contains(event.target)) {
                props.onClose();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [props, drawerRef])

    return (<div className={`fixed bg-white duration-150 z-30${customClass}`} ref={drawerRef}>
        <div id="header" className="border-b border-gray-200 flex items-center justify-between h-12 px-4">
            <div>{props.header}</div>
            <AiOutlineClose className="cursor-pointer text-gray-500 hover:text-gray-400" onClick={props.onClose} />
        </div>
        <div id="body" className="h-[calc(100%-96px)]">
            {props.body}
        </div>
        <div id="footer" className="border-t border-gray-200 flex items-center h-12 px-4">
            {props.footer}
        </div>
    </div>)
}

export default Drawer;
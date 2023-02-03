import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

const Button = (props) => {
    const [ customClass, setCustomClass ] = useState("");

    useEffect(() => {
        switch(props.type) {
            case "primary":
                setCustomClass(`shadow${(props.disabled || props.loading) ? " bg-gray-100 text-gray-300" : " bg-indigo-500 hover:bg-indigo-400 text-white"}`);
                break;
            case "dashed":
                setCustomClass(`bg-white border-2 border-dashed shadow${(props.disabled || props.loading) ?  " text-gray-300" : " hover:border-indigo-500 hover:text-indigo-400"}`);
                break;
            default:
                setCustomClass(`bg-white  border-2 shadow${(props.disabled || props.loading) ? " text-gray-300" : " hover:border-indigo-500 hover:text-indigo-400"}`);
        }
    }, [props])

    return (<button 
        onClick={props.onClick}
        disabled={props.disabled || props.loading} 
        className={`${customClass} duration-150 flex gap-2 items-center justify-center rounded-full${props.className ? " "+props.className : ""}${(props.disabled || props.loading) ? " cursor-not-allowed" : ""}${props.circle ? " justify-center w-[32px]" : " px-4 py-1"}`}>
        {props.loading && <AiOutlineLoading className="animate-spin" />}
        {props.children}
    </button>)
}

export default Button;
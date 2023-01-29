import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Shell = (props) => {
    const location = useLocation();
    const [ collapse, setCollapse ] = useState(true);

    useEffect(() => {
        const handleWindowResize = () => {
          if(window.innerWidth < 768) setCollapse(false);
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);

    return (<div className="flex bg-slate-50 min-h-screen">
        <Sidebar collapse={collapse} setCollapse={setCollapse} />
        <div className="duration-300 w-full" style={{ marginLeft: collapse ? "220px" : "55px" }}>
            <Header collapse={collapse} setCollapse={setCollapse} />
            <div className="px-8 py-2 text-lg">
                <span className="text-gray-400">pages / </span>
                <span className="text-gray-900">{location.pathname.substring(1)}</span>
            </div>
            <div className="px-8 py-2">{props.children}</div>
            <Footer />
        </div>
    </div>)
}

export default Shell;
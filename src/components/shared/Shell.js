import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Shell = (props) => {
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
        <div className={`duration-300 w-full ${collapse ? "lg:ml-[220px]" : "lg:ml-[55px]"}`}>
            <Header collapse={collapse} setCollapse={setCollapse} />
            <div className="px-8 py-2 mt-[108px] min-h-[calc(100vh-172px)]">{props.children}</div>
            <Footer />
        </div>
    </div>)
}

export default Shell;
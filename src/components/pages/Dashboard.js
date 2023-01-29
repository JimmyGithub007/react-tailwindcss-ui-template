import Shell from "../shared/Shell";
import { BiLineChart, BiLineChartDown } from "react-icons/bi";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import DemoPie from "../charts/DemoPie";
import DemoBar from "../charts/DemoPar";

const Dashboard = () => {
    return (<Shell>
        <div className="bg-white flex flex-col gap-2 justify-center p-6 relative rounded shadow-lg w-full h-[150px]">
            <img alt="undraw" className="absolute h-24 right-2" src="./images/undraw_data_trends_re_2cdy.svg" />
            <span className="font-bold text-3xl text-gray-700">Welcome To JimUI</span>
            <span className="text-gray-700">Start your today work</span>
            <button className="bg-indigo-500 rounded-full w-fit py-1 px-4 shadow-lg text-white">GO</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <div className="bg-white cursor-pointer duration-150 flex flex-col p-6 rounded shadow-lg w-full hover:scale-105">
                <div className="flex items-center gap-4">
                    <div className="bg-emerald-50 rounded-full p-3">
                        <GiReceiveMoney className="text-emerald-300 text-2xl" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold">$ 323,400</span>
                        <span>Title 1</span>                        
                    </div>
                </div>    
            </div>
            <div className="bg-white cursor-pointer duration-150 flex flex-col p-6 rounded shadow-lg w-full hover:scale-105">
                <div className="flex items-center gap-4">
                    <div className="bg-red-50 rounded-full p-3">
                        <GiPayMoney className="text-red-300 text-2xl" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold">$ 23,500</span>
                        <span>Title 2</span>                        
                    </div>
                </div>    
            </div>
            <div className="bg-white cursor-pointer duration-150 flex flex-col p-6 rounded shadow-lg w-full hover:scale-105">
                <div className="flex items-center gap-4">
                    <div className="bg-indigo-50 rounded-full p-3">
                        <BiLineChart className="text-indigo-300 text-2xl" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold">$ 33,200</span>
                        <span>Title 3</span>                        
                    </div>
                </div>    
            </div>
            <div className="bg-white cursor-pointer duration-150 flex flex-col p-6 rounded shadow-lg w-full hover:scale-105">
                <div className="flex items-center gap-4">
                    <div className="bg-amber-50 rounded-full p-3">
                        <BiLineChartDown className="text-amber-300 text-2xl" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold">$ 24,000</span>
                        <span>Title 4</span>                        
                    </div>
                </div>    
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            <div className="bg-white p-6 rounded shadow-lg w-full">
                <DemoPie />
            </div>
            <div className="bg-white p-6 rounded shadow-lg w-full">
                <DemoBar />
            </div>
        </div>
    </Shell>)
}

export default Dashboard;
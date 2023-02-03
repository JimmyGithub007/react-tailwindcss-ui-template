import DemoLiquid from "../charts/DemoLiquid";
import DemoBar from "../charts/DemoBar";
import DemoPie from "../charts/DemoPie";
import DemoRose from "../charts/DemoRose";
import Shell from "../shared/Shell";
import DemoRadar from "../charts/DemoRadar";
import DemoLine from "../charts/DemoLine";

const Chart = () => {
    return (<Shell>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            <div className="bg-white cursor-pointer duration-150 p-6 rounded shadow-lg w-full hover:scale-105">
                <span className="font-bold text-xl text-gray-700">Pie</span>
                <DemoPie />
            </div>
            <div className="bg-white cursor-pointer duration-150 p-6 rounded shadow-lg w-full hover:scale-105">
                <span className="font-bold text-xl text-gray-700">Bar</span>
                <DemoBar />
            </div>
            <div className="bg-white cursor-pointer duration-150 p-6 rounded shadow-lg w-full hover:scale-105">
                <span className="font-bold text-xl text-gray-700">Radar</span>
                <DemoRadar />
            </div>
            <div className="bg-white cursor-pointer duration-150 p-6 rounded shadow-lg w-full hover:scale-105">
                <span className="font-bold text-xl text-gray-700">Liquid</span>
                <DemoLiquid />
            </div>
            <div className="bg-white cursor-pointer duration-150 p-6 rounded shadow-lg w-full hover:scale-105">
                <span className="font-bold text-xl text-gray-700">Rose</span>
                <DemoRose />
            </div>
            <div className="bg-white cursor-pointer duration-150 p-6 rounded shadow-lg w-full hover:scale-105">
                <span className="font-bold text-xl text-gray-700">Line</span>
                <DemoLine />
            </div>
        </div>
    </Shell>)
}

export default Chart;
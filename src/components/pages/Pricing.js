import { GiCoinsPile } from "react-icons/gi";
import { BsCashCoin, BsCheckCircleFill, BsFillXCircleFill, BsCoin } from "react-icons/bs";
import Shell from "../shared/Shell";

const pricing = [
    { title: "Basic", second: "A simple start for everyone", price: "$199" },
    { title: "Standard", second: "For small to medium businesses", price: "$399" },
    { title: "Enterprise", second: "Solution for big organizations", price: "$899" }
];

const features = [
    { title: "14-days free trial", first: true, second: true, third: true },
    { title: "Not Limit User", first: false, second: false, third: true },
    { title: "Email Support", first: true, second: true, third: true },
    { title: "Phone Call Support", first: false, second: true, third: true },
    { title: "Data storage for 365 days", first: false, second: false, third: true },
    { title: "Generate Report", first: false, second: true, third: true }
];

const Pricing = () => {
    return (<Shell>
        <div className="flex flex-col items-center gap-8">
            <h2 className="font-bold text-center text-gray-800 text-2xl">
                <span className="font-light">Our</span> Pricing
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
                {
                    pricing.map((value, key) => (
                        <div className={`bg-white lg:max-w-min w-full origin-bottom overflow-hidden rounded-xl shadow-lg ${key === 1 && "border-2 border-indigo-500"}`} key={key}>
                            <div className="flex flex-col gap-2 items-center px-6 py-4">
                                { key === 0 && <BsCoin className="text-7xl text-indigo-400" /> }
                                { key === 1 && <BsCashCoin className="text-7xl text-indigo-400" /> }
                                { key === 2 && <GiCoinsPile className="text-7xl text-indigo-400" /> }
                                <span className="font-semibold text-xl">{value.title}</span>
                                <span className={`text-4xl font-black`}>{value.price}</span>
                                <span className={`mt-2`}>/ Monthly</span>
                                <span className="text-gray-500 text-xs">{value.second}</span>
                                <span className="text-sm text-gray-700">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </span>
                                <button className="bg-indigo-500 hover:bg-indigo-400 px-4 py-1 rounded-full shadow-lg text-white w-48">
                                    More Details
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <span className="font-bold text-xl text-gray-700">Plan Comparison</span>
            <div className="bg-white rounded-xl shadow-lg p-4 w-full lg:w-fit overflow-x-auto">
                <table className="text-left w-full">
                    <thead>
                        <tr className="bg-gray-50 border-b">
                            <th className="px-6 py-4">Features</th>
                            {
                                pricing.map((value, key) => (
                                    <th className="px-6 py-4" key={key}>{value.title}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            features.map((value, key) => (
                                <tr className="border-b hover:bg-gray-50" key={key}>
                                    <td className="px-6 py-4 text-gray-500">{value.title}</td>
                                    <td className="px-6 py-4">{value.first ? <BsCheckCircleFill className="text-indigo-400 text-center w-full" /> : <BsFillXCircleFill className="text-gray-400 text-center w-full" /> }</td>
                                    <td className="px-6 py-4">{value.second ? <BsCheckCircleFill className="text-indigo-400 text-center w-full" /> : <BsFillXCircleFill className="text-gray-400 text-center w-full" /> }</td>
                                    <td className="px-6 py-4">{value.third ? <BsCheckCircleFill className="text-indigo-400 text-center w-full" /> : <BsFillXCircleFill className="text-gray-400 text-center w-full" /> }</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </Shell>)
}

export default Pricing;
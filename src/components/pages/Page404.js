import { RiArrowGoBackFill } from "react-icons/ri";

const Page404 = () => {
    return (<div className="animate-fade-in flex flex-col items-center justify-center h-screen w-screen">
        <img alt="undraw" className="h-40 mb-12" src="./images/undraw_page_not_found_re_e9o6.svg" />
        <span className="text-3xl text-gray-400">404 Error</span>
        <span className="text-gray-400 mb-4">Page Not Found</span>
        <button className="animate-bounce bg-indigo-500 flex hover:bg-indigo-700 items-center text-white font-bold py-2 px-4 rounded-full shadow-lg">
            <RiArrowGoBackFill className="mr-2" /> Go Back Dashboard
        </button>
    </div>)
}

export default Page404;
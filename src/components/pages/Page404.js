import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Button from "../elements/Button";

const Page404 = () => {
    const navigate = useNavigate(); 

    return (<div className="animate-fade-in flex flex-col items-center justify-center h-screen w-screen">
        <img alt="undraw" className="h-40 mb-12" src="./images/undraw_page_not_found_re_e9o6.svg" />
        <span className="text-3xl text-gray-400">404 Error</span>
        <span className="text-gray-400 mb-4">Page Not Found</span>
        <Button onClick={() => navigate("/dashboard") } type="primary">
            <RiArrowGoBackFill className="mr-2" /> Go Back Dashboard
        </Button>
    </div>)
}

export default Page404;
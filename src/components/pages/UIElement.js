import { useReducer } from "react";
import { GiClick } from "react-icons/gi";
import { BsFillArrowDownCircleFill, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsFillArrowUpCircleFill } from "react-icons/bs";
import Button from "../elements/Button";
import Drawer from "../elements/Drawer";
import Shell from "../shared/Shell";

const initialState = {
    left: false, right: false, top: false, bottom: false
};

const reducer = (state, action) => {
    switch(action.type) {
        case "left":
            return { ...initialState, left: true }
        case "right":
            return { ...initialState, right: true }
        case "top":
            return { ...initialState, top: true }
        case "bottom":
            return { ...initialState, bottom: true }
        default:
            return initialState;
    }
}

const UIElement = () => {
    const [ state, dispatch ] = useReducer(reducer, initialState);

    const drawers = [
        { type: "left", icon: <BsFillArrowLeftCircleFill />, state: state.left },
        { type: "right", icon: <BsFillArrowRightCircleFill />, state: state.right },
        { type: "top", icon: <BsFillArrowUpCircleFill />, state: state.top },
        { type: "bottom", icon: <BsFillArrowDownCircleFill />, state: state.bottom }
    ];

    return (<Shell>
        <div className="flex flex-col gap-4">
            <div className="bg-white  flex flex-col gap-4 p-4 rounded shadow-lg">
                <span className="font-bold text-xl text-gray-700">Button</span>
                <span className="text-gray-700">Basic</span>
                <div className="flex flex-wrap gap-2">
                    <Button type="primary">Primary Button</Button>
                    <Button type="dashed">Dashed Button</Button>
                    <Button>Default Button</Button>
                </div>
                <span className="text-gray-700">Disabled</span>
                <div className="flex flex-wrap gap-2">
                    <Button disabled={true} type="primary">Primary Button</Button>
                    <Button disabled={true} type="dashed">Dashed Button</Button>
                    <Button disabled={true}>Default Button</Button>
                </div>
                <span className="text-gray-700">Icon</span>
                <div className="flex flex-wrap gap-2">
                    <Button type="primary"><GiClick /> Left Icon Button</Button>
                    <Button type="primary">Right Icon Button <GiClick /></Button>
                    <Button type="primary" circle={true}><GiClick /></Button>
                </div>
                <span className="text-gray-700">Loading</span>
                <div className="flex flex-wrap gap-2">
                    <Button type="primary" loading={true}>Loading</Button>
                    <Button type="primary" loading={true} circle={true}></Button>
                </div> 
            </div>
            <div className="bg-white flex flex-col gap-4 p-4 rounded shadow-lg">
                <span className="font-bold text-xl text-gray-700">Drawer</span>
                <div className="flex flex-wrap gap-2">
                    {
                        drawers.map((drawer, key) => (
                            <Button key={key} type="primary" onClick={() => dispatch({ type: drawer.type }) }>{drawer.icon} {drawer.type} Drawer</Button>
                        ))
                    }
                    {
                        drawers.map((drawer, key) => (
                            <Drawer key={key} open={drawer.state} onClose={() => dispatch({ type: "close" }) } 
                                placement={drawer.type}
                                header={<span className="font-bold text-gray-700">{drawer.type} Header</span>}
                                footer={<div className="flex justify-end w-full"><Button type="primary">Submit</Button></div>}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    </Shell>)
}

export default UIElement;
import { ReactNode } from "react"
import {
    BiBus,
    MdOutlineTrain,
    RiEBike2Line,
    AiOutlineCar,
    BsBicycle,
    FaCaravan,
    RiTaxiWifiLine
} from "react-icons/all"
import { IconType } from "react-icons/lib"
import { useSelector } from "react-redux"
const distance = useSelector((store:any) => store.destination)

export const keytomode = {
    1 :"mode_1",
    2 :"mode_2",
    3 :"mode_4",
    4 :"mode_4",
    5 :"mode_5",
    7 :"mode_7",
    8 :"mode_8",
    9 :"mode_9",
}

export const keytoicon = {
    1: <BiBus/>,
    2: <BiBus/>,
    3: <MdOutlineTrain/>,
    4: <BsBicycle/>,
    5: <RiTaxiWifiLine/>,
    7: <FaCaravan/>,
    8: <AiOutlineCar/>,
    9: <RiEBike2Line/>,

}

export const modetokey = (mode:string):number => {
    if(mode=="mode_4" && distance == 1){
        return 4;
    } else return 3;
    return parseInt(mode[-1])
}
// this module is meant for data sync and retreival
// we import all the icons to keep track
// redux to read the data from the data store
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
import { useSelector } from "react-redux"

// this is used to calculate the key value of mode_4 since it does become ambiguous otherwise
const distance = useSelector((store:any) => store.destination)

// maps the keys to the modes
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

// maps the keys to the respective icons
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

// converts the mode to key to remove ambiguity
export const modetokey = (mode:string):number => {
    if(mode=="mode_4" && distance == 1){
        return 4;
    } else return 3;
    return parseInt(mode[-1])
}
import React, { useEffect, useState } from 'react'
import Modal from './modal'

// creating an interface for the prop type
interface props {
    data : {string:any},
    mode : string,
    closer: Function
}


export default function ModeDetail(props : props): React.ReactElement {

    // creating a copy of the mode selected by the user
    // this is the mode that we need to display information about
    const modeSelected = props.mode

    // maintaining all the details that need to be displayed
    const [details, setDetails] = useState({});

    // this function is used to compute the details about the mode of transportation as per the question
    const computeDetails = () => {
        return {
            name : props.data[modeSelected],
            inVehicle: props.data[modeSelected+".ivtt"],
            transfers : props.data[modeSelected+".trans"],
            timeOut: parseInt(props.data[modeSelected+".walktime"])+parseInt(props.data[modeSelected+".waittime"]),
            trafDelay: props.data[modeSelected+".tvariab"],
            cost: props.data[modeSelected+".tcost"],
            crowd: props.data[modeSelected+".crowd"],
            service: props.data[modeSelected + ".serv"]
        }
    } 

    // this function runs only once when the mode that has been selected changes
    useEffect(()=>{
        setDetails(computeDetails());
    },[props.mode])

  return (
    <Modal>
        <div 
            className="content grid gap-3"
            key={modeSelected}
        >   
            <span className=' text-3xl font-bold'>{props.data[modeSelected]}</span>
            <span>Time Spent in vehicle : {details.inVehicle} min</span>
            <span>Number of transfers : {details.transfers}</span>
            <span>Time not in vehicle : {details.timeOut} min</span>
            <span>Possible traffic delays : {details.trafDelay} min</span>
            <span>Total cost : ₹{details.cost}</span>
            <span>Service type : {details.service}</span>
        </div>
        <button
            className='w-[50%] p-[1ch] rounded-[1.5ch] absolute bottom-0 left-0 mb-[4ch]  border-black border-2 translate-x-[50%] '
            onClick={()=>{props.closer(true)}}
        >Close</button>
    </Modal>
  )
}
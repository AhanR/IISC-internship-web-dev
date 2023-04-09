// importing redux for state management
// importing router-dom for routing activities
// importing react icons for good looking icons
// imoprting the data to use later
// framer motion for animations
// modeDetail for displaying mode details on a modal
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/all'
import data1 from "../data/sample_db_0km.json"
import data2 from "../data/sample_db_10km.json"
import data3 from "../data/sample_db_15km.json"
import data4 from "../data/sample_db_20km.json"
import data5 from "../data/sample_db_25km.json"
import {AnimatePresence, motion} from 'framer-motion';
import ModeDetail from '../components/modeDetail'


export default function Page2() {

  // mode choice is retreived from the redux store
  const modeChoice = useSelector((store:any) => store.mode)
  // the distance choosen by the user in the previous page is retreived from the redux store
  const destinationChoice = useSelector((store:any) => store.destination)
  // final list of modes to be displayed to the user
  const [finalModes, setFinalModes] = useState(["mode_1","mode_2","mode_4","mode_8","mode_7"]);
  // the data that is to be used for the current selection
  const [data, setData] = useState(data1);
  // flag to maintain modal state
  const [modalClose, setModalClose] = useState(true);
  // the mode that has been currently clicked on
  const [selectedMode, setSelectedMode] = useState("");

  // this function is run only once when the component is loaded so that we can initialize the modes to show according to the problem statement
  const chooseFinalModes = () => {

    // adding in randomization as per problem
    setFinalModes(state=>{
      state[3] = (Math.random()>0.5)? "mode_8": "mode_9";
      state[4] = (Math.random()>0.5)? "mode_7":"mode_5";
      return state;
    })

    // all conditions from the problem are emulated here
    if(modeChoice == 4) {
      setFinalModes(state => {
        state[3] = "mode_8";
        return state;
      })
    }
    else if (modeChoice == 3) {
      setFinalModes(state => {
        state[3] == "mode_9";
        return state;
      })
    }
    else if (modeChoice == 6){
      setFinalModes(state => {
        state[4] == "mode_7";
        return state;
      })
    }
    else if (modeChoice == 7){
      setFinalModes(state => {
        state[4] = "mode_5";
        return state;
      })
    }
  }

  // a function used to find which data set is to be used
  const chooseData = (x:number) =>{
    if(x==1){
      setData(data1);
    } else if(x==2){
      setData(data2);
    } else if(x==3){
      setData(data3);
    } else if(x==4) {
      setData(data4);
    } else if (x==5) {
      setData(data5);
    }
  }

  // this snippet runs only once when the component loads up.
  // it triggers the other functions that must be run on component load
  useEffect(()=>{
    chooseFinalModes();
    chooseData(destinationChoice)
  },[])

  // a react router element used to control the state of the application
  const navigator = useNavigate();


  return (
    <AnimatePresence>
      {!modalClose? <ModeDetail intial={{opacity:0, scale: 0.8}} animate={{opacity:1, scale: 1}} exit={{opacity:0, scale:0.8}} data={data.Data[0]} mode={selectedMode} closer={setModalClose}/> : ""}
      <nav>
        <button
          onClick={()=>{navigator(-1)}}
          className=' p-[3ch] pb-0'
        >
          <BsArrowLeft className='text-4xl' />
        </button>
      </nav>
      <div
        className="content px-[3ch]"
      >
        <h2
          className='text-3xl'
        >Here are your transporation mode choices</h2>
        <div
          className="choices flex flex-row flex-wrap"
        >
          {finalModes.map((m:string)=><motion.div 
          whileTap={{scale: 0.8}}
          onTap={()=> {
            setSelectedMode(m);
            setModalClose(false)
          }}
            key={m}
            className=' p-[1.5ch] rounded-[1.5ch] flex flex-col items-center justify-center border-2 mr-[1.5ch] mt-[1.5ch] cursor-pointer'
          >
            <div
              className='text-sm'
            >
              {data.Data[0][m]}
            </div>
            <div
              className='text-xs text-slate-300'
            >23 min | ₹51</div>
          </motion.div>)}
        </div>
      </div>
    </AnimatePresence>
  )
}
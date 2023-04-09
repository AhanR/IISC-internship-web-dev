import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/all'
import data1 from "../data/sample_db_0km.json"
import data2 from "../data/sample_db_10km.json"
import data3 from "../data/sample_db_15km.json"
import data4 from "../data/sample_db_20km.json"
import data5 from "../data/sample_db_25km.json"
import { iconGenFromKey, keytoicon, modetokey } from '../data/modes_data'
import { IconType } from 'react-icons/lib'
import {motion} from 'framer-motion';
import ModeDetail from '../components/modeDetail'
import {AnimatePresence} from "framer-motion"


export default function Page2() {

  const modeChoice = useSelector((store:any) => store.mode)
  const destinationChoice = useSelector((store:any) => store.destination)
  const [finalModes, setFinalModes] = useState(["mode_1","mode_2","mode_4","mode_8","mode_7"]);
  const [data, setData] = useState(data1);
  const [modalClose, setModalClose] = useState(true);
  const [selectedMode, setSelectedMode] = useState("");

  const chooseFinalModes = () => {

    setFinalModes(state=>{
      state[3] = (Math.random()>0.5)? "mode_8": "mode_9";
      state[4] = (Math.random()>0.5)? "mode_7":"mode_5";
      return state;
    })

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

  useEffect(()=>{
    chooseFinalModes();
    chooseData(destinationChoice)
  },[])

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
            <div>
              {data.Data[0][m]}
            </div>
            <div>23 min | ₹51</div>
          </motion.div>)}
        </div>
      </div>
    </AnimatePresence>
  )
}
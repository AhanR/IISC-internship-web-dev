// this module is for the first page

// framer motion for animation
// react-icons for some icons
// router-dom for routing throughout the app
// routeNames used to keep sync between the route names across modules
// redux, used to update the global information store
// chageDestination is a custom reducer to update the destination value in the store
// chageMode is a custom reducer to update the mode value in the store
import { AnimatePresence, motion } from 'framer-motion';
import React, {useState} from 'react'
import { BsArrowLeft, BiBus, MdOutlineTrain, RiEBike2Line, AiOutlineCar, BsBicycle, FaCaravan, RiTaxiWifiLine } from 'react-icons/all'
import { useNavigate } from 'react-router-dom';
import routeNames from '../data/routes';
import {useDispatch} from 'react-redux'
import { changeDestination } from '../reducers/destination';
import { changeMode } from '../reducers/mode';

export default function Page1() {
    // some common styles for the options
    const optionStyle = "p-[1.5ch]  rounded-[1.5ch] border-2 mr-[1.5ch] mt-[1.5ch] cursor-pointer";
    // all the selection options for page 1
    const options = {
        "Q1":[
            {
                key: 1,
                text : "Bus",
                icon : BiBus
            },
            {
                key: 2,
                text: "Metro",
                icon: MdOutlineTrain
            },
            {
                key: 3,
                text: "Own Two-Wheeler",
                icon: RiEBike2Line
            },
            {
                key: 4,
                text: "Own Car",
                icon: AiOutlineCar,
            },
            {
                key: 5,
                text: "Walk/Bicycle",
                icon: BsBicycle
            },
            {
                key: 6,
                text: "Auto",
                icon: FaCaravan
            },
            {
                key: 7,
                text: "OLA/Uber/Taxi",
                icon: RiTaxiWifiLine
            }
        ],
        "Q2":[
            {
                key: 1,
                text: "> 5 Km"
            },
            {
                key: 2,
                text: "5-10 Km"
            },
            {
                key: 3,
                text: "10-15 Km"
            },
            {
                key: 4,
                text: "15-20 Km"
            },
            {
                key: 5,
                text: "20-25 Km"
            },
            {
                key: 6,
                text: "< 25 Km"
            }
        ]
    }
    
    // the current question number, we have 2 on the first page
    const [Question, setQuestion] = useState(0);
    // history is a router object that can help navigate the pages
    const history = useNavigate();
    // dispatcher used to dispatch reducers on redux stores
    const dispatcher = useDispatch();

  return (
    <div className=' w-screen h-screen flex justify-center flex-col px-[3ch] ' >
        <AnimatePresence
            mode='wait'
        >
            {/* displaying only the question that is in focus */}
            {Question==0?
                <motion.section
                    key="Q1"
                    initial = {{ opacity: 0 }}
                    animate = {{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="header">
                        <h2 className=' text-3xl' >What is your most frequently used mode of travel from work to home?</h2>
                    </div>
                    <div className="options flex flex-row flex-wrap">
                        {options["Q1"].map(option => <motion.div 
                            key={option.key}
                            className={optionStyle + " items-center flex flex-col justify-center min-w-[10ch] "}
                            onClick={()=>{
                                // add content to the redux store
                                dispatcher(changeMode(option.key))
                                // change the Question to slide to next page
                                setQuestion(q=>q+1)
                            }}
                            whileTap={{ scale: 0.8 }}
                            >
                                <option.icon className='text-4xl'/>
                                <div className=' text-xs my-auto text-slate-300 max-w-[20ch] text-center mt-2 pointer-events-none'>
                                    {option.text}
                                </div>
                            </motion.div>)}
                    </div>
                </motion.section>:
                <motion.section
                    key="Q2"
                    initial = {{ opacity: 0 }}
                    animate = {{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="header">
                        <button
                            onClick={()=>{
                                // set the active question on the page
                                setQuestion(0)
                            }}
                        >
                            <BsArrowLeft className='text-4xl'/>
                        </button>
                        <h2 className=' text-3xl'>What is the total distance between your home and workplace?</h2>
                    </div>
                    <div className="options flex flex-row flex-wrap">
                        {options["Q2"].map(option => <motion.div 
                            key={option.key} 
                            className={optionStyle}
                            onClick={()=>{
                                // push data to store
                                dispatcher(changeDestination(option.key))
                                // move to next page
                                history(routeNames[1], { state: { from: routeNames[0] } })
                            }}
                            whileTap={{ scale: 0.8 }}
                        >
                            {option.text}
                        </motion.div>)}
                    </div>
                </motion.section>
            }
        </AnimatePresence>
    </div>
  )
}
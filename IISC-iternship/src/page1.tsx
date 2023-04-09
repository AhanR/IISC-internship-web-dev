import { AnimatePresence, motion } from 'framer-motion';
import React, {useState} from 'react'
import { BsArrowLeft, BiBus, MdOutlineTrain, RiEBike2Line, AiOutlineCar, BsBicycle, FaCaravan, TbBrandUber } from 'react-icons/all'
import { useNavigate } from 'react-router-dom';

export default function Page1() {
    const optionStyle = "p-[1.5ch]  rounded-[1.5ch] border-2 mr-[1.5ch] mt-[1.5ch] cursor-pointer";
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
                text: "App based ride hauling services like OLA/Uber",
                icon: TbBrandUber
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
    
    const [Question, setQuestion] = useState(0);
    const history = useNavigate();

  return (
    <div className=' w-screen h-screen flex justify-center flex-col px-[4ch] ' >
        <AnimatePresence
            mode='wait'
        >
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
                        {options["Q1"].map(option => <div className={optionStyle + " items-center flex flex-col justify-center min-w-[10ch] "} >
                                <option.icon className='text-2xl'/>
                                <div className=' text-xs my-auto text-slate-300 max-w-[20ch] text-center mt-2'>
                                    {option.text}
                                </div>
                            </div>)}
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
                                history("/")
                                setQuestion(0)
                            }}
                        >
                            <BsArrowLeft className='text-4xl'/>
                        </button>
                        <h2 className=' text-3xl'>What is the total distance between your home and workplace?</h2>
                    </div>
                    <div className="options flex flex-row flex-wrap">
                        {options["Q2"].map(option => <div key={option.key} className={optionStyle}>{option.text}</div>)}
                    </div>
                </motion.section>
            }
        </AnimatePresence>
    </div>
  )
}
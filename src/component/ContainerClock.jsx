import React from "react";

// component quotes
import Quotes from "./componentContainerClock/Quotes";


// icon sun clock
import iconSunClock from '../assets/images/icon-sun.svg'


// img icon bt more
import iconMore from '../assets/images/icon-arrow-up.svg'


const ContainerClock = ()=>{
    return(
        <section className="container-clock ">
            {/* container quotes */}
            <Quotes/>
            <section className="clock border-2 border-cyan-700 w-full h-auto flex">
                <div className="sub-clock z-3 flex-1 border-[1px] ">
                    <nav className="nav-clock max-w-md gap-2 flex  items-center ">
                        <img src={iconSunClock} alt="iconSunClock" />
                        <h3 className="title-nav-clock tracking-[4px] font-[400] text-white uppercase">
                            good morning, <span>it's currently</span>
                        </h3>
                    </nav>
                    <section className="time-now select-none max-w-lg z-1 my-[-30px] items-center gap-2 border-red-600 flex ">
                        <h2 className="title-time-now text-[10em] inline py-2 h-full text-white  justify-self-center  font-[800]">
                            11:37
                        </h2>
                        <h3 className="standar-time uppercase text-3xl relative bottom-[55px] text-white self-end flex-1">
                            am
                        </h3>
                    </section>
                    <h3 className="country uppercase text-white font-[600] tracking-[3px] text-lg" >
                        in <span>london uk</span>
                    </h3>
                </div>
                <button className="btn-more  h-[45px] rounded-full self-end gap-1 py-2 px-2 bg-white flex items-center justify-evenly uppercase tracking-[2px] text-black/70">
                    more
                    <img src={iconMore} alt="" className="h-full w-[30px] rounded-full" />
                </button>
            </section>
        </section>
    )
}

export default ContainerClock 
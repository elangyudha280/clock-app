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
            <section className="clock  w-full h-auto flex flex-col gap-3 md:flex-row">
                <div className="sub-clock z-3 flex-1  ">
                    <nav className="nav-clock max-w-md gap-2 flex  items-center ">
                        <div className="bg-icon-clock w-[22px] h-[22px] bg-[url(../images/icon-sun.svg)] bg-center bg-cover bg-no-repeat">

                        </div>
                        <h3 className="title-nav-clock tracking-[4px] font-[400] text-white uppercase text-sm xs:text-lg">
                            good morning, <span className="max-[410px]:hidden">it's currently</span>
                        </h3>
                    </nav>
                    <section className="time-now select-none relative max-w-lg z-1 xs:my-[-30px] items-center gap-2  flex ">
                        <h2 className="title-time-now  inline py-2 h-full text-white  justify-self-center  font-[800] text-[5em] xs:text-[10em]">
                            11:37
                        </h2>
                        <h3 className="standar-time uppercase text-3xl relative top-[-30px] xs:top-[-55px] text-white self-end flex-1">
                            am
                        </h3>
                    </section>
                    <h3 className="country uppercase text-white font-[600] tracking-[3px] text-lg" >
                        in <span>london uk</span>
                    </h3>
                </div>
                <button className="btn-more w-[120px]  h-[45px] rounded-full   gap-1 p-[6px] xs:px-2 bg-white flex items-center justify-evenly uppercase tracking-[2px] text-black/70 md:self-end md:w-auto">
                    more
                    <img src={iconMore} alt="" className="h-full w-[33px] overflow-hidden rounded-full transition-all duration-200 " />
                    {/* rotate-[180deg] */}
                </button>
            </section>
        </section>
    )
}

export default ContainerClock 
import React,{useContext,useEffect, useState} from "react";
import zoneContext from "../Context/ZoneContext.mjs";
// component quotes
import Quotes from "./componentContainerClock/Quotes";


// icon sun clock
// import iconSunClock from '../assets/images/icon-sun.svg'


// img icon bt more
import iconMore from '../assets/images/icon-arrow-up.svg'


const ContainerClock = ()=>{

    let {zoneState,dispatchZone} = useContext(zoneContext);

    // state clockTime
    let [clockTime,setClockTime] = useState({
        hour:'00',
        minute:'00',
        period:'AM',
        greet:'Morning'
    })


    // get data clock zone
    useEffect(()=>{

        if(localStorage.getItem('modeClock')){
            document.getElementById('html').classList.replace(`${localStorage.getItem('modeClock')}`, `${(localStorage.getItem('modeClock') === 'light') ? 'dark' : 'light'}`)
        }else{
            document.getElementById('html').classList.add('light')
        }

    },[])

        useEffect(()=>{
            
            function getTime() {

                let currentTime = new Date();
                let hour = currentTime.getHours()
                let minute = currentTime.getMinutes();

                let period = ''
            
                //Time of day
                let greet = '';
                if (hour >= 5 && hour <= 11) {
                  greet = 'morning';
                } else if (hour >= 12 && hour <= 17) {
                  greet = 'afternoon';
                } 
                else {
                  greet = 'evening';
                }
                
                //Bg and icon
                  if (hour >= 5 && hour <= 17 ) {
                    localStorage.setItem('modeClock','light')
                    document.getElementById('html').classList.replace('dark',localStorage.getItem('modeClock'))
                  } else {
                    
                    localStorage.setItem('modeClock','dark')
                    document.getElementById('html').classList.replace('light',localStorage.getItem('modeClock'))
                  }
                
                // Time setup

                if(minute < 10){
                  minute = "0" + minute
                  }
                if (hour === 0) {
                  hour = 12
                  period = "am";
                 } else if (hour === 12) {
                  period = "pm";
                } else if (hour > 12) {
                  hour -= 12;
                  period = "pm";
                } else {
                  period = "am";
                  }
                setClockTime({
                  hour,
                  minute,
                  period,
                  greet
                })
                
                return
            }

            getTime()
            //Update time
                  let interval = (60 - (new Date()).getSeconds()) * 1000 + 5;
                setTimeout(getTime,interval)
        },[clockTime.minute])


    

    return(
        <section className="container-clock ">
            {/* container quotes */}
            <Quotes/>
            <section className="clock  w-full h-auto flex flex-col gap-3 md:flex-row">
                <div className="sub-clock z-3 flex-1  ">
                    <nav className="nav-clock max-w-md gap-2 flex  items-center ">
                        <div className="bg-icon-clock w-[22px] h-[22px] bg-[url(../images/icon-sun.svg)] dark:bg-[url(../images/icon-moon.svg)] bg-center bg-cover bg-no-repeat">

                        </div>
                        <h3 className="title-nav-clock tracking-[4px] font-[400] text-white uppercase text-sm md:text-[0.9em]">
                            good {clockTime.greet}, <span className="max-[410px]:hidden">it's currently</span>
                        </h3>
                    </nav>
                    <section className="time-now select-none relative max-w-lg z-1 my-[-20px] md:my-[-30px] items-center gap-2  flex ">
                        <h2 className="title-time-now  inline py-2 h-full text-white  justify-self-center  font-[800] text-[5em] md:text-[10em]">
                            {clockTime.hour}:{clockTime.minute}
                        </h2>
                        <h3 className="standar-time uppercase text-3xl relative top-[-30px] md:top-[-55px] text-white self-end flex-1">
                            {clockTime.period}
                            <div>{(zoneState.dataZone !== null && zoneState.dataZone.abbreviation)}</div>
                        </h3>
                    </section>
                    <h3 className="country uppercase text-white font-[600] tracking-[3px] text-lg" >
                        in <span>Indonesia ID</span>
                    </h3>
                </div>
                <button onClick={()=>{dispatchZone({type:'toggleZone'})}} className="btn-more w-[120px]  h-[45px] rounded-full   gap-1 p-[6px] xs:px-2 bg-white flex items-center justify-evenly uppercase tracking-[2px] text-black/70 md:self-end md:w-auto">
                    {(zoneState.toggleZone) ? 'less' : 'more'}
                    <img src={iconMore} alt="" className={`h-full w-[33px] overflow-hidden rounded-full transition-all duration-200 ${zoneState.toggleZone && 'rotate-[180deg]'}`}  />
                </button>
            </section>
        </section>
    )
}

export default ContainerClock 
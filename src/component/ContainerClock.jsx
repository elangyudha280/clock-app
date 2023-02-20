import React from "react";

// component quotes
import Quotes from "./componentContainerClock/Quotes";



const ContainerClock = ()=>{
    return(
        <section className="container-clock ">
            {/* container quotes */}
            <Quotes/>
            <section className="clock border-2 border-cyan-700 w-full h-[50px]">

            </section>
        </section>
    )
}

export default ContainerClock 
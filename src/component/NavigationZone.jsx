


const NavigationZone = ()=>{
    return (
        <section className="navigation-zone w-full h-auto relative px-3 md:px-8 py-[3em]  ">
            <div className="navigation-container relative max-w-[1090px] gap-y-5  h-auto mx-auto grid md:grid-cols-2 auto-rows-auto md:gap-y-0">
                <div className="current-time-zone w-full md:pb-[1.5em] ">
                    <div className="flex gap-y-3 items-center justify-between md:flex-col md:items-start">
                        <h4 className="title-current-time-zone  uppercase font-[500] text-slate-800 text-[0.7em] min-[330px]:text-sm ">
                            current time zone
                        </h4>       
                        <h1 className="current capitalize truncate font-semibold text-slate-800 min-[330px]:text-xl  md:text-4xl  ">
                            europe/London
                        </h1>
                    </div>
                </div>
                <div className="days-of-week w-full md:border-l-[1px] md:border-slate-800 md:pl-[2em]">
                    <div className="flex gap-y-3 items-center justify-between md:flex-col md:items-start">
                        <h4 className="title-days-of-week uppercase text-slate-800 text-[0.7em] min-[330px]:text-sm">
                            days of the week
                        </h4>       
                        <h1 className="week capitalize truncate font-semibold text-slate-800 min-[330px]:text-xl  md:text-4xl ">
                            0
                        </h1>
                    </div>
                </div>
                <div className="days-of-year w-full ">
                   <div className="flex gap-y-3 items-center justify-between md:flex-col md:items-start">
                    <h4 className="title-days-of-year uppercase text-slate-800 text-[0.7em] min-[330px]:text-sm">
                            days of the year
                        </h4>       
                        <h1 className="year capitalize truncate font-semibold text-slate-800 min-[330px]:text-xl  md:text-4xl">
                            57
                        </h1>
                   </div>
                </div>
                <div className="week-number w-full md:border-l-[0.5px] md:border-slate-800 md:pl-[2em]">
                     <div className="flex gap-y-3 items-center justify-between md:flex-col md:items-start">
                        <h4 className="title-week-number uppercase text-slate-800 text-[0.7em] min-[330px]:text-sm">
                            week number
                        </h4>       
                        <h1 className="year capitalize truncate font-semibold text-slate-800 min-[330px]:text-xl  md:text-4xl">
                            8
                        </h1>
                     </div>
                </div>
            </div>
        </section>
    )
}

export default NavigationZone;

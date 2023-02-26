

// import icon refresh quotes
import iconRandomQuote from '../../assets/images/icon-refresh.svg'

const Quotes = ()=>{
    return (
        <section className="container-quotes w-full h-[100%]  flex-1">
            <div className="quotes max-w-xl  flex gap-2">
                <div className="description-quotes flex-1 leading-[1.7em]">
                    <p className="text-white font-[300] text-[0.8em] md:text-[0.9em] ">
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque doloribus officia esse voluptates quibusdam id dolores reiciendis blanditiis quia in."
                    </p>
                    <h3 className="quote character text-white font-bold text-xl capitalize mt-3">jon doe</h3>
                </div>
                <button className="btn-random-quotes  py-1 self-start w-[30px] grid place-items-center">
                        <img src={iconRandomQuote} alt="icon-refresh" />
                </button>
            </div>
        </section>
    )
}

export default Quotes;
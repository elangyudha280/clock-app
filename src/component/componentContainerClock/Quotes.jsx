
import { useState,useEffect } from 'react';

// import icon refresh quotes
import iconRandomQuote from '../../assets/images/icon-refresh.svg'

const Quotes = ()=>{


    // state data quotes
    let  [quotes,setQuotes] = useState({})
    // state loading
    let [loading,setLoading] = useState(true)
    //state animate show 
    let [animateShow,setAnimateShow] = useState(true)
    

    useEffect(()=>{
        fetch('https://api.quotable.io/random').then(Response => Response.json())
        .then(quote => {
            setQuotes(quote)
            setTimeout(() => {
                setAnimateShow(false)
            }, 800);
        })
        .catch(err => setQuotes({err:true}))
        .finally(()=>{
            setLoading(false)
        })
    },[])

    let randomQuotes = (e)=>{
        setLoading(true)
        setAnimateShow(true)
        fetch('https://api.quotable.io/random').then(Response => Response.json())
        .then(quote => {
            setQuotes(quote)
        })
        .catch(err => setQuotes({err:true}))
        .finally(()=>{
            setLoading(false)
            setTimeout(() => {
                setAnimateShow(false)
            }, 800);
        })
    }

    return (
        <section className="container-quotes w-full h-[100%]  flex-1">
            <div className="quotes max-w-xl  flex gap-2">
                <div className="description-quotes flex-1 leading-[1.4em]">
                   {
                    (loading)? <><p className='text-white font-[300] text-[0.8em] md:text-[0.9em]'>loading...</p></> 
                    :
                     <>
                      <p className={`text-white font-[300] text-[0.8em] md:text-[0.9em] ${animateShow && 'animate-show'}`}>
                            "{quotes.err || quotes.statusCode ? 'you rich you safe' : quotes.content}"
                        </p>
                        <h3 className={`quote character text-white font-bold text-xl capitalize mt-3 ${animateShow && 'animate-show'}`}>{quotes.err || quotes.statusCode ? 'Who?' : quotes.author}</h3>
                     </>
                   }
                </div>
                <button className="btn-random-quotes  py-1 self-start w-[30px] grid place-items-center group"  onClick={randomQuotes}>
                        <img src={iconRandomQuote} alt="icon-refresh" className='group-active:animate-rotate'  />
                </button>
            </div>
        </section>
    )
}

export default Quotes;
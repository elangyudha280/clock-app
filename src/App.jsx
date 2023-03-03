import { useContext,useEffect,useReducer } from "react";
import reducerZone from "./Context/reducer/reducer";
import zoneContext from "./Context/ZoneContext.mjs";


// Import Component Clock
import ContainerClock from "./component/ContainerClock";

// component navigtaion zone
import NavigationZone from "./component/NavigationZone";


let initialState = {
  toggleZone:false,
  dataZone:null,
  clockZone:null
}

function App() {


  let [zoneState,dispatchZone] = useReducer(reducerZone,initialState)


  return (
    <zoneContext.Provider value={{zoneState,dispatchZone}}>
      <section className="App  font-inter  bg-[url('../images/mobile/bg-image-daytime.jpg')]  xs:bg-[url('../images/desktop/bg-image-daytime.jpg')]  before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-custom1 before:opacity-[0.5] contrast-[1.1] ">
        <div className={`main-content ${(zoneState.toggleZone) && 'mt-[-260px] min-[300px]:mt-[-250px]'} `}>
        {/* Component Clock */}
        <ContainerClock/>
        </div>
        
        {/* navigation zone */}
        <NavigationZone/>
      </section>
    </zoneContext.Provider>
  )
}

export default App

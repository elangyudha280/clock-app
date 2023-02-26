 

// Import Component Clock
import ContainerClock from "./component/ContainerClock";

// component navigtaion zone
import NavigationZone from "./component/NavigationZone";


function App() {

  return (
    <section className="App  font-inter  bg-[url('../images/mobile/bg-image-daytime.jpg')]  xs:bg-[url('../images/desktop/bg-image-daytime.jpg')]  before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-custom1 before:opacity-[0.5] contrast-[1.1] ">
      <div className="main-content">
      {/* Component Clock */}
      <ContainerClock/>
      </div>
      
      {/* navigation zone */}
      <NavigationZone/>
    </section>
  )
}

export default App

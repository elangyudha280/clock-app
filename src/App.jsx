 

// Import Component Clock
import ContainerClock from "./component/ContainerClock";


function App() {

  return (
    <section className="App">
      <div className="main-content font-inter  bg-[url('../images/mobile/bg-image-daytime.jpg')] md:bg-[url('../images/tablet/bg-image-daytime.jpg')] lg:bg-[url('../images/desktop/bg-image-daytime.jpg')]  before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-custom1 before:opacity-[0.4] lg:before:opacity-[0.4] contrast-[1.1] ">

      {/* Component Clock */}
      <ContainerClock/>

      </div>
    </section>
  )
}

export default App

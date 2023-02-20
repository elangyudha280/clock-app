 

// Import Component Clock
import ContainerClock from "./assets/component/ContainerClock"


function App() {

  return (
    <section className="App">
      <div className="main-content font-inter  bg-[url('../images/mobile/bg-image-nighttime.jpg')] md:bg-[url('../images/tablet/bg-image-nighttime.jpg')] lg:bg-[url('../images/desktop/bg-image-nighttime.jpg')]  before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-custom1 before:opacity-[0.4] lg:before:opacity-[0.4] contrast-[1.1] brightness-[]">

      {/* Component Clock */}
      <ContainerClock/>

      </div>
    </section>
  )
}

export default App

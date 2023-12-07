
import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import kids from './assets/images/Kids.png'
import VectorPink from './assets/images/VectorPink.svg'
import VectorBrown from './assets/images/VectorBrown.svg'
import VectorDarkPink from './assets/images/VectorDarkPink.svg'
import leaf from './assets/images/leaf.png'
import LeafWire from './assets/images/LeafWire.svg'
import CurveWire from './assets/images/CurveWire.svg'



function App() {


  return (
    <>
      {/* Components Start*/}

      <Navbar />
      <Landing />

      {/* Components End*/}

      {/* assests - images and svgs */}
      <img src={kids} alt="kids" className='kids' />
      <img src={VectorPink} alt="vector-pink" className='vector-pink' />
      <img src={VectorBrown} alt="vector-brown" className='vector-brown' />
      <img src={VectorDarkPink} alt="vector-dark-pink" className='vector-dark-pink' />
      <img src={leaf} alt="leaf" className='leaf' />
      <img src={LeafWire} alt="leaf-wire" className='leaf-wire' />
      <img src={CurveWire} alt="curve-wire-1" className='curve-wire-1' />
      <img src={CurveWire} alt="curve-wire-2" className='curve-wire-2' />

      {/* end */}

    </>
  )
}

export default App

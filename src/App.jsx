import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './App.css'
import { useRef } from 'react'
import {Experience} from './Components/Experience'

function App() {
  return (
    <>
    <Canvas camera={{fov : 64, position : [2,3,1.5,2.3]}}>
      <Experience/>
    </Canvas>
    </>
  )
}

export default App

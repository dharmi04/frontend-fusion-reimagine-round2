import React from 'react'
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Fourshoes from '../Models/Fourshoes'


const Hero = () => {
  return (
    <div className="w-full h-screen relative">
    <Canvas className="w-full h-screen canvas-container"
        camera={{ position: [0, 0, 5], near: 0.1, far: 1000 }} >
      <Suspense fallback={null}>
        <Fourshoes />
        <OrbitControls />
      </Suspense>
      <ambientLight intensity={0.5} />
    </Canvas>
  </div>
  )
}

export default Hero

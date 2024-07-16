import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import Nikeshoes from '../Models/Nikeshoes';

const Home = () => {
  return (
    <div>
      <section className='w-full h-screen relative bg-red-500'>
        <Canvas
          className='w-full h-screen canvas-container'
          camera={{ position: [0, 0, 5], near: 0.1, far: 1000 }} // Adjusted camera position
        >
          <Suspense fallback={<Loader />}>
            <directionalLight intensity={1} position={[10, 10, 10]} />
            <ambientLight intensity={0.5} />
            <pointLight intensity={1} position={[10, 10, 10]} />
            <spotLight intensity={1} position={[10, 10, 10]} angle={0.3} penumbra={1} />
            <hemisphereLight intensity={0.5} />
            <Nikeshoes />
          </Suspense>
        </Canvas>
      </section>
    </div>
  );
};

export default Home;

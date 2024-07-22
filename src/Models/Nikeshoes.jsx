// import React, { useRef, useState, useEffect } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import shoes from '../assets/3d/Nike.glb';

// export function Nikeshoes(props) {
//   const group = useRef();
//   const { nodes, materials } = useGLTF(shoes);

//   const [isDragging, setIsDragging] = useState(false);
//   const [previousMousePosition, setPreviousMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       if (isDragging) {
//         const deltaX = event.clientX - previousMousePosition.x;
//         group.current.rotation.y += deltaX * 0.01;
//         setPreviousMousePosition({ x: event.clientX, y: event.clientY });
//       }
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, [isDragging, previousMousePosition]);

//   const handleMouseDown = (event) => {
//     setIsDragging(true);
//     setPreviousMousePosition({ x: event.clientX, y: event.clientY });
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   return (
//     <group
//       ref={group}
//       {...props}
//       dispose={null}
//       onPointerDown={handleMouseDown}
//       onPointerUp={handleMouseUp}
//       scale={[0.9,0.9,0.9]} // Increase the scale
//     >
//       {/* Group for the shoe model */}
//       <group scale={1}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_17.geometry}
//           material={materials.material_grund}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_18.geometry}
//           material={materials.nike_logga}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_19.geometry}
//           material={materials.baksida_logga}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_20.geometry}
//           material={materials.framsida}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_21.geometry}
//           material={materials.verdel}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_22.geometry}
//           material={materials.framsida_vre}
//         />
//       </group>
//       <group scale={1}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_24.geometry}
//           material={materials.sko_sula_underdel}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_25.geometry}
//           material={materials.sko_sula_sida}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_26.geometry}
//           material={materials.sko_sula_framifrn}
//         />
//       </group>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_5.geometry}
//         material={materials.metall_svart}
//         position={[0.067, 0.044, -0.048]}
//         rotation={[-3.008, -0.005, -2.218]}
//         scale={[-0.01, 0.01, 0.01]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_7.geometry}
//         material={materials['Material.006']}
//         scale={[0.11, 0.108, 0.108]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_9.geometry}
//         material={materials['Material.004']}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_11.geometry}
//         material={materials['Material.001']}
//         scale={1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_13.geometry}
//         material={materials.Material}
//         scale={1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_15.geometry}
//         material={materials['Material.003']}
//         position={[0.017, 0.116, -0.112]}
//         rotation={[0.045, -0.145, 0.007]}
//         scale={[1, 1, 1]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_28.geometry}
//         material={materials.sula_insida}
//         scale={[0.11, 0.108, 0.108]}
//       />
//     </group>
//   );
// }

// useGLTF.preload(shoes);
// export default Nikeshoes;


import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import shoes from '../assets/3d/Nike.glb';

const Nikeshoes = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(shoes);

  // Rotation animation
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01; // Adjust the rotation speed as needed
    }
  });

  return (
    <group ref={group} {...props} dispose={null} scale={[0.9, 0.9, 0.9]}>
      {/* Group for the shoe model */}
      <group scale={1}>
        <mesh castShadow receiveShadow geometry={nodes.Object_17.geometry} material={materials.material_grund} />
        <mesh castShadow receiveShadow geometry={nodes.Object_18.geometry} material={materials.nike_logga} />
        <mesh castShadow receiveShadow geometry={nodes.Object_19.geometry} material={materials.baksida_logga} />
        <mesh castShadow receiveShadow geometry={nodes.Object_20.geometry} material={materials.framsida} />
        <mesh castShadow receiveShadow geometry={nodes.Object_21.geometry} material={materials.verdel} />
        <mesh castShadow receiveShadow geometry={nodes.Object_22.geometry} material={materials.framsida_vre} />
      </group>
      <group scale={1}>
        <mesh castShadow receiveShadow geometry={nodes.Object_24.geometry} material={materials.sko_sula_underdel} />
        <mesh castShadow receiveShadow geometry={nodes.Object_25.geometry} material={materials.sko_sula_sida} />
        <mesh castShadow receiveShadow geometry={nodes.Object_26.geometry} material={materials.sko_sula_framifrn} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.metall_svart}
        position={[0.067, 0.044, -0.048]}
        rotation={[-3.008, -0.005, -2.218]}
        scale={[-0.01, 0.01, 0.01]}
      />
      <mesh castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials['Material.006']} scale={[0.11, 0.108, 0.108]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_9.geometry} material={materials['Material.004']} />
      <mesh castShadow receiveShadow geometry={nodes.Object_11.geometry} material={materials['Material.001']} scale={1} />
      <mesh castShadow receiveShadow geometry={nodes.Object_13.geometry} material={materials.Material} scale={1} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={materials['Material.003']}
        position={[0.017, 0.116, -0.112]}
        rotation={[0.045, -0.145, 0.007]}
        scale={[1, 1, 1]}
      />
      <mesh castShadow receiveShadow geometry={nodes.Object_28.geometry} material={materials.sula_insida} scale={[0.11, 0.108, 0.108]} />
    </group>
  );
};

useGLTF.preload(shoes);
export default Nikeshoes;
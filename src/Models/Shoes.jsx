import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { a, useSpring } from '@react-spring/three';
import shoe from '../assets/3d/adidas_sports_shoe.glb';

export function Shoes(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(shoe);

  // Animation logic to rotate the model
  useFrame(() => {
    group.current.rotation.y += 0.01; // Adjust the speed by changing the increment value
  });

  return (
    <a.group ref={group} {...props} dispose={null} scale={[10, 10, 10]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.335, -0.169, -0.106]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.Textured}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.Textured}
          />
        </group>
      </group>
    </a.group>
  );
}

useGLTF.preload(shoe);
export default Shoes;

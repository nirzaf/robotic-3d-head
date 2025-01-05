import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Eye } from './Eye';

export function RoboticHead({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const headRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });
  
  useFrame(() => {
    if (!headRef.current) return;
    
    targetRotation.current.y = THREE.MathUtils.lerp(
      -Math.PI / 4,
      Math.PI / 4,
      mousePosition.x
    );
    targetRotation.current.x = THREE.MathUtils.lerp(
      -Math.PI / 6,
      Math.PI / 6,
      mousePosition.y
    );
    
    headRef.current.rotation.y = THREE.MathUtils.lerp(
      headRef.current.rotation.y,
      targetRotation.current.y,
      0.1
    );
    headRef.current.rotation.x = THREE.MathUtils.lerp(
      headRef.current.rotation.x,
      targetRotation.current.x,
      0.1
    );
  });

  return (
    <group ref={headRef}>
      {/* Base Head */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhysicalMaterial
          color="white"
          roughness={0.1}
          metalness={0.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={0.2}
        />
      </mesh>

      {/* Eyes */}
      <Eye position={[-0.3, 0.2, 0.85]} />
      <Eye position={[0.3, 0.2, 0.85]} />
    </group>
  );
}
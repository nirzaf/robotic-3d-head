import * as THREE from 'three';

export function Eye({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Larger black eye base */}
      <mesh>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial 
          color="black"
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      
      {/* Glowing white center */}
      <mesh position={[0, 0, 0.15]}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshStandardMaterial 
          color="white"
          emissive="white"
          emissiveIntensity={2}
          roughness={0}
          metalness={1}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

function ShoppingBag(props: any) {
  const bagGeometry = new THREE.BoxGeometry(1, 1.2, 0.5);
  const handleGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.4, 32);

  return (
    <group {...props}>
      {/* Main bag body */}
      <mesh geometry={bagGeometry}>
        <meshStandardMaterial color={props.color || "#7C3AED"} />
      </mesh>
      {/* Bag handle */}
      <mesh position={[0, 0.8, 0]} rotation={[0, 0, Math.PI / 2]} geometry={handleGeometry}>
        <meshStandardMaterial color={props.color || "#7C3AED"} />
      </mesh>
    </group>
  );
}

function Product(props: any) {
  const boxGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
  
  return (
    <mesh {...props} geometry={boxGeometry}>
      <meshStandardMaterial color={props.color || "#F59E0B"} />
    </mesh>
  );
}

export function ShoppingScene() {
  return (
    <div className="h-[400px] w-full rounded-2xl overflow-hidden">
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <ShoppingBag position={[-2, 0, 0]} color="#7C3AED" scale={[1, 1, 1]} />
            <Product position={[0, 0.5, 0]} color="#F59E0B" />
            <ShoppingBag position={[2, 0, 0]} color="#10B981" scale={[1.2, 1.2, 1.2]} />
          </Float>
          <OrbitControls 
            enableZoom={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}


import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { Suspense } from "react";

function Box(props: any) {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={props.color || "hotpink"} />
    </mesh>
  );
}

export function ShoppingScene() {
  return (
    <div className="h-[400px] w-full rounded-2xl overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Box position={[-2, 0, 0]} color="#7C3AED" />
            <Box position={[0, 0, 0]} color="#F59E0B" />
            <Box position={[2, 0, 0]} color="#10B981" />
          </Float>
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}

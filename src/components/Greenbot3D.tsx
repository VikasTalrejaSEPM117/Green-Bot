import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

// Greenbot 3D Model Component
function GreenbotModel() {
  const meshRef = useRef<any>();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group 
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      {/* Main body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 1.5, 3]} />
        <meshStandardMaterial color="#2d5016" metalness={0.3} roughness={0.4} />
      </mesh>
      
      {/* Planting arm */}
      <mesh position={[0, -1, 1.8]}>
        <boxGeometry args={[0.3, 1, 0.3]} />
        <meshStandardMaterial color="#4a7c59" metalness={0.5} roughness={0.3} />
      </mesh>
      
      {/* Tracks/treads (cylinders for wheels) */}
      <mesh position={[-1.2, -1.2, 1]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 2.5]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.2} />
      </mesh>
      <mesh position={[1.2, -1.2, 1]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 2.5]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.2} />
      </mesh>
      
      {/* Sensor array */}
      <mesh position={[0, 1, 1.2]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial color="#00ff88" emissive="#00ff44" emissiveIntensity={0.3} />
      </mesh>
      
      {/* Solar panels */}
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[2.5, 0.1, 1.5]} />
        <meshStandardMaterial color="#1a1a3a" metalness={0.8} roughness={0.1} />
      </mesh>
    </group>
  );
}

// Environment for the 3D scene
function Environment() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff6600" />
      
      {/* Ground */}
      <mesh position={[0, -2, 0]}>
        <boxGeometry args={[10, 0.1, 10]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </mesh>
      
      {/* Charred stumps */}
      <mesh position={[-3, -1.5, 2]}>
        <cylinderGeometry args={[0.2, 0.3, 1]} />
        <meshStandardMaterial color="#2F1B14" roughness={0.9} />
      </mesh>
      <mesh position={[2, -1.5, -1]}>
        <cylinderGeometry args={[0.15, 0.25, 0.8]} />
        <meshStandardMaterial color="#2F1B14" roughness={0.9} />
      </mesh>
    </>
  );
}

interface Greenbot3DProps {
  className?: string;
}

export const Greenbot3D = ({ className }: Greenbot3DProps) => {
  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Canvas
        camera={{ position: [5, 5, 5], fov: 50 }}
        shadows
        style={{ background: 'transparent' }}
      >
        <Environment />
        <GreenbotModel />
        <OrbitControls 
          enablePan={false}
          enableZoom={true}
          maxDistance={15}
          minDistance={3}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </motion.div>
  );
};
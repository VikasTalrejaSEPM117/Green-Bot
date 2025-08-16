import { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useFBX, useTexture } from "@react-three/drei";
import { motion } from "framer-motion";

function Environment() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff6600" />
      {/* <mesh position={[0, -2, 0]} receiveShadow>
        <boxGeometry args={[10, 0.1, 10]} />
        <meshStandardMaterial color="#eefad9" roughness={0.9} />
      </mesh> */}
    </>
  );
}

function GreenbotFBXModel() {
  const groupRef = useRef<any>(null);
  const model = useFBX("/Cultivation_Automaton_0808150620_texture.fbx");
  const diffuse = useTexture("/Cultivation_Automaton_0808150620_texture.png");

  useEffect(() => {
    if (!model) return;
    model.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach((m: any) => {
              if (m) {
                m.map = diffuse;
                m.needsUpdate = true;
              }
            });
          } else {
            child.material.map = diffuse;
            child.material.needsUpdate = true;
          }
        }
      }
    });
  }, [model, diffuse]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.4, 0]} scale={[0.01, 0.01, 0.01]}>
      <primitive object={model} />
    </group>
  );
}

interface Greenbot3DProps {
  className?: string;
}

export const Greenbot3D = ({ className }: Greenbot3DProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Canvas
        camera={{ position: [2, -2, 7], fov: 30 }}
        dpr={[1, 2]}
        shadows
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Environment />
          <GreenbotFBXModel />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          maxDistance={12}
          minDistance={3}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </motion.div>
  );
};
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  OrbitControls,
  PresentationControls,
  useGLTF,
  ContactShadows,
  Html,
} from "@react-three/drei";
import * as THREE from "three";

// Free, CC-licensed sample avatar (Khronos glTF sample assets)
const MODEL_URL =
  "https://models.readyplayer.me/64bfa15f0e72c63d7c3934a6.glb";
// Fallback: if the model fails to load, we render an abstract 3D scene.

function AvatarModel() {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(MODEL_URL);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.position.y = Math.sin(t * 1.2) * 0.05 - 1.4;
    group.current.rotation.y =
      THREE.MathUtils.lerp(group.current.rotation.y, state.pointer.x * 0.4, 0.05);
  });

  return (
    <group ref={group} position={[0, -1.4, 0]}>
      <primitive object={scene} scale={1.6} />
    </group>
  );
}

function FloatingShapes() {
  return (
    <>
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.6}>
        <mesh position={[-1.6, 0.6, -0.5]} castShadow>
          <torusGeometry args={[0.28, 0.09, 24, 64]} />
          <meshStandardMaterial color="#ff6a4d" roughness={0.3} metalness={0.1} />
        </mesh>
      </Float>
      <Float speed={1.4} rotationIntensity={0.8} floatIntensity={2}>
        <mesh position={[1.7, 1, -0.8]} castShadow>
          <icosahedronGeometry args={[0.32, 0]} />
          <meshStandardMaterial color="#1a1410" roughness={0.4} />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh position={[1.3, -0.4, 0.4]} castShadow>
          <boxGeometry args={[0.35, 0.35, 0.35]} />
          <meshStandardMaterial color="#fde6c8" roughness={0.6} />
        </mesh>
      </Float>
      <Float speed={2.2} rotationIntensity={1} floatIntensity={1.4}>
        <mesh position={[-1.4, -0.6, 0.6]} castShadow>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshStandardMaterial color="#ff6a4d" roughness={0.2} />
        </mesh>
      </Float>
    </>
  );
}

function LoadingFallback() {
  return (
    <Html center>
      <div className="rounded-full bg-card px-4 py-2 text-xs uppercase tracking-widest text-ink/60 shadow-soft">
        Loading 3D…
      </div>
    </Html>
  );
}

export function Avatar3D() {
  return (
    <div className="relative h-[520px] w-full sm:h-[600px]">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0.2, 4.2], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#00000000"]} />
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[3, 5, 2]}
          intensity={1.2}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-3, 2, -2]} intensity={0.4} color="#ff6a4d" />

        <Suspense fallback={<LoadingFallback />}>
          <PresentationControls
            global
            polar={[-0.2, 0.2]}
            azimuth={[-0.6, 0.6]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 300 }}
          >
            <AvatarModel />
            <FloatingShapes />
          </PresentationControls>

          <ContactShadows
            position={[0, -1.45, 0]}
            opacity={0.45}
            scale={6}
            blur={2.4}
            far={3}
          />
          <Environment preset="city" />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.4}
          maxPolarAngle={Math.PI / 1.9}
        />
      </Canvas>

      {/* hint */}
      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-ink/80 px-3 py-1 text-[10px] uppercase tracking-widest text-cream/80 backdrop-blur">
        drag to rotate ↔
      </div>
    </div>
  );
}

useGLTF.preload(MODEL_URL);
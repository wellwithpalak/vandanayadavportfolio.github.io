import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PresentationControls,
  useGLTF,
  ContactShadows,
  Html,
} from "@react-three/drei";
import * as THREE from "three";

// Vandana's custom avatar
const MODEL_URL = "/models/vandana-avatar.glb";

function AvatarModel() {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(MODEL_URL);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.position.y = Math.sin(t * 1.2) * 0.04;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      state.pointer.x * 0.35,
      0.05,
    );
  });

  return (
    <group ref={group}>
      <primitive object={scene} scale={1.8} position={[0, -1.8, 0]} />
    </group>
  );
}

function LoadingFallback() {
  return (
    <Html center>
      <div className="rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-widest text-white/70 backdrop-blur">
        Loading 3D…
      </div>
    </Html>
  );
}

export function Avatar3D() {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0.3, 4.5], fov: 32 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[3, 5, 4]}
          intensity={1.4}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <directionalLight position={[-4, 2, -2]} intensity={0.8} color="#ff6a4d" />
        <directionalLight position={[4, -1, -3]} intensity={0.5} color="#6a8cff" />

        <Suspense fallback={<LoadingFallback />}>
          <PresentationControls
            global
            polar={[-0.3, 0.3]}
            azimuth={[-0.8, 0.8]}
            snap
            speed={1.4}
          >
            <AvatarModel />
          </PresentationControls>

          <ContactShadows
            position={[0, -1.85, 0]}
            opacity={0.55}
            scale={8}
            blur={2.6}
            far={4}
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

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-white/70 backdrop-blur">
        drag to rotate ↔
      </div>
    </div>
  );
}

useGLTF.preload(MODEL_URL);

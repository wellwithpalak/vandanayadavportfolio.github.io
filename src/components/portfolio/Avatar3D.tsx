import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  PresentationControls,
  useGLTF,
  ContactShadows,
  Html,
  Float,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";
import avatar2D from "@/assets/avatar-2d.png";

const MODEL_URL = "/models/vandana-avatar.glb";

function AvatarModel() {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(MODEL_URL) as unknown as { scene: THREE.Group };

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.position.y = Math.sin(t * 1.2) * 0.05;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      state.pointer.x * 0.35,
      0.05,
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -state.pointer.y * 0.08,
      0.05,
    );
  });

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
        <primitive object={scene} scale={1.7} position={[0, -1.55, 0]} />
      </Float>
    </group>
  );
}

function LoadingFallback() {
  return (
    <Html center>
      <div className="rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-widest text-white/70 backdrop-blur">
        Loading…
      </div>
    </Html>
  );
}

function Avatar2D() {
  return (
    <div className="relative flex h-full w-full items-end justify-center">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-coral/20 blur-3xl" />
      <img
        src={avatar2D}
        alt="Vandana Yadav portrait"
        className="relative z-10 h-[78%] w-auto max-w-[90%] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)] md:h-[88%]"
        loading="eager"
      />
    </div>
  );
}

export function Avatar3D() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="absolute inset-0 h-full w-full">
        <Avatar2D />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0.1, 3.6], fov: 30 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener("webglcontextlost", () => setFailed(true));
        }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 5, 4]} intensity={1.5} castShadow />
        <directionalLight position={[-4, 2, -2]} intensity={0.85} color="#ff6a4d" />
        <directionalLight position={[4, -1, -3]} intensity={0.5} color="#6a8cff" />

        <Suspense fallback={<LoadingFallback />}>
          <PresentationControls global polar={[-0.3, 0.3]} azimuth={[-0.9, 0.9]} snap speed={1.4}>
            <AvatarModel />
          </PresentationControls>

          <Sparkles
            count={40}
            scale={[5, 4, 2]}
            position={[0, 0, 0]}
            size={2}
            speed={0.4}
            color="#ff8a65"
          />

          <ContactShadows position={[0, -2.65, 0]} opacity={0.55} scale={8} blur={2.6} far={4} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}

try {
  useGLTF.preload(MODEL_URL);
} catch {
  /* preload errors are non-fatal */
}

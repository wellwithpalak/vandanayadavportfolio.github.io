import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  PresentationControls,
  useGLTF,
  ContactShadows,
  Html,
} from "@react-three/drei";
import * as THREE from "three";
import avatar2D from "@/assets/avatar-2d.png";

const MODEL_URL = "/models/vandana-avatar.glb";

function AvatarModel({ onError }: { onError: () => void }) {
  const group = useRef<THREE.Group>(null);
  let scene: THREE.Group | null = null;
  try {
    scene = useGLTF(MODEL_URL).scene as THREE.Group;
  } catch {
    onError();
    return null;
  }

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.position.y = Math.sin(t * 1.2) * 0.04;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      state.pointer.x * 0.3,
      0.05,
    );
  });

  return (
    <group ref={group}>
      <primitive object={scene} scale={2.1} position={[0, -2.6, 0]} />
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

/** 2D fallback shown on small screens, low-power devices, or if WebGL fails */
function Avatar2D() {
  return (
    <div className="relative flex h-full w-full items-end justify-center">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral/20 blur-3xl" />
      <img
        src={avatar2D}
        alt="Vandana Yadav portrait"
        className="relative z-10 h-[78%] w-auto max-w-[90%] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)] md:h-[88%]"
        loading="eager"
      />
    </div>
  );
}

function isLowPower() {
  if (typeof window === "undefined") return false;
  const w = window.innerWidth;
  // small phones / low-memory => use 2D
  // @ts-ignore - deviceMemory is non-standard
  const mem = (navigator as any).deviceMemory ?? 4;
  return w < 768 || mem < 4;
}

export function Avatar3D() {
  const [use2D, setUse2D] = useState(true);

  useEffect(() => {
    setUse2D(isLowPower());
    const onResize = () => setUse2D(isLowPower());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  if (use2D) {
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
        dpr={[1, 1.8]}
        camera={{ position: [0, 0.1, 3.6], fov: 30 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener("webglcontextlost", () => setUse2D(true));
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 5, 4]} intensity={1.4} castShadow />
        <directionalLight position={[-4, 2, -2]} intensity={0.8} color="#ff6a4d" />
        <directionalLight position={[4, -1, -3]} intensity={0.5} color="#6a8cff" />

        <Suspense fallback={<LoadingFallback />}>
          <PresentationControls global polar={[-0.3, 0.3]} azimuth={[-0.8, 0.8]} snap speed={1.4}>
            <AvatarModel onError={() => setUse2D(true)} />
          </PresentationControls>

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
  /* ignore preload errors — 2D fallback handles it */
}

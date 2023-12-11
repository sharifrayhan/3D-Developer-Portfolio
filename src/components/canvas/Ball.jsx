import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const RectangularObject = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Decal on all sides of the box */}
        <Decal
          position={[0, 0, 0]}  // Adjust position to be centered
          rotation={[0, 0, 0]}  // No rotation
          scale={[2, 2, 2]}  // Adjust scale to cover the entire box
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const RectangularCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <RectangularObject imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default RectangularCanvas;

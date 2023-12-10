import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber"; // Canvas is a component from @react-three/fiber that provides a Three.js canvas for rendering 3D scenes in a React application
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"; //useGLTF is a hook from @react-three/drei for loading 3D models in the glTF format.

import CanvasLoader from "../Loader"; //CanvasLoader is presumably a custom loader component for rendering while the 3D model is loading.

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf"); //Graphics Library Transmission Format  is an open standard file format for 3D scenes and models.

  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <spotLight
        position={[-20, 50, 10]}
        angle={0.5}  
        penumbra={0.1}  
        intensity={1}
        castShadow
        shadow-mapSize={{ width: 1024, height: 1024 }}
      />

      <pointLight intensity={1} />
{/* The primitive element renders the 3D model with specific properties like scale, position, and rotation. It also has castShadow enabled for casting shadows. */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.75}
        position={isMobile ? [0, -3, -0.8] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        castShadow
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}> 
        <OrbitControls
          enableZoom={false} //user zoom korte parbe ki parbena 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};


export default ComputersCanvas;

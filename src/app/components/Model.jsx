import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { MathUtils } from "three";

const Model = () => {
  const model = useGLTF("./gun.glb");

  const orbitControlsRef = useRef(null);
  useFrame((state) => {
    if (orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-MathUtils.degToRad(x * 45));
      orbitControlsRef.current.setPolarAngle(MathUtils.degToRad((y + 1) * 60));
      orbitControlsRef.current.update();
    }
  });
  return (
    <>
      <ambientLight intensity={2} />

      <OrbitControls
        minPolarAngle={MathUtils.degToRad(60)}
        // maxPolarAngle={MathUtils.degToRad(80)}
        ref={orbitControlsRef}
        enableZoom={false}
      />
      <Environment
        files={
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/teufelsberg_ground_1_2k.hdr"
        }
        background
      ></Environment>
      <primitive object={model.scene} scale={0.5} />
    </>
  );
};

export default Model;

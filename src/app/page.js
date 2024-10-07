"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Model from "./components/Model";
import Description from "./components/Description";

const Page = () => {
  return (
    <div className="w-full h-[calc(100vh-2.5rem)] bg-white mt-10">
      <Canvas>
        <Model />
      </Canvas>
      <Description />
    </div>
  );
};

export default Page;

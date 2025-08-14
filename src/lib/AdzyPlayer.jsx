// this is the dynamic model's code (where custom skin is supported)


import React, { useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Model({ opaqueMaterial, transparentMaterial, ...props }) {
  const { nodes } = useGLTF("/model.gltf");

  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.5, 0]} rotation={[0.052, -0.044, 0.002]}>
        {/* Inner Head */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Head_1?.geometry}
          material={opaqueMaterial}
          position={[0, -1.5, 0]}
        />
        {/* Outer "Hat" Layer */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hat_Layer?.geometry}
          material={transparentMaterial}
          position={[0, -1.5, 0]}
        />
      </group>
      <group position={[0, 1.5, 0]}>
        {/* Inner Body */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body_1?.geometry}
          material={opaqueMaterial}
          position={[0, -1.5, 0]}
        />
        {/* Outer "Jacket" Layer */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body_Layer?.geometry}
          material={transparentMaterial}
          position={[0, -1.5, 0]}
        />
      </group>
      <group position={[0.3125, 1.375, 0]} rotation={[0.087, 0, 0]}>
        {/* Inner Arm */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Right_Arm_1?.geometry}
          material={opaqueMaterial}
          position={[-0.3125, -1.375, 0]}
        />
        {/* Outer Sleeve */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Right_Arm_Layer?.geometry}
          material={transparentMaterial}
          position={[-0.3125, -1.375, 0]}
        />
      </group>
      <group position={[-0.3125, 1.375, 0]} rotation={[-0.105, 0, 0]}>
        {/* Inner Arm */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Left_Arm_1?.geometry}
          material={opaqueMaterial}
          position={[0.3125, -1.375, 0]}
        />
        {/* Outer Sleeve */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Left_Arm_Layer?.geometry}
          material={transparentMaterial}
          position={[0.3125, -1.375, 0]}
        />
      </group>
      <group position={[0.11875, 0.75, 0]} rotation={[-0.096, -0.002, 0.017]}>
        {/* Inner Leg */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Right_Leg_1?.geometry}
          material={opaqueMaterial}
          position={[-0.11875, -0.75, 0]}
        />
        {/* Outer Pant Leg */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Right_Leg_Layer?.geometry}
          material={transparentMaterial}
          position={[-0.11875, -0.75, 0]}
        />
      </group>
      <group position={[-0.11875, 0.75, 0]} rotation={[0.087, -0.002, -0.017]}>
        {/* Inner Leg */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Left_Leg_1?.geometry}
          material={opaqueMaterial}
          position={[0.11875, -0.75, 0]}
        />
        {/* Outer Pant Leg */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Left_Leg_Layer?.geometry}
          material={transparentMaterial}
          position={[0.11875, -0.75, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/model.gltf");

function AdzyPlayer({ skinUrl, ...props }) {
  const texture = useLoader(THREE.TextureLoader, skinUrl);

  // Configure the texture once
  useMemo(() => {
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.generateMipmaps = false;
    texture.flipY = false;
  }, [texture]);

  // Create the two materials
  const opaqueMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ map: texture }),
    [texture]
  );

  const transparentMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide,
        alphaTest: 0.5,
      }),
    [texture]
  );

  // Render the Model and pass both materials to it.
  return (
    <Model
      opaqueMaterial={opaqueMaterial}
      transparentMaterial={transparentMaterial}
      {...props}
    />
  );
}

function Scene({ skinUrl }) {
  return (
    <Canvas
      camera={{ position: [1.5, 1.8, -3], fov: 45 }}
      shadows
      gl={{ antialias: true }}
      dpr={window.devicePixelRatio || 1}
    >
      <ambientLight intensity={1.2} />
      <directionalLight
        position={[10, 10, -5]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[4096, 4096]}
      />
      <pointLight position={[-10, -10, -5]} intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.2} />

      <AdzyPlayer skinUrl={skinUrl} />

      <OrbitControls
        target={[0, 1, 0]}
        minDistance={2}
        maxDistance={20}
        maxPolarAngle={Math.PI / 2.2}
      />
    </Canvas>
  );
}

export default function Player({ w, h, skinUrl, color1, color2 }) {
  return (
    <div
      style={{
        width: `${w}`,
        height: `${h}`,
        background: `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`,
      }}
    >
      <Scene skinUrl={skinUrl} />
    </div>
  );
}

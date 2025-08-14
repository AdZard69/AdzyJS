// this is the static model's code (where custom skin is not supported)
// the purpose of this code is just to get some reference just in case we need it in future.
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const PlayerModel = (props) => {
  const { nodes, materials } = useGLTF("/player_model.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.5, 0]} rotation={[0.105, -0.087, 0.009]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Head_1.geometry}
          material={nodes.Head_1.material}
          position={[0, -1.5, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hat_Layer.geometry}
          material={nodes.Hat_Layer.material}
          position={[0, -1.5, 0]}
        />
      </group>
      <group position={[0, 1.5, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body_1.geometry}
          material={nodes.Body_1.material}
          position={[0, -1.5, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body_Layer.geometry}
          material={nodes.Body_Layer.material}
          position={[0, -1.5, 0]}
        />
      </group>
      <group position={[0.313, 1.375, 0]} rotation={[0.175, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Right_Arm_1.geometry}
          material={nodes.Right_Arm_1.material}
          position={[-0.313, -1.375, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Right_Arm_Layer.geometry}
          material={nodes.Right_Arm_Layer.material}
          position={[-0.313, -1.375, 0]}
        />
      </group>
      <group position={[-0.313, 1.375, 0]} rotation={[-0.209, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Left_Arm_1.geometry}
          material={nodes.Left_Arm_1.material}
          position={[0.313, -1.375, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Left_Arm_Layer.geometry}
          material={nodes.Left_Arm_Layer.material}
          position={[0.313, -1.375, 0]}
        />
      </group>
      <group position={[0.119, 0.75, 0]} rotation={[-0.192, -0.007, 0.034]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Right_Leg_1.geometry}
          material={nodes.Right_Leg_1.material}
          position={[-0.119, -0.75, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Right_Leg_Layer.geometry}
          material={nodes.Right_Leg_Layer.material}
          position={[-0.119, -0.75, 0]}
        />
      </group>
      <group position={[-0.119, 0.75, 0]} rotation={[0.174, -0.006, -0.034]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Left_Leg_1.geometry}
          material={nodes.Left_Leg_1.material}
          position={[0.119, -0.75, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Left_Leg_Layer.geometry}
          material={nodes.Left_Leg_Layer.material}
          position={[0.119, -0.75, 0]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/player_model.glb");

export default PlayerModel;

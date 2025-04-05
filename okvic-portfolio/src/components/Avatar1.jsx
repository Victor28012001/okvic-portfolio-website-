
import React, { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Avatar({ animations, rotation, position, visible }) {
  const group = useRef();
  const laptopRef = useRef();
  const rightHandRef = useRef < THREE.Object3D > null;

  // Load GLTF model
  const { nodes, materials } = useGLTF("models/victor-v1.glb");
  const { nodes: laptopNodes } = useGLTF(
    "models/asus_tuf_gaming_f15_laptop.glb"
  );


  // Assign right hand bone reference
  useEffect(() => {
    if (nodes?.Hips?.skeleton) {
      rightHandRef.current = nodes.Hips.skeleton.bones.find(
        (b) => b.name === "RightHand"
      );
    }
  }, [nodes]);

  const renameAnimationTracks = (animation) => {
    animation.tracks.forEach((track) => {
      track.name = track.name.replace("mixamorig", "");
    });

    return animation;
  };

  useFrame(() => {
    if (!group.current || !laptopRef.current || !rightHandRef.current) return;

    // Get hand bone
    const rightHand = rightHandRef.current;

    if (rightHand) {
      laptopRef.current.position.copy(
        new THREE.Vector3([0, 0, 0]).add(
          rightHand.getWorldPosition(new THREE.Vector3())
        )
      );
      laptopRef.current.quaternion.copy(
        new THREE.Quaternion([0, 0, 0, 0]).multiply(
          rightHand.getWorldQuaternion(new THREE.Quaternion())
        )
      );

      // Offset laptop slightly in the hand
      laptopRef.current.position.y -= 0.05;
      laptopRef.current.position.z += 0.1;
    }
  });

  const loadFBXAnimation = (path, name) => {
    const { animations } = useFBX(path);
    if (animations.length > 0) {
      animations[0].name = name;

      const renamedAnimation = renameAnimationTracks(animations[0]);

      return renamedAnimation;
    }
    return null;
  };

  const animationClips = React.useMemo(
    () =>
      [
        loadFBXAnimation("animations/Typing(2).fbx", "typing"),
        loadFBXAnimation("animations/Idle.fbx", "idle"),
        loadFBXAnimation("animations/Sitting Idle.fbx", "sittingIdle"),
        loadFBXAnimation("animations/Sitting Victory.fbx", "victory"),
        loadFBXAnimation("animations/Waving.fbx", "Waving"),
        loadFBXAnimation("animations/Seated Idle.fbx", "SittingPose"),
      ].filter(Boolean),
    []
  ); // Memoized to avoid unnecessary re-renders

  // Bind animations to the model
  const { actions } = useAnimations(animationClips, group);
  // console.log(animations);

  // Play selected animation when animations prop changes
  useEffect(() => {
    if (actions && animations && actions[animations]) {
      actions[animations].reset().fadeIn(0.5).play();

      return () => {
        if (actions[animations]) {
          actions[animations].fadeOut(0.5);
        }
      };
    }
  }, [animations, actions]); // Runs when `animations` prop changes

  return (
    <group ref={group} dispose={null} rotation={rotation} position={position}>
      <group>
        <primitive object={nodes?.Hips} />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes?.EyeLeft?.geometry}
          material={materials?.Wolf3D_Eye}
          skeleton={nodes?.EyeLeft?.skeleton}
          morphTargetDictionary={nodes?.EyeLeft?.morphTargetDictionary}
          morphTargetInfluences={nodes?.EyeLeft?.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes?.EyeRight?.geometry}
          material={materials?.Wolf3D_Eye}
          skeleton={nodes?.EyeRight?.skeleton}
          morphTargetDictionary={nodes?.EyeRight?.morphTargetDictionary}
          morphTargetInfluences={nodes?.EyeRight?.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes?.Wolf3D_Head?.geometry}
          material={materials?.Wolf3D_Skin}
          skeleton={nodes?.Wolf3D_Head?.skeleton}
          morphTargetDictionary={nodes?.Wolf3D_Head?.morphTargetDictionary}
          morphTargetInfluences={nodes?.Wolf3D_Head?.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes?.Wolf3D_Teeth?.geometry}
          material={materials?.Wolf3D_Teeth}
          skeleton={nodes?.Wolf3D_Teeth?.skeleton}
          morphTargetDictionary={nodes?.Wolf3D_Teeth?.morphTargetDictionary}
          morphTargetInfluences={nodes?.Wolf3D_Teeth?.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes?.Wolf3D_Glasses?.geometry}
          material={materials?.Wolf3D_Glasses}
          skeleton={nodes?.Wolf3D_Glasses?.skeleton}
        />
        <skinnedMesh
          name="Wolf3D_Outfit_Top"
          geometry={nodes?.Wolf3D_Outfit_Top?.geometry}
          material={materials?.Wolf3D_Outfit_Top}
          skeleton={nodes?.Wolf3D_Outfit_Top?.skeleton}
          morphTargetDictionary={
            nodes?.Wolf3D_Outfit_Top?.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes?.Wolf3D_Outfit_Top?.morphTargetInfluences
          }
        />
        <skinnedMesh
          name="Wolf3D_Outfit_Bottom"
          geometry={nodes?.Wolf3D_Outfit_Bottom?.geometry}
          material={materials?.Wolf3D_Outfit_Bottom}
          skeleton={nodes?.Wolf3D_Outfit_Bottom?.skeleton}
          morphTargetDictionary={
            nodes?.Wolf3D_Outfit_Bottom?.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes?.Wolf3D_Outfit_Bottom?.morphTargetInfluences
          }
        />
        <skinnedMesh
          name="Wolf3D_Outfit_Footwear"
          geometry={nodes?.Wolf3D_Outfit_Footwear?.geometry}
          material={materials?.Wolf3D_Outfit_Footwear}
          skeleton={nodes?.Wolf3D_Outfit_Footwear?.skeleton}
          morphTargetDictionary={
            nodes?.Wolf3D_Outfit_Footwear?.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes?.Wolf3D_Outfit_Footwear?.morphTargetInfluences
          }
        />
        <skinnedMesh
          name="Wolf3D_Body"
          geometry={nodes?.Wolf3D_Body?.geometry}
          material={materials?.Wolf3D_Body}
          skeleton={nodes?.Wolf3D_Body?.skeleton}
          morphTargetDictionary={nodes?.Wolf3D_Body?.morphTargetDictionary}
          morphTargetInfluences={nodes?.Wolf3D_Body?.morphTargetInfluences}
        />
        {visible && (
          <mesh
            ref={laptopRef}
            scale={0.2}
            position={[0, -0.002, 0.81]}
            rotation={[Math.PI, Math.PI, 0]}
          >
            <primitive object={laptopNodes.Sketchfab_Scene} />
          </mesh>
        )}
      </group>
    </group>
  );
}

useGLTF.preload("models/victor-v1.glb");

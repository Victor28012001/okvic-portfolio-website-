import * as THREE from "three";
import { useLoader, useThree } from '@react-three/fiber'
import { useState, useRef } from "react";
import { TextureLoader } from 'three/src/loaders/TextureLoader'


function Skybox() {

    const meshRef = useRef()


    const texture = useLoader(TextureLoader, 'textures/materials/NfiKlEA.jpg');
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.repeat.set(5, 5);


    return (
        <mesh scale={180} ref={meshRef}>
            <sphereGeometry args={[10, 64, 64]} />
            <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
        </mesh>
    );
}

export default Skybox;

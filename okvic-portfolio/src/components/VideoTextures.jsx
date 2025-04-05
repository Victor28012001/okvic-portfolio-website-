import React from 'react'
import { Suspense, useRef } from 'react'
import { useAspect, useVideoTexture, useTexture } from '@react-three/drei'



export default function VideoTextures() {

    const planeRef = useRef()

    // console.log(planeRef.current.position);



    const size = useAspect(1800, 1000)
    const url = "textures/video/1051339021-preview.mp4";
    const fallbackURL = "textures/materials/NfiKlEA.jpg";


    return (
        <mesh position={[-1.608, 1.64, -0.68]} rotation={[0, Math.PI * 0.5, 0]} scale={[1.89, 0.47, 1]} ref={planeRef}>
            <planeGeometry args={[0.5, 1.01]} />
            <Suspense fallback={<FallbackMaterial url={fallbackURL} />}>
                <VideoMaterial url={url} />
            </Suspense>
        </mesh>
    )
}
function VideoMaterial({ url }) {
    const texture = useVideoTexture(url)
    return <meshBasicMaterial map={texture} toneMapped={false} />
}

function FallbackMaterial({ url }) {
    const texture = useTexture(url)
    return <meshBasicMaterial map={texture} toneMapped={false} />
}
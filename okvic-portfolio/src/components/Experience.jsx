import { useState, useEffect } from "react";
import { Avatar } from "./Avatar1";
import { Room } from "./Room";
import Skybox from "./Skybox";
import { Sky } from "@react-three/drei";
import VideoTextures from "./VideoTextures";
import { useSpring, animated } from "@react-spring/three";

export const Experience = ({ isOpen, seatRotating, sectionIndex }) => {
  // Camera transition animation
  const cameraSpring = useSpring({
    position:
      sectionIndex === 0
        ? [0, 2, 5]
        : sectionIndex === 2
        ? [0, 2, -5]
        : [-3, 1.5, -5],
    rotation: sectionIndex === 2 ? [0, -(Math.PI / 4), 0] : [0, 0, 0],
    config: { mass: 1, tension: 170, friction: 26 },
    onRest: () => console.log("Camera transition complete"),
  });

  const [value, setValue] = useState("victory");
  const [seatVisible, setSeatVisible] = useState(true);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [rotation1, setRotation1] = useState([0, 0, 0]);

  useEffect(() => {
    setRotation([-Math.PI / 2, -Math.PI / 26, -Math.PI / 2]);
    setRotation1([-Math.PI / 2, 0, Math.PI / 2]);
  }, []);

  useEffect(() => {
    if (isOpen && value === "victory") {
      setTimeout(() => {
        setValue("idle");
        setSeatVisible(false);
      }, 2000);
    }
  }, [isOpen]);

  const degreesToRadians = (deg) => (deg * Math.PI) / 180;
  const angle = degreesToRadians(-90 + 30);

  return (
    <>
      <Sky />

      {/* Animated Camera Movement */}
      <animated.group
        position={cameraSpring.position}
        rotation={cameraSpring.rotation}
      >
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight
          position={[0, 50, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
        />
        <hemisphereLight
          skyColor="#b1e1ff"
          groundColor="#000000"
          intensity={1}
        />

        <group position-y={-9} scale={1}>
          <group scale={10} position={[-3, 5, -7]}>
            {sectionIndex === 1 && (
              <Avatar
                animations="typing"
                value="typing"
                rotation={rotation}
                visible={false}
              />
            )}
          </group>

          <group scale={10}>
            {sectionIndex === 0 && (
              <Avatar
                animations="Waving"
                position={[1.1, 0.2, 1.0]}
                rotation={[-Math.PI / 2, 0, 0]}
                visible={false}
              />
            )}
          </group>

          <group scale={10}>
            {sectionIndex === 2 && (
              <Avatar
                animations="SittingPose"
                position={[-0.59, 0.4, 0.8]}
                rotation={[-Math.PI / 2, angle, Math.PI / 2]}
                visible={true}
              />
            )}
          </group>

          <group scale={10} position={[-3.2, 3.9, -6.2]}>
            {sectionIndex === 0 ||
              (seatRotating && (
                <Avatar
                  animations={isOpen ? value : "sittingIdle"}
                  rotation={rotation1}
                  visible={false}
                />
              ))}
          </group>

          <group scale={10}>
            <Room
              seatVisible={seatVisible}
              isOpen={isOpen}
              seatRotating={seatRotating}
            />
          </group>
          <group scale={10}>
            <VideoTextures />
          </group>
        </group>

        <Skybox />
      </animated.group>
    </>
  );
};

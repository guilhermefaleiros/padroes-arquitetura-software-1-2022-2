import { useGLTF } from "@react-three/drei";

const MyAvatar = ({ url }: any) => {
  useGLTF.preload(url);
  const { scene } = useGLTF(url) as any;

  return (
    <group scale={3} position={[-6, 0, -4]}>
      <primitive object={scene} children-0-castShadow />
    </group>
  );
};

export default MyAvatar;

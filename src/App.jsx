import { Canvas, useThree } from "@react-three/fiber";
import { Model } from "./Model";
import { Box, Html, OrbitControls, Sphere, Text } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

function App() {
  const test = [1,1,1]
  return (
    <>
      <Canvas shadows>
        <Sphere scale={0.2} position={test}/>
        <directionalLight 
          position={test} 
          intensity={10} // 빛의 강도를 낮춤
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024} 
        />
        <ambientLight intensity={10}/>
        <OrbitControls />
        <Model/>
        <Textcomponents />
      </Canvas>
    </>
  );
}

function Textcomponents() {
  const { viewport } = useThree();
  const textMaterial = new MeshStandardMaterial({ color: "#14ae00", metalness: 1, roughness: 0.5 });
  const fontSize = viewport.width * 0.08; // 화면 너비의 5%로 폰트 크기 설정
  return (
    <>
      <Text position={[0,1,-1]} fontSize={viewport.width * 0.08}>clover</Text>
      <Text
        position={[0, viewport.height / 2 - 0.6, 0]}
        fontSize={fontSize}
        material={textMaterial}
        anchorX="center"
        anchorY="middle"
        font={'/font/PlayfairDisplay-Bold.ttf'}
        characters={'test'}
      >
        Believe More
      </Text>
      <Text
        position={[0, -viewport.height / 2 + 0.8, 0]}
        fontSize={fontSize}
        material={textMaterial}
        anchorX="center"
        font={'/font/PlayfairDisplay-Bold.ttf'}
        anchorY="middle"
      >
        Luck for you!
      </Text>
    </>
  );
}

export default App;

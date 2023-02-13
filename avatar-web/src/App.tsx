import { Canvas, useLoader } from "@react-three/fiber";
import {
  Html,
  KeyboardControls,
  KeyboardControlsEntry,
  OrbitControls,
  Stars,
  Stats,
} from "@react-three/drei";
import { Physics, usePlane } from "@react-three/cannon";
import "./styles.css";
import { useState } from "react";
import MyAvatar from "./Avatar";
import { useQuery } from "react-query";
import * as THREE from "three";
import axios from "axios";

function MainBox({
  onClickPhysicalInfo,
  onClickToughSigns,
  data,
}: {
  onClickPhysicalInfo: () => void;
  onClickToughSigns: () => void;
  data: any;
}) {
  return (
    <mesh position={[0, 2, 0]}>
      <Html
        style={{
          background: "black",
          padding: "0.5rem",
          color: "white",
        }}
        position={[0, 1, -5]}
        transform
        occlude
      >
        <h1>Informações Gerais</h1>
        <table>
          <tr>
            <td>
              <strong>Nome:</strong>
            </td>
            <td id="nome">{data.name}</td>
          </tr>
          <tr>
            <td>
              <strong>Idade:</strong>
            </td>
            <td id="idade">{data.age}</td>
          </tr>
          <tr>
            <td>
              <strong>Sexo:</strong>
            </td>
            <td id="sexo">
              {data.gender === "MALE" ? "Masculino" : "Feminino"}
            </td>
          </tr>
        </table>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button
            onClick={() => onClickPhysicalInfo()}
            style={{ backgroundColor: "white", padding: 20, borderRadius: 3 }}
          >
            Mostrar informações fisiológicas
          </button>
          <button
            onClick={() => onClickToughSigns()}
            style={{ backgroundColor: "white", padding: 20, borderRadius: 3 }}
          >
            Mostrar sinais vitais
          </button>
        </div>
      </Html>
    </mesh>
  );
}

function PhysicalInformation({ data }: any) {
  return (
    <mesh position={[0, 1, 5]} rotation={[0, 4.75, 0]}>
      <Html
        style={{
          background: "black",
          padding: "0.5rem",
          color: "white",
        }}
        position={[-2, 1, -5]}
        transform
        occlude
      >
        <h3>Informações Fisiológicas</h3>
        <table>
          <tr>
            <td>
              <strong>Altura:</strong>
            </td>
            <td id="altura">{data.height}m</td>
          </tr>
          <tr>
            <td>
              <strong>Peso:</strong>
            </td>
            <td id="peso">{data.weight}kg</td>
          </tr>
          <tr>
            <td>
              <strong>Percentual de gordura:</strong>
            </td>
            <td id="peso">{data.fat_percentage}%</td>
          </tr>
        </table>
      </Html>
    </mesh>
  );
}

function ToughSignsInformation({ data }: any) {
  console.log(data);
  return (
    <mesh position={[0, 5, 5]} rotation={[0, 4.75, 0]}>
      <Html
        style={{
          background: "black",
          padding: "0.5rem",
          color: "white",
        }}
        position={[-2, 1, -5]}
        transform
        occlude
      >
        <h3>Sinais vitais</h3>
        <table>
          <tr>
            <td>
              <strong>Frequência cardíaca:</strong>
            </td>
            <td id="freqcard">{data.heart_rate} bpm</td>
          </tr>
          <tr>
            <td>
              <strong>Frequência respiratória:</strong>
            </td>
            <td id="freqresp">{data.respiratory_frequency} mrm</td>
          </tr>
          <tr>
            <td>
              <strong>Pressão Arterial:</strong>
            </td>
            <td id="pression">{data.blood_pressure} mmHg</td>
          </tr>
          <tr>
            <td>
              <strong>Temperatura:</strong>
            </td>
            <td id="temp">{data.temperature}ºC</td>
          </tr>
        </table>
      </Html>
    </mesh>
  );
}

function Plane() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  const texture = useLoader(THREE.TextureLoader, require("./floor.jpeg"));
  return (
    <mesh ref={ref as any} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[20, 20]} />
      <meshBasicMaterial attach="material" map={texture as any} />
    </mesh>
  );
}

function FrontWall() {
  const texture = useLoader(THREE.TextureLoader, require("./floor.jpeg"));
  return (
    <mesh rotation={[0, 0, 0]} position={[0, 6, -10]}>
      <planeBufferGeometry attach="geometry" args={[20, 12]} />
      <meshBasicMaterial attach="material" map={texture as any} />
    </mesh>
  );
}

function SideWall() {
  const texture = useLoader(THREE.TextureLoader, require("./floor.jpeg"));
  return (
    <mesh rotation={[0, -Math.PI / 2, 0]} position={[10, 6, 0]}>
      <planeBufferGeometry attach="geometry" args={[20, 12]} />
      <meshBasicMaterial attach="material" map={texture as any} />
    </mesh>
  );
}

export default function App() {
  const searchParams = new URLSearchParams(document.location.search);

  console.log(searchParams.get("id"));
  console.log(`http://localhost:3001/api/v1/avatar/${2}`);

  const [showPhysicalInformation, setPyshicalInformation] = useState(false);
  const [showToughSigns, setShowToughSigns] = useState(false);

  const { data } = useQuery("patient", async () => {
    const { data } = await axios.get(
      `http://localhost:3001/api/v1/avatar/${searchParams.get("id")}`
    );
    return data;
  });

  const { data: toughSignal } = useQuery(
    "tough-signal",
    async () => {
      const { data } = await axios.get(
        `http://localhost:3001/api/v1/avatar/${searchParams.get(
          "id"
        )}/tough-sinal`
      );
      return data;
    },
    {
      refetchInterval: 1500,
    }
  );

  return (
    <Canvas>
      <Stars />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <Stats />
      <spotLight position={[10, 15, 10]} angle={1.5} />
      <Physics>
        <MainBox
          data={data}
          onClickPhysicalInfo={() => {
            setPyshicalInformation(!showPhysicalInformation);
          }}
          onClickToughSigns={() => {
            setShowToughSigns(!showToughSigns);
          }}
        />
        <MyAvatar url={data?.avatar_url} />
        <Plane />
        <FrontWall />
        <SideWall />
        {showPhysicalInformation && <PhysicalInformation data={data} />}
        {showToughSigns && <ToughSignsInformation data={toughSignal} />}
      </Physics>
    </Canvas>
  );
}

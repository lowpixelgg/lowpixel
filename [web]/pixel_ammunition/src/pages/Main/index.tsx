import { Stats, OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

export function Main() {
  const materials = useLoader(MTLLoader, './src/assets/cuntgun.mtl');
  materials.preload();

  const obj = useLoader(OBJLoader, './src/assets/cuntgun.obj', (loader) => {
    loader.setMaterials(materials);
  });

  return (
    <Canvas camera={{ position: [-0.5, 1, 2] }} shadows>
      <directionalLight
        position={[3.3, 1.0, 4.4]}
        castShadow
        intensity={Math.PI * 2}
      />
      <primitive
        object={obj}
        position={[0, 1, 0]}
        castShadow
      />
      <OrbitControls target={[0, 1, 0]} />
      <axesHelper args={[5]} />
      <Stats />
    </Canvas>
  );
}

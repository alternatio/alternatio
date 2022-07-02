import React from 'react'
import style from './Header.module.css'
import { motion, MotionCanvas, LayoutCamera } from 'framer-motion-3d'
import { useThree, useFrame } from "@react-three/fiber";

type cameraConfigTypes = {
  x?: number | string
  y?: number | string
  z?: number | string
  fov?: number | string
}

const Lights: React.FC = () => {
  const three = useThree();
  useFrame(() => {
    three.camera.lookAt(0, 0, 0);
  });
  return (
    <>
      <ambientLight intensity={0.2} />

      <pointLight 
      position={[-10, 5, 10]} 
      intensity={1} 
      color="#0ff" 
      // color="#0f0"
      />

      <pointLight
      position={[4, -5, -4]}
      intensity={1}
      // color="#f00"
      color="#000"
      />
      <motion.directionalLight
      color="#000"
      castShadow
      intensity={5}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      // shadow-camera-far={20}
      // shadow-camera-left={-10}
      // shadow-camera-right={10}
      // shadow-camera-top={10}
      // shadow-camera-bottom={-10}
      animate={{ x: 0, y: 8, z: 5 }}
      />
    </>
  );
}

const Geometry: React.FC = () => {
  return (
    <>
      <motion.mesh 
      initial={{
        z:-10
      }}
      animate={{
        rotateX: 360,
        rotateY: 360
      }}
      transition={{
        duration: 200,
        ease: 'linear',
        repeat: Infinity
      }}
      receiveShadow 
      castShadow>
        <torusKnotBufferGeometry args={[12, 2, 50, 5]} />
        <meshPhysicalMaterial
        // flatShading
        wireframe
        color="#888"
        // clearcoat={1}
        // clearcoatRoughness={1}
        />
      </motion.mesh>
    </>
  );
}

const Scene: React.FC = ()  => {
  const cameraConfig: cameraConfigTypes = {
    x: 40,
    y: 0,
    z: 0,
    fov: 60
  }

  return (
    <MotionCanvas 
    className={style.canvas} 
    dpr={[1, 2]} 
    shadows>
      {
        // @ts-ignore
        <LayoutCamera 
        initial={false}
        animate={{...cameraConfig}}
        />
      }
      <Lights />
      <Geometry />
    </MotionCanvas>
  )
}

const Header: React.FC = () => {
  return (
    <div className={style.Header}>
      {/* <div className={style.layer}>
        <div className={style.block1}></div>
        <div className={style.block2}></div>
      </div>
      <div className={style.text}>Lorem ipsum dolor sit.</div> */}
      
      <div className={'wrapper ' + style.wrapper}>
        <div className={style.topInfo}>
          <span>Home</span>
        </div>
        <div className={style.head}>
          <div className={style.headLogo}>
            Alternati<span>o</span>
          </div>
          <div className={style.headDescription}>
            <span>Web-developer</span>
            <span>Web-designer?</span>
          </div>
        </div>
      </div>
      <div className={style.background}>
        <Scene />
      </div>
    </div>
  )
}

export default Header
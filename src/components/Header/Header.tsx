import React from 'react'
import style from './Header.module.css'
import { motion, MotionCanvas, LayoutCamera } from 'framer-motion-3d'
import { useThree, useFrame } from "@react-three/fiber";

const Lights: React.FC = () => {
  const three = useThree();
  useFrame(() => {
    three.camera.lookAt(0, 0, 0);
  });
  return (
    <>
      <pointLight 
      position={[-10, 5, 10]} 
      intensity={15} 
      color="#0ff" 
      />

      <pointLight
      position={[4, -5, -4]}
      intensity={15}
      color="#f00" 
      />
    </>
  );
}

const Geometry: React.FC = () => {
  const randGeometry1: number = Math.round(Math.random() * (5 - 2) + 2)
  const randGeometry2: number = Math.round(Math.random() * (5 - 2) + 2)

  let color: string = ''
  
  const randColor: Function = () => {
    const pallet: string[] = ['0', '3', '6', 'f']
    for(let i = 0; i < 3; i++) {
      const numberOfColor: number = Math.round(Math.random() * 3)
      color += pallet[numberOfColor]
    }
  }
  randColor()

  const degToFullRotation = Math.PI * 2
  return (
    <>
      <motion.mesh 
      initial={{
        z: -10
      }}
      animate={{
        rotateX: degToFullRotation,
        rotateY: degToFullRotation
      }}
      transition={{
        duration: 8,
        ease: 'linear',
        repeat: Infinity
      }}
      >
        <torusKnotBufferGeometry args={[10, 3, 80, 6, randGeometry1, randGeometry2]} />
        <motion.meshPhysicalMaterial
        flatShading
        reflectivity={0}
        // :)
        // wireframe={true}
        // --
        color="#fff"
        emissive={"#"+color}
        roughness={2}
        metalness={1.5}
        transparent
        opacity={1}
        clearcoat={1}
        clearcoatRoughness={1}
        />
      </motion.mesh>
    </>
  );
}

type cameraConfigTypes = {
  x?: number | string
  y?: number | string
  z?: number | string
  fov?: number | string
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
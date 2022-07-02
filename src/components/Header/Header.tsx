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
      <ambientLight color="#000" intensity={0.2} />

      <pointLight 
      position={[-10, 5, 10]} 
      intensity={3} 
      color="#0ff" 
      // color="#0f0"
      />

      <pointLight
      position={[4, -5, -4]}
      intensity={3}
      color="#f00"
      // color="#000"
      />
    </>
  );
}

const Geometry: React.FC = () => {
  const randGeometry1: number = Math.round(Math.random() * (10 - 1) + 1)
  const randGeometry2: number = Math.round(Math.random() * (10 - 1) + 1)

  return (
    <>
      <motion.mesh 
      initial={{
        z:-10
      }}
      animate={{
        rotateX: 360,
        rotateY: 180,
        rotateZ: 180
      }}
      transition={{
        duration: 200,
        ease: 'linear',
        repeat: Infinity
      }}
      // receiveShadow 
      // castShadow
      >
        <torusKnotBufferGeometry args={[10, 3, 40, 5, randGeometry1, randGeometry2]} />
        <meshPhysicalMaterial
        flatShading
        // :)
        // wireframe
        // --
        color="#fff"
        emissive="#000"
        roughness={0}
        metalness={.5}
        transparent
        opacity='.9'
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
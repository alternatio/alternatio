import React from 'react'
import style from './BackDeco.module.css'
import { motion, MotionCanvas, LayoutCamera } from 'framer-motion-3d'

const BackDeco: React.FC = () => {
  return (
    <div className={style.BackDeco}>
      <div className={style.wrapper}>
        <div className={style.layer1}>
          1
        </div>
        <div className={style.layer2}>
          2
        </div>
      </div>
    </div>
  )
}

export default BackDeco
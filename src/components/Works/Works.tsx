import React, { useRef } from 'react'
import style from './Works.module.css'
import data from '../../data/dataOfWorks'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'

type ImagesProps = {
  id: number
}

const Images: React.FC<ImagesProps> = (props: ImagesProps) => {
  const constraintsRef = useRef(null)
  const name: string = data.NameOfWork[props.id]
  let num: number
  return (
    <motion.div 
      ref={constraintsRef}
      className={style.images}>
        {
          data.ImagesCount.map((value, index) => {
            const image = require(`../../images/${name + index}.png`)
            return (
              // <div>{index}</div>
              <motion.img 
              onClick={() => {
                num = Math.round(Math.random() * 100)
                console.log(num)
              }}
              style={{
                width: num
              }}
              whileTap={{ scale: 1.1 }}
              drag
              dragConstraints={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
              }}
              
              dragElastic={.2}
              dragTransition={{
                bounceStiffness: 100, 
                bounceDamping: 100
              }}
              className={style.image} 
              src={image}/>
            )
          })
        }
    </motion.div>
  )
}

const Works: React.FC = () => {
  return (
    <div className={style.Works}>
      <div className={'wrapper ' + style.wrapper}>
        <div className={style.topInfo}>
          Works
        </div>
      </div>
      <div className='wrapper'>
        <div className={style.worksItems}>
          {data.HeaderOfWorks.map((value, index) => {
            return (
              <div 
              key={index}
              className={style.work}>
                <Marquee
                speed={50}
                pauseOnHover={true}
                gradient={false}>
                  <div className={style.head}>
                    {(value + '∙').repeat(3)}
                  </div>
                </Marquee>
                <div className={style.text}>
                  {data.TextOfWorks[index]}
                </div>
                <Images id={index}/>
                <div className={style.linkWrapper}>
                  <a 
                  className={style.link}
                  href={data.LinkToGithubOfWorks[index]}>
                    Github
                  </a>
                </div>
              </div>
            )})}
        </div>
      </div>
    </div>
  )
}

export default Works
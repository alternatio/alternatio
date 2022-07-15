import React, { useRef } from 'react'
import style from './Works.module.css'
import data from '../../data/dataOfWorks'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'

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
              <Work 
              key={index}
              index={index}
              value={value}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

type WorkProps = {
  index: number
  value: string
}

const Work: React.FC<WorkProps> = (props: WorkProps) => {
  return (
    <motion.div 
    key={props.index}
    className={style.work}>
      <Marquee
      speed={50}
      pauseOnHover={true}
      gradient={false}>
        <div className={style.head}>
          {(props.value + '∙').repeat(3)}
        </div>
      </Marquee>
      <div className={style.text}>
        {data.TextOfWorks[props.index]}
      </div>

      <Images 
      id={props.index}/>
      <div className={style.linkWrapper}>
        <a 
        className={style.link}
        href={data.LinkToGithubOfWorks[props.index]}>
          Github
        </a>
      </div>
    </motion.div>
  )
}

type ImagesProps = {
  id: number
}

const Images: React.FC<ImagesProps> = (props: ImagesProps) => {
  const constraintsRef = useRef(null)
  const name: string = data.NameOfWork[props.id]
  return (
    <div 
      ref={constraintsRef}
      className={style.images}>
        <div
        className={style.backTextImages}
        >{data.HeaderOfWorks[props.id]}</div>
        {
          data.ImagesCount.map((value, index) => {
            const image = require(`../../images/${name + index}.png`)

            return (
              <motion.img 
              // onViewportEnter={
                
              // }
              key={index}
              whileInView={{ opacity: 1 }}
              initial={{
                opacity: 0
              }}
              animate={
                ({
                  y: index*10 + '%',
                  scale: 0.8,
                  boxShadow: `0rem 0rem 0rem .3rem #fff`
                })
              }

              transition={{
                duration: .5
              }}
              whileDrag={{ scale: 0.9 }}
              whileHover={{ zIndex: 100 }}
              drag
              dragConstraints={constraintsRef}
              
              dragElastic={.2}
              dragTransition={{
                bounceStiffness: 150, 
                bounceDamping: 8
              }}
              className={style.image} 
              alt={value}
              src={image}/>
            )
          })
        }
    </div>
  )
}

export default Works
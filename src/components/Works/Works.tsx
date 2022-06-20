import React, { useRef } from 'react'
import style from './Works.module.css'
import data from '../../data/dataOfWorks'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'
import handCursor from '../../images/handCursor.svg'

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
    // ref={constraintsRef}
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
      // constraintsRef={constraintsRef}
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
  // constraintsRef: React.MutableRefObject<null>
}

const Images: React.FC<ImagesProps> = (props: ImagesProps) => {
  const constraintsRef = useRef(null)
  const name: string = data.NameOfWork[props.id]
  let num1: number
  let num2: number
  return (
    <div 
      ref={constraintsRef}
      className={style.images}>
        <div className={style.dragInfo}>
          <span>
            <img 
            src={handCursor} 
            alt="handCursor" />
          </span>
        </div>
        {
          data.ImagesCount.map((value, index) => {
            const image = require(`../../images/${name + index}.png`)
            num1 = Math.round(Math.random() * (80 + 80) - 80)
            num2 = Math.round(Math.random() * (50 + 50) - 50)


            // const variantsOfImage = {
            //   none: {
            //     top: 'none',
            //     left: 'none',
            //     height: '40%',
            //     zIndex: 2
            //   },
            //   fullScreen: {
            //     top: 0,
            //     left: 0,
            //     height: '100%',
            //     zIndex: 101
            //   }
            // }

            console.log(num1 + ' num1')
            console.log(num2 + ' num2')
            return (
              // <div>{index}</div>
              <motion.img 
              key={index}
              whileInView={{ opacity: 1 }}
              // variants={variantsOfImage}
              initial='none'
              
              animate={{
                x: (num1 + '%'),
                y: (num2 + '%'),
              }}
              transition={{
                duration: .25
              }}
              whileDrag={{ scale: 1.25 }}
              whileHover={{ zIndex: 100 }}
              drag
              dragConstraints={constraintsRef}
              
              dragElastic={.2}
              dragTransition={{
                bounceStiffness: 150, 
                bounceDamping: 8
              }}
              className={style.image} 
              src={image}/>
            )
          })
        }
    </div>
  )
}

export default Works
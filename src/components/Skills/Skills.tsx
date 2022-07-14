import React from 'react'
import style from './Skills.module.css'
import { motion } from 'framer-motion'

interface skillDataTypes {
  skillNames: string[]
  skillValues: number[]
}

const skillData: skillDataTypes = {
  skillNames: [
    'HTML',
    'CSS',
    'JS',
    'TS',
    'UX',
    'UI',
  ],
  skillValues: [
    90,
    95,
    60,
    70,
    70,
    70,
  ]
}

const Skills: React.FC = () => {
  return (
    <div className={style.Skills}>
      <div className={style.wrapper + ' wrapper'}>
        <div className={style.topInfo}>
          Skills
        </div>
        <div className={style.text}>
          This is my subjective assessment of my skills.
        </div>
        <div className={style.container}>
          <div className={style.skills}>
            {skillData.skillNames.map((value, index) => {
              return (
                <Skill 
                value={value}
                index={index}/>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

interface SkillTypes {
  value: string,
  index: number
}

const Skill: React.FC<SkillTypes> = (props: SkillTypes) => {
  return (
    <div className={style.Skill}>
      <div className={style.line}>
        <span className={style.skillName}>
          {skillData.skillNames[props.index]}
        </span>
        <span className={style.skillValues}>
          {skillData.skillValues[props.index]}%
        </span>
      </div>
    </div>
  )
}

export default Skills
import React from 'react'
import style from './Works.module.css'

const Works: React.FC = () => {
  const HeaderOfWorks: string[] = [
    'Museum', 
    'This site'
  ]

  const LinkToGithubOfWorks: string[] = [
    'https://github.com/Alternatio/Museum',
    
  ]

  const TextOfWorks: React.ReactNode[] = [
    <p>
      The task was to make a website for the Vrubel Museum. 
      The work was completed in the early summer of 2022. <span>ReactTS</span> is used.
    </p>, 
    <p>
      The work was completed in the early summer of 2022. 
      <span> ReactTS</span> and <span>ThreeJS</span> is used.
    </p>
  ]

  return (
    <div className={style.Works}>
      {
        TextOfWorks.map((value, index) => {
          return (
            <div>
              <p>{index}</p>
              {value}
            </div>
          )
        })
      }
    </div>
  )
}

export default Works
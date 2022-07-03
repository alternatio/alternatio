import React from 'react'
import style from './Info.module.css'

const Info: React.FC = () => {
  return (
    <div className={style.Info}>
      <div className={'wrapper ' + style.wrapper}>
        <div className={style.topInfo}>
          Infos
        </div>
        <div className={style.grid}>
          <div className={style.content}>
            <p>
              <span>{' '}⬤{' '}</span>
              The beginning of my programming activity falls at the end of 2021. 
              Even then I got used to <span>HTML</span>, <span>CSS</span>. 
              According to my feelings, I can say that I am ready to do the design / layout of the site, 
              as well as build simple logic. 
              Worked with <span>React</span>, <span>TS</span>, 
              <span>ThreeJS</span>, I know <span>CSS</span> well.
            </p>
            <p>
              No commercial experience.
            </p>
          </div>
          <div className={style.deco}>
            Al
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
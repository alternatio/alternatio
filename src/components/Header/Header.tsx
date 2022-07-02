import React from 'react'
import style from './Header.module.css'

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
    </div>
  )
}

export default Header
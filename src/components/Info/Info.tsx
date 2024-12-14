import React from "react";
import style from "./Info.module.css";

const Info: React.FC = () => {
  return (
    <div className={style.Info}>
      <div className={"wrapper " + style.wrapper}>
        <div className={style.topInfo}>Infos</div>
        <div className={style.grid}>
          <div className={style.content}>
            <p>
              <span> ⬤ </span>
              The beginning of my programming activity falls at the end of 2021.
              Even then I got used to <span>HTML</span> and <span>CSS</span>.
              Next was the development and study of frameworks, libraries and
              other. Worked with <span>React</span>, <span>SCSS</span>,{" "}
              <span>TS</span>,<span>ThreeJS</span>, <span>Firestore</span>.
            </p>
            {/* <p>
              No commercial experience.
            </p> */}
          </div>
          <div className={style.deco}>Al</div>
        </div>
      </div>
    </div>
  );
};

export default Info;

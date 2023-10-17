// import React from "react";
// import style from "./Skills.module.css";

// export const Skills = () => {
//     return (
//         <div className={style.skills}>
//             <div className={style.title}>Skills</div>
//             <div className={style.frame}>
//                 <div className={style.div}>
//                     <div className={style.code}>
//                         <div className={style.textwrapper}>Code</div>
//                     </div>
//                     <div className={style.textwrapper-2}>
//                         HTML5
//                         <br />
//                         CSS3
//                         <br />
//                         Javascript ES6
//                         <br />
//                         React
//                         <br />
//                         Styled Components
//                         <br />
//                         GitHub
//                     </div>
//                 </div>
//                 <div className={style.div}>
//                     <div className={style.toolbox}>
//                         <div className={style.textwrapper}>Toolbox</div>
//                     </div>
//                     <div className={style.textwrapper-2}>
//                         Atom
//                         <br />
//                         Postman
//                         <br />
//                         Adobe Photoshop
//                         <br />
//                         Adobe Illustrator
//                         <br />
//                         Figma
//                         <br />
//                         Keynote <br />
//                         Slack
//                     </div>
//                 </div>
//                 <div className={style.div}>
//                     <div className={style.upcomming}>
//                         <div className={style.textwrapper}>Upcoming</div>
//                     </div>
//                     <div className={style.textwrapper-2}>Node.js</div>
//                 </div>
//                 <div className={style.div}>
//                     <div className={style.more}>
//                         <div className={style.textwrapper-3}>More</div>
//                     </div>
//                     <p className={style.textwrapper-2}>
//                         Design Lead
//                         <br />
//                         Branding
//                         <br />
//                         Strategy
//                         <br />
//                         Process design
//                         <br />
//                         Concept development
//                         <br />
//                         Agile methodology <br />
//                         Hyper Island toolbox
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

import React from 'react';
import style from './Skills.module.css';

export const Skills = () => {
  return (
    <div>
      <h2>Skills</h2>
      <div className={style.skillsContainer}>
        <p>HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks</p>
      </div>
      <div className={style.skillsContainer}>
        <p>Node.js, Mongo DB, Web Accessibility, APIs</p>
      </div>
      <div className={style.skillsContainer}>
        <p>Mob Programming, Pair Programming, GitHub</p>
      </div>
    </div>
  );
};
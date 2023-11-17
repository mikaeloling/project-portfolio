// export const Tech = () => {
//     return (
//         <div className="tech">
//             <div className="title">Tech</div>
//             <p className={style.HTMLCSSflexbox}>
//                 HTML, CSS, Flexbox, JavaScript, ES6, <br />
//                 JSX, React, React Hooks, Node.js, <br />
//                 Mongo DB, Web Accessibility, APIs, <br />
//                 mob-programming, pair-programming, GitHub.
//             </p>
//         </div>
//     );
// };

export const Tech = () => {
    const style = {
      backgroundColor: 'lightblue',
      color: 'white',
      padding: '10px',
      textAlign: 'center'
    };
  
    return (
      <div style={style}>
        <h2>Tech</h2>
        <p>Some text about tech in full stack development...</p>
      </div>
    );
  };

export default Tech;
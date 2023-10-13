import style from "./Tech.module.css";

export const Tech = () => {
    return (
        <div className={style.tech}>
            <div className={style.title}>Tech</div>
            <p className={style.HTMLCSSflexbox}>
                HTML, CSS, Flexbox, JavaScript, ES6, <br />
                JSX, React, React Hooks, Node.js, <br />
                Mongo DB, Web Accessibility, APIs, <br />
                mob-programming, pair-programming, GitHub.
            </p>
        </div>
    );
};


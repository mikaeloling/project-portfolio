import style from "./Introduction.module.css"; 

export const Introduction = () => {
  return (
    <div className={style.introduction}>
      <div className={style.frame}>
        <div className={style.div}>
          <div className={style.textwrapper}>Hi, Im Sara Svensson</div>
            <div className={style.textwrapper2}>Frontend Developer</div>
          </div>
        <div className={style.frame2}>
          <img className={style.ellipse} alt="Ellipse" src="ellipse-1.png" />
            <p className={style.p}>
              Sara is an exceptional developer known for her innovative solutions and exceptional coding abilities. She
              creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a
              valuable asset to any project and a standout in the technology field.
            </p>
        </div>
      </div>
        {/* <Arrow className="arrow-instance" /> */}
    </div>
  );
  };


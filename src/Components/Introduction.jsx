import pic1 from '../assets/pic1.jpeg';

export const Introduction = () => {


  return (
    <div className="introduction">
      <div className="frame">
        <div className="div">
          <div className="textwrapper">Hi, Im Sara Svensson</div>
            <div className="textwrapper2">Frontend Developer</div>
          </div>
        <div className="frame2">
          <img className="ellipse" alt="Ellipse" src={pic1} />
            <p className="p">
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




import pic1 from '../assets/pic1.jpeg';


export const LetsTalk = () => {
    return (
        <div>
            <div className="title">Let’s talk</div>
            <div className="frame">
                <img className="ellipse" alt="Ellipse" src={pic1} />
                <div className="div">
                    <div className="textwrapper">Sara Svensson</div>
                    <div className="textwrapper2">+46(0)763 12 33 45</div>
                    <div className="textwrapper2">sara.svensson@mail.com</div>
                </div>
                <div className="sociallinks">
                    {/* <BtnLinkedin className="icon-instance-node" color="#D0D0D0" />
                    <Property1Hover className="icon-instance-node" color="#D0D0D0" />
                    <BtnStackoverflow className="icon-instance-node" />
                    {/* <BtnTwitter className="icon-instance-node" /> */}
                   {/* <BtnInstagram className="icon-instance-node" color="#D0D0D0" /> */}
                </div>
            </div>
        </div>
    );
};


export default LetsTalk;
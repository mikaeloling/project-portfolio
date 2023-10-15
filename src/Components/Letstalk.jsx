import React from "react";
// import { BtnInstagram } from "./BtnInstagram";
// import { BtnLinkedin } from "./BtnLinkedin";
// import { BtnStackoverflow } from "./BtnStackoverflow";
// import { BtnTwitter } from "./BtnTwitter";
// import { Property1Hover } from "./Property1Hover";
import style from "./Letstalk.module.css";

export const LetsTalk = () => {
    return (
        <div className={style.letstalk}>
            <div className={style.title}>Let’s talk</div>
            <div className={style.frame}>
                <img className={style.ellipse} alt="Ellipse" src="ellipse-1.svg" />
                <div className={style.div}>
                    <div className={style.textwrapper}>Sara Svensson</div>
                    <div className={style.textwrapper2}>+46(0)763 12 33 45</div>
                    <div className={style.textwrapper2}>sara.svensson@mail.com</div>
                </div>
                <div className={style.sociallinks}>
                    {/* <BtnLinkedin className="icon-instance-node" color="#D0D0D0" />
                    <Property1Hover className="icon-instance-node" color="#D0D0D0" />
                    <BtnStackoverflow className="icon-instance-node" />
                    <BtnTwitter className="icon-instance-node" />
                    <BtnInstagram className="icon-instance-node" color="#D0D0D0" /> */}
                </div>
            </div>
        </div>
    );
};

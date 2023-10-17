// import { ReadArticle } from "./ReadArticle";
import style from "./Mywords.module.css";
import pic2 from '../assets/Copyofnetti6Z0A4996.png';

export const Mywords = () => {
    return (
        <div className={style.mywords}>
            <div className={style.title}>My words</div>
            <div className={style.frame}>
                <div className={style.article}>
                    <img className={style.img} alt="Img" src={pic2} />
                    <div className={style.div}>
                        <div className={style.tag}>
                            <div className={style.textwrapper2}>July 2023</div>
                        </div>
                        <p className={style.header}>
                            How to stop being scared:
                            <br />
                            Learning to love code
                        </p>
                    </div>
                    <p className={style.text}>
                        Writing code is less about “just working”. Instead, its much more about creativity. Its similar to
                        creative writing in that the author architecting a story must use an assortment of tools and components
                        (i.e., content) in a way to satisfy a particular objective.
                    </p>
                    {/* <ReadArticle className={readarticleinstance} doc="doc-2.svg" property1="default" /> */}
                </div>
              </div>
        </div>
      
    );
}

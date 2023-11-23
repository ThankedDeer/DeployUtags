import Styles from "./Experience.module.scss";
import Image from "next/image";

const {
  experience,
  experience__grid,
  experience__grid__images,
  experience__grid__content,
  experience__grid__images_img1,
  experience__grid__images_img2,
  experience__grid__images_flecha1,
  experience__grid__images_flecha2,
  experience__grid__experience,

} = Styles;

export default function Experience() {
  return (
    <div className={experience}>
      <div className="container">
        <div className={experience__grid}>
          <div className={experience__grid__images}>
            <div className={experience__grid__images_img1}></div>
            <div className={experience__grid__images_img2}></div>
            <Image
            className={experience__grid__images_flecha1}
            alt="flecha"
            src={"iconos/flecha1.svg"}
            width={150}
            height={100}
            />  
             <Image
            className={experience__grid__images_flecha2}
            alt="flecha"
            src={"iconos/flecha2.svg"}
            width={120}
            height={100}
            />
            <span className={experience__grid__experience}>
              <h2>30+</h2>
              <h4>años de experiencia</h4>
            </span>
          </div>
          <div className={experience__grid__content}>jj</div>
        </div>
      </div>
    </div>
  );
}

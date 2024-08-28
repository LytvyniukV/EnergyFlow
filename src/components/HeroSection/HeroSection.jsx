import css from "./HeroSection.module.css";
import HomeImage from "../HomeImage/HomeImage";
export default function HeroSection() {
  return (
    <section className={css.section}>
      <div className={css.background}></div>
      <div className={css.wrap}>
        <h1 className={css.title}>
          Get <span className={css.accent}>Body</span> in shape, Stay healthy
        </h1>
        <p className={css.text}>
          Transform your physique and embrace a healthier lifestyle with our
          comprehensive fitness and nutrition support.
        </p>
      </div>
    </section>
  );
}

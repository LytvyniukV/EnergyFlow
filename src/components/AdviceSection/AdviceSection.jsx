import css from "./AdviceSection.module.css";
import Icon from "../../shared/components/Icon/Icon";
import { Fade } from "react-awesome-reveal";

export default function AdviceSection() {
  return (
    <Fade delay={150} duration={1000} fraction={0.2} triggerOnce={false}>
      <section className={css.section}>
        <div className={css.background}></div>
        <div className={css.advice}>
          <div className={css.iconWrap}>
            <Icon
              id="icon-dumbbell"
              width={20}
              height={20}
              className={css.icon}
            />
          </div>
          <div className={css.description}>
            <div className={css.top}>
              <p className={css.time}>110 min</p>
              <p className={css.text}>Daily norm of sportss</p>
            </div>
            <p className={css.text}>
              The World Health Organization recommends at least 150 minutes of
              moderate-intensity aerobic physical activity throughout the week
              for adults aged 18-64. However, what happens if we adjust that
              number to 110 minutes every day?{" "}
            </p>
          </div>
        </div>
      </section>
    </Fade>
  );
}

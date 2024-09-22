import clsx from "clsx";
import css from "./Timer.module.css";
import { useTimer } from "react-timer-hook";
import { useState } from "react";
export default function Timer({ expiryTimestamp, setSeconds }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const {
    totalSeconds,
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => setSeconds(3 * 60),
  });
  const onStopClick = () => {
    pause();
    setSeconds(3 * 60 - totalSeconds);
    setIsDisabled(false);
  };
  const onRestartClick = () => {
    const time = new Date();
    time.setMinutes(time.getMinutes() + 3);
    restart(time);
  };
  return (
    <div className={css.mainWrap}>
      <div className={css.timeWrap}>
        <span className={css.time}>{`${minutes}`.padStart(2, "0")}</span>:
        <span className={css.time}>{`${seconds}`.padEnd(2, "0")}</span>
      </div>

      <div className={css.btnsWrap}>
        <button
          onClick={() => {
            start();
            setIsDisabled(true);
          }}
          disabled={isDisabled && true}
          className={clsx(css.btn, css.start)}
        >
          Start
        </button>
        <button onClick={onRestartClick} className={clsx(css.btn, css.pause)}>
          Restart
        </button>
        <button className={clsx(css.btn, css.stop)} onClick={onStopClick}>
          Stop
        </button>
      </div>
    </div>
  );
}

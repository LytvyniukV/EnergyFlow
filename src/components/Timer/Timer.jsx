import clsx from "clsx";
import css from "./Timer.module.css";
import { useTimer } from "react-timer-hook";
export default function Timer({ expiryTimestamp, setSeconds }) {
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

      <button
        onClick={start}
        disabled={isRunning && true}
        className={clsx(css.btn, css.start)}
      >
        Start
      </button>
      <button
        onClick={pause}
        disabled={!isRunning && true}
        className={clsx(css.btn, css.pause)}
      >
        Pause
      </button>
      <button
        onClick={resume}
        disabled={isRunning && true}
        className={clsx(css.btn, css.resume)}
      >
        Resume
      </button>
      <button onClick={onRestartClick} className={clsx(css.btn, css.restart)}>
        Restart
      </button>
      <button className={clsx(css.btn, css.stop)} onClick={onStopClick}>
        Stop
      </button>
    </div>
  );
}

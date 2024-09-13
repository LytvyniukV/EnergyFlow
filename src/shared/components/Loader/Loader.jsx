import { RotatingLines } from "react-loader-spinner";
import css from "./Loader.module.css";
import Icon from "../Icon/Icon";
export default function Loader() {
  return (
    <div className={css.loader}>
      <Icon id="icon-dumbbell" width={200} height={200} />
    </div>
  );
}

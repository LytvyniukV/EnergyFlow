import { useParams } from "react-router-dom";
import css from "./ExerciseCardPage.module.css";
export default function ExerciseCardPage() {
  const { id } = useParams();
  return <h1>hello - id : {id}</h1>;
}

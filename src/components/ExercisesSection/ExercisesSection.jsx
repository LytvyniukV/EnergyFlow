import { useEffect } from "react";
import ButtonsList from "../ButtonsList/ButtonsList";
import SearchForm from "../SearchForm/SearchForm";
import css from "./ExercisesSection.module.css";
import api from "../../axiosApi/axios.js";
import { useState } from "react";
import FiltersList from "../FiltersList/FiltersList.jsx";

export default function ExercisesSection() {
  const [filter, setFilter] = useState("Muscles");
  const [filters, setFilters] = useState([]);
  const [exerciseFilter, setexerciseFilter] = useState({
    bodyPart: "",
    equipment: "",
    muscles: "",
  });
  const [isExerciseFilter, setIsExerciseFilter] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getFilters = async () => {
      const { data } = await api.get(
        `/filters?filter=${filter}&perPage=12&page=${page}`
      );
      setFilters(data.data);
    };

    getFilters();
  }, [filter]);

  useEffect(() => {
    const getExercises = async () => {
      const { data } = await api.get(
        `/exercises?bodyParts=${exerciseFilter.bodyPart}&muscles=${exerciseFilter.muscles}&equipment=${exerciseFilter.equipment}&page=${page}&perPage=12`
      );
      setExercises(data.data);
      setFilters([]);
    };
    if (isExerciseFilter) getExercises();
  }, [exerciseFilter, isExerciseFilter]);
  return (
    <section className={css.section}>
      <h3 className={css.title}>Exercises</h3>
      <div className={css.filtersWrap}>
        <ButtonsList onClick={setFilter} clearExercises={setExercises} />
        <SearchForm />
      </div>

      {exercises.length !== 0 ? (
        <p>exercises</p>
      ) : (
        <FiltersList
          filters={filters}
          isExercise={setIsExerciseFilter}
          setExerciseFilter={setexerciseFilter}
        />
      )}
    </section>
  );
}

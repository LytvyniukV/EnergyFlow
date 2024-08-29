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
  const [exerciseName, setExerciseName] = useState("");
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
  return (
    <section className={css.section}>
      <h3 className={css.title}>Exercises</h3>
      <div className={css.filtersWrap}>
        <ButtonsList onClick={setFilter} />
        <SearchForm />
      </div>
      <FiltersList filters={filters} onClick={setExerciseName} />
    </section>
  );
}

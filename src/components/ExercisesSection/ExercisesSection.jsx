import { useEffect } from "react";
import ButtonsList from "../ButtonsList/ButtonsList";
import SearchForm from "../SearchForm/SearchForm";
import css from "./ExercisesSection.module.css";
import api from "../../axiosApi/axios.js";
import { useState } from "react";
import FiltersList from "../FiltersList/FiltersList.jsx";
import ExercisesList from "../ExercisesList/ExercisesList.jsx";
import Pagination from "../Pagination/Pagination.jsx";

export default function ExercisesSection() {
  const [filter, setFilter] = useState("Muscles");
  const [filters, setFilters] = useState([]);
  const [exerciseFilter, setexerciseFilter] = useState({});
  const [isExerciseFilter, setIsExerciseFilter] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const filterName = Object.keys(exerciseFilter)[0];
  console.log(page);
  useEffect(() => {
    const filtersParams = new URLSearchParams({
      filter: filter,
      perPage: 12,
      page: page,
    });
    const getFilters = async () => {
      const { data } = await api.get(`/filters?${filtersParams}`);
      setFilters(data.data);
      setQuery("");
      setTotalPages(data.totalPages);
    };

    if (!isExerciseFilter) getFilters();
  }, [filter, page, isExerciseFilter]);

  useEffect(() => {
    const exercisesParams = new URLSearchParams({
      [filterName]: exerciseFilter[filterName],
      perPage: 12,
      page: page,
      q: query,
    });
    const getExercises = async () => {
      const { data } = await api.get(`/exercises?${exercisesParams}`);
      setExercises(data.data);
      setFilters([]);
      setTotalPages(data.totalPages);
    };
    if (isExerciseFilter) getExercises();
  }, [isExerciseFilter, filterName, exerciseFilter, page, query]);
  return (
    <section className={css.section}>
      <h3 className={css.title}>
        Exercises{" "}
        {isExerciseFilter && (
          <>
            /<span className={css.bodyPart}> {exerciseFilter[filterName]}</span>
          </>
        )}
      </h3>
      <div className={css.filtersWrap}>
        <ButtonsList
          onClick={setFilter}
          setIsExerciseSearch={setIsExerciseFilter}
          setPage={setPage}
        />
        {isExerciseFilter && <SearchForm onSubmit={setQuery} />}
      </div>

      {filters.length > 0 ? (
        <FiltersList
          filters={filters}
          isExercise={setIsExerciseFilter}
          setExerciseFilter={setexerciseFilter}
        />
      ) : exercises.length > 0 ? (
        <ExercisesList exercises={exercises} />
      ) : (
        <p className={css.notFound}>
          Unfortunately, <span className={css.accent}>no results</span> were
          found. You may want to consider other search options to find the
          exercise you are looking for. Our range is wide and you have the
          opportunity to find more options that suit your needs.
        </p>
      )}
      <Pagination setPage={setPage} totalPages={totalPages} page={page} />
    </section>
  );
}

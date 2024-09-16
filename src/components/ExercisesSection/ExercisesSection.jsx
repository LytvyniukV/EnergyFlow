import { useEffect } from "react";
import ButtonsList from "../ButtonsList/ButtonsList";
import SearchForm from "../SearchForm/SearchForm";
import css from "./ExercisesSection.module.css";
import Loader from "../../shared/components/Loader/Loader.jsx";
import { useState } from "react";
import FiltersList from "../FiltersList/FiltersList.jsx";
import ExercisesList from "../ExercisesList/ExercisesList.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import ExerciseModal from "../ExerciseModal/ExerciseModal.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectExerciseFilter,
  selectExercises,
  selectFilterName,
  selectFilters,
  selectIsExerciseSearching,
  selectQuery,
  selectTotalPages,
  isExerciseLoading,
} from "../../redux/exercises/selectors.js";
import { getExercises, getFilters } from "../../redux/exercises/operations.js";

export default function ExercisesSection() {
  const dispatch = useDispatch();
  const isLoading = useSelector(isExerciseLoading);
  const filter = useSelector(selectFilterName);
  const filters = useSelector(selectFilters);
  const exercises = useSelector(selectExercises);
  const query = useSelector(selectQuery);
  const exerciseFilter = useSelector(selectExerciseFilter);
  const isExerciseSearch = useSelector(selectIsExerciseSearching);
  const [page, setPage] = useState(1);
  const totalPages = useSelector(selectTotalPages);
  const [isExerciseModal, setIsExerciseModal] = useState(false);
  const filterName = Object.keys(exerciseFilter)[0];

  useEffect(() => {
    const filtersParams = new URLSearchParams({
      filter: filter,
      perPage: 12,
      page: page,
    });

    if (!isExerciseSearch) dispatch(getFilters(filtersParams));
  }, [filter, page, isExerciseSearch, dispatch]);

  useEffect(() => {
    const exercisesParams = new URLSearchParams({
      [filterName]: exerciseFilter[filterName],
      perPage: 12,
      page: page,
      q: query,
    });

    if (isExerciseSearch) dispatch(getExercises(exercisesParams));
  }, [isExerciseSearch, filterName, exerciseFilter, page, query, dispatch]);
  return (
    <section className={css.section}>
      <h3 className={css.title}>
        Exercises{" "}
        {isExerciseSearch && (
          <>
            /<span className={css.bodyPart}> {exerciseFilter[filterName]}</span>
          </>
        )}
      </h3>
      <div className={css.filtersWrap}>
        <ButtonsList setPage={setPage} />
        {isExerciseSearch && <SearchForm />}
      </div>

      {filters.length > 0 ? (
        <FiltersList />
      ) : (
        <ExercisesList
          exercises={exercises}
          openExerciseModal={setIsExerciseModal}
        />
      )}
      <Pagination setPage={setPage} totalPages={totalPages} page={page} />
      <ExerciseModal
        isModal={isExerciseModal}
        closeModal={setIsExerciseModal}
      />
      {isLoading && <Loader />}
    </section>
  );
}

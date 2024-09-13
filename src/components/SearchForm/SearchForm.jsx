import { useState } from "react";
import Icon from "../../shared/components/Icon/Icon";
import css from "./SearchForm.module.css";
import { useDispatch } from "react-redux";
import { changeQuery } from "../../redux/exercises/slice";
export default function SearchForm() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeQuery(e.target.children.query.value));
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form className={css.wrap} onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        className={css.input}
        type="text"
        name="query"
        autoComplete="off"
        placeholder="Search"
        value={value}
      />
      {value && (
        <button type="submit" className={css.btn}>
          <Icon id="icon-search" width={18} height={18} className={css.icon} />
        </button>
      )}
      {value && (
        <button
          className={css.clearQueryBtn}
          type="button"
          onClick={() => setValue("")}
        >
          X
        </button>
      )}
    </form>
  );
}

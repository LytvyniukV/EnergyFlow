import Icon from "../../shared/components/Icon/Icon";
import css from "./SearchForm.module.css";
export default function SearchForm({ onSubmit }) {
  const handleChange = (e) => {
    onSubmit(e.target.value);
  };
  return (
    <form className={css.wrap}>
      <input
        onChange={handleChange}
        className={css.input}
        type="text"
        name="query"
        autoComplete="off"
        placeholder="Search"
      />
      <button type="submit" className={css.btn}>
        <Icon id="icon-search" width={18} height={18} className={css.icon} />
      </button>
    </form>
  );
}

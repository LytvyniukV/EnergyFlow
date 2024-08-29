import css from "./SearchForm.module.css";
export default function SearchForm() {
  const onChange = (e) => {};
  return (
    <form>
      <input
        className={css.input}
        type="text"
        onChange={onChange}
        name="query"
        autoComplete="off"
      />
    </form>
  );
}

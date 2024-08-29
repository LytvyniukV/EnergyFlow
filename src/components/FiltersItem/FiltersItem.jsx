import css from "./FiltersItem.module.css";
export default function FiltersItem({ item, onClick }) {
  return (
    <li
      onClick={() => onClick(item.name)}
      className={css.item}
      style={{
        backgroundImage: `url(${item.imgUrl})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <p className={css.name}>{item.name}</p>
      <p className={css.filter}>{item.filter}</p>
    </li>
  );
}

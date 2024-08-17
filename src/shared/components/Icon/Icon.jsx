import sprite from "../../../public/images/sprite.svg";

export default function Icon({ className, id }) {
  return (
    <>
      <svg className={className}>
        <use href={`${sprite}#${id}`} />
      </svg>
    </>
  );
}

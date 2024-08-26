import sprite from "../../../icons/sprite.svg";

export default function Icon({ className, id, width, height }) {
  return (
    <svg className={className} width={width} height={height}>
      <use href={`${sprite}#${id}`} />
    </svg>
  );
}

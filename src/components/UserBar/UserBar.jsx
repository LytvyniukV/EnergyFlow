import css from "./UserBar.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { Popover } from "react-tiny-popover";
import { useState } from "react";
import clsx from "clsx";
import { RxAvatar } from "react-icons/rx";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/users/selectors.js";

export default function UserBar() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const user = useSelector(selectUser);

  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={["bottom"]}
      onClickOutside={() => setIsPopoverOpen(!isPopoverOpen)}
      content={<>Popover</>}
      containerClassName={css.popover}
    >
      <button
        type="button"
        className={css.btn}
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
      >
        <p className={css.name}>{user.name ? user.name : "User"}</p>
        {user.avatarURL ? (
          <img className={css.img} src={user.avatarURL} alt="avatar" />
        ) : (
          <RxAvatar className={css.iconAvatar} />
        )}

        <IoIosArrowDown
          className={clsx(css.icon, isPopoverOpen && css.iconUp)}
        />
      </button>
    </Popover>
  );
}

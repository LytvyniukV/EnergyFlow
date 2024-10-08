import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/users/selectors";
import { Navigate } from "react-router-dom";

export default function RestrictedRoute({
  component: Component,
  redirectTo = "/exercises",
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}

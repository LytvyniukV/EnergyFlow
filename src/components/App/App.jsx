import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";
import { Toaster } from "react-hot-toast";
import Layout from "../../shared/components/Layout/Layout";
import Loader from "../../shared/components/Loader/Loader";
import { selectIsRefreshing } from "../../redux/users/selectors";
import { refreshToken } from "../../redux/users/operations";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const ExercisesPage = lazy(() =>
  import("../../pages/ExercisesPage/ExercisesPage")
);
const FavoritesPage = lazy(() =>
  import("../../pages/FavoritesPage/FavoritesPage")
);
const SignInPage = lazy(() => import("../../pages/SignInPage/SignInPage"));
const SignUpPage = lazy(() => import("../../pages/SignUpPage/SignUpPage"));
const TrackerPage = lazy(() => import("../../pages/TrackerPage/TrackerPage"));

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<SignInPage />}
                redirectTo="/exercises"
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<SignUpPage />}
                redirectTo="/exercises"
              />
            }
          />
          <Route
            path="/exercises"
            element={
              <PrivateRoute component={<ExercisesPage />} redirectTo="/login" />
            }
          />
          <Route
            path="/favorites"
            element={
              <PrivateRoute component={<FavoritesPage />} redirectTo="/login" />
            }
          />
          <Route
            path="/tracker"
            element={
              <PrivateRoute component={<TrackerPage />} redirectTo="/login" />
            }
          />
        </Routes>
      </Suspense>
      <Toaster
        position="top-center"
        toastOptions={{ style: { width: "500px", height: "50px" } }}
      />
    </Layout>
  );
}

export default App;

import { useSelector } from "react-redux";
import "./App.css";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";
import { Toaster } from "react-hot-toast";
import Layout from "../../shared/components/Layout/Layout";
import Loader from "../../shared/components/Loader/Loader";
import { selectIsRefreshing } from "../../redux/users/selectors";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const ExercisesPage = lazy(() =>
  import("../../pages/ExercisesPage/ExercisesPage")
);
const FavoritesPage = lazy(() =>
  import("../../pages/FavoritesPage/FavoritesPage")
);
const AuthPage = lazy(() => import("../../pages/AuthPage/AuthPage"));
const TrackerPage = lazy(() => import("../../pages/TrackerPage/TrackerPage"));

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  return isRefreshing ? (
    <Loader />
  ) : (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/authorization"
            element={
              <RestrictedRoute
                component={<AuthPage />}
                redirectTo="/exercises"
              />
            }
          />
          <Route
            path="/exercises"
            element={
              <PrivateRoute
                component={<ExercisesPage />}
                redirectTo="/authorization"
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <PrivateRoute
                component={<FavoritesPage />}
                redirectTo="/authorization"
              />
            }
          />
          <Route
            path="/tracker"
            element={
              <PrivateRoute
                component={<TrackerPage />}
                redirectTo="/authorization"
              />
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

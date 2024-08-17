import { useSelector } from "react-redux";
import "./App.css";
import { Suspense, lazy, useEffect } from "react";
import { selectIsRefreshing } from "../../redux/users/selectors";
import Layout from "../../shared/components/Layout/Layout";
import Loader from "../../shared/components/Loader/Loader";
import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const ExercisesPage = lazy(() =>
  import("../../pages/ExercisesPage/ExercisesPage")
);
const FavoritesPage = lazy(() =>
  import("../../pages/FavoritesPage/FavoritesPage")
);
const AuthPage = lazy(() => import("../../pages/AuthPage/AuthPage"));
const TrainingPage = lazy(() =>
  import("../../pages/TrainingPage/TrainingPage")
);

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
            path="/trainings"
            element={
              <PrivateRoute
                component={<TrainingPage />}
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

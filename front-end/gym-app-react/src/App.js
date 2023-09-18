import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeView } from "./Views/HomeView";
import { DashboardView } from "./Views/AdminViews/DashboardView";
import { AuthRoute } from "./auth/AuthRoute";
import { LoginView } from "./Views/LoginView";
import { RegisterView } from "./Views/RegisterView";
import { ProfileView } from "./Views/ProfileView";
import { SearchView } from "./Views/SearchView";
import { WorkoutHistoryView } from "./Views/WorkoutHistoryView";
import { AdminRoute } from "./auth/AdminRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <HomeView />
            </AuthRoute>
          }
        />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route
          path="/profile"
          element={
            <AuthRoute>
              <ProfileView />
            </AuthRoute>
          }
        />
        <Route
          path="/search"
          element={
            <AuthRoute>
              <SearchView />
            </AuthRoute>
          }
        />
        <Route
          path="/history"
          element={
            <AuthRoute>
              <WorkoutHistoryView />
            </AuthRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AdminRoute>
              <DashboardView />
            </AdminRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

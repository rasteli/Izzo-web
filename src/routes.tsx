import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "./components/Home"
import { UserProfile } from "./components/UserProfile"
import { Login } from "./components/Login"
import { Webcam } from "./components/Webcam"
import { DynamicRoute } from "./components/DynamicRoute"
import { PasswordReset } from "./components/PasswordReset"
import { CreateUserForm } from "./components/CreateUserForm"
import { RequestPasswordReset } from "./components/RequestPasswordReset"

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DynamicRoute type="public">
              <Home />
            </DynamicRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <DynamicRoute type="protected">
              <UserProfile />
            </DynamicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <DynamicRoute type="public">
              <Login />
            </DynamicRoute>
          }
        />
        <Route path="/webcam" element={<Webcam />} />
        <Route
          path="/signup"
          element={
            <DynamicRoute type="public">
              <CreateUserForm />
            </DynamicRoute>
          }
        />
        <Route
          path="/passwordReset"
          element={
            <DynamicRoute type="public">
              <PasswordReset />
            </DynamicRoute>
          }
        />
        <Route
          path="/requestPassword"
          element={
            <DynamicRoute type="public">
              <RequestPasswordReset />
            </DynamicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

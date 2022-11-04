import React from "react";
import {
  Dashboard,
  Login,
  PrivateRoute,
  AuthWrapper,
  Error,
  Activity,
  MemberRegister,
  StoreManagement,
  Production,
  SalaryManagement
} from "./pages";
import { Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Activity />
              </PrivateRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="memberregister" element={<MemberRegister />} />
          <Route path="store" element={<StoreManagement />} />
          <Route path="product" element={<Production />} />
          <Route path="salary" element={<SalaryManagement />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </AuthWrapper>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";
import { DashboardPage } from "./pages/Dashboard/Home";
import * as ROUTES from "./constants/routes";
import { MainContext } from "./providers/main_provider";
import { useContext } from "react";
import { AddjobPage } from "./pages/Dashboard/Addjob";

function App() {
  const { isLoggedIn } = useContext(MainContext);
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />}></Route>
        <Route path={ROUTES.LOGIN} element={<LoginPage />}></Route>
        <Route path={ROUTES.REGISTER} element={<RegisterPage />}></Route>
        <Route
          path={ROUTES.DASHBOARD}
          element={isLoggedIn ? <DashboardPage /> : <LoginPage />}
        ></Route>
        <Route
          path={ROUTES.ADD_JOB}
          element={isLoggedIn ? <AddjobPage /> : <LoginPage />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;

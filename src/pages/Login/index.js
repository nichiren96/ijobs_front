import React, { useState, useContext } from "react";
import { MainLayout } from "../../layouts/main_layout";
import { Link, useNavigate } from "react-router-dom";
import { AuthenticationService } from "../../services/authentication_service";
import { DASHBOARD } from "../../constants/routes";
import { MainContext } from "../../providers/main_provider";

export const LoginPage = () => {
  const [email, setEmail] = useState("rtom@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { setIsLoggedIn } = useContext(MainContext);

  const authService = new AuthenticationService();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    authService
      .login({ email: email, password: password })
      .then((result) => {
        authService.saveUser(result.data.token, result.data.data.user._id);
        setIsLoggedIn(true);
        navigate(DASHBOARD);
      })
      .catch((error) => {
        setIsError(true);
        setErrorMsg(error.response.data.message);
      });
  };

  return (
    <MainLayout>
      <div className="flex flex-col items-center">
        <div className="p-8 shadow-2xl w-1/4">
          <h2 className="text-center text-2xl">Connexion</h2>
          <p className="text-red-500 mt-2">{isError && errorMsg}</p>
          <div className="flex flex-col items-center w-full">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex flex-col items-start mt-4">
                <label htmlFor="email">Email</label>
                <input
                  autoComplete="off"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div className="flex flex-col items-start mt-4">
                <label htmlFor="password">Mot de passe</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  className="w-full shadow-md py-3 px-6 rounded-md transition duration-300 bg-indigo-600 text-white"
                >
                  Se connecter
                </button>
              </div>
            </form>
            <div className="mt-4 flex justify-center">
              <Link to="/register">
                <span className="hover:text-indigo-600">Créer un compte</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

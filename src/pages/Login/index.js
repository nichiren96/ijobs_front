import React, { useState } from "react";
import { MainLayout } from "../../layouts/main_layout";
import { AuthenticationService } from "../../services/authentication_service";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const authService = new AuthenticationService();

  const handleSubmit = (e) => {
    e.preventDefault();

    authService
      .login({ email: email, password: password })
      .then((result) => console.log(result))
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
              <p className="">
                <a href="#" className="hover:text-indigo-600">
                  Créer un compte
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

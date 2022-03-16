import React, { useState } from "react";
import { MainLayout } from "../../layouts/main_layout";
import { AuthenticationService } from "../../services/authentication_service";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [inputs, setInputs] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const authService = new AuthenticationService();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      inputs.firstname &&
      inputs.lastname &&
      inputs.email &&
      inputs.password &&
      inputs.passwordConfirm
    ) {
      if (inputs.password === inputs.passwordConfirm) {
        authService
          .register(inputs)
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            setIsError(true);
            setErrorMsg(error.response.data.message);
          });
      }
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <MainLayout>
      <div className="flex flex-col items-center">
        <div className="p-8 shadow-2xl w-1/4">
          <h2 className="text-center text-2xl">Inscription</h2>
          <p className="text-red-500 mt-2">{isError && errorMsg}</p>
          <div className="flex flex-col items-center w-full">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex flex-col items-start mt-4">
                <label htmlFor="lastname">Nom</label>
                <input
                  autoComplete="off"
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={inputs.lastname}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div className="flex flex-col items-start mt-4">
                <label htmlFor="firstname">Prénom (s)</label>
                <input
                  autoComplete="off"
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={inputs.firstname}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div className="flex flex-col items-start mt-4">
                <label htmlFor="email">Email</label>
                <input
                  autoComplete="off"
                  type="email"
                  id="email"
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
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
                  value={inputs.password}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div className="flex flex-col items-start mt-4">
                <label htmlFor="passwordConfirm">Confirmer mot de passe</label>
                <input
                  type="password"
                  id="passwordConfirm"
                  name="passwordConfirm"
                  value={inputs.passwordConfirm}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  className="w-full shadow-md py-3 px-6 rounded-md transition duration-300 bg-indigo-600 text-white"
                >
                  S'inscrire
                </button>
              </div>
            </form>
            <div className="mt-4 flex justify-center">
              <Link to="/login">
                <span className="hover:text-indigo-600">Se connecter</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

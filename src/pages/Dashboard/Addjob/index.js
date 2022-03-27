import React, { useState } from "react";
import { MainLayout } from "../../../layouts/main_layout";
import { AuthenticationService } from "../../../services/authentication_service";
import { JobService } from "../../../services/job_service";
import { useNavigate } from "react-router-dom";
import { DASHBOARD } from "../../../constants/routes";

export const AddjobPage = () => {
  const authservice = new AuthenticationService();
  const jobService = new JobService();

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    contractType: "",
    expirationDate: "",
    user: authservice.getUserId(),
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    jobService
      .save(inputs)
      .then((result) => {
        console.log(result.data);
        navigate(DASHBOARD);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <MainLayout>
      <section className="flex">
        <div className="w-1/5 bg-slate-600">
          <div>Mes annonces</div>
          <div>Mon profil</div>
        </div>
        <div className="w-4/5 bg-slate-100 px-8">
          <h2>Ajouter annonce</h2>
          <div className="w-full">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-start mt-4">
                <label htmlFor="title">Titre</label>
                <input
                  autoComplete="off"
                  type="text"
                  id="title"
                  name="title"
                  value={inputs.title}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div className="flex flex-col items-start mt-4">
                <label htmlFor="description">Description</label>
                <textarea
                  autoComplete="off"
                  rows={10}
                  id="description"
                  name="description"
                  value={inputs.description}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                ></textarea>
              </div>
              <div className="flex flex-col items-start mt-4">
                <label htmlFor="title">Contrat</label>

                <select
                  id="contractType"
                  name="contractType"
                  value={inputs.contractType}
                  onChange={handleChange}
                >
                  <option value=""></option>
                  <option value="CDI">CDI</option>
                  <option value="CDD">CDD</option>
                  <option value="Stage">Stage</option>
                  <option value="Freelance">Freelance</option>
                </select>
              </div>
              <div className="flex flex-col items-start mt-4">
                <label htmlFor="expirationDate">Date d'expiration</label>
                <input
                  autoComplete="off"
                  type="date"
                  id="expirationDate"
                  name="expirationDate"
                  value={inputs.expirationDate}
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
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

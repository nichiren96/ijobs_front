import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "../../../layouts/main_layout";
import { MainContext } from "../../../providers/main_provider";
import { ADD_JOB } from "../../../constants/routes";
import { JobService } from "../../../services/job_service";

export const DashboardPage = () => {
  const { isLoggedIn } = useContext(MainContext);

  const [jobs, setJobs] = useState([]);

  const jobService = new JobService();

  useEffect(() => {
    jobService
      .getAllJobs()
      .then((result) => {
        setJobs(result.data.data.docs);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  console.log(isLoggedIn);

  return (
    <MainLayout>
      <section className="flex">
        <div className="w-1/5 bg-slate-600">
          <div>Mes annonces</div>
          <div>Mon profil</div>
        </div>
        <div className="w-4/5 bg-green-500 px-8">
          <div>
            <Link to={ADD_JOB}>Ajouter une annonce</Link>
          </div>
          <h2>Vos annonces</h2>
          <table>
            <thead>
              <td>Titre</td>
              <td>Date d'expiration</td>
              <td>Modifier</td>
              <td>Supprimer</td>
            </thead>
            <tbody>
              {jobs &&
                jobs.map((job) => {
                  return (
                    <tr>
                      <td>{job.title}</td>
                      <td>{job.expirationDate}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>
    </MainLayout>
  );
};

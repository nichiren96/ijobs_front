import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "../../../layouts/main_layout";
import { MainContext } from "../../../providers/main_provider";
import { ADD_JOB, JOB_DETAILS } from "../../../constants/routes";
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

  const removeJob = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cette annonce ?")) {
      jobService.deleteJob(id).then(() => {
        jobService
          .getAllJobs()
          .then((result) => {
            setJobs(result.data.data.docs);
          })
          .catch((error) => {
            console.log(error.response);
          });
      });
    }
  };

  return (
    <MainLayout>
      <section className="flex">
        <div className="w-1/5 bg-slate-600">
          <div>Mes annonces</div>
          <div>Mon profil</div>
        </div>
        <div className="w-4/5 px-8">
          <div>
            <Link to={ADD_JOB}>Ajouter une annonce</Link>
          </div>
          <h2>Vos annonces</h2>
          <table className="table-fixed border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className="border border-slate-300">Titre</th>
                <th className="border border-slate-300">Date d'expiration</th>
                <th className="border border-slate-300">Modifier</th>
                <th className="border border-slate-300">Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {jobs &&
                jobs.map((job) => {
                  return (
                    <tr key={job._id}>
                      <td className="border border-slate-300">
                        <Link to={`${JOB_DETAILS}/${job._id}`}>
                          <span className="text-indigo-500">{job.title}</span>
                        </Link>
                      </td>
                      <td className="border border-slate-300">
                        {job.expirationDate}
                      </td>
                      <td className="border border-slate-300">
                        <Link to={`${JOB_DETAILS}/${job._id}`}>
                          <span className="text-indigo-500">Modifier</span>
                        </Link>
                      </td>
                      <td className="border border-slate-300">
                        <button
                          type="button"
                          className="text-indigo-500"
                          onClick={() => removeJob(job._id)}
                        >
                          Supprimer
                        </button>
                      </td>
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

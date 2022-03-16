import React, { useEffect, useState } from "react";
import { MainLayout } from "../../layouts/main_layout";
import { JobService } from "../../services/job_service";

export const HomePage = () => {
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

  return (
    <MainLayout>
      <SearchArea />
      <section className="flex p-16">
        <div className="w-1/5 py-4">
          {jobs &&
            jobs.map((job) => {
              return (
                <JobItem
                  key={job._id}
                  title={job.title}
                  expirationDate={job.expirationDate}
                />
              );
            })}
        </div>
        <div className="w-4/5 p-8">
          <JobDescription />
        </div>
      </section>
    </MainLayout>
  );
};

const JobItem = ({ title, contract, expirationDate }) => {
  return (
    <>
      <div className="shadow-md mb-8 cursor-pointer">
        <h2>{title}</h2>
        <div className="flex gap-2">
          <span>{contract}</span>
          <span>{expirationDate}</span>
        </div>
      </div>
    </>
  );
};

const JobDescription = ({ content }) => {
  return <p>{content}</p>;
};

const SearchArea = () => {
  return (
    <section className="flex justify-center">
      <div>
        <form>
          <div className="flex items-baseline mt-4 gap-4">
            <input
              placeholder="ex: développeur javascript"
              type="text"
              id="title"
              name="title"
              className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            <label htmlFor="contractType">Contrat</label>
            <select id="contractType" name="contractType">
              <option value=""></option>
              <option value="CDI">CDI</option>
              <option value="CDD">CDD</option>
              <option value="Stage">Stage</option>
              <option value="Freelance">Freelance</option>
            </select>
            <label htmlFor="category">Catégories</label>
            <select id="category" name="contractType">
              <option value=""></option>
              <option value="CDI">Informatique</option>
              <option value="CDD">Administration / Management</option>
              <option value="Stage">Tourisme</option>
              <option value="Freelance">Transport</option>
            </select>
          </div>
        </form>
      </div>
    </section>
  );
};
